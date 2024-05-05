const BaubleClipPath = () => {
    return ( <svg width="200" height="200" viewBox="-100 -100 200 200">
    <defs>
      <clipPath id="ball">
        <circle cx="0" cy="20" r="70" />
      </clipPath>
    </defs>
  
    <circle cx="0" cy="20" r="70" fill="#D1495B" />
  
    <polyline
      clip-path="url(#ball)"
      points="-120 40 -80 0 -40 40 0 0 40 40 80 0 120 40"
      fill="none"
      stroke="#9C2D2A"
      stroke-width="20"
    />
  
    <circle
      cx="0"
      cy="-75"
      r="12"
      fill="none"
      stroke="#F79257"
      stroke-width="2"
    />
    <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
  </svg> );
};

export default BaubleClipPath;