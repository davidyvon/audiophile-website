import React, { useContext } from 'react'
import Image from 'next/image'
import Counter from '../../Counter/Counter'
import CartContext from '../../../context/CartContext'
import styles from './CartItem.module.scss'

type CartItemProps = {
	type: 'cart' | 'summary' | 'confirmation'
}

const CartItem = ({ type }: CartItemProps): JSX.Element => {
	const { cart, updateQuantity } = useContext(CartContext)

	return (
		<div className={styles.container}>
			{cart.length > 0 &&
				cart.map((item) => (
					<div key={item.product.name} className={styles.items}>
						{item.product.thumbnail && (
							<div className={styles.image}>
								<Image
									className={styles.image}
									src={item.product.thumbnail.filename}
									alt={item.product.thumbnail.alt}
									width={64}
									height={64}
								/>
							</div>
						)}

						<div className={styles.product}>
							<p className={styles.name}>{item.product.name}</p>
							<p className={styles.price}>{`$ ${item.product.price}`}</p>
						</div>

						{type === 'cart' && (
							<div className={styles.counter}>
								<Counter
									size='small'
									count={item.quantity}
									onChange={(event) =>
										updateQuantity(item.product, parseInt(event.target.value))
									}
									onIncrease={() =>
										updateQuantity(item.product, item.quantity + 1)
									}
									onDecrease={() =>
										updateQuantity(item.product, item.quantity - 1)
									}
								/>
							</div>
						)}

						{type === 'summary' && (
							<p className={styles.quantity}>{`x${item.quantity}`}</p>
						)}
					</div>
				))}
		</div>
	)
}

export default CartItem
