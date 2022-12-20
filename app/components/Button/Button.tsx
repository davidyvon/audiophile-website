import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	label: string
	onClick?: () => void
}

const Button = ({ label, ...props }: ButtonProps) => {
	return (
		<button type='button' className={styles.button} {...props}>
			{label}
		</button>
	)
}

export default Button
