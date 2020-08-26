export const successResponse = <T>(api: T) => {
    return {
        "type": "success",
        "result": api
    }
};

export const errorResponse = <T>(api: T) => {
    return {
        "type": "error",
        "messageError": api
    }
};