import React from 'react'
import Head from 'next/head'
import Logo from '../app/assets/icons/Vercel'

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	StoryData,
} from '@storyblok/react'

type HomeProps = {
	story: StoryData & {
		content: {
			_uid: string
			body: unknown[]
			component: 'page'
			name: string
			_editable: string
		}
	}
}

const Home = ({ story }: HomeProps) => {
	story = useStoryblokState(story)

	return (
		<div>
			<Head>
				<title>Home</title>
				<meta name='description' content='Home page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Logo width='50' height='50' />
				<h1>{story ? story.name : 'My Site'}</h1>
				<StoryblokComponent blok={story.content} />
			</main>
		</div>
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
