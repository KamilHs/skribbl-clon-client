import React from "react";
import { useCanvas } from "../../../../hooks/useCanvas";

interface IProps {
    isDrawer: boolean;
}

const Canvas: React.FC<IProps> = ({ isDrawer }) => {
    const canvasRef = useCanvas(isDrawer, { width: 10, color: "black" });
    return (
        <div className="canvas-container">
            <canvas ref={canvasRef}>
                Your browser doens't support canvas element
            </canvas>
        </div>
    );
};

export default Canvas;
