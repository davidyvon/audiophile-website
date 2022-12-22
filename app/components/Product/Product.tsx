import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import styles from './Product.module.scss'

type ProductProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		label?: string
		heading?: string
		description?: string
		price?: string
		buttons?: [{ label: string }]
	}
}

const Product = ({ blok }: ProductProps): JSX.Element => {
	const { image, label, heading, description, price, buttons = [] } = blok

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
					{price && <p className={styles.price}>{`$ ${price}`}</p>}
					{buttons &&
						buttons.map((button) => (
							<StoryblokComponent key={button._uid} blok={button} />
						))}
				</article>
			</div>
		</section>
	)
}

export default Product
