import React, { useState } from 'react'
import styles from './Counter.module.scss'
import classNames from 'classnames'

type CounterProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		size: 'small' | 'large'
	}
}

const Counter = ({ blok }: CounterProps): JSX.Element => {
	const { size } = blok

	const [count, setCount] = useState(0)

	const handleIncrease = () => {
		setCount(count + 1)
	}

	const handleDecrease = () => {
		count >= 1 && setCount(count - 1)
	}

	const counterStyle = classNames(
		styles.counter,
		{ [styles.small]: size === 'small' },
		{ [styles.large]: size === 'large' }
	)

	return (
		<div className={counterStyle}>
			<button onClick={handleDecrease} className={styles.minus}>
				-
			</button>
			<div className={styles.count}>{count}</div>
			<button onClick={handleIncrease} className={styles.plus}>
				+
			</button>
		</div>
	)
}

export default Counter
