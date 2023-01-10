import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealOnScroll = {
	children: ReactNode
}

const RevealOnScroll = ({ children }: RevealOnScroll): JSX.Element => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 100 }}
			whileInView={{ opacity: 1, translateY: 0 }}
			transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}

export default RevealOnScroll
