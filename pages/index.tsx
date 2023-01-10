import React from 'react'
import Head from 'next/head'

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

	return (
		<>
			<Head>
				<title>{story ? `Audiophile | ${story.name}` : 'Home'}</title>
				<meta name='description' content='Homepage' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<StoryblokComponent blok={story.content} />
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
