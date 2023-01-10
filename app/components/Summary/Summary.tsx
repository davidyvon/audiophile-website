import React, { useContext } from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Summary.module.scss'
import CartItem from '../Cart/CartItem/CartItem'
import CartContext from '../../context/CartContext'

type SummaryProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		total?: string
		shipping?: string
		taxe?: string
		grandTotal?: string
	}
}

const Summary = ({ blok }: SummaryProps): JSX.Element => {
	const { heading, total, shipping, taxe, grandTotal } = blok

	const { cartTotal, shippingCost, cartVAT, cartGrandTotal } =
		useContext(CartContext)

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				{heading && <div className={styles.heading}>{render(heading)}</div>}

				<CartItem type={'summary'} />

				<div className={styles.prices}>
					<div className={styles.total}>
						{total && <p className={styles.label}>{total}</p>}
						<p className={styles.amount}>{`$ ${cartTotal}`}</p>
					</div>

					<div className={styles.total}>
						{shipping && <p className={styles.label}>{shipping}</p>}
						<p className={styles.amount}>{`$ ${shippingCost}`}</p>
					</div>

					<div className={styles.total}>
						{taxe && <p className={styles.label}>{taxe}</p>}
						<p className={styles.amount}>{`$ ${cartVAT}`}</p>
					</div>

					<div className={styles.total}>
						{grandTotal && <p className={styles.label}>{grandTotal}</p>}
						<p className={styles.amount}>{`$ ${cartGrandTotal}`}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Summary
