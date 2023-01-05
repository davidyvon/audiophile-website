import React from 'react'
import {
	storyblokEditable,
	SbBlokData,
	StoryblokComponent,
} from '@storyblok/react'
import Image from 'next/image'
import { render } from 'storyblok-rich-text-react-renderer-ts'
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
		modalItems?: SbBlokData[]
		label?: string
		buttons?: SbBlokData[]
	}
}

const Modal = ({ blok }: ModalProps): JSX.Element => {
	const { image, heading, description, modalItems, label, buttons } = blok

	return (
		<div className={styles.outer}>
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
							{heading && (
								<div className={styles.heading}>{render(heading)}</div>
							)}
							{description && (
								<p className={styles.description}>{description}</p>
							)}
						</div>

						<div className={styles.summary}>
							<div className={styles.items}>
								{modalItems &&
									modalItems.map((modalItem) => (
										<StoryblokComponent key={modalItem._uid} blok={modalItem} />
									))}
							</div>

							<div className={styles.total}>
								{label && <p className={styles.label}>{label}</p>}
								<p className={styles.price}>$ 1000</p>
							</div>
						</div>

						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Modal
