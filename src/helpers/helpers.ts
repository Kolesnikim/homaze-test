
export function stringSliceHelper(str = ''): string {
    if (str === "") return str;
    
    return str.length > 30 ? `${str.slice(0, 25)}...` : str;
}