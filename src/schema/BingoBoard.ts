// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.1
// 

import { Schema, type, ArraySchema, MapSchema, DataChange } from "@colyseus/schema";
import { BingoCell } from "./BingoCell"

export class BingoBoard extends Schema {
    @type([ "string" ]) public numbers!: ArraySchema<string> = new ArraySchema<string>();
    @type([ BingoCell ]) public cells!: ArraySchema<BingoCell> = new ArraySchema<BingoCell>();
    @type([ "boolean" ]) public bingoStatus!: ArraySchema<boolean> = new ArraySchema<boolean>();
}
