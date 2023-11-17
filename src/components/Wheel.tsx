import { FC, useState } from 'react';

type WheelProps = {
    names: string[];
}

const Wheel: FC<WheelProps> = ({ names }) => {
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [rotation, setRotation] = useState(0);
    const numberOfSegments = names.length;
    const segmentAngle = 360 / numberOfSegments;

    const calculatePath = (index: number, segmentAngle: number) => {
        const startAngle = index * segmentAngle;
        const endAngle = (index + 1) * segmentAngle;
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        const start = {
            x: 400 + 400 * Math.cos(Math.PI * startAngle / 180),
            y: 400 + 400 * Math.sin(Math.PI * startAngle / 180),
        };

        const end = {
            x: 400 + 400 * Math.cos(Math.PI * endAngle / 180),
            y: 400 + 400 * Math.sin(Math.PI * endAngle / 180),
        };

        return `M 400 400 L ${start.x} ${start.y} A 400 400 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
    };

    const spin = () => {
        setSelectedName("");
        const newRotation = rotation + Math.floor(Math.random() * 360) + 720; // Add 720 to ensure at least two full spins
        setRotation(newRotation);
        const selectedSegment = Math.floor(((360 - (newRotation % 360)) + 90) / segmentAngle) % numberOfSegments;

        // Delay setting the selected name until the spin animation has finished
        setTimeout(() => {
            setSelectedName(names[selectedSegment]);
        }, 3000);
    };

    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#ffeb3b', '#ff9800']

    return (
        <>

            <svg viewBox="0 0 800 800" className="wheel" style={{ transform: `rotate(${rotation}deg)` }} >
                {names.map((name, i) => (
                    <g key={i}>
                        <path
                            d={calculatePath(i, segmentAngle)}
                            fill={colors[i % colors.length]}
                        />
                        <text
                            x={400 + 200 * Math.cos((2 * i + 1) * Math.PI / numberOfSegments)}
                            y={400 + 200 * Math.sin((2 * i + 1) * Math.PI / numberOfSegments)}
                            text-anchor="middle"
                            fill="#000"
                            dy=".3em"
                        >
                            {name}
                        </text>
                    </g>
                ))}
            </svg>
            <div className='indicator-container'>
                <div className='indicator' />
            </div>
            <button className="spin-button" onClick={spin}>Spin</button>
            <div className='result'>
                {selectedName}
            </div>
        </>
    );
}

export default Wheel;