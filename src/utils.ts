export function capitalize(text: string) {
    return !text ? '' : `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
}

export function lineBreaks(count: number) {
    return [...Array(count)].map(() => '\n').join();
}

export function emptyFields(count: number) {
    return [...Array(count)].map(() => ({name: '', value: '', inline: false}));
}
