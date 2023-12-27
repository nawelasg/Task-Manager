class CustomeAPIError extends Error {
    constuctor{ message,statusCode}{
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg,statusCode) =>{
    return new CustomeAPIError(msg,statusCode)
}

module.exports = { CustomAPIError, createCustomError }