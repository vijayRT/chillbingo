import React from 'react';
import { StyleSheet, View } from 'react-native';
import BingoButton from "./BingoButton"


export default function BingoBoard() {

    let bingoSize = 25;
    let rowLoop: Array<JSX.Element> = [];
    let gridLoop: Array<JSX.Element> = [];

    function renderBingoGrid() {
        let bingoArray: Array<string> = []
        for (let bingoArrayIterator = 0; bingoArrayIterator < bingoSize; ++bingoArrayIterator) {
            bingoArray[bingoArrayIterator] = (bingoArrayIterator + 1).toString();
        }

        let tmp, current, top = bingoArray.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = bingoArray[current];
            bingoArray[current] = bingoArray[top];
            bingoArray[top] = tmp.toString();
        }

        for (let outerIterator = 0; outerIterator < 5; outerIterator++) {
            for (let innerIterator = outerIterator * 5; innerIterator < (outerIterator * 5) + 5; innerIterator++) {
                rowLoop.push(
                    <BingoButton displayedValue={bingoArray[innerIterator]}></BingoButton>
                )
            }
            gridLoop.push(

                <View style={styles.row}>
                    {rowLoop}

                </View>
            )
            rowLoop = [];
        }
        return (
            <View style={styles.bingoBoard}>
                {gridLoop}
            </View>
        )
    }
    return (
        <View style={styles.bingoBoard}>
            {renderBingoGrid()}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bingoBoard: {
        flex: 3,
        justifyContent: 'space-evenly',
        margin: 5,

    },


});