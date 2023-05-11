export interface IButton {
    children:React.ReactNode,
    variant?: string,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean;
}

export interface IVariant {
    variant?:string,
}