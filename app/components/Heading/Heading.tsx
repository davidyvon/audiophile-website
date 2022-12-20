import React from 'react'
import styles from './Heading.module.scss'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'

type HeadingProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string
		title?: string
	}
}

const Heading = ({ blok }: HeadingProps): JSX.Element => {
	const { title } = blok

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				{title && (
					<div className={styles.title} {...storyblokEditable(blok)}>
						{render(title)}
					</div>
				)}
			</div>
		</section>
	)
}

export default Heading
