import { useEffect } from "react";
import "../CSS/LandingCanvas.css";

// Point object used for the cavnas element.
type Point = { 
    x: number; 
    y: number;
    xd: number; 
    yd: number;
};

var shouldAnimate = false;
var timerMade = false;

var points: Point[] = [];
var maxPoints = 100;
const connectDistance = 150;

function initializePoints() {
    // Scales points with screen size
    if (window.innerWidth <= 800) {
        maxPoints = 50;
    } else {
        maxPoints = 100;
    }
    
    for (var i = 0; i < maxPoints; i++) {
        const xdMult = Math.floor(Math.random() * 2) == 0 ? 1 : -1;
        const ydMult = Math.floor(Math.random() * 2) == 0 ? 1 : -1;

        points.push({
            x: Math.random() * (window.innerWidth),
            y: Math.random() * (window.innerHeight),
            xd: (Math.random() * xdMult)*0.05,
            yd: (Math.random() * ydMult)*0.05
        });
    }

    shouldAnimate = true;
}

function draw(context: CanvasRenderingContext2D) {
    if (!shouldAnimate) return;

    requestAnimationFrame(() => draw(context));

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw each dot    
    for (var i = 0; i < maxPoints; i++) {
        context.beginPath();
        context.strokeStyle = "#343434";

        context.lineWidth = 8;
        context.arc(points[i].x, points[i].y, 3, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

        ConnectNearDots(context, points[i]);

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

function ConnectNearDots(context: CanvasRenderingContext2D, point: Point) {
    for (var i = 0; i < maxPoints; i++) {
        const distance = Math.sqrt(Math.pow((points[i].x - point.x), 2) + Math.pow((points[i].y - point.y), 2));
        if (points[i] == point || (distance > connectDistance)) continue;

        const lineWidth = Math.min(connectDistance - distance, 4);
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(points[i].x, points[i].y);
        context.stroke();
        context.closePath();
    }
}

function ClearCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    points = [];
}

function LandingCanvas() {
    useEffect(() => {
        initializePoints();

        const canvas = document.getElementById("bgCanvas") as HTMLCanvasElement;
        const context = canvas!.getContext("2d") as CanvasRenderingContext2D;

        function handleResize() {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
            
            // Creates a init timeout on change. That way the canvas doesn't get spammed with clear and init calls.
            if (!timerMade) {
                timerMade = true;
                shouldAnimate = false
                ClearCanvas(context);

                // ReInitializes canvas after 1 second
                setTimeout(() => {
                    timerMade = false;
                    shouldAnimate = true;
                    initializePoints();
                    draw(context);
                }, 1000);
            }
        }
        window.addEventListener('resize', handleResize)

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw(context);
    }, []);

    return <canvas className="bgCanvas" id="bgCanvas"/>;
}

export default LandingCanvas;