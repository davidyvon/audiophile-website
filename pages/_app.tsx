import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import Button from '../app/components/Button/Button'
import Content from '../app/components/Content/Content'
import Heading from '../app/components/Heading/Heading'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'

const components = {
	button: Button,
	content: Content,
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
