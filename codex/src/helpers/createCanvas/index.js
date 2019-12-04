function createCanvas (x, y) { 
    const canvArrX =[];
    const canvArrY =[];
    const canvas = [];
    for(let i=0;i<x;i++) {
        canvArrX.push('-')
    }
    for(let j=0;j<x;j++) {
        if(j==0 || j ==x-1){
            canvArrY.push('|')
        }
        else {canvArrY.push(' ')}            
    }
    let totalY = Number(y)+2;
    for(let k=0;k<totalY;k++) {
        if(k==0 || k ==totalY-1){
            canvas.push(canvArrX.join(''))
        }
        else {canvas.push(canvArrY.join(''))}         
    }
    return canvas;
}
export default createCanvas;