function createLineY (canvas, X1, Y1, X2, Y2) { 
    
    for (let j=Y1; j<=Y2;j++) {
        let vertical = canvas[j].split('');
        vertical[X1] ='x';
        canvas[j] = vertical.join('');
        
    }
    return canvas;
    
}
export default createLineY;