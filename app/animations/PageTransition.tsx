import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type PageTransition = {
	children: ReactNode
}

const PageTransition = ({ children }: PageTransition): JSX.Element => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ x: '-100%' }}
				animate={{ x: 0 }}
				exit={{ x: '100%' }}
				transition={{ duration: 0.6 }}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					minHeight: '100%',
					backgroundColor: '#D87D4A',
					zIndex: -1,
				}}
			/>
			<motion.div
				initial={{ x: '-100%' }}
				animate={{ x: 0 }}
				exit={{ x: '100%' }}
				transition={{ duration: 0.6, delay: 0.2 }}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					minHeight: '100%',
					backgroundColor: 'white',
					zIndex: -1,
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default PageTransition
