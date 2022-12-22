import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import styles from './Preview.module.scss'
import classNames from 'classnames'

type PreviewProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		className?: string
		imagePosition: 'left' | 'right'
		image?: {
			filename: string
			alt: '' | string
		}
		label?: string
		heading?: string
		description?: string
		buttons?: [{ label: string }]
	}
}

const Preview = ({ blok }: PreviewProps): JSX.Element => {
	const {
		className,
		imagePosition,
		label,
		heading,
		description,
		buttons = [],
		image,
	} = blok

	const sharedStyles = classNames(className, {
		[styles.imageRight]: imagePosition === 'right',
	})

	return (
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
	)
}

export default Preview
