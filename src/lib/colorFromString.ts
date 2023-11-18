function stringToHashCode(str: string): number {
    let hash = 0;

    if (str.length == 0) {
        return (hash);
    };
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return (hash);
}

export function selectColor(inputString: string, palette: Array<string>): string {
    // Calculate hash code from the input string
    const hashCode = stringToHashCode(inputString);
    // Use the hash code to select an index within the range of colors array
    const colorIndex = Math.abs(hashCode) % palette.length;

    // Return the selected color
    return (palette[colorIndex]);
}
