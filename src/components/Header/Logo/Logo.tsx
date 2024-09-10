import Image from 'next/image'
import React from 'react'

type PropsType = {}

export const Logo: React.FC<PropsType> = () => {
	return (
		<div>
			<Image
				src={'/images/logo.png'}
				width={60}
				height={54}
				alt='logo'
			/>
		</div>
	)
}
