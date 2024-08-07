const Ribbon = () => {
    return ( <svg width="200" height="200" viewBox="-100 -100 200 200">
    <defs>
      <path
        id="ribbon"
        d="
          M 0 -20
          Q 28 -40 56 -45
          C 96 -48 96 48 56 45
          Q 28 40 0 20"
        fill="#B73A3B"
      />
    </defs>
  
    <use href="#ribbon" />
    <use href="#ribbon" transform="scale(-1)" />
    <ellipse cx="0" cy="0" rx="20" ry="24" fill="#9C2D2A" />
  
    <path
      d="
        M 0 20
        Q 40 40 30 60
        Q 20 80 40 90
  
        M 0 20
        Q -30 30 -20 60
        Q -10 90 -50 100"
      fill="none"
      stroke="#B73A3B"
      stroke-width="3"
    />
  </svg> );
};

export default Ribbon;