export interface IForm {
    firstName?:string,
    lastName:string,
    email?:string,
    password?:string
    

}

export interface IEvents{
    event?:React.ChangeEvent<HTMLTextAreaElement>,
    target:HTMLInputElement,
}