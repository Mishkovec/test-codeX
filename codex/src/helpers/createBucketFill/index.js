function createBucketFill (canvas, x, y, color,cnvX,cnvY) { 
    let X = Number(x);
    let Y = Number(y);
    let CX = Number(cnvX);
    let CY = Number(cnvY);
    
    let point = canvas[Y].split('');

    if (point[X]=='x') {
        point[X]='A'
        canvas[Y]=point.join('')
    }
    if (point[X]==' ') {
        point[X]=color
        canvas[Y]=point.join('')
    } 
    
    return canvas;
}
export default createBucketFill;