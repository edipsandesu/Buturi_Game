const pendulum = document.querySelector('.pendulum');
const pendulumContainer = document.querySelector('.pendulum-container');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

const g = 9.81; // 重力加速度 (m/s^2)
const l = 2; // 振り子の長さ (m)
const dt = 0.016; // 時間の刻み幅 (s)

let theta = 45; // 初期角度 (degrees)
let thetaVel = 0; // 角速度 (rad/s)
let thetaAcc = 0; // 角加速度 (rad/s^2)
let animationId;

function radToDeg(rad) {
  return rad * (180 / Math.PI);
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function updatePendulum() {
  thetaAcc = -(g / l) * Math.sin(degToRad(theta));
  thetaVel += thetaAcc * dt;
  theta += radToDeg(thetaVel * dt);

  pendulum.style.transform = `translate(-50%, -50%) rotate(${theta}deg)`;
}

function animate() {
  updatePendulum();
  animationId = requestAnimationFrame(animate);
}

startBtn.addEventListener('click', () => {
  if (!animationId) {
    animate();
  }
});

stopBtn.addEventListener('click', () => {
  cancelAnimationFrame(animationId);
  animationId = null;
});
