import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = ({ color = "#CBCBCB", ...props }: SvgProps & { color?: string }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={color}
    {...props}
  >
    <Path
        fill={color}
      d="M14.4 24H9.6v-1.2H8.4v-7.2H1.2v-1.2H0V9.6h1.2V8.4h7.2V1.2h1.2V0h4.8v1.2h1.2v7.2h7.2v1.2H24v4.8h-1.2v1.2h-7.2v7.2h-1.2m-1.2-18V2.4h-2.4v2.4m-6 8.4v-2.4H2.4v2.4h2.4Z"
    />
  </Svg>
)
export default SvgComponent
