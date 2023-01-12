import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import classNames from 'classnames'
import styles from './FormInput.module.scss'

type FormInputProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		type?: 'text' | 'email' | 'tel'
		required?: boolean
		label?: string
		name?: string
		placeholder?: string
		errorMessage?: string
	}

	hasError?: boolean
	className?: string
	value?: unknown
	onChange: (name: string, value: unknown) => void
}

const FormInput = ({
	hasError = false,
	className,
	blok,
	value,
	onChange,
}: FormInputProps): JSX.Element => {
	const { type, required, label, name, placeholder, errorMessage } = blok

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		name && onChange(name, event.target.value)
	}

	const sharedClassNames = classNames(className, {
		[styles.hasError]: hasError,
	})

	return (
		<>
			{label && name && placeholder && type && value && (
				<div className={styles.container} {...storyblokEditable(blok)}>
					<label
						className={classNames(styles.label, sharedClassNames)}
						htmlFor={name}
					>
						<div className={styles.name}>{label}</div>
						<div className={classNames(styles.error, sharedClassNames)}>
							{errorMessage}
						</div>
					</label>
					<input
						type={type}
						required={required}
						id={name}
						name={name}
						placeholder={placeholder}
						value={value[name] || ''}
						onChange={handleChange}
						className={classNames(styles.input, sharedClassNames)}
					/>
				</div>
			)}
		</>
	)
}

export default FormInput
