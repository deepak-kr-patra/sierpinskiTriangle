🧩 Sierpiński Triangle Generator

This project visualizes the Sierpiński Triangle, a famous fractal, using pure HTML, CSS, and JavaScript.
It iteratively plots points using the Chaos Game algorithm, revealing a self-similar triangle pattern over time.

🖼️ Demo

The program starts by drawing an equilateral triangle and a random initial point inside it.
When you click “Run Iteration”, new points are plotted halfway between the current point and a randomly chosen vertex — gradually forming the Sierpiński triangle.

You can:

🟢 Run Iteration – start or stop the fractal generation

🔁 Reset Count – clear the canvas and start fresh

🔴 Watch as the fractal emerges point by point

📂 Project Structure
sierpinski-triangle/
│
├── index.html          # Main HTML file (canvas + buttons)
├── sierpinski.js       # Core logic (triangle drawing + iteration)
└── sierpinski.css      # Styling for layout and visuals

🧠 How It Works

Triangle Setup

The script calculates coordinates of an equilateral triangle inscribed in a circle.

A random point is chosen inside the triangle using barycentric coordinates.

Chaos Game Algorithm

Randomly pick one vertex of the triangle.

Move halfway from the current point toward that vertex.

Plot the new point in red.

Repeat infinitely to reveal the fractal.

Controls

The Run Iteration button toggles animation on/off.

The Reset Count button clears everything and redraws the triangle.

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/<your-username>/sierpinski-triangle.git
cd sierpinski-triangle

2. Open the Project

Simply open the index.html file in your browser:

open index.html


or just double-click it.

No server setup or build steps required — it’s pure client-side JavaScript.
