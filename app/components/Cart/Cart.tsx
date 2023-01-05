import React from 'react'
import {
	storyblokEditable,
	SbBlokData,
	StoryblokComponent,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Cart.module.scss'

type CartProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		clear?: string
		cartItems?: SbBlokData[]
		label?: string
		buttons?: SbBlokData[]
	}
}

const Cart = ({ blok }: CartProps): JSX.Element => {
	const { heading, clear, cartItems, label, buttons } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.cart}>
					<div className={styles.header}>
						{heading && (
							<div className={styles.heading}>
								{render(heading)}
								<span className={styles.quantity}>(1)</span>
							</div>
						)}

						{clear && <button className={styles.clear}>{clear}</button>}
					</div>

					<div className={styles.items}>
						{cartItems &&
							cartItems.map((cartItem) => (
								<StoryblokComponent key={cartItem._uid} blok={cartItem} />
							))}
					</div>

					<div className={styles.total}>
						{label && <p className={styles.label}>{label}</p>}
						<p className={styles.price}>$ 1000</p>
					</div>

					{buttons &&
						buttons.map((button) => (
							<StoryblokComponent key={button._uid} blok={button} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Cart
