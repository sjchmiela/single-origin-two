import React from 'react'
import { G, Path, Svg } from 'react-native-svg'
import { Icon } from './types'

function RecordIcon({ fill }: Icon) {
  return (
    <Svg width="20" height="22">
      <G fill={fill} fillRule="evenodd">
        <Path d="M19.333 7.4l-1.322-1.322a.426.426 0 0 0-.617 0l-1.41 1.41-5.467 5.555a.334.334 0 0 0-.088.176l-.396 1.763a.379.379 0 0 0 .44.441l1.763-.397c.089 0 .133-.044.177-.088l3.614-3.614 3.306-3.306a.53.53 0 0 0 0-.617z" />
        <Path
          d="M12.942 16.657l-4.011.882h-.177a.87.87 0 0 1-.617-.265c-.22-.22-.308-.485-.22-.793l.881-4.011c.044-.177.133-.309.22-.441l7.01-7.053V1.76a.884.884 0 0 0-.882-.882H1.834a.884.884 0 0 0-.882.882v18.998c0 .484.397.881.882.881h13.312a.884.884 0 0 0 .881-.881v-7.009l-2.644 2.645c-.133.176-.265.22-.441.264zM5.492 6.52c0-.485.397-.881.882-.881h4.276c.485 0 .881.396.881.881a.884.884 0 0 1-.881.882H6.33c-.485-.044-.838-.397-.838-.882z"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

export default RecordIcon
