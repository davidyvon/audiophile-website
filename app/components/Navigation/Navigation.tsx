import React, { useState } from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import styles from './Navigation.module.scss'
import NextLink from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import Menu from '../Menu/Menu'

type NavigationProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		className?: string
		logo?: {
			filename: string
			alt: '' | string
		}
		desktopLinks?: [{ link: string }]
		cartIcon?: {
			filename: string
			alt: '' | string
		}
		mobileLinks?: [{ link: string }]
	}
}

const Navigation = ({ blok }: NavigationProps): JSX.Element => {
	const {
		className,
		logo,
		desktopLinks = [],
		cartIcon,
		mobileLinks = [],
	} = blok

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
		<header className={styles.header} {...storyblokEditable(blok)}>
			<nav className={styles.navigation}>
				<div className={styles.container}>
					<div
						onClick={handleMenu}
						className={classNames(styles.menu, setActiveStyles)}
					>
						<Menu blok={{ component: 'menu', _uid: '' }} />
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
						className={classNames(styles.cart, setActiveStyles)}
					>
						{cartIcon && cartIcon.filename && (
							<Image
								className={styles.cartIcon}
								src={cartIcon.filename}
								alt={cartIcon.alt}
								width={24}
								height={24}
							/>
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
		</header>
	)
}

export default Navigation
