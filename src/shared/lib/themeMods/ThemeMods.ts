export function themeMods(cls:object, arr:string[]):Record<string, boolean | string> {
    if (!arr) return {};
    return arr.reduce((acc:Record<string, boolean | string>, theme:string) => {
        // @ts-ignore
        acc[cls[theme]] = true;
        return acc;
    }, {});
}
