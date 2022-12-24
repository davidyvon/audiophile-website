import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import About from '../app/components/About/About'
import Button from '../app/components/Button/Button'
import CardLarge from '../app/components/CardLarge/CardLarge'
import CardLargeItem from '../app/components/CardLarge/CardLargeItem/CardLargeItem'
import CardSmall from '../app/components/CardSmall/CardSmall'
import CardSmallItem from '../app/components/CardSmall/CardSmallItem/CardSmallItem'
import CtaLarge from '../app/components/CtaLarge/CtaLarge'
import CtaSmall from '../app/components/CtaSmall/CtaSmall'
import CtaSplit from '../app/components/CtaSplit/CtaSplit'
import Gallery from '../app/components/Gallery/Gallery'
import Feature from '../app/components/Feature/Feature'
import FeatureItem from '../app/components/Feature/FeatureItem/FeatureItem'
import Footer from '../app/components/Footer/Footer'
import Heading from '../app/components/Heading/Heading'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'
import Preview from '../app/components/Preview/Preview'
import Product from '../app/components/Product/Product'

const components = {
	about: About,
	button: Button,
	cardLarge: CardLarge,
	cardLargeItem: CardLargeItem,
	cardSmall: CardSmall,
	cardSmallItem: CardSmallItem,
	ctaLarge: CtaLarge,
	ctaSmall: CtaSmall,
	ctaSplit: CtaSplit,
	feature: Feature,
	featureItem: FeatureItem,
	footer: Footer,
	gallery: Gallery,
	heading: Heading,
	hero: Hero,
	link: Link,
	page: Page,
	preview: Preview,
	product: Product,
}

storyblokInit({
	accessToken: 'N7dWZJF7G0gQyDEDJr0xjgtt',
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
