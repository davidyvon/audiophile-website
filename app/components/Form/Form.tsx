import React, { useState } from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import styles from './Form.module.scss'

type FormProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		billing?: SbBlokData[]
		shipping?: SbBlokData[]
		payment?: SbBlokData[]
		buttons?: SbBlokData[]
	}
}

const Form = ({ blok }: FormProps): JSX.Element => {
	const {
		heading,
		billing = [],
		shipping = [],
		payment = [],
		buttons = [],
	} = blok

	const [formData, setFormData] = useState({})

	const handleChange = (name: string, value: string) => {
		console.log('CHANGE value:', name, value)

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		formData.forEach((value, name) => {
			console.log('SUBMIT value:', `${name}: ${value}`)
		})
	}

	return (
		<div className={styles.outer}>
			<section className={styles.section} {...storyblokEditable(blok)}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.checkout}>
						{heading && <div className={styles.heading}>{render(heading)}</div>}

						<div className={styles.billing}>
							{billing &&
								billing.map((props) => (
									<StoryblokComponent
										key={props._uid}
										blok={props}
										value={formData}
										onChange={handleChange}
									/>
								))}
						</div>

						<div className={styles.shipping}>
							{shipping &&
								shipping.map((props) => (
									<StoryblokComponent
										key={props._uid}
										blok={props}
										value={formData}
										onChange={handleChange}
									/>
								))}
						</div>

						<div className={styles.payment}>
							{payment &&
								payment.map((props) => (
									<StoryblokComponent
										key={props._uid}
										blok={props}
										value={formData}
										onChange={handleChange}
									/>
								))}
						</div>
					</div>

					<div className={styles.summary}>
						<div className={styles.buttons}>
							{buttons &&
								buttons.map((button) => (
									<div className={styles.button} key={button._uid}>
										<StoryblokComponent blok={button} />
									</div>
								))}
						</div>
					</div>
				</form>
			</section>
		</div>
	)
}

export default Form
