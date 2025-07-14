export function capitalize(str: string): string {
    return !str ? '' : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function textDivisor(): string {
    return '\n\n\n\n';
}

export function fieldDivisor(count: number) {
    const divisor = [];

    for (let i = 0; i < count; i++) {
        divisor.push({name: ' ', value: ' ', inline: false});
    }

    return divisor;
}
