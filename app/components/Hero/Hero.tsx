import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Hero.module.scss'
import Image from 'next/image'

type HeroProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		label?: string
		heading?: string
		description?: string
		buttons?: [{ label: string }]
		image?: {
			filename: string
			alt: '' | string
		}
	}
}

const Hero = ({ blok }: HeroProps): JSX.Element => {
	const { label, heading = [], description, buttons = [], image } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<article className={styles.content}>
					{label && <p className={styles.label}>{label}</p>}
					{heading && <div className={styles.heading}>{render(heading)}</div>}
					{description && <p className={styles.description}>{description}</p>}

					<div className={styles.button}>
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</article>
			</div>

			{image && image.filename && (
				<Image
					className={styles.image}
					src={image.filename}
					alt={image.alt}
					width={540}
					height={320}
				/>
			)}
		</section>
	)
}

export default Hero
