import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import Counter from '../Counter/Counter'
import styles from './Display.module.scss'

type DisplayProps = {
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

	quantity?: number
	onIncrease: () => void
	onDecrease: () => void
}

const Display = ({
	quantity = 0,
	onIncrease,
	onDecrease,
	blok,
}: DisplayProps): JSX.Element => {
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
					<div className={styles.buttons}>
						<Counter
							blok={{
								component: 'counter',
								_uid: '',
								size: 'large',
							}}
							quantity={quantity}
							onIncrease={onIncrease}
							onDecrease={onDecrease}
						/>
						{buttons &&
							buttons.map((button) => (
								<div key={button._uid} className={styles.button}>
									<StoryblokComponent blok={button} />
								</div>
							))}
					</div>
				</article>
			</div>
		</section>
	)
}

export default Display
