"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditDistance = /** @class */ (function () {
    function EditDistance(s, t) {
        this.grid = [];
        this.source = s;
        this.target = t;
    }
    EditDistance.prototype.calcEditDist = function () {
        this._addSourceAsRows();
        this._addTargetAsColumns();
        for (var j = 1; j <= this.target.length; ++j)
            for (var i = 1; i <= this.source.length; ++i)
                this.grid[i][j] = this._determineCellValue(i, j);
        return this.grid[this.source.length][this.target.length];
    };
    EditDistance.prototype._addSourceAsRows = function () {
        for (var i = 0; i <= this.source.length; ++i)
            this.grid[i] = [i];
    };
    EditDistance.prototype._addTargetAsColumns = function () {
        for (var i = 0; i <= this.target.length; ++i)
            this.grid[0][i] = i;
    };
    EditDistance.prototype._determineCellValue = function (i, j) {
        var currentCell = this.grid[i][j];
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
    };
    return EditDistance;
}());
exports.EditDistance = EditDistance;
function lstein(s, t) {
    return new EditDistance(s, t).calcEditDist();
}
