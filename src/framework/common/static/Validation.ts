class Validation {
    private static emailRegex: RegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    private static alphaNumericWithSignRegex: RegExp = /^[a-zA-Z0-9@_.-]*$/;

    private static alphaNumericRegex: RegExp = /^[a-zA-Z0-9]*$/;

    public static getEmailRegex = (): RegExp => Validation.emailRegex;

    public static getAlphaNumericWithSignRegex = (): RegExp => Validation.alphaNumericWithSignRegex;

    public static getAlphaNumericRegex = (): RegExp => Validation.alphaNumericRegex;
}

export default Validation;
