import React from 'react'
import { useRouter } from 'next/router'
import { storyblokEditable } from '@storyblok/react'
import classNames from 'classnames'
import styles from './GoBack.module.scss'

type GoBackProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		label?: string
		background?: 'white' | 'gray'
	}
}

const GoBack = ({ blok }: GoBackProps): JSX.Element => {
	const { label, background } = blok

	const router = useRouter()

	return (
		<div
			{...storyblokEditable(blok)}
			className={classNames(styles.container, {
				[styles.background]: background === 'gray',
			})}
		>
			<nav className={styles.nav}>
				{label && (
					<button
						className={styles.button}
						type='button'
						onClick={() => router.back()}
					>
						{label}
					</button>
				)}
			</nav>
		</div>
	)
}

export default GoBack
