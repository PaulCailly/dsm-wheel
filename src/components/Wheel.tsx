import { FC, useState } from 'react';

type WheelProps = {
    names: string[];
}

const Wheel: FC<WheelProps> = ({ names }) => {
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [rotation, setRotation] = useState(0);
    const numberOfSegments = names.length;
    const segmentAngle = 360 / numberOfSegments;
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#ffeb3b', '#ff9800']

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
        // Reset the selected name when the wheel is spun
        setSelectedName("");

        // Generate a random angle between 0 and 360 degrees
        const randomAngle = Math.floor(Math.random() * 360);

        // Add 720 degrees to ensure at least two full spins
        const fullSpins = 720;

        // Calculate the new rotation angle by adding the current rotation, the random angle, and the full spins
        const newRotation = rotation + randomAngle + fullSpins; // newRotation = 0 + 180 + 720 = 900
        setRotation(newRotation);

        // Calculate the rotation angle relative to a full rotation
        const rotationAngle = newRotation % 360; // rotationAngle = 900 % 360 = 180

        // Calculate the remaining angle to complete a full rotation
        const remainingAngleToCompleteRotation = 360 - rotationAngle; // remainingAngleToCompleteRotation = 360 - 180 = 180

        // Add 90 degrees to the remaining angle to offset the starting point
        const offsetAngle = remainingAngleToCompleteRotation + 90; // offsetAngle = 180 + 90 = 270

        // Determine the raw index of the segment by dividing the offset angle by the angle of each segment
        const rawSegmentIndex = offsetAngle / segmentAngle; // rawSegmentIndex = 270 / 60 = 4.5

        // Round down the raw segment index to get an integer
        const flooredSegmentIndex = Math.floor(rawSegmentIndex); // flooredSegmentIndex = Math.floor(4.5) = 4

        // Use modulo operation with the number of segments to ensure the selected segment index is within the valid range
        const selectedSegment = flooredSegmentIndex % numberOfSegments; // selectedSegment = 4 % 6 = 4

        // Delay setting the selected name until the spin animation has finished
        setTimeout(() => {
            setSelectedName(names[selectedSegment]);
        }, 3000);
    };

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