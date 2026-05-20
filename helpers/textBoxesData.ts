export const randomString = (length: number = 8) => {
    return Math.random().toString(36).substring(2, length + 2)
}

export const randomEmail = (length: number = 8) => {
    return `${randomString()}@email.com`
}

export const wrongEmail = (length: number = 8) => {
    return `${randomString()}wrong`
}