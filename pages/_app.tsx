import React from 'react'
import type { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import { CartProvider } from '../app/context/CartContext'
import '../app/styles/globals.scss'

import About from '../app/components/About/About'
import Button from '../app/components/Button/Button'
import CardLarge from '../app/components/CardLarge/CardLarge'
import CardLargeItem from '../app/components/CardLarge/CardLargeItem/CardLargeItem'
import CardSmall from '../app/components/CardSmall/CardSmall'
import CardSmallItem from '../app/components/CardSmall/CardSmallItem/CardSmallItem'
import Cart from '../app/components/Cart/Cart'
import CtaLarge from '../app/components/CtaLarge/CtaLarge'
import CtaSmall from '../app/components/CtaSmall/CtaSmall'
import CtaSplit from '../app/components/CtaSplit/CtaSplit'
import Gallery from '../app/components/Gallery/Gallery'
import GoBack from '../app/components/GoBack/GoBack'
import Feature from '../app/components/Feature/Feature'
import FeatureItem from '../app/components/Feature/FeatureItem/FeatureItem'
import Footer from '../app/components/Footer/Footer'
import Form from '../app/components/Form/Form'
import FormField from '../app/components/Form/FormField/FormField'
import FormInput from '../app/components/Form/FormInput/FormInput'
import FormRadio from '../app/components/Form/FormRadio/FormRadio'
import Heading from '../app/components/Heading/Heading'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import Modal from '../app/components/Modal/Modal'
import Navigation from '../app/components/Navigation/Navigation'
import Page from '../app/components/Page/Page'
import Preview from '../app/components/Preview/Preview'
import Product from '../app/components/Product/Product'
import Summary from '../app/components/Summary/Summary'

const components = {
	about: About,
	button: Button,
	cardLarge: CardLarge,
	cardLargeItem: CardLargeItem,
	cardSmall: CardSmall,
	cardSmallItem: CardSmallItem,
	cart: Cart,
	ctaLarge: CtaLarge,
	ctaSmall: CtaSmall,
	ctaSplit: CtaSplit,
	feature: Feature,
	featureItem: FeatureItem,
	footer: Footer,
	form: Form,
	formField: FormField,
	formInput: FormInput,
	formRadio: FormRadio,
	gallery: Gallery,
	goBack: GoBack,
	heading: Heading,
	hero: Hero,
	link: Link,
	modal: Modal,
	navigation: Navigation,
	page: Page,
	preview: Preview,
	product: Product,
	summary: Summary,
}

storyblokInit({
	accessToken: 'N7dWZJF7G0gQyDEDJr0xjgtt',
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	)
}
