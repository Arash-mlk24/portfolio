interface ApiResponse<T> {
    hasError: boolean,
    data: T,
    message: string
}

export default ApiResponse;
