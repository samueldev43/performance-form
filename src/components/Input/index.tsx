import { InputHTMLAttributes, useEffect, useRef } from 'react'
import { Inputt } from './style'

import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType;
}
 
export const Input: React.FC<InputProps> = ({
    name,
    containerStyle = {},
    icon: Icon,
    ...rest
}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const {fieldName, defaultValue, error, registerField} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    },[fieldName, registerField])

    return(
        <>
            <Inputt ref={inputRef} {...rest}/>
            {error}
        </>
    )
}
