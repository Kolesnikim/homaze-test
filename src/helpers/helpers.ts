
export function stringSliceHelper(str = '', amount: number): string {
    if (str === "") return 'Customer';
    
    return str.length > 30 ? `${str.slice(0, amount)}...` : str;
}