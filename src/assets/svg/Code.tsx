import { SvgProps } from "../../types"

export default function Code(props: SvgProps) {
  return (
    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke={ props.color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
