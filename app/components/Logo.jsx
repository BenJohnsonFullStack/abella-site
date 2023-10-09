import React from "react";

const Logo = () => (
  <svg viewBox="0 0 388 317" className="w-96">
    <defs>
      <filter id="a" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="b" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-2" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="c" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-3" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.1} />
        <feComposite in2="blur-3" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="d"
        x1={217.62}
        y1={154.48}
        x2={170.36}
        y2={154.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fbee43" />
        <stop offset={0.04} stopColor="#fbe133" />
        <stop offset={0.12} stopColor="#fbd221" />
        <stop offset={0.2} stopColor="#fbc915" />
        <stop offset={0.28} stopColor="#fcc612" />
        <stop offset={0.67} stopColor="#f18f40" />
        <stop offset={0.89} stopColor="#ec683b" />
        <stop offset={1} stopColor="#e83e39" />
      </linearGradient>
      <filter id="e" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-4" stdDeviation={40} />
        <feFlood floodColor="#49445e" floodOpacity={0.4} />
        <feComposite in2="blur-4" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="f" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-5" stdDeviation={20} />
        <feFlood floodColor="#0f101b" floodOpacity={0.6} />
        <feComposite in2="blur-5" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="g" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-6" stdDeviation={20} />
        <feFlood floodColor="#0f101b" floodOpacity={0.6} />
        <feComposite in2="blur-6" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path
      d="M210.32 152.91c3.38 12.61-4.1 25.57-16.71 28.95-12.61 3.38-25.57-4.1-28.95-16.71-3.38-12.61 13.12-42.37 13.12-42.37s29.16 17.52 32.54 30.13z"
      filter="url(#a)"
      fill="#e9d4e7"
    />
    <path
      d="M217.24 158.22c0 13.05-10.58 23.63-23.63 23.63s-23.63-10.58-23.63-23.63 23.63-37.53 23.63-37.53 23.63 24.47 23.63 37.53z"
      fill="#d2abd0"
      filter="url(#b)"
      opacity={0.6}
    />
    <path
      d="M222.56 165.15c-3.38 12.61-16.34 20.09-28.95 16.71-12.61-3.38-20.09-16.34-16.71-28.95 3.38-12.61 32.54-30.13 32.54-30.13s16.49 29.76 13.12 42.37z"
      fill="#e9d4e7"
      opacity={0.6}
      filter="url(#c)"
    />
    <path
      d="M217.62 161.43c0 13.05-10.58 23.63-23.63 23.63s-23.63-10.58-23.63-23.63 23.63-37.53 23.63-37.53 23.63 24.47 23.63 37.53z"
      fill="url(#d)"
      filter="url(#e)"
      opacity={0.6}
    />
    <text
      transform="translate(132.75 252.93)"
      fill="#edece6"
      opacity={0.98}
      filter="url(#f)"
      fontFamily="Anke,Anke"
      fontSize="16.4px"
    >
      <tspan x={0} y={0} letterSpacing=".03em">
        {"T"}
      </tspan>
      <tspan x={11.01} y={0} letterSpacing=".2em">
        {"otal Health"}
      </tspan>
    </text>
    <text
      transform="translate(86.07 227.59)"
      filter="url(#g)"
      fontFamily="MADESunflower,'MADE Sunflower'"
      fontSize="41.21px"
      fill="#edece6"
      opacity={0.98}
    >
      <tspan x={0} y={0} letterSpacing=".2em">
        {"ABEL"}
      </tspan>
      <tspan x={148.53} y={0} letterSpacing=".19em">
        {"L"}
      </tspan>
      <tspan x={184.06} y={0} letterSpacing=".2em">
        {"A"}
      </tspan>
    </text>
  </svg>
);

export default Logo;
