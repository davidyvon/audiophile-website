import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const Chevron = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='8'
		height='12'
		viewBox='0 0 8 12'
		fill='none'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path d='M1.3219 1L6.3219 6L1.3219 11' stroke='#D87D4A' strokeWidth='2' />
	</svg>
)
export default Chevron
