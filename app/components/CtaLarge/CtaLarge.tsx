import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import Circles from '../../assets/icons/Circles'
import styles from './CtaLarge.module.scss'
import RevealOnScroll from '../../animations/RevealOnScroll'

type CtaLargeProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		heading?: string
		description?: string
		buttons?: SbBlokData[]
	}
}

const CtaLarge = ({ blok }: CtaLargeProps): JSX.Element => {
	const { image, heading, description, buttons } = blok

	return (
		<RevealOnScroll>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<div className={styles.container}>
					<Circles className={styles.circles} />

					<div className={styles.picture}>
						{image && image.filename && (
							<Image
								className={styles.image}
								src={image.filename}
								alt={image.alt}
								width={756}
								height={918}
							/>
						)}
					</div>

					<article className={styles.content}>
						{heading && <div className={styles.heading}>{render(heading)}</div>}
						{description && <p className={styles.description}>{description}</p>}
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</article>
				</div>
			</section>
		</RevealOnScroll>
	)
}

export default CtaLarge
