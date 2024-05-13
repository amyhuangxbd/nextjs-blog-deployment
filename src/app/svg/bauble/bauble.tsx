import Motif from "@/app/_components/svg/motif";

type Props = {
  color: string;
  shading: string;
  shape: string;
  number: number;
  selected: boolean;
};
const Bauble = ({
  color = "gray",
  shading,
  shape,
  number,
  selected,
}: Props) => {
  const motifFill = {
    solid: "#5f4c6c",
    striped: "url(#stripe)",
    open: "transparent",
  }[shading];
  return (
    <svg width={200} height={200} viewBox="-100 -100 200 200">
      <defs>
        <radialGradient id="shine" cx="0.25" cy="0.25" r="0.35">
          <stop offset="0%" stop-color="white" stop-opacity="0.5" />
          <stop offset="100%" stop-color="white" stop-opacity="0" />
        </radialGradient>

        <pattern
          id="stripe"
          patternUnits="userSpaceOnUse"
          width="10"
          height="6"
        >
          <rect x="0" y="2.5" width="10" height="3" fill="#5f4c6c" />
        </pattern>
      </defs>

      <circle cx="0" cy="20" r="65" fill={color} />

      <g
        transform="translate(0, 20)"
        fill={motifFill}
        stroke="#5f4c6c"
        stroke-width="3"
      >
        <Motif shape={shape} number={number} />
      </g>

      <circle cx="0" cy="20" r="65" fill="url(#shine)" />

      <circle
        cx="0"
        cy="-70"
        r="12"
        fill="none"
        stroke="#F79257"
        stroke-width="2"
      />
      <rect x="-17.5" y="-60" width="34" height="20" fill="#F79257" />
    </svg>
  );
};

export default Bauble;
