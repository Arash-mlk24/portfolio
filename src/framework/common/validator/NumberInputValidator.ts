import {RefObject} from "react";
import IInputValidator from "@/core/validator/IInputValidator";

class NumberInputValidator implements IInputValidator {
    private constructor() {
    }

    public static getValidator(): IInputValidator {
        return new NumberInputValidator()
    }

    onBlur(
        ref: RefObject<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {

    }

    onChangeText(
        ref: RefObject<HTMLInputElement>,
        oldValue: string,
        newValue: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
        setText(newValue)
    }

    onFocus(
        ref: RefObject<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
    }
}

export default NumberInputValidator;
