const TextPath = () => {
  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <defs>
        <path id="text-arc" d="M 0, 50 A 50 50 0 1 1 1,50" />
      </defs>

      <text
        fill="#0c5c4c"
        font-family="Tahoma"
        font-size="0.77em"
        font-weight="bold"
      >
        <textPath href="#text-arc">
          Happy Holidays! Happy Holidays! Happy Holidays!
        </textPath>
      </text>
    </svg>
  );
};

export default TextPath;
