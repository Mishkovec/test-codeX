import createLineX from '../createLineX';
import createLineY from '../createLineY';

function createRectangle (canvas, x1, y1, x2, y2,cnvX,cnvY) { 
    
    let X1 = Number(x1);
    let Y1 = Number(y1);
    let X2 = Number(x2);
    let Y2 = Number(y2);
    let CX = Number(cnvX);
    let CY = Number(cnvY);

    if (X1==0 || X2==0 || Y1==0 || Y2==0) {
        return `position can't be 0`;
    }
    // if (X1>=CX || X2>=CX || Y1>=CY || Y2>=CY) {
    //     return `position can't be equally canvas size`;
    // }
    canvas = createLineX (canvas, X1, Y1, X2, Y2);
    canvas = createLineX (canvas, X1, Y2, X2, Y1);
    canvas = createLineY (canvas, X1, Y1, X2, Y2);
    canvas = createLineY (canvas, X2, Y1, X1, Y2);
    return canvas;
    
}
export default createRectangle;