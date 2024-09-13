import Image from 'next/image'
import React from 'react'
import { LogoIcon } from './LogoIcon'

type PropsType = {}

export const Logo: React.FC<PropsType> = () => {
	return (
		<div>
			<LogoIcon />
		</div>
	)
}
