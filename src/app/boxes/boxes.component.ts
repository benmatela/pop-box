import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Boxes } from "./boxes";

const BOXES: Boxes[] = [
    { id: 1, name: "A", src: "", points: 0 },
    { id: 2, name: "B", src: "", points: 0 },
    { id: 3, name: "C", src: "", points: 0 },
    { id: 4, name: "D", src: "", points: 0 },
    { id: 5, name: "E", src: "", points: 0 },
    { id: 6, name: "F", src: "", points: 0 },
    { id: 7, name: "G", src: "", points: 0 },
    { id: 8, name: "H", src: "", points: 0 },
    { id: 9, name: "I", src: "", points: 0 },
    { id: 10, name: "J", src: "", points: 0 },
    { id: 11, name: "K", src: "", points: 0 },
    { id: 12, name: "L", src: "", points: 0 },
    { id: 13, name: "M", src: "", points: 0 },
    { id: 14, name: "N", src: "", points: 0 },
    { id: 15, name: "O", src: "", points: 0 },
    { id: 16, name: "P", src: "", points: 0 },
    { id: 17, name: "Q", src: "", points: 0 },
    { id: 18, name: "R", src: "", points: 0 },
    { id: 19, name: "S", src: "", points: 0 },
    { id: 20, name: "T", src: "", points: 0 },
    { id: 21, name: "U", src: "", points: 0 },
    { id: 22, name: "V", src: "", points: 0 },
    { id: 23, name: "W", src: "", points: 0 },
    { id: 24, name: "X", src: "", points: 0 },
    { id: 25, name: "Y", src: "", points: 0 },
    { id: 26, name: "Z", src: "", points: 0 },
    { id: 27, name: "1", src: "", points: 0 },
    { id: 28, name: "2", src: "", points: 0 },
    { id: 29, name: "3", src: "", points: 0 },
    { id: 30, name: "4", src: "", points: 0 },
    { id: 31, name: "5", src: "", points: 0 },
    { id: 32, name: "6", src: "", points: 0 },
    { id: 33, name: "7", src: "", points: 0 },
    { id: 34, name: "8", src: "", points: 0 },
    { id: 35, name: "9", src: "", points: 0 },
    { id: 36, name: "10", src: "", points: 0 },
]

@Component({
    selector: 'boxes',
    templateUrl: './boxes.component.html'
})

export class BoxesComponent implements OnInit {

    @Output() playerMoves: EventEmitter<number> = new EventEmitter<number>();

    boxesToPop: any[] = [];
    boxes = BOXES.sort(() => Math.random() * 2 - 1);
    selectedBox: any;
    playerMovesCounter: number = 0;

    ngOnInit() {
        this.onReset();
    }

    onReset(): void {
        this.boxesToPop = [];
        for (var i = 0; i < 3; i++) {
            let randomBox = this.boxes[Math.floor(Math.random() * this.boxes.length - 1) + 1];
            this.boxesToPop.push(randomBox);
        }
    }

    onClickedBox(selectedItem: any): void {
        this.selectedBox = selectedItem;
        this.playerMoves.emit(this.playerMovesCounter + 1);
        this.boxesToPop.forEach(element => {
            if (element.id === this.selectedBox.id) {
                this.boxesToPop.splice(this.boxesToPop.indexOf(this.selectedBox), 1);
            }
        })
        if (this.boxesToPop.length === 0) {
            this.onReset();
        }
    }
}