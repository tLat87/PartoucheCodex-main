import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
      <Path
          fill="#fff"
          d="M9.06 21c-.23 0-.46-.058-.676-.173a1.44 1.44 0 0 1-.763-1.268V9.67L.423 2.465A1.45 1.45 0 0 1 .107.894 1.448 1.448 0 0 1 1.445 0H19.57c.59 0 1.108.346 1.324.894.216.547.101 1.153-.316 1.57l-7.198 7.207v7.97c0 .476-.245.938-.633 1.197l-2.88 1.917A1.508 1.508 0 0 1 9.06 21Z"
      />
    </Svg>
)
export default SvgComponent
