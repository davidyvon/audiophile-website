import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import classNames from 'classnames'
import Icon from '../../assets/icons/Chevron'
import styles from './Button.module.scss'

type ButtonProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		type: 'button' | 'submit' | 'reset'
		style: 'primary' | 'secondary' | 'outline' | 'light'
		fullWidth: boolean
		label?: string
		link?:
			| ''
			| {
					linktype: 'url'
					url: string
					target?: '_blank'
			  }
			| {
					linktype: 'story'
					story: { url: string }
					target?: '_blank'
			  }
	}

	disabled: boolean
	onClick: () => void
}

const Button = ({
	blok,
	disabled = false,
	onClick,
}: ButtonProps): JSX.Element => {
	const { type = 'button', style, fullWidth, label, link } = blok

	const buttonStyle = classNames(
		styles.button,
		{ [styles.primary]: style === 'primary' },
		{ [styles.secondary]: style === 'secondary' },
		{ [styles.outline]: style === 'outline' },
		{ [styles.light]: style === 'light' },
		{ [styles.disabled]: disabled },
		{ [styles.fullWidth]: fullWidth }
	)

	if (type === 'submit') {
		return (
			<>
				{label && (
					<button
						type={type}
						disabled={disabled}
						className={styles.container}
						onClick={onClick}
						{...storyblokEditable(blok)}
					>
						<div className={buttonStyle}>
							{label}
							{style === 'light' && <Icon className={styles.icon} />}
						</div>
					</button>
				)}
			</>
		)
	}

	return (
		<>
			{label && link && (
				<div className={styles.container} {...storyblokEditable(blok)}>
					<NextLink
						href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
						target={link.target}
						className={buttonStyle}
					>
						{label}
						{style === 'light' && <Icon className={styles.icon} />}
					</NextLink>
				</div>
			)}
		</>
	)
}

export default Button
