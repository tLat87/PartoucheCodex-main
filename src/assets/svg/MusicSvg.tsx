import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m18.062 17.72 12.041-4.817v8.008a4.604 4.604 0 1 0 2.125 3.882V11.255c0-1.619 0-2.976-.113-4.058-.016-.15-.035-.298-.056-.447-.111-.74-.304-1.428-.68-2.004a3.116 3.116 0 0 0-.877-.893l-.01-.007c-1.003-.666-2.13-.619-3.29-.323-1.122.286-2.513.869-4.219 1.583l-2.966 1.24c-.8.335-1.478.62-2.009.913-.567.312-1.053.68-1.418 1.23-.366.55-.519 1.14-.588 1.783-.065.604-.065 1.339-.065 2.206v11.265a4.604 4.604 0 1 0 2.125 3.882V17.72Z"
    />
    <Path
      fill="#fff"
      d="M10.98 2.833a1.062 1.062 0 1 0-2.125 0v8.16a4.604 4.604 0 1 0 2.125 3.882V7.091c.99.714 2.167 1.055 3.187 1.055a1.062 1.062 0 1 0 0-2.125 3.457 3.457 0 0 1-2.108-.782c-.614-.506-1.08-1.275-1.08-2.405Z"
      opacity={0.5}
    />
  </Svg>
)
export default SvgComponent
