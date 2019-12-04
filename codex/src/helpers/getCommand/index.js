import createCanvas from '../createCanvas';
import createLine from '../createLine';
import createBucketFill from '../createBucketFill';
import createRectangle from '../createRectangle';

let canvas = '';
function getCommand (value) { 
    let commanArr = value.split(' ');

    if (commanArr[0] === 'C') {
        canvas = createCanvas(commanArr[1], commanArr[2]);        
        return canvas.join('\n');
    }
    if (canvas!=='') {
        if (commanArr[0] === 'L') {
            canvas=createLine(canvas,commanArr[1],commanArr[2],commanArr[3],commanArr[4]);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
        if (commanArr[0] === 'R') {
            canvas=createRectangle(canvas,commanArr[1],commanArr[2],commanArr[3],commanArr[4]);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
        if (commanArr[0] === 'B') {
            canvas=createBucketFill(canvas,commanArr[1],commanArr[2],commanArr[3]);
            if(typeof canvas == 'string') {return canvas}
            return canvas.join('\n');
        }
    }
    else return 'first create canvas';
    
    return 'incorrect command';
}
export default getCommand;