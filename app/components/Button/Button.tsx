import React from 'react'
import styles from './Button.module.scss'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import classNames from 'classnames'

type ButtonProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		style: 'primary' | 'secondary' | 'outline'
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
}

const Button = ({ blok }: ButtonProps): JSX.Element => {
	const { style, label, link } = blok

	const buttonStyle = classNames(
		styles.button,
		{ [styles.primary]: style === 'primary' },
		{ [styles.secondary]: style === 'secondary' },
		{ [styles.outline]: style === 'outline' }
	)

	return (
		<>
			{label && link && (
				<div {...storyblokEditable(blok)}>
					<NextLink
						href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
						target={link.target}
						className={buttonStyle}
					>
						{label}
					</NextLink>
				</div>
			)}
		</>
	)
}

export default Button
