import React, { useContext } from 'react'
import {
	storyblokEditable,
	SbBlokData,
	StoryblokComponent,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import CartContext from '../../context/CartContext'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

type CartProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		clear?: string
		label?: string
		buttons?: SbBlokData[]
	}
}

const Cart = ({ blok }: CartProps): JSX.Element => {
	const { heading, clear, label, buttons } = blok

	const { clearCart, totalQuantity, cartTotal } = useContext(CartContext)

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.cart}>
					<div className={styles.header}>
						{heading && (
							<div className={styles.heading}>
								{render(heading)}
								<span className={styles.quantity}>{`(${totalQuantity})`}</span>
							</div>
						)}

						{totalQuantity > 0 && clear && (
							<button onClick={clearCart} className={styles.clear}>
								{clear}
							</button>
						)}
					</div>

					{totalQuantity > 0 && <CartItem type={'cart'} />}

					<div className={styles.total}>
						{label && <p className={styles.label}>{label}</p>}
						<p className={styles.price}>{`$ ${cartTotal}`}</p>
					</div>

					{totalQuantity > 0 &&
						buttons &&
						buttons.map((button) => (
							<StoryblokComponent key={button._uid} blok={button} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Cart
