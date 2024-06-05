import {RefObject} from "react";
import IInputValidator from "@/core/validator/IInputValidator";
import Validation from "@/framework/common/static/Validation";

class PasswordInputValidator implements IInputValidator {
    private constructor() {
    }

    public static getValidator(): IInputValidator {
        return new PasswordInputValidator()
    }

    onBlur(
        ref: RefObject<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
        if (text.length < 1 && setError) {
            setError(true)
        }
    }

    onChangeText(
        ref: RefObject<HTMLInputElement>,
        oldValue: string,
        newValue: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
        if (Validation.getAlphaNumericRegex().test(newValue)) {
            setText(newValue);
        }
        if (setError) {
            setError(false);
        }
    }

    onFocus(
        ref: RefObject<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
    }
}

export default PasswordInputValidator;
