export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    type:string,
    name:string,
    text:string,
    value?:string,
    
}