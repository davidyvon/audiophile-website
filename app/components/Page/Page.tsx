import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'

const Page = ({ blok }) => (
	<main {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok: SbBlokData) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
)

export default Page
