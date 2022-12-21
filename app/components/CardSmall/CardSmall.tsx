import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import styles from './CardSmall.module.scss'

type CardSmallProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		cards?: [{ card: string }]
	}
}

const CardSmall = ({ blok }: CardSmallProps): JSX.Element => {
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

export default CardSmall
