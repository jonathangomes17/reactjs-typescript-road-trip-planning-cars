import React from 'react'
import Lottie from 'react-lottie'
import IAnimation from './types'

import animationData from '../../../../assets/29120-loading-map.json'

const Animation: React.FC<IAnimation> = ({ play }) => {
  const defaultOptions = {
    loop: true,
    autoplay: play || false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} height={200} width={200} />
}

export default Animation
