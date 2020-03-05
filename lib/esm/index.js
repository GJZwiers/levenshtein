export class EditDistance {
    constructor(s, t) {
        this.grid = [];
        this.source = s;
        this.target = t;
    }
    calcEditDist() {
        this._addSourceAsRows();
        this._addTargetAsColumns();
        for (let j = 1; j <= this.target.length; ++j)
            for (let i = 1; i <= this.source.length; ++i)
                this.grid[i][j] = this._determineCellValue(i, j);
        return this.grid[this.source.length][this.target.length];
    }
    _addSourceAsRows() {
        for (let i = 0; i <= this.source.length; ++i)
            this.grid[i] = [i];
    }
    _addTargetAsColumns() {
        for (let i = 0; i <= this.target.length; ++i)
            this.grid[0][i] = i;
    }
    _determineCellValue(i, j) {
        let currentCell = this.grid[i][j];
        if (this.source[i - 1] === this.target[j - 1]) {
            currentCell = this.grid[i - 1][j - 1];
        }
        else {
            currentCell = Math.min.apply(Math, [
                this.grid[i - 1][j] + 1,
                this.grid[i][j - 1] + 1,
                this.grid[i - 1][j - 1] + 1
            ]);
        }
        return currentCell;
    }
}
export function lshtein(a, b) {
    return new EditDistance(a, b).calcEditDist();
}
export function sim(eddist, strlen) {
    return (eddist / strlen) * 100;
}
