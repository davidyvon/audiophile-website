import React, { useState, useContext } from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import Menu from '../Menu/Menu'

import CartContext from '../../context/CartContext'
import styles from './Navigation.module.scss'

type NavigationProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		logo?: {
			filename: string
			alt: '' | string
		}
		desktopLinks?: SbBlokData[]
		mobileLinks?: SbBlokData[]
		cartIcon?: {
			filename: string
			alt: '' | string
		}
		cart?: SbBlokData[]
	}

	className?: string
}

const Navigation = ({ blok, className }: NavigationProps): JSX.Element => {
	const { logo, desktopLinks, mobileLinks, cartIcon, cart } = blok

	const { totalQuantity } = useContext(CartContext)

	const [openMenu, setOpenMenu] = useState(false)
	const [openCart, setOpenCart] = useState(false)

	const handleMenu = () => {
		setOpenMenu(!openMenu)
		setOpenCart(false)
	}

	const handleCart = () => {
		setOpenCart(!openCart)
		setOpenMenu(false)
	}

	const setActiveStyles = classNames(className, {
		[styles.openMenu]: openMenu,
		[styles.openCart]: openCart,
	})

	return (
		<div className={classNames(styles.outer, setActiveStyles)}>
			<header className={styles.header} {...storyblokEditable(blok)}>
				<nav className={styles.navigation}>
					<div className={styles.container}>
						<div
							onClick={handleMenu}
							className={classNames(styles.menu, setActiveStyles)}
						>
							<Menu />
						</div>

						<div className={styles.logo}>
							{logo && logo.filename && (
								<NextLink href={'/'}>
									<Image
										className={styles.logoImage}
										src={logo.filename}
										alt={logo.alt}
										width={143}
										height={25}
									/>
								</NextLink>
							)}
						</div>

						<div className={styles.desktopLinks}>
							{desktopLinks &&
								desktopLinks.map((desktopLink) => (
									<div key={desktopLink._uid} className={styles.desktopLink}>
										<StoryblokComponent blok={desktopLink} />
									</div>
								))}
						</div>

						<button
							onClick={handleCart}
							className={classNames(styles.cartIcon, setActiveStyles)}
						>
							{cartIcon && cartIcon.filename && (
								<Image
									className={styles.svg}
									src={cartIcon.filename}
									alt={cartIcon.alt}
									width={24}
									height={24}
								/>
							)}

							{totalQuantity > 0 && (
								<div className={styles.badge}>{totalQuantity}</div>
							)}
						</button>
					</div>

					<div className={classNames(styles.mobileLinks, setActiveStyles)}>
						{mobileLinks &&
							mobileLinks.map((mobileLink) => (
								<StoryblokComponent key={mobileLink._uid} blok={mobileLink} />
							))}
					</div>
				</nav>

				<div className={classNames(styles.cart, setActiveStyles)}>
					{cart &&
						cart.map((props) => (
							<StoryblokComponent key={props._uid} blok={props} />
						))}
				</div>
			</header>
		</div>
	)
}

export default Navigation
