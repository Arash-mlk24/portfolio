class UserLoginRequestDto {
    private constructor(
        public email: string,
        public password: string
    ) {
    }

    public static create(email: string, password: string) {
        return new UserLoginRequestDto(email, password)
    }
}

export default UserLoginRequestDto
