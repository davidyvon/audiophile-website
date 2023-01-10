import React, { useContext, useState } from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import CartContext from '../../context/CartContext'
import Image from 'next/image'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Counter from '../Counter/Counter'
import styles from './Product.module.scss'

type ProductProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		name?: string
		image?: {
			filename: string
			alt: '' | string
		}
		label?: string
		heading?: string
		description?: string
		price?: number
		buttons?: SbBlokData[]
		thumbnail?: {
			filename: string
			alt: '' | string
		}
	}
}

const Product = ({ blok }: ProductProps): JSX.Element => {
	const {
		name,
		image,
		label,
		heading,
		description,
		price,
		buttons,
		thumbnail,
	} = blok

	const { addToCart } = useContext(CartContext)

	const [counter, setCounter] = useState(1)

	const handleIncrease = () => counter < 99 && setCounter(counter + 1)
	const handleDecrease = () => counter > 0 && setCounter(counter - 1)

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
	})

	const formatedPrice = price && formatter.format(price)

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
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

				<article className={styles.content}>
					{label && <p className={styles.label}>{label}</p>}
					{heading && <div className={styles.heading}>{render(heading)}</div>}
					{description && <p className={styles.description}>{description}</p>}
					{price && <p className={styles.price}>{`$ ${formatedPrice}`}</p>}

					<div className={styles.buttons}>
						<Counter
							size='large'
							count={counter}
							onIncrease={handleIncrease}
							onDecrease={handleDecrease}
						/>

						{buttons &&
							buttons.map((button) => (
								<div key={button._uid} className={styles.button}>
									{name && price && (
										<StoryblokComponent
											blok={button}
											onClick={() =>
												addToCart({ name, price, thumbnail }, counter)
											}
										/>
									)}
								</div>
							))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default Product
