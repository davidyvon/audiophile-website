import React, { useRef, useState, useContext } from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import classNames from 'classnames'
import CartContext from '../../context/CartContext'
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
		summary?: SbBlokData[]
		buttons?: SbBlokData[]
		modal?: SbBlokData[]
	}

	className?: string
}

const Form = ({ blok, className }: FormProps): JSX.Element => {
	const { heading, billing, shipping, payment, summary, buttons, modal } = blok

	const { totalQuantity } = useContext(CartContext)

	const [formData, setFormData] = useState({})
	const [openModal, setOpenModal] = useState(false)

	const containerRef = useRef<null | HTMLDivElement>(null)

	const scrollIntoView = () => {
		if (containerRef.current) {
			containerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}
	const handleChange = (name: string, value: string) => {
		// console.log('CHANGE value:', name, value)

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

		setOpenModal(true)
		scrollIntoView()
	}

	const setActiveStyles = classNames(className, {
		[styles.openModal]: openModal,
	})

	return (
		<div
			ref={containerRef}
			className={classNames(styles.outer, setActiveStyles)}
		>
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
						{summary &&
							summary.map((props) => (
								<StoryblokComponent
									key={props._uid}
									blok={props}
									value={formData}
									onChange={handleChange}
								/>
							))}

						<div className={styles.buttons}>
							{buttons &&
								buttons.map((button) => (
									<div className={styles.button} key={button._uid}>
										<StoryblokComponent
											disabled={totalQuantity === 0}
											onSubmit={handleSubmit}
											blok={button}
										/>
									</div>
								))}
						</div>
					</div>
				</form>

				{modal &&
					modal.map((props) => (
						<div
							key={props._uid}
							className={classNames(styles.modal, setActiveStyles)}
						>
							<StoryblokComponent blok={props} />
						</div>
					))}
			</section>
		</div>
	)
}

export default Form
