class AppError extends Error {
  private constructor(message: string) {
    super(message);
  }

  public static create(errorMessage: string) {
    return new AppError(errorMessage);
  }
}

export default AppError;