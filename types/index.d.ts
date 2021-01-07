interface StringDistanceCalculation {
    calculateDistance(): number;
}
declare class EditDistance {
    private distCalculator;
    constructor(distCalculator: StringDistanceCalculation);
    calculate(): number;
}
/**
 * Returns the edit distance between strings a and b.
 * @param {string} a - The first string to be compared
 * @param {string} b - The second string to be compared
 */
declare function lshtein(a: string, b: string): number;
/**
 * Returns the similarity of two strings as a percentage.
 * @param {number} eddist - a previously calculated edit distance for two strings
 * @param {number} len - the length of one of the two strings
 */
declare function toPercent(eddist: number, len: number): number;
export { EditDistance, lshtein, toPercent };
