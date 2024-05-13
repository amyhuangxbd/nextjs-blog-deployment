import "./arc.css";
const Arc = () => {
  return (
    <svg className="candy" width="200" height="400" viewBox="-100 -200 200 400">
      <path
        d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
        stroke="#cd803d"
        stroke-width="45"
        className="body"
      />

      <path
        d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
        stroke="white"
        stroke-width="40"
        className="body"
      />

      <line className="green-mark" x1="-35" y1="-90" x2="-60" y2="-100" />
      <line className="red-mark" x1="-15" y1="-115" x2="-25" y2="-135" />
      <line className="green-mark" x1="20" y1="-110" x2="35" y2="-130" />
      <line className="red-mark" x1="40" y1="-60" x2="60" y2="-80" />
      <line className="green-mark" x1="40" y1="-10" x2="60" y2="-30" />
      <line className="red-mark" x1="40" y1="40" x2="60" y2="20" />
      <line className="green-mark" x1="40" y1="90" x2="60" y2="70" />
    </svg>
  );
};

export default Arc;
