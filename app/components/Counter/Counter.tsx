import React from 'react'
import styles from './Counter.module.scss'
import classNames from 'classnames'

type CounterProps = {
	size: 'small' | 'large'
	count: number
	onIncrease: () => void
	onDecrease: () => void
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Counter = ({
	size,
	count,
	onIncrease,
	onDecrease,
	onChange,
}: CounterProps): JSX.Element => {
	const counterStyle = classNames(
		styles.counter,
		{ [styles.small]: size === 'small' },
		{ [styles.large]: size === 'large' }
	)

	return (
		<div className={counterStyle} onChange={onChange}>
			<button onClick={onDecrease} className={styles.minus}>
				-
			</button>
			<div className={styles.count}>{count}</div>
			<button onClick={onIncrease} className={styles.plus}>
				+
			</button>
		</div>
	)
}

export default Counter
