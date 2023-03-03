import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'
import type { InputHTMLAttributes, SyntheticEvent } from 'react'
import React, { useEffect, memo, useState, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    label?: string
    autofocus?: boolean
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className = '',
        onChange,
        value,
        autofocus,
        type = 'text',
        label,
        ...otherProps
    } = props

    const autofocusRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            autofocusRef.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(e?.currentTarget?.selectionStart ?? 0)
    }

    return (
        <div className={classNames(styles.Input, {}, [className])}>

            {label && <div className={styles.label}>
                {`${label}>`}
            </div>}

            <div className={styles.caretWrapper}>
                <input
                    ref={autofocusRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }}/>}
            </div>

        </div>
    )
})
