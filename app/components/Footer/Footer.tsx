import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

type FooterProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		logo?: {
			filename: string
			alt: '' | string
		}
		links?: SbBlokData[]
		description?: string
		copyright?: string
		socials?: SbBlokData[]
	}
}

const Footer = ({ blok }: FooterProps): JSX.Element => {
	const { logo, links, description, copyright, socials } = blok

	return (
		<footer className={styles.footer} {...storyblokEditable(blok)}>
			<div className={styles.container}>
				<div className={styles.logo}>
					{logo && logo.filename && (
						<NextLink href={'/'}>
							<Image
								className={styles.image}
								src={logo.filename}
								alt={logo.alt}
								width={143}
								height={25}
							/>
						</NextLink>
					)}
				</div>

				<nav className={styles.links}>
					{links &&
						links.map((link) => (
							<div key={link._uid} className={styles.link}>
								<StoryblokComponent blok={link} />
							</div>
						))}
				</nav>

				{description && <p className={styles.description}>{description}</p>}
				{copyright && <p className={styles.copyright}>{copyright}</p>}

				<nav className={styles.socials}>
					{socials &&
						socials.map((social) => (
							<div key={social._uid} className={styles.social}>
								<StoryblokComponent blok={social} />
							</div>
						))}
				</nav>
			</div>
		</footer>
	)
}

export default Footer
