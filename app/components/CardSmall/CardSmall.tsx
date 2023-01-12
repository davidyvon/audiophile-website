import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import RevealOnScroll from '../../animations/RevealOnScroll'
import styles from './CardSmall.module.scss'

type CardSmallProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		cards?: SbBlokData[]
	}
}

const CardSmall = ({ blok }: CardSmallProps): JSX.Element => {
	const { cards } = blok

	return (
		<RevealOnScroll>
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
		</RevealOnScroll>
	)
}

export default CardSmall
