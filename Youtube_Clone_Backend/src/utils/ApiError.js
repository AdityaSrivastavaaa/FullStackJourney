class ApiError extends Error {
    constructor(
        statusCode = 500,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.success = false;

        this.errors = Array.isArray(errors) ? errors : [errors];

        // Optional extra data (only if needed)
        this.data = null;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };