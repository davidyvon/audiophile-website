import React, { useContext } from 'react'
import {
	storyblokEditable,
	SbBlokData,
	StoryblokComponent,
} from '@storyblok/react'
import Image from 'next/image'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import CartItem from '../Cart/CartItem/CartItem'
import CartContext from '../../context/CartContext'
import styles from './Modal.module.scss'

type ModalProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		heading?: string
		description?: string
		label?: string
		buttons?: SbBlokData[]
	}
}

const Modal = ({ blok }: ModalProps): JSX.Element | null => {
	const { image, heading, description, label, buttons } = blok

	const { totalQuantity, cartGrandTotal, clearCart } = useContext(CartContext)

	if (totalQuantity === 0) return null

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.modal}>
					<div className={styles.header}>
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
						{heading && <div className={styles.heading}>{render(heading)}</div>}
						{description && <p className={styles.description}>{description}</p>}
					</div>

					<div className={styles.summary}>
						<div className={styles.items}>
							<CartItem type={'summary'} />
						</div>

						<div className={styles.total}>
							{label && <p className={styles.label}>{label}</p>}
							<p className={styles.price}>{`$ ${cartGrandTotal}`}</p>
						</div>
					</div>

					{buttons &&
						buttons.map((button) => (
							<div
								key={button._uid}
								className={styles.button}
								onClick={clearCart}
							>
								<StoryblokComponent blok={button} />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default Modal
