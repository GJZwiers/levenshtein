/**
 * Calculates the Levenshtein edit distance or number of changes
 * required to turn one string into the other.
 */
export class EditDistance {
    private grid: number[][] = [];

    constructor(private source: string, private target: string) {}

    calculateDistance(): number {
        this.addSourceAsRows();
        this.addTargetAsColumns();

        for (let j = 1; j <= this.target.length; ++j) {
            for (let i = 1; i <= this.source.length; ++i) {
                this.grid[i][j] = this.determineCellValue(i, j);
            }
        }
        return this.grid[this.source.length][this.target.length];
    }

    private addSourceAsRows(): void {
        for (let i = 0; i <= this.source.length; ++i) {
            this.grid[i] = [i];
        }
    }

    private addTargetAsColumns(): void {
        for (let i = 0; i <= this.target.length; ++i) {
            this.grid[0][i] = i;
        }
    }

    private determineCellValue(i: number, j: number) {
        let currentCell = this.grid[i][j];
        if (this.source[i - 1] === this.target[j - 1]) {
            currentCell = this.grid[i - 1][j - 1];
        }
        else {
            currentCell = Math.min.apply(Math, [
                this.grid[i - 1][j] + 1,    // deletion
                this.grid[i][j - 1] + 1,    // insertion
                this.grid[i - 1][j - 1] + 1 // substitution
            ]);
        }
        return currentCell;
    }
}

/**
 * Returns the edit distance between strings a and b.
 * @param a
 * @param b 
 */
export function lshtein(a: string, b: string): number {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Error('Levenshtein function arguments must be of type string');
    }
    return new EditDistance(a,b).calculateDistance();
}

/**
 * Returns the similarity of two strings as a percentage.
 * @param editDistance - a previously calculated edit distance for two strings
 * @param len - the length of one of the two strings 
 */
export function toPercent(editDistance: number, len: number): number {
    if (typeof editDistance !== 'number') {
        throw new Error('Edit distance must be of type number');
    }
    if (typeof len !== 'number') {
        throw new Error('len must be a string length of type number');
    }
    return (editDistance / len) * 100;
}
