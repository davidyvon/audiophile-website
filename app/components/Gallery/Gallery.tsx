import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import styles from './Gallery.module.scss'
import RevealOnScroll from '../../animations/RevealOnScroll'

type GalleryProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		topLeftImage?: {
			filename: string
			alt: '' | string
		}
		bottomLeftImage?: {
			filename: string
			alt: '' | string
		}
		rightImage?: {
			filename: string
			alt: '' | string
		}
	}
}

const Gallery = ({ blok }: GalleryProps): JSX.Element => {
	const { topLeftImage, bottomLeftImage, rightImage } = blok

	return (
		<RevealOnScroll>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<div className={styles.container}>
					<div className={styles.topLeft}>
						{topLeftImage && topLeftImage.filename && (
							<Image
								className={styles.image}
								src={topLeftImage.filename}
								alt={topLeftImage.alt}
								width={445}
								height={280}
							/>
						)}
					</div>

					<div className={styles.bottomLeft}>
						{bottomLeftImage && bottomLeftImage.filename && (
							<Image
								className={styles.image}
								src={bottomLeftImage.filename}
								alt={bottomLeftImage.alt}
								width={445}
								height={280}
							/>
						)}
					</div>

					<div className={styles.right}>
						{rightImage && rightImage.filename && (
							<Image
								className={styles.image}
								src={rightImage.filename}
								alt={rightImage.alt}
								width={635}
								height={592}
							/>
						)}
					</div>
				</div>
			</section>
		</RevealOnScroll>
	)
}

export default Gallery
