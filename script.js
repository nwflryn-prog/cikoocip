const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // Update position
    p.x += p.dx;
    p.y += p.dy;

    // Bounce off walls
    if (p.x - p.r < 0 || p.x + p.r > canvas.width) p.dx *= -1;
    if (p.y - p.r < 0 || p.y + p.r > canvas.height) p.dy *= -1;

    // Keep in bounds
    p.x = Math.max(p.r, Math.min(canvas.width - p.r, p.x));
    p.y = Math.max(p.r, Math.min(canvas.height - p.r, p.y));

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(82,216,255,.8)";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();