import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import styles from './Content.module.scss'
import Image from 'next/image'

type ContentProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: [{ title: string }]
		description?: string

		image?: {
			filename: string
			alt: '' | string
		}

		links?: [{ link: string }]
	}
}

const Content = ({ blok }: ContentProps): JSX.Element => {
	const { heading = [], description, image, links = [] } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.title}>
					{heading &&
						heading.map((props) => (
							<StoryblokComponent key={props._uid} blok={props} />
						))}
				</div>

				{description && <p className={styles.description}>{description}</p>}

				{image && image.filename && (
					<Image
						className={styles.image}
						src={image.filename}
						alt={image.alt}
						width={540}
						height={320}
					/>
				)}

				<div className={styles.links}>
					{links &&
						links.map((link) => (
							<StoryblokComponent key={link._uid} blok={link} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Content
