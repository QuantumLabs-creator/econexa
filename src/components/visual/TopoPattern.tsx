export default function TopoPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="rgba(2,6,23,0.45)" strokeWidth="1">
        <path d="M50 120 C 200 60, 320 220, 480 160 C 640 100, 720 40, 860 120 C 1000 200, 1080 160, 1150 90" />
        <path d="M30 200 C 180 140, 320 320, 500 250 C 680 180, 760 120, 920 210 C 1060 300, 1100 260, 1180 180" />
        <path d="M40 290 C 210 250, 330 410, 520 330 C 710 250, 790 210, 950 310 C 1090 410, 1120 360, 1190 280" />
        <path d="M60 380 C 240 360, 360 500, 560 420 C 760 340, 830 320, 1000 420 C 1120 500, 1160 460, 1190 390" />
      </g>
    </svg>
  );
}