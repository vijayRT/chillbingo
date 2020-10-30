// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.1
// 

import { Schema, type, ArraySchema, MapSchema, DataChange } from "@colyseus/schema";
import { BingoBoard } from "./BingoBoard"

export class Player extends Schema {
    @type("string") public id!: string;
    @type("string") public email!: string;
    @type("string") public name!: string;
    @type("string") public avatar!: string;
    @type("int16") public wins!: number;
    @type({ map: BingoBoard }) public board!: MapSchema<BingoBoard> = new MapSchema<BingoBoard>();
}
