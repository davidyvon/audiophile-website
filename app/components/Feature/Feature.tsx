import React from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Feature.module.scss'

type FeatureProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		featureHeading?: string
		description?: string
		listHeading?: string
		items?: [{ label: string }]
	}
}

const Feature = ({ blok }: FeatureProps): JSX.Element => {
	const { featureHeading, description, listHeading, items = [] } = blok

	return (
		<article className={styles.article} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.feature}>
					{featureHeading && (
						<p className={styles.featureHeading}>{featureHeading}</p>
					)}
					{description && (
						<div className={styles.description}>{render(description)}</div>
					)}
				</div>

				<div className={styles.list}>
					{listHeading && <p className={styles.listHeading}>{listHeading}</p>}
					<ul className={styles.items}>
						{items &&
							items.map((item) => (
								<StoryblokComponent key={item._uid} blok={item} />
							))}
					</ul>
				</div>
			</div>
		</article>
	)
}

export default Feature
