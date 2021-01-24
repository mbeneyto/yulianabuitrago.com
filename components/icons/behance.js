export default function BehanceIcon({
  width = 24,
  height = 24,
  fill = "#242424",
  ...rest
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 4.48v14.763h7.155a7.52 7.52 0 001.93-.248 5.148 5.148 0 001.68-.766 3.767 3.767 0 001.167-1.337c.286-.542.43-1.187.43-1.935 0-.924-.22-1.711-.668-2.37-.446-.653-1.119-1.113-2.028-1.374.668-.316 1.166-.723 1.506-1.218.338-.496.506-1.117.506-1.86 0-.688-.112-1.268-.337-1.732a2.86 2.86 0 00-.963-1.127 4.202 4.202 0 00-1.492-.608A9.092 9.092 0 006.96 4.48H0zm15.667.99v1.457h5.985V5.471h-5.985zM3.251 6.996h3.04c.288 0 .569.02.837.073.272.046.508.134.715.26.21.12.376.292.502.513.12.22.18.503.18.847 0 .619-.181 1.07-.555 1.343-.378.277-.854.414-1.43.414H3.25v-3.45zM18.796 8.25c-.82 0-1.559.146-2.23.436-.67.29-1.246.688-1.731 1.192a5.247 5.247 0 00-1.12 1.79 6.27 6.27 0 00-.395 2.237c0 .826.129 1.589.384 2.278.258.692.62 1.282 1.086 1.781a4.84 4.84 0 001.726 1.15c.68.269 1.438.405 2.28.405 1.208 0 2.245-.277 3.095-.833.86-.553 1.49-1.47 1.906-2.757h-2.585c-.1.33-.36.649-.784.946-.43.3-.942.45-1.534.45-.824 0-1.46-.217-1.899-.647-.441-.429-.727-1.228-.727-2.074h7.713a7.571 7.571 0 00-.204-2.38 5.795 5.795 0 00-.94-2.028 4.734 4.734 0 00-1.666-1.417c-.68-.354-1.47-.529-2.375-.529zm-.089 2.217c.721 0 1.313.21 1.661.596.35.389.607.943.677 1.691h-4.777a3.32 3.32 0 01.134-.704c.075-.267.204-.517.394-.753.19-.233.44-.431.744-.59.31-.16.698-.24 1.167-.24zM3.251 12.664h3.533c.7 0 1.269.16 1.695.484.426.328.64.868.64 1.629 0 .388-.063.71-.194.957-.13.249-.31.446-.528.59-.217.148-.475.249-.766.313-.286.064-.59.092-.912.092H3.252v-4.065z"
        fill={fill}
      />
    </svg>
  )
}