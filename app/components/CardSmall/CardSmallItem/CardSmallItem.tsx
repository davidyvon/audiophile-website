import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Image from 'next/image'
import styles from './CardSmallItem.module.scss'

type CardSmallItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		label?: string
		buttons?: [{ label: string }]
		image?: {
			filename: string
			alt: '' | string
		}
	}
}

const CardSmallItem = ({ blok }: CardSmallItemProps): JSX.Element => {
	const { label, buttons = [], image } = blok

	return (
		<article className={styles.article} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.picture}>
					{image && image.filename && (
						<Image
							className={styles.image}
							src={image.filename}
							alt={image.alt}
							width={400}
							height={400}
						/>
					)}
				</div>

				<div className={styles.content}>
					{label && <p className={styles.label}>{label}</p>}
					<div className={styles.button}>
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</div>
			</div>
		</article>
	)
}

export default CardSmallItem
