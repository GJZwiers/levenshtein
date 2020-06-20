/**
 * Calculates the Levenshtein edit distance or number of changes
 * required to turn one string into the other.
 */
export declare class EditDistance {
    private source;
    private target;
    private grid;
    constructor(source: string, target: string);
    calculateDistance(): number;
    private addSourceAsRows;
    private addTargetAsColumns;
    private determineCellValue;
}
/**
 * Returns the edit distance between strings a and b.
 * @param a
 * @param b
 */
export declare function lshtein(a: string, b: string): number;
/**
 * Returns the similarity of two strings as a percentage.
 * @param editDistance - a previously calculated edit distance for two strings
 * @param len - the length of one of the two strings
 */
export declare function toPercent(editDistance: number, len: number): number;
