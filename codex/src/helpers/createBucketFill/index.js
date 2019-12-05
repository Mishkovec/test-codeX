import bucketFillY from '../bucketFillY';

function createBucketFill (canvas, x, y, color,cnvX,cnvY) { 
    let X = Number(x);
    let Y = Number(y);
    let CX = Number(cnvX);
    let CY = Number(cnvY);
    
    let point = canvas[Y].split('');

    if (point[X]=='x') {
        // canvas=bucketFillY(canvas,X,Y,CX,CY,color,'x');
        canvas=`x line fill not available`
    }
    //----------------
    if (point[X]!=='x') {
        canvas=bucketFillY(canvas,X,Y,CX,CY,color,' ');        
    } 
    
    return canvas;
}
export default createBucketFill;