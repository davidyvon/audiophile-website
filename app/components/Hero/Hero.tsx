import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import styles from './Hero.module.scss'

type HeroProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		label?: string
		heading?: string
		description?: string
		buttons?: SbBlokData[]
		imageDesktop?: {
			filename: string
			alt: '' | string
		}
		imageTablet?: {
			filename: string
			alt: '' | string
		}
		imageMobile?: {
			filename: string
			alt: '' | string
		}
	}
}

const Hero = ({ blok }: HeroProps): JSX.Element => {
	const {
		label,
		heading,
		description,
		buttons,
		imageDesktop,
		imageTablet,
		imageMobile,
	} = blok

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

				{imageDesktop && imageDesktop.filename && (
					<Image
						className={styles.imageDesktop}
						src={imageDesktop.filename}
						alt={imageDesktop.alt}
						width={1418}
						height={1772}
					/>
				)}
			</div>

			{imageTablet && imageTablet.filename && (
				<Image
					className={styles.imageTablet}
					src={imageTablet.filename}
					alt={imageTablet.alt}
					width={1536}
					height={1458}
				/>
			)}

			{imageMobile && imageMobile.filename && (
				<Image
					className={styles.imageMobile}
					src={imageMobile.filename}
					alt={imageMobile.alt}
					width={750}
					height={1200}
				/>
			)}
		</section>
	)
}

export default Hero
