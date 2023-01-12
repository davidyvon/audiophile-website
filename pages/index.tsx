import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PageTransition from '../app/animations/PageTransition'

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	StoryData,
	SbBlokData,
} from '@storyblok/react'

type HomeProps = {
	story: StoryData & {
		content: {
			_uid: string
			body: SbBlokData[]
			component: 'page'
			name: string
			_editable: string
		}
	}
}

const Home = ({ story }: HomeProps) => {
	story = useStoryblokState(story)

	const router = useRouter()
	const [animation, setAnimation] = useState(false)

	useEffect(() => {
		setAnimation(true)
	}, [router.pathname])

	return (
		<>
			<Head>
				<title>{story ? `Audiophile | ${story.name}` : 'Home'}</title>
				<meta name='description' content='Homepage' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{animation && (
				<PageTransition>
					<StoryblokComponent blok={story.content} />
				</PageTransition>
			)}
		</>
	)
}

export async function getStaticProps() {
	const slug = 'home'

	const sbParams = {
		version: 'draft', // or 'published'
		resolve_links: 'url',
	}

	const storyblokApi = getStoryblokApi()
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600,
	}
}

export default Home
