import "../../app/index.css";

const Logo = (props) => (
  <svg id="Layer_1" viewBox="0 0 600 342.18" {...props}>
    <defs>
      <style>{".cls-3{letter-spacing:.2em}"}</style>
      <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-2" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-3" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur-3" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="linear-gradient"
        x1={353.15}
        y1={95.76}
        x2={246.8}
        y2={95.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff33b" />
        <stop offset={0.04} stopColor="#fee62d" />
        <stop offset={0.12} stopColor="#fdd51b" />
        <stop offset={0.2} stopColor="#fdca0f" />
        <stop offset={0.28} stopColor="#fdc70c" />
        <stop offset={0.67} stopColor="#f3903f" />
        <stop offset={0.89} stopColor="#ed683c" />
        <stop offset={1} stopColor="#e93e3a" />
      </linearGradient>
      <filter id="drop-shadow-4" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-4" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.4} />
        <feComposite in2="blur-4" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path
      d="M336.72 92.1c7.6 29.36-9.23 59.55-37.6 67.41-28.37 7.87-57.53-9.56-65.13-38.92-7.6-29.36 29.51-98.67 29.51-98.67s65.62 40.81 73.22 70.18z"
      fill="#ead5ea"
      filter="url(#drop-shadow-1)"
    />
    <path
      d="M352.3 104.47c0 30.4-23.81 55.04-53.18 55.04s-53.18-24.64-53.18-55.04 53.18-87.4 53.18-87.4 53.18 57 53.18 87.4z"
      fill="#d4acd4"
      filter="url(#drop-shadow-2)"
      opacity={0.6}
    />
    <path
      d="M364.25 120.59c-7.6 29.36-36.76 46.79-65.13 38.92-28.37-7.87-45.2-38.05-37.6-67.41 7.6-29.36 73.22-70.18 73.22-70.18s37.11 69.3 29.51 98.67z"
      filter="url(#drop-shadow-3)"
      fill="#ead5ea"
      opacity={0.6}
    />
    <path
      d="M353.15 111.94c0 30.4-23.81 55.04-53.18 55.04s-53.18-24.64-53.18-55.04 53.18-87.4 53.18-87.4 53.18 57 53.18 87.4z"
      opacity={0.6}
      fill="url(#linear-gradient)"
      filter="url(#drop-shadow-4)"
    />
    <text
      transform="matrix(.97 0 0 1 200.81 321.12)"
      fill="#edece6"
      fontFamily="'Anke', serif"
      fontSize="27.49px"
    >
      <tspan x={0} y={0} letterSpacing=".03em">
        {"T"}
      </tspan>
      <tspan x={18.45} y={0} letterSpacing=".2em">
        {"otal Health"}
      </tspan>
    </text>
    <text
      transform="matrix(.97 0 0 1 57.16 272.52)"
      fontFamily="MADESunflower,'MADE Sunflower'"
      fontSize="95.99px"
      fill="#edece6"
    >
      <tspan className="cls-3" x={0} y={0}>
        {"ABEL"}
      </tspan>
      <tspan x={345.93} y={0} letterSpacing=".19em">
        {"L"}
      </tspan>
      <tspan className="cls-3" x={428.67} y={0}>
        {"A"}
      </tspan>
    </text>
  </svg>
);

export default Logo;
