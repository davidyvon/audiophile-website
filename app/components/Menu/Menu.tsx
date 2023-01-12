import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './Menu.module.scss'

type MenuProps = {
	className?: string
}

const Menu = ({ className }: MenuProps): JSX.Element => {
	const [isMounted, setIsMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [animationDirection, setAnimationDirection] = useState<
		'open' | 'close' | 'initial'
	>('initial')

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const handleMenu = () => {
		isMounted && setIsOpen(!isOpen)
		isOpen ? setAnimationDirection('close') : setAnimationDirection('open')
	}

	const menuStyle = classNames(className, {
		[styles.openMenu]: animationDirection === 'open',
		[styles.closeMenu]: animationDirection === 'close',
	})

	return (
		<button onClick={handleMenu} className={classNames(styles.menu, menuStyle)}>
			<div className={classNames(styles.line, menuStyle)} />
			<div className={classNames(styles.line, menuStyle)} />
			<div className={classNames(styles.line, menuStyle)} />
		</button>
	)
}

export default Menu
