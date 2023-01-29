const extractFirstAndLastLetters = (param: string): string => {
    if (!param) {
        throw new Error('Error: input string cannot be falsy');
    }

    const words = param.split(' ');
    if (words.length === 0) {
        return '';
    }

    const firstLetter = words[0][0];
    const lastLetter = words[words.length - 1][0];

    return `${firstLetter}${lastLetter}`.toUpperCase();
};