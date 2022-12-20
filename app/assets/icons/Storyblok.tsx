import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgStoryblok = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		viewBox='0 0 614 431'
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		style={{
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			strokeLinejoin: 'round',
			strokeMiterlimit: 2,
		}}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='m138.71 161-.1.1c2.56 0 4.13 1.99 4.22 4.42v82.93c0 2.55-1.49 4.12-3.89 4.21H83.13L67.91 269.1v-16.54H55.65c-2.46 0-4.53-1.49-4.65-3.89v-83.03c0-2.46 2-4.52 4.54-4.63h83.17V161Zm-28.31 16.86H67.91v59h37.42c2.85 0 5.6-.53 8.14-1.16 2.37-.49 4.46-1.53 6.36-2.7l.4-.25c1.77-1.06 3.26-2.53 4.33-4.28l.21-.35h-.11c1.05-1.89 1.59-4.11 1.59-6.74 0-4.11-.95-7.38-2.86-9.91-2-2.42-4.65-4.11-8.03-5.05 2.68-1.14 4.91-3.14 6.34-5.69 1.38-2.53 2.12-5.16 2.12-7.9.05-3.72-1.23-7.34-3.59-10.22-1.16-1.37-2.64-2.53-4.23-3.37-1.58-.88-3.25-1.31-5.18-1.36l-.42-.02Zm-6.08 32.97c1.22 0 2.14.6 2.95 1.6.76 1.04 1.15 2.3 1.12 3.59 0 1.49-.51 2.69-1.32 3.49-.85.74-1.88 1.22-3 1.29l-.26.01H83.14v-9.96h21.18v-.02Zm-1.73-19.93c.97.01 1.91.36 2.65 1 .71.7 1.12 1.8 1.12 3.29 0 1.6-.36 2.85-1.18 3.48l-.15.11c-.75.55-1.68 1.02-2.62 1.09l-.23.01H83.14v-8.97h19.45v-.01Z'
			style={{
				fill: '#0ab3af',
				fillRule: 'nonzero',
			}}
		/>
	</svg>
)
export default SvgStoryblok
