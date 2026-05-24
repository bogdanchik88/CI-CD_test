export const randomString = (length: number = 8) => {
    return Math.random().toString(36).substring(2, length + 2)
}

export const randomEmail = () => {
    return `${randomString()}@email.com`
}

export const wrongEmail = () => {
    return `${randomString()}wrong`
}