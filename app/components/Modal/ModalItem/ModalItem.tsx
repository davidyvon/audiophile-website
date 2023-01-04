import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import styles from './ModalItem.module.scss'

type ModalItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		name?: string
		price?: string
	}

	quantity?: number
}

const ModalItem = ({ blok, quantity = 1 }: ModalItemProps): JSX.Element => {
	const { image, name, price } = blok

	return (
		<div className={styles.container} {...storyblokEditable(blok)}>
			<div className={styles.image}>
				{image && image.filename && (
					<Image
						className={styles.image}
						src={image.filename}
						alt={image.alt}
						width={64}
						height={64}
					/>
				)}
			</div>

			<div className={styles.product}>
				{name && <p className={styles.name}>{name}</p>}
				{price && <p className={styles.price}>{`$ ${price}`}</p>}
			</div>

			{quantity && <p className={styles.quantity}>{`x${quantity}`}</p>}
		</div>
	)
}

export default ModalItem
