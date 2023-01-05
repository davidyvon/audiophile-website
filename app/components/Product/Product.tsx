import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'

type ProductProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		category?: 'headphone' | 'earphone' | 'speaker'
		name?: string
		description?: string
		features?: string
		price?: number
		quantity?: number
		newProduct?: boolean
		productImage?: {
			filename: string
			alt: '' | string
		}
		thumbnailImage?: {
			filename: string
			alt: '' | string
		}
		cartImage?: {
			filename: string
			alt: '' | string
		}
	}
}

const Product = ({ blok }: ProductProps): JSX.Element => {
	const {
		category,
		name,
		description,
		features,
		price,
		quantity,
		newProduct,
		productImage,
		thumbnailImage,
		cartImage,
	} = blok

	return (
		<div {...storyblokEditable(blok)}>
			<p>Category: {category}</p>
			<br />
			<p>Name: {name}</p>
			<br />
			<p>Description: {description}</p>
			<br />
			<p>Features: {features}</p>
			<br />
			<p>Price: {price}</p>
			<br />
			<p>Quantity: {quantity}</p>
			<br />
			<p>New Product: {newProduct ? 'yes' : 'no'}</p>
			<br />

			<div>
				<div>Product Image:</div>
				{productImage && productImage.filename && (
					<Image
						src={productImage.filename}
						alt={productImage.alt}
						width={1440}
						height={729}
					/>
				)}
			</div>
			<br />
			<div>
				<div>Thumbnail Image:</div>
				{thumbnailImage && thumbnailImage.filename && (
					<Image
						src={thumbnailImage.filename}
						alt={thumbnailImage.alt}
						width={1440}
						height={729}
					/>
				)}
			</div>
			<br />

			<div>
				<div>Cart Image:</div>
				{cartImage && cartImage.filename && (
					<Image
						src={cartImage.filename}
						alt={cartImage.alt}
						width={1440}
						height={729}
					/>
				)}
			</div>
		</div>
	)
}

export default Product
