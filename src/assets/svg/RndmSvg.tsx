import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m6.45 0 6.407 8.5H8.571V17l17.143 10.625V34H21.43v-4.25L4.286 19.125V8.5H0L6.45 0ZM4.286 34v-6.375l4.65-2.444 3.857 2.38L8.57 29.75V34H4.286ZM23.593 0 30 8.5h-4.286v10.625l-4.65 2.444-3.857-2.38L21.43 17V8.5h-4.286l6.45-8.5Z"
        />
    </Svg>
)
export default SvgComponent
