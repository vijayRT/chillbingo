// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.1
// 

import { Schema, type, ArraySchema, MapSchema, DataChange } from "@colyseus/schema";


export class BingoCell extends Schema {
    @type("string") public displayedValue!: string;
    @type("boolean") public struck!: boolean;
}
