/**
 * to kanji format
 * e.g. 1234兆5678億9012万3456
 * @param n
 */
export const toKanjiDivided = (n: number): string => {
    const nStr = n.toString();

    const result = ['', '万', '億', '兆'].reduce((acc: string[], cur, i) => {
        const div = nStr.substring(nStr.length - 4 * i - 4, nStr.length - 4 * i);
        const numDiv = Number(div);

        if (numDiv > 0) {
            acc.unshift(`${numDiv}${cur}`);
        }

        return acc;
    }, []);

    return result.join('');
};
