import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = ({ color = "#CBCBCB", ...props }: SvgProps & { color?: string }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill={color}
    {...props}
  >
    <Path
      fill={color}
      d="M22.958 2.417a2.417 2.417 0 0 1 2.417 2.416v14.5a2.417 2.417 0 0 1-2.417 2.417h-2.416v2.416a2.416 2.416 0 0 1-2.417 2.417H6.042a2.416 2.416 0 0 1-2.417-2.416v-14.5A2.417 2.417 0 0 1 6.042 7.25h2.416V4.833a2.417 2.417 0 0 1 2.417-2.417h12.083ZM12.083 18.125H9.667a1.209 1.209 0 0 0-.142 2.408l.142.008h2.416a1.208 1.208 0 0 0 .142-2.408l-.142-.008ZM22.958 4.833H10.875V7.25h7.25a2.417 2.417 0 0 1 2.417 2.416v9.667h2.416v-14.5ZM14.5 13.291H9.667a1.208 1.208 0 1 0 0 2.417H14.5a1.208 1.208 0 1 0 0-2.417Z"
    />
  </Svg>
)
export default SvgComponent
