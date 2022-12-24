import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import styles from './CardLarge.module.scss'

type CardLargeProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		cards?: [{ card: string }]
	}
}

const CardLarge = ({ blok }: CardLargeProps): JSX.Element => {
	const { cards = [] } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.cards}>
					{cards &&
						cards.map((card) => (
							<StoryblokComponent key={card._uid} blok={card} />
						))}
				</div>
			</div>
		</section>
	)
}

export default CardLarge
