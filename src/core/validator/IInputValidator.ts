import {LegacyRef} from "react";

interface IInputValidator {
    onChangeText(
        ref: LegacyRef<HTMLInputElement>,
        oldValue: string,
        newValue: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void

    onFocus(
        ref: LegacyRef<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void

    onBlur(
        ref: LegacyRef<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void
}

export default IInputValidator;
