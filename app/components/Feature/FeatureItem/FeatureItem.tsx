import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import styles from './FeatureItem.module.scss'

type FeatureItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		quantity?: number
		description?: string
	}
}

const FeatureItem = ({ blok }: FeatureItemProps): JSX.Element => {
	const { quantity, description } = blok

	return (
		<li className={styles.item} {...storyblokEditable(blok)}>
			{quantity && <p className={styles.quantity}>{`${quantity}x`}</p>}
			{description && <p className={styles.description}>{description}</p>}
		</li>
	)
}

export default FeatureItem
