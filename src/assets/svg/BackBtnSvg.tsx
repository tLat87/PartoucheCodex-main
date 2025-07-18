import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={25}
        fill="none"
        {...props}
    >
      <Path
          fill="#fff"
          d="M12.172 0c.531 0 1 .193 1.406.578L14.75 1.75c.396.396.594.87.594 1.422 0 .562-.198 1.031-.594 1.406l-4.578 4.594h11c.541 0 .982.195 1.32.586.339.39.508.862.508 1.414v2c0 .552-.17 1.023-.508 1.414-.338.39-.779.586-1.32.586h-11l4.578 4.594c.396.375.594.843.594 1.406 0 .562-.198 1.031-.594 1.406l-1.172 1.172a1.922 1.922 0 0 1-1.406.594 1.94 1.94 0 0 1-1.422-.594L.578 13.578C.193 13.214 0 12.745 0 12.172c0-.563.193-1.037.578-1.422L10.75.578A2 2 0 0 1 12.172 0Z"
      />
    </Svg>
)
export default SvgComponent
