import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgSwift = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		height={64}
		width={64}
		xmlns='http://www.w3.org/2000/svg'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M3.554 37.343c2.908 4.423 7.014 7.736 11.907 11.162 13.417 9.396 26.79 7.117 32 2.28 0 0 1.593-1.785 5.023-.784 2.386.697 5.55 3.221 6.695 4.4.245-1.057.375-2.159.375-3.29 0-4.063-1.67-7.736-4.36-10.37C59.28 29.257 52.918 13.99 39.227 4.28c5.955 9.057 7.92 19.033 3.768 26.923C33.713 25.184 15.461 9.25 15.461 9.25s8.558 13.023 15.07 19.348c-6.512-3.906-10.047-6.697-21.396-16.186 7.773 12.76 21.057 24.33 25.86 28.329-14.511 7.764-31.441-3.398-31.441-3.398z'
			fill='#e43535'
			fillRule='evenodd'
		/>
	</svg>
)
export default SvgSwift
