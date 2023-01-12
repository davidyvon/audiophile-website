/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useState } from 'react'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './FormRadio.module.scss'

type FormRadioProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		label?: string
		inputs?: any
		cardPayment?: string
		cashPayment?: string
		image?: {
			filename: string
			alt: '' | string
		}
		paymentInfos?: string
	}

	className?: string
	value?: any
	onChange: (name: string, value: string | boolean | '') => void
}

const FormRadio = ({
	className,
	blok,
	value,
	onChange,
}: FormRadioProps): JSX.Element => {
	const {
		heading,
		label,
		inputs,
		cardPayment,
		cashPayment,
		image,
		paymentInfos,
	} = blok

	const [paymentOption, setPaymentOption] = useState('card')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPaymentOption(event.target.value)
		onChange('payment', event.target.value)
	}

	const setActiveStyles = classNames(className, {
		[styles.card]: paymentOption === 'card',
		[styles.cash]: paymentOption === 'cash',
	})

	return (
		<section className={styles.section} {...storyblokEditable(blok)}>
			{heading && <div className={styles.heading}>{render(heading)}</div>}

			<div className={styles.container}>
				{label && <p className={styles.label}>{label}</p>}
				{cardPayment && cashPayment && (
					<div className={styles.radio}>
						<label
							htmlFor='card'
							className={classNames(
								styles.field,
								styles.cardField,
								setActiveStyles
							)}
						>
							<input
								id='card'
								name='payment'
								type='radio'
								value='card'
								checked={paymentOption === 'card'}
								onChange={handleChange}
								className={classNames(
									styles.input,
									styles.cardInput,
									setActiveStyles
								)}
							/>
							<div className={styles.name}>{cardPayment}</div>
						</label>

						<label
							htmlFor='cash'
							className={classNames(
								styles.field,
								styles.cashField,
								setActiveStyles
							)}
						>
							<input
								id='cash'
								name='payment'
								type='radio'
								value='cash'
								checked={paymentOption === 'cash'}
								onChange={handleChange}
								className={classNames(
									styles.input,
									styles.cashInput,
									setActiveStyles
								)}
							/>
							<div className={styles.name}>{cashPayment}</div>
						</label>
					</div>
				)}
			</div>

			<div className={classNames(styles.formFields, setActiveStyles)}>
				{inputs &&
					inputs.map((input) => (
						<StoryblokComponent
							key={input._uid}
							blok={input}
							value={value}
							onChange={onChange}
						/>
					))}
			</div>

			<div className={classNames(styles.infos, setActiveStyles)}>
				{image && image.filename && (
					<Image
						className={styles.image}
						src={image.filename}
						alt={image.alt}
						width={48}
						height={48}
					/>
				)}

				{paymentInfos && <p className={styles.paymentInfos}>{paymentInfos}</p>}
			</div>
		</section>
	)
}

export default FormRadio
