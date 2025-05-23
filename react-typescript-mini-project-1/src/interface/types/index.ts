export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface NavItem {
  label: string
  path: string
}
export interface HeadTitleProps{
    children:React.ReactNode;
    headStyle?:string ;
}

export interface InputFieldProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  maxLength?:number
}



