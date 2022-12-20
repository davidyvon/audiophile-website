import React from 'react'
import styles from './Heading.module.scss'
import { storyblokEditable } from '@storyblok/react'

type HeadingProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		title?: string
		tag?: 1 | 2 | 3 | 4 | 5 | 6
	}
}

const Heading = ({ blok }: HeadingProps): JSX.Element => {
	const { title, tag } = blok

	const Tag: string = tag ? `h${tag}` : 'p'
	const Title = Tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

	return (
		<div className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				{title && <Title className={styles.title}>{title}</Title>}
			</div>
		</div>
	)
}

export default Heading
