export interface IButton {
    children:React.ReactNode,
    variant?: string,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button'
}

export interface IVariant {
    variant?:string,
}