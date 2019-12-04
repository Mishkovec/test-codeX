function createLine (canvas, x1, y1, x2, y2) { 
    let X1 = Number(x1);
    let Y1 = Number(y1);
    let X2 = Number(x2);
    let Y2 = Number(y2);

    if (X1==0 || X2==0 || Y1==0 || Y2==0) {
        return `position can't be 0`;
    }

    if (Y1-Y2 == 0 ) {
        let line = canvas[Y1].split('');
        for (let i=X1; i<=X2;i++) {
            line[i]='x';
        }
        canvas[Y1]=line.join('')
        return canvas;
    }
    else {
        if (X1-X2 !== 0 ) {return `you can't drawing diagonal line`;}
        else {
            // console.log(X1,X2)
            for (let j=Y1; j<=Y2;j++) {
                let vertical = canvas[j].split('');
                // console.log(vertical);
                vertical[X1] ='x';
                // console.log(vertical);
                canvas[j] = vertical.join('');
                
            }
            return canvas;
        }
    }

  
   
}
export default createLine;