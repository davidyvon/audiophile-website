/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from 'react'

type Product = {
	name: string
	price: number
	thumbnail?: { filename: string; alt: string }
}

type CartItem = {
	product: Product
	quantity: number
}

type CartContextValue = {
	cart: CartItem[]
	totalQuantity: number
	cartTotal: string
	cartVAT: string
	shippingCost: number
	cartGrandTotal: string
	addToCart: (product: Product, quantity: number) => void
	updateQuantity: (product: Product, quantity: number) => void
	clearCart: () => void
}

const defaultCartState = {
	cart: [],
	totalQuantity: 0,
	cartTotal: '',
	cartVAT: '',
	shippingCost: 0,
	cartGrandTotal: '',
	addToCart: () => {},
	updateQuantity: () => {},
	clearCart: () => {},
}

const CartContext = createContext<CartContextValue>(defaultCartState)

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([])
	const [totalQuantity, setTotalQuantity] = useState(0)

	useEffect(() => {
		setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0))
	}, [cart])

	const addToCart = (product: Product, quantity: number) => {
		setCart((prevCart) => {
			let updated = false

			const updatedCart = prevCart.map((item) => {
				if (item.product.name === product.name) {
					updated = true

					return {
						product,
						quantity: item.quantity + quantity,
					}
				}

				return item
			})

			if (!updated) {
				updatedCart.push({ product, quantity })
			}

			return updatedCart
		})
	}

	const updateQuantity = (product: Product, quantity: number) => {
		const newCart = [...cart]
		const productIndex = newCart.findIndex(
			(index) => index.product.name === product.name
		)

		if (quantity >= 0 && quantity < 100 && productIndex !== -1) {
			newCart[productIndex] = {
				...newCart[productIndex],
				quantity,
			}
		}

		setCart(newCart)
	}

	const clearCart = () => setCart([])

	const total = cart.reduce(
		(total, item) => total + item.quantity * item.product.price,
		0
	)
	const VAT = total * 0.2 // based on a fixed 20% VAT
	const shippingCost = 50.0 // based on a fixed $50 shipping cost
	const grandTotal = total + shippingCost

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
	})

	const cartTotal = formatter.format(total)
	const cartVAT = formatter.format(VAT)
	const cartGrandTotal = formatter.format(grandTotal)

	return (
		<CartContext.Provider
			value={{
				cart,
				totalQuantity,
				addToCart,
				updateQuantity,
				clearCart,
				cartTotal,
				cartVAT,
				shippingCost,
				cartGrandTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContext
