export declare class EditDistance {
    private grid;
    private source;
    private target;
    constructor(s: string, t: string);
    calcEditDist(): number;
    private _addSourceAsRows;
    private _addTargetAsColumns;
    private _determineCellValue;
}
export declare function lshtein(a: string, b: string): number;
export declare function sim(eddist: number, strlen: number): number;
