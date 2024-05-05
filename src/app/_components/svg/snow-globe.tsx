import './snow-globe.css'
export default function SnowGlobe() {
    return (
      <svg width="200" height="200" viewBox="-100 -100 200 200">
        <clipPath id="snow-globe">
          <circle cx="0" cy="0" r="80" />
        </clipPath>
  
        <g clip-path="url(#snow-globe)">
          <rect x="-100" y="-100" width="200" height="200" fill="#F1DBC3" />
          <circle cx="0" cy="380" r="350" fill="#F8F4E8" />
  
          <Threes />
          <Snow />
        </g>
  
        <circle cx="0" cy="0" r="80" fill="none" stroke="gray" stroke-width="2" />
      </svg>
    );
  }
  
  function Threes() {
    return (
      <g>
        <defs>
          <g id="tree">
            <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
            <line x2="0" y2="10" stroke="#778074" stroke-width="2" />
          </g>
        </defs>
  
        <use href="#tree" x="-20" y="25" transform="scale(1.8)" />
        <use href="#tree" x="-10" y="40" transform="scale(1)" />
        <use href="#tree" x="30" y="40" transform="scale(0.8)" />
        <use href="#tree" x="40" y="30" transform="scale(1.2)" />
      </g>
    );
  }
  
  function Snow() {
    return (
      <g className="snowing">
        <defs>
          <circle id="big" cx="0" cy="0" r="5" fill="white" />
          <circle id="small" cx="0" cy="0" r="3" fill="white" />
        </defs>
  
        <use href="#big" x="0" y="0" className="flake fast" />
        <use href="#big" x="-50" y="-20" className="flake fast opaque" />
        <use href="#big" x="30" y="-40" className="flake fast" />
        <use href="#big" x="50" y="-20" className="flake fast opaque" />
        <use href="#big" x="30" y="50" className="flake slow" />
        <use href="#big" x="-70" y="-80" className="flake slow opaque" />
        <use href="#big" x="30" y="50" className="flake slow" />
        <use href="#big" x="90" y="-80" className="flake slow opaque" />
        <use href="#small" x="10" y="-50" className="flake slow" />
        <use href="#small" x="-50" y="-60" className="flake slow opaque" />
        <use href="#small" x="30" y="70" className="flake slow" />
        <use href="#small" x="10" y="-80" className="flake slow opaque" />
      </g>
    );
  }