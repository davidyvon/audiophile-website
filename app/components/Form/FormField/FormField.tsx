/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './FormField.module.scss'

type FormFieldProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		inputs?: SbBlokData[]
	}

	value?: any
	onChange?: () => void
}

const FormField = ({ blok, value, onChange }: FormFieldProps): JSX.Element => {
	const { heading, inputs = [] } = blok

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			{heading && <div className={styles.heading}>{render(heading)}</div>}

			<div className={styles.inputs}>
				{inputs &&
					inputs.map((input) => (
						<div key={input._uid} className={styles.input}>
							<StoryblokComponent
								blok={input}
								value={value}
								onChange={onChange}
							/>
						</div>
					))}
			</div>
		</section>
	)
}

export default FormField
