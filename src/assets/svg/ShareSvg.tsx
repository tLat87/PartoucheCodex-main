import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19.8 15.6c-1.22 0-2.309.528-3.076 1.36L8.33 13.282c.037-.224.069-.45.069-.683 0-.437-.086-.85-.21-1.246l8.55-4.293c.767.82 1.85 1.339 3.06 1.339a4.2 4.2 0 1 0-4.2-4.2c0 .244.032.48.072.713L6.832 9.35A4.16 4.16 0 0 0 4.2 8.4a4.2 4.2 0 0 0 0 8.4c1.22 0 2.309-.529 3.076-1.36l8.393 3.677a4.186 4.186 0 0 0-.069.683 4.2 4.2 0 1 0 4.2-4.2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
