import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import styles from './CardLargeItem.module.scss'

type CardLargeItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		label?: string
		buttons?: [{ label: string }]
	}
}

const CardLargeItem = ({ blok }: CardLargeItemProps): JSX.Element => {
	const { image, label, buttons = [] } = blok

	return (
		<article className={styles.article} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.picture}>
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

				<div className={styles.content}>
					{label && <p className={styles.label}>{label}</p>}
					{buttons &&
						buttons.map((button) => (
							<div key={button._uid} className={styles.button}>
								<StoryblokComponent blok={button} />
							</div>
						))}
				</div>
			</div>
		</article>
	)
}

export default CardLargeItem
