'use client'

import { InputProps } from "@/components/Input/Input.types";

const Input = ({ type, placeholder }: InputProps) => {
    return (
        <input type={type} placeholder={placeholder}/>
    )
}

export default Input;
