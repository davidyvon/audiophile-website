import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Counter from '../../Counter/Counter'
import styles from './CartItem.module.scss'

type CartItemProps = {
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
	onIncrease: () => void
	onDecrease: () => void
}

const CartItem = ({
	blok,
	quantity = 0,
	onIncrease,
	onDecrease,
}: CartItemProps): JSX.Element => {
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

			<div className={styles.counter}>
				<Counter
					blok={{
						_uid: '',
						size: 'small',
						component: 'counter',
					}}
					quantity={quantity}
					onIncrease={onIncrease}
					onDecrease={onDecrease}
				/>
			</div>
		</div>
	)
}

export default CartItem
