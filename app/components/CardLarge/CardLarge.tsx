import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import RevealOnScroll from '../../animations/RevealOnScroll'
import styles from './CardLarge.module.scss'

type CardLargeProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		cards?: SbBlokData[]
	}
}

const CardLarge = ({ blok }: CardLargeProps): JSX.Element => {
	const { heading, cards } = blok

	return (
		<RevealOnScroll>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<div className={styles.container}>
					{heading && <div className={styles.heading}>{render(heading)}</div>}

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

export default CardLarge
