function createLineX (canvas, X1, Y1, X2, Y2) { 
    
    let line = canvas[Y1].split('');
    for (let i=X1; i<=X2;i++) {
        line[i]='x';
    }
    canvas[Y1]=line.join('')
    return canvas;
    
}
export default createLineX;