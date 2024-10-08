import { SvgProps } from "../../types"

export default function Mail(props: SvgProps) {
  return (
    <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="complete">
            <g id="mail">
                <g>
                    <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke={ props.color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <rect fill="none" height="14" rx="2" ry="2" stroke={ props.color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/>
                </g>
            </g>
        </g>
    </svg>
  )
}
