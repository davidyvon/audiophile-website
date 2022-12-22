import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const Circles = ({
	title,
	titleId,
	className,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		className={className}
		width='944'
		height='944'
		xmlns='http://www.w3.org/2000/svg'
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g
			stroke='#FFF'
			fill='none'
			fillRule='evenodd'
			opacity='.202'
			aria-labelledby={titleId}
			{...props}
		>
			<circle cx='472' cy='472' r='235.5' />
			<circle cx='472' cy='472' r='270.5' />
			<circle cx='472' cy='472' r='471.5' />
		</g>
	</svg>
)
export default Circles
