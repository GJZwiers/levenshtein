"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPercent = exports.lshtein = exports.EditDistance = void 0;
/**
 * Calculates the edit distance (number of changes
 * required to turn one string into the other).
 * @constructor
 * @param {string} source - The first string in the comparison
 * @param {string} target - The second string in the comparison
 */
class EditDistanceCalculator {
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
                this.grid[i][j] = this.calculateCellValue(i, j);
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
    calculateCellValue(i, j) {
        let cell = this.grid[i][j];
        if (this.source[i - 1] === this.target[j - 1]) {
            cell = this.grid[i - 1][j - 1];
        }
        else {
            cell = Math.min.apply(Math, [
                this.grid[i - 1][j] + 1,
                this.grid[i][j - 1] + 1,
                this.grid[i - 1][j - 1] + 1 // substitution
            ]);
        }
        return cell;
    }
}
class EditDistance {
    constructor(distCalculator) {
        this.distCalculator = distCalculator;
    }
    calculate() {
        return this.distCalculator.calculateDistance();
    }
}
exports.EditDistance = EditDistance;
/**
 * Returns the edit distance between strings a and b.
 * @param {string} a - The first string to be compared
 * @param {string} b - The second string to be compared
 */
function lshtein(a, b) {
    if (typeof a !== 'string') {
        throw new Error('Parameter a must be of type string');
    }
    if (typeof b !== 'string') {
        throw new Error('Parameter b must be of type string');
    }
    return new EditDistance(new EditDistanceCalculator(a, b))
        .calculate();
}
exports.lshtein = lshtein;
/**
 * Returns the similarity of two strings as a percentage.
 * @param {number} eddist - a previously calculated edit distance for two strings
 * @param {number} len - the length of one of the two strings
 */
function toPercent(eddist, len) {
    if (typeof eddist !== 'number') {
        throw new Error('Parameter editDistance must be of type number');
    }
    if (typeof len !== 'number') {
        throw new Error('Parameter len must be of type number');
    }
    return (eddist / len) * 100;
}
exports.toPercent = toPercent;
