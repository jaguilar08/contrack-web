export const getJSONfromLocalStorage = <T>(key: string, defaultValue?: T): T => {
    const keyValue = localStorage.getItem(key);
    return key && keyValue ? JSON.parse(keyValue) : defaultValue;
};
