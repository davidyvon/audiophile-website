import React from 'react'
import {
	storyblokEditable,
	SbBlokData,
	StoryblokComponent,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Summary.module.scss'

type SummaryProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		summaryItems?: SbBlokData[]
		total?: string
		shipping?: string
		taxe?: string
		grandTotal?: string
	}
}

const Summary = ({ blok }: SummaryProps): JSX.Element => {
	const { heading, summaryItems, total, shipping, taxe, grandTotal } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				{heading && <div className={styles.heading}>{render(heading)}</div>}

				<div className={styles.items}>
					{summaryItems &&
						summaryItems.map((summaryItem) => (
							<StoryblokComponent key={summaryItem._uid} blok={summaryItem} />
						))}
				</div>

				<div className={styles.prices}>
					<div className={styles.total}>
						{total && <p className={styles.label}>{total}</p>}
						<p className={styles.amount}>$ 1000</p>
					</div>

					<div className={styles.total}>
						{shipping && <p className={styles.label}>{shipping}</p>}
						<p className={styles.amount}>$ 1000</p>
					</div>

					<div className={styles.total}>
						{taxe && <p className={styles.label}>{taxe}</p>}
						<p className={styles.amount}>$ 1000</p>
					</div>

					<div className={styles.total}>
						{grandTotal && <p className={styles.label}>{grandTotal}</p>}
						<p className={styles.amount}>$ 1000</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Summary
