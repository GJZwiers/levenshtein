"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates the Levenshtein edit distance or number of changes
 * required to turn one string into the other.
 */
class EditDistance {
    constructor(source, target) {
        this.source = source;
        this.target = target;
        this.grid = [];
    }
    calculateDistance() {
        this.addSourceAsRows();
        this.addTargetAsColumns();
        for (let j = 1; j <= this.target.length; ++j) {
            for (let i = 1; i <= this.source.length; ++i) {
                this.grid[i][j] = this.determineCellValue(i, j);
            }
        }
        return this.grid[this.source.length][this.target.length];
    }
    addSourceAsRows() {
        for (let i = 0; i <= this.source.length; ++i) {
            this.grid[i] = [i];
        }
    }
    addTargetAsColumns() {
        for (let i = 0; i <= this.target.length; ++i) {
            this.grid[0][i] = i;
        }
    }
    determineCellValue(i, j) {
        let currentCell = this.grid[i][j];
        if (this.source[i - 1] === this.target[j - 1]) {
            currentCell = this.grid[i - 1][j - 1];
        }
        else {
            currentCell = Math.min.apply(Math, [
                this.grid[i - 1][j] + 1,
                this.grid[i][j - 1] + 1,
                this.grid[i - 1][j - 1] + 1 // substitution
            ]);
        }
        return currentCell;
    }
}
exports.EditDistance = EditDistance;
/**
 * Returns the edit distance between strings a and b.
 * @param a
 * @param b
 */
function lshtein(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Error('Levenshtein function arguments must be of type string');
    }
    return new EditDistance(a, b).calculateDistance();
}
exports.lshtein = lshtein;
/**
 * Returns the similarity of two strings as a percentage.
 * @param editDistance - a previously calculated edit distance for two strings
 * @param len - the length of one of the two strings
 */
function toPercent(editDistance, len) {
    if (typeof editDistance !== 'number') {
        throw new Error('Edit distance must be of type number');
    }
    if (typeof len !== 'number') {
        throw new Error('len must be a string length of type number');
    }
    return (editDistance / len) * 100;
}
exports.toPercent = toPercent;
