export interface InputProps {
    type: 'text' | 'password' | 'email'
    status?: 'default' | 'error' | 'success'
    placeholder: string
    label?: string
    disabled?: boolean
}
