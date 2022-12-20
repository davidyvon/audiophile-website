import React from 'react'
import Head from 'next/head'

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	StoryData,
} from '@storyblok/react'

type PageProps = {
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

export default function Page({ story }: PageProps) {
	story = useStoryblokState(story)

	return (
		<div>
			<Head>
				<title>{story ? story.name : 'My Site'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<h1>{story ? story.name : 'My Site'}</h1>
			</header>

			<StoryblokComponent blok={story.content} />
		</div>
	)
}

export async function getStaticProps({ params }) {
	const slug = params.slug ? params.slug.join('/') : 'home'

	const sbParams = {
		version: 'draft', // or 'published'
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

export async function getStaticPaths() {
	const storyblokApi = getStoryblokApi()
	const { data } = await storyblokApi.get('cdn/links/')

	const paths: { params: { slug: unknown } }[] = []
	Object.keys(data.links).forEach((linkKey) => {
		if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
			return
		}

		const slug = data.links[linkKey].slug
		const splittedSlug = slug.split('/')

		paths.push({ params: { slug: splittedSlug } })
	})

	return {
		paths: paths,
		fallback: false,
	}
}
