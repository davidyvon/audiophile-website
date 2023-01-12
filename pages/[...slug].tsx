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

type PageProps = {
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

export default function Page({ story }: PageProps) {
	story = useStoryblokState(story)

	const router = useRouter()
	const [animation, setAnimation] = useState(false)

	useEffect(() => {
		setAnimation(true)
	}, [router.pathname])

	return (
		<>
			<Head>
				<title>{story ? `Audiophile | ${story.name}` : 'Audiophile'}</title>
				<meta name='description' content={story.name} />
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
