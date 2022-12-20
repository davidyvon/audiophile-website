import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgFigma = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		height={24}
		width={24}
		xmlns='http://www.w3.org/2000/svg'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g fill='none' fillRule='evenodd' transform='translate(4)'>
			<circle cx={12} cy={12} fill='#19bcfe' r={4} />
			<path d='M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z' fill='#09cf83' />
			<path d='M4 16h4V8H4a4 4 0 1 0 0 8z' fill='#a259ff' />
			<path d='M4 8h4V0H4a4 4 0 1 0 0 8z' fill='#f24e1e' />
			<path d='M12 8H8V0h4a4 4 0 1 1 0 8z' fill='#ff7262' />
		</g>
	</svg>
)
export default SvgFigma
