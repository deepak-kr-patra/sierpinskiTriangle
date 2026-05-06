# Sierpiński Triangle Generator

This project visualizes the **Sierpiński Triangle**, a famous fractal, using pure **HTML, CSS, and JavaScript**.  
It iteratively plots points using the **Chaos Game algorithm**, revealing a mesmerizing self-similar triangle pattern over time.

---

## 🖼️ Demo

The program starts by drawing an **equilateral triangle** and a **random initial point** inside it.  
When you click **“Run Iteration”**, new points are plotted halfway between the current point and a randomly chosen vertex — gradually forming the **Sierpiński Triangle**.

You can:

- 🟢 **Run Iteration** – start or stop the fractal generation  
- 🔁 **Reset Count** – clear the canvas and start fresh  
- 🔴 **Watch** as the fractal emerges point by point  

---

## 🧠 How It Works

### 🔺 Triangle Setup
- The script calculates the coordinates of an **equilateral triangle** inscribed in a circle.  
- A random point is chosen **inside the triangle** using **barycentric coordinates**.

### 🎲 Chaos Game Algorithm
1. Randomly pick one vertex of the triangle.  
2. Move halfway from the **current point** toward that vertex.  
3. Plot the new point in **red**.  
4. Repeat infinitely to reveal the fractal pattern.

### 🎮 Controls
- **Run Iteration**: Toggles the animation on or off.  
- **Reset Count**: Clears the canvas and redraws the triangle.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/sierpinski-triangle.git
cd sierpinski-triangle
```

### 2️⃣ Open the Project

Simply open the index.html file in your browser:
open index.html

or just double-click it.

🧠 No server setup or build steps required — it’s 100% client-side JavaScript!
