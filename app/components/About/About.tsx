import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import styles from './About.module.scss'
import RevealOnScroll from '../../animations/RevealOnScroll'

type AboutProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

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
		heading?: string
		description?: string
	}
}

const About = ({ blok }: AboutProps): JSX.Element => {
	const { imageDesktop, imageTablet, imageMobile, heading, description } = blok

	return (
		<RevealOnScroll>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<div className={styles.container}>
					<div className={styles.picture}>
						{imageDesktop && imageDesktop.filename && (
							<Image
								className={styles.imageDesktop}
								src={imageDesktop.filename}
								alt={imageDesktop.alt}
								width={540}
								height={588}
							/>
						)}

						{imageTablet && imageTablet.filename && (
							<Image
								className={styles.imageTablet}
								src={imageTablet.filename}
								alt={imageTablet.alt}
								width={1378}
								height={600}
							/>
						)}

						{imageMobile && imageMobile.filename && (
							<Image
								className={styles.imageMobile}
								src={imageMobile.filename}
								alt={imageMobile.alt}
								width={654}
								height={600}
							/>
						)}
					</div>

					<article className={styles.content}>
						{heading && <div className={styles.heading}>{render(heading)}</div>}
						{description && <p className={styles.description}>{description}</p>}
					</article>
				</div>
			</section>
		</RevealOnScroll>
	)
}

export default About
