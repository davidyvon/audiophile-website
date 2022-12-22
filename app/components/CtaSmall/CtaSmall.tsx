import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import styles from './CtaSmall.module.scss'

type CtaSmallProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		buttons?: [{ label: string }]
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

const CtaSmall = ({ blok }: CtaSmallProps): JSX.Element => {
	const { heading, buttons = [], imageDesktop, imageTablet, imageMobile } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.content}>
					{heading && <div className={styles.heading}>{render(heading)}</div>}
					{buttons &&
						buttons.map((button) => (
							<StoryblokComponent key={button._uid} blok={button} />
						))}
				</div>

				{imageDesktop && imageDesktop.filename && (
					<Image
						className={styles.imageDesktop}
						src={imageDesktop.filename}
						alt={imageDesktop.alt}
						width={1110}
						height={320}
					/>
				)}

				{imageTablet && imageTablet.filename && (
					<Image
						className={styles.imageTablet}
						src={imageTablet.filename}
						alt={imageTablet.alt}
						width={689}
						height={320}
					/>
				)}

				{imageMobile && imageMobile.filename && (
					<Image
						className={styles.imageMobile}
						src={imageMobile.filename}
						alt={imageMobile.alt}
						width={654}
						height={640}
					/>
				)}
			</div>
		</section>
	)
}

export default CtaSmall
