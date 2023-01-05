import React, { useState } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames'

type MenuProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string
	}

	className?: string
}

const Menu = ({ className }: MenuProps): JSX.Element => {
	const [openMenu, setOpenMenu] = useState(false)

	const handleMenu = () => {
		setOpenMenu(!openMenu)
	}

	const menuStyle = classNames(className, {
		[styles.openMenu]: openMenu,
		[styles.closeMenu]: !openMenu,
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
