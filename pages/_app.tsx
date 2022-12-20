import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import Content from '../app/components/Content/Content'
import Heading from '../app/components/Heading/Heading'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'

const components = {
	content: Content,
	heading: Heading,
	link: Link,
	page: Page,
}

storyblokInit({
	accessToken: 'N7dWZJF7G0gQyDEDJr0xjgtt', // Replace token with corresponding StoryBlok project
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
