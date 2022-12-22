import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import Button from '../app/components/Button/Button'
import CardSmall from '../app/components/CardSmall/CardSmall'
import CardSmallItem from '../app/components/CardSmall/CardSmallItem/CardSmallItem'
import Content from '../app/components/Content/Content'
import CtaLarge from '../app/components/CtaLarge/CtaLarge'
import CtaSmall from '../app/components/CtaSmall/CtaSmall'
import Heading from '../app/components/Heading/Heading'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'

const components = {
	button: Button,
	cardSmall: CardSmall,
	cardSmallItem: CardSmallItem,
	content: Content,
	ctaLarge: CtaLarge,
	ctaSmall: CtaSmall,
	heading: Heading,
	hero: Hero,
	link: Link,
	page: Page,
}

storyblokInit({
	accessToken: 'N7dWZJF7G0gQyDEDJr0xjgtt',
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
