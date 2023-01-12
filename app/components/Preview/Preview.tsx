import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import classNames from 'classnames'
import RevealOnScroll from '../../animations/RevealOnScroll'
import styles from './Preview.module.scss'

type PreviewProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		imagePosition: 'left' | 'right'
		image?: {
			filename: string
			alt: '' | string
		}
		label?: string
		heading?: string
		description?: string
		buttons?: SbBlokData[]
	}

	className?: string
}

const Preview = ({ blok, className }: PreviewProps): JSX.Element => {
	const { imagePosition, label, heading, description, buttons, image } = blok

	const sharedStyles = classNames(className, {
		[styles.imageRight]: imagePosition === 'right',
	})

	return (
		<RevealOnScroll>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<div className={classNames(styles.container, sharedStyles)}>
					<div className={classNames(styles.picture, sharedStyles)}>
						{image && image.filename && (
							<Image
								className={styles.image}
								src={image.filename}
								alt={image.alt}
								width={1080}
								height={1120}
							/>
						)}
					</div>

					<article className={classNames(styles.content, sharedStyles)}>
						{label && <p className={styles.label}>{label}</p>}
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

export default Preview
