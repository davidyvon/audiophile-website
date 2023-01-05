import React from 'react'
import styles from './Counter.module.scss'
import classNames from 'classnames'

type CounterProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		size: 'small' | 'large'
	}

	quantity: number
	onIncrease: () => void
	onDecrease: () => void
}

const Counter = ({
	blok,
	quantity = 0,
	onIncrease,
	onDecrease,
}: CounterProps): JSX.Element => {
	const { size } = blok

	const counterStyle = classNames(
		styles.counter,
		{ [styles.small]: size === 'small' },
		{ [styles.large]: size === 'large' }
	)

	return (
		<div className={counterStyle}>
			<button onClick={onDecrease} className={styles.minus}>
				-
			</button>
			<div className={styles.count}>{quantity}</div>
			<button onClick={onIncrease} className={styles.plus}>
				+
			</button>
		</div>
	)
}

export default Counter
