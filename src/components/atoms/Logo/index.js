import React from 'react'
import { LogoImage } from './styles'
import logoImage from '../../../../assets/LogoEmpire.png'

const sizes = {
  small: 28,
  larger: 64
}

export const Logo = ({ size }) => {
  return (
    <LogoImage source={logoImage} size={sizes[size || 'larger']}/>
  )
}