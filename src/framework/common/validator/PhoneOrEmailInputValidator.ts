import {RefObject} from "react";
import IInputValidator from "@/core/validator/IInputValidator";
import Validation from "@/framework/common/static/Validation";

class PhoneOrEmailInputValidator implements IInputValidator {
    private constructor() {
    }

    public static getValidator(): IInputValidator {
        return new PhoneOrEmailInputValidator()
    }

    onBlur(
        ref: RefObject<HTMLInputElement>,
        text: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
        // if (!Validation.getEmailRegex().test(text) && setError) {
        //     setError(true)
        // }
    }

    onChangeText(
        ref: RefObject<HTMLInputElement>,
        oldValue: string,
        newValue: string,
        setText: (value: string) => void,
        setError?: (value: boolean) => void
    ): void {
        if (Validation.getAlphaNumericWithSignRegex().test(newValue)) {
            setText(newValue)
        }
        if (setError) {
            setError(false)
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

export default PhoneOrEmailInputValidator;
