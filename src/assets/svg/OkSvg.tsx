import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#438459"
        d="M15.128 2.073 12.892.768a.577.577 0 0 0-.79.207l-5.48 9.389-3.608-2.107a.468.468 0 0 0-.64.169L.958 10.85a.468.468 0 0 0 .169.64l6.436 3.757c.223.13.51.055.64-.168l.052-.09.004-.004 7.076-12.123a.577.577 0 0 0-.207-.79Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
