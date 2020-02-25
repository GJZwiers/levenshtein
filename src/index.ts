export class EditDistance {
    private grid: number[][] = [];
    private source: string;
    private target: string;

    constructor(s: string, t: string) {
        this.source = s;
        this.target = t;
    }

    calcEditDist(): number {
        this._addSourceAsRows();
        this._addTargetAsColumns();
        for (let j = 1; j <= this.target.length; ++j)
            for (let i = 1; i <= this.source.length; ++i)
                this.grid[i][j] = this._determineCellValue(i, j);
        return this.grid[this.source.length][this.target.length];
    }

    private _addSourceAsRows() {
        for (let i = 0; i <= this.source.length; ++i)
            this.grid[i] = [i];
    }

    private _addTargetAsColumns() {
        for (let i = 0; i <= this.target.length; ++i)
            this.grid[0][i] = i;
    }

    private _determineCellValue(i: number, j: number) {
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

function lstein(s: string, t: string) {
    return new EditDistance(s, t).calcEditDist();
}