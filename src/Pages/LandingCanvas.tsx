import { useEffect } from "react";
import "../CSS/LandingCanvas.css";

// Point object used for the cavnas element.
type Point = { 
    x: number; 
    y: number;
    xd: number; 
    yd: number;
};

var points: Point[] = [];
var maxPoints = 50; // Should scale with screen size 
const canvasPadding = 1;

function initializePoints() {
    for (var i = 0; i < maxPoints; i++) {
        const xdMult = Math.floor(Math.random() * 2) == 0 ? 1 : -1;
        const ydMult = Math.floor(Math.random() * 2) == 0 ? 1 : -1;

        points.push({
            x: Math.random() * (window.innerWidth - canvasPadding),
            y: Math.random() * (window.innerHeight - canvasPadding),
            xd: (Math.random() * xdMult)*0.1,
            yd: (Math.random() * ydMult)*0.1
        });
    }
}

function draw(context: CanvasRenderingContext2D) {
    requestAnimationFrame(() => draw(context));

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw each dot    
    for (var i = 0; i < maxPoints; i++) {
        context.beginPath();
        context.strokeStyle = "#50a1c7";

        context.lineWidth = 6;
        context.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

        // Bounds Check
        if (points[i].x + points[i].xd > window.innerWidth || points[i].x + points[i].xd < 0) {
            points[i].xd = -points[i].xd;
        }
        if (points[i].y + points[i].yd > window.innerHeight || points[i].y + points[i].yd < 0) {
            points[i].yd = -points[i].yd;
        }

        // Point moved for next draw call
        points[i].x += points[i].xd;
        points[i].y += points[i].yd;
    }
}

function LandingCanvas() {
    useEffect(() => {
        initializePoints();

        const canvas = document.getElementById("bgCanvas") as HTMLCanvasElement;
        const context = canvas!.getContext("2d") as CanvasRenderingContext2D;

        function handleResize() {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize)

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw(context);
    }, []);

    return <canvas className="bgCanvas" id="bgCanvas"/>;
}

export default LandingCanvas;