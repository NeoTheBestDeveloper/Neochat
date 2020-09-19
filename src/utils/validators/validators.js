export const maxLengthCreater = maxLength => value => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined;
    }
}

export const required = value => {
    if (value) {
        if (value.trim()) {
            return undefined;
        } else {
            return "Field is required"
        }
    } else {
        return "Field is required"
    }
}