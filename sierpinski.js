const counter = document.getElementById('counter');
const toggleBtn = document.getElementById('toggleBtn');
let count = 0;
let iterating = false;

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const radius = canvas.width / 2; // Radius of the circumcircle
const side = radius * Math.sqrt(3);
const height = Math.sqrt(Math.pow(side, 2) - Math.pow(side / 2, 2)) // Height of the triangle
const centerX = canvas.width / 2;
const centerY = canvas.height / 2 + ((2 * radius - height) / 2);

let cx = centerX, cy = centerY;
let trianglePoints;

function drawTriangle() {
    trianglePoints = [];
    ctx.beginPath();

    for (let i = 0; i < 3; i++) {
        const angleDeg = 30 + i * 120;
        const angleRad = angleDeg * Math.PI / 180;

        const x = centerX + radius * Math.cos(angleRad);
        const y = centerY + radius * Math.sin(angleRad);
        trianglePoints.push({ x, y });

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.closePath();
    ctx.strokeStyle = 'green';
    ctx.stroke();

    const randomPoint = getRandomPointInTriangle();
    cx = randomPoint.x, cy = randomPoint.y;
}
drawTriangle();

function toggleIteration() {
    if (iterating) {
        iterating = false;
        toggleBtn.textContent = 'Run Iteration';
    } else {
        iterating = true;
        toggleBtn.textContent = 'Stop Iteration';
        drawNewPoint();
    }
}

function resetCount() {
    iterating = false;
    toggleBtn.textContent = 'Run Iteration';
    count = 0;
    counter.textContent = `Iteration count: ${count}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTriangle();
}

function getRandomPointInTriangle() {
    let A = trianglePoints[0];
    let B = trianglePoints[1];
    let C = trianglePoints[2];
    let u = Math.random();
    let v = Math.random();

    // To ensure (1 - u - v) is not less than 0. Basically reflect if outside triangle
    if (u + v > 1) {
        u = 1 - u;
        v = 1 - v;
    }

    // Apply barycentric formula:
    const x = (1 - u - v) * A.x + u * B.x + v * C.x;
    const y = (1 - u - v) * A.y + u * B.y + v * C.y;

    return { x, y };
}

function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    count++;
    counter.textContent = `Iteration count: ${count}`;
}

function drawNewPoint() {
    if (!iterating) return;

    let idx = Math.floor(Math.random() * 3);
    let vertex = trianglePoints[idx];
    cx = (cx + vertex.x) / 2;
    cy = (cy + vertex.y) / 2;
    drawPoint(cx, cy);

    requestAnimationFrame(drawNewPoint);
}