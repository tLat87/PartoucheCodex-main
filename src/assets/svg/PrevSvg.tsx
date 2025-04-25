import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={23}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M14.613.184.41 10.345a.983.983 0 0 0-.41.797v.002a.982.982 0 0 0 .413.8l14.203 10.095a.98.98 0 0 0 1.55-.8v-4.752h12.756a.981.981 0 0 0 .98-.98V6.714a.982.982 0 0 0-.98-.981H16.165V.98a.985.985 0 0 0-1.054-.978.979.979 0 0 0-.5.18Z"
        />
    </Svg>
)
export default SvgComponent
