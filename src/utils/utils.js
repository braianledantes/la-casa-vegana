export function compactString(string, maxLength) {  
    if (string.length > maxLength) {
        return string.slice(0, maxLength - 3) + "..."
    }

    return string
}