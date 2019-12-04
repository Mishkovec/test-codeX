import createCanvas from '../createCanvas';
import createLine from '../createLine';
import createBucketFill from '../createBucketFill';
import createRectangle from '../createRectangle';

let canvas = '';
let canvasX = '';
let canvasY = '';
function getCommand (value) { 
    let commanArr = value.split(' ');

    if (commanArr[0] === 'C') {
        canvasX = Number(commanArr[1])+2;
        canvasY = Number(commanArr[2]);
        canvas = createCanvas(canvasX, canvasY);  
       
        return canvas.join('\n');
    }
    if (canvas!=='') {
        if (commanArr[0] === 'L') {
            canvas=createLine(canvas,commanArr[1],commanArr[2],commanArr[3],commanArr[4],canvasX,canvasY);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
        if (commanArr[0] === 'R') {
            canvas=createRectangle(canvas,commanArr[1],commanArr[2],commanArr[3],commanArr[4],canvasX,canvasY);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
        if (commanArr[0] === 'B') {
            canvas=createBucketFill(canvas,commanArr[1],commanArr[2],commanArr[3],canvasX,canvasY);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
    }
    else return 'first create canvas';
    
    return 'incorrect command';
}
export default getCommand;