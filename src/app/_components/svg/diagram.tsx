export default function Diagram() {
  const dataPoints = [3, 4, 7, 5, 3, 6];
  const sineWave = Array.from({ length: 115 })
    .map((item, index) => `${index - 55},${Math.sin(index / 20) * 20 + 10}`)
    .join(" ");

  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      {dataPoints.map((dataPoint, index) => (
        <rect
          key={index}
          x={index * 20 - 55}
          y={50 - dataPoint * 10}
          width="15"
          height={dataPoint * 10}
          fill="#CD803D"
        />
      ))}

      <polyline points={sineWave} fill="none" stroke="black" stroke-width="5" />
    </svg>
  );
}
