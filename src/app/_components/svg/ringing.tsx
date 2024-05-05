import './ringing.css'
const Ringing = () => {
    return ( <svg className="bell" width="200" height="200" viewBox="-100 -100 200 200">
    <g stroke="#001514" stroke-width="2">
      <circle cx="0" cy="-45" r="7" fill="#4F6D7A" />
      <circle className="bell-tongue" cx="0" cy="50" r="10" fill="#F79257" />
      <path
        d="
          M -50 40
          L -50 50
          L 50 50
          L 50 40
          Q 40 40 40 10
          C 40 -60 -40 -60 -40 10
          Q -40 40 -50 40"
        fill="#FDEA96"
      />
    </g>
  </svg> );
};

export default Ringing;