import React from "react";

interface IPoint {
    x: number;
    y: number;
}

export interface CanvasData {
    width: number;
    color: string;
}

export const useCanvas = (isDrawer: boolean, canvasData: CanvasData) => {
    const previousPoint = React.useRef<IPoint | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const mouseDown = React.useRef<boolean>(false);
    const handleMouseDown = React.useCallback(
        () => (mouseDown.current = true),
        []
    );
    const handleMouseUp = React.useCallback(() => {
        previousPoint.current = null;
        mouseDown.current = false;
    }, []);
    const handleMouseLeave = React.useCallback(
        () => (mouseDown.current = false),
        []
    );

    const handleMouseMove = React.useCallback(
        (e: MouseEvent) => {
            if (mouseDown.current && canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
                if (!ctx) return;
                ctx.fillStyle = canvasData.color;
                ctx.strokeStyle = canvasData.color;
                ctx.lineWidth = canvasData.width * 2;

                const x = e.offsetX;
                const y = e.offsetY;
                if (previousPoint.current) {
                    ctx.beginPath();
                    ctx.moveTo(
                        previousPoint.current.x,
                        previousPoint.current.y
                    );
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
                ctx.beginPath();
                ctx.arc(x, y, canvasData.width, 0, Math.PI * 2);
                ctx.fill();
                previousPoint.current = { x, y };
            }
        },
        [canvasData]
    );

    React.useEffect(() => {
        if (!canvasRef.current || !isDrawer) return;
        const canvas = canvasRef.current;
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent?.clientWidth;
            canvas.height = parent?.clientHeight;
        }

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("mousemove", handleMouseMove);

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, [
        handleMouseDown,
        handleMouseUp,
        handleMouseLeave,
        handleMouseMove,
        isDrawer,
    ]);

    return canvasRef;
};
