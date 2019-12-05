import bucketFillX from "../buckerFillX";

function bucketFillY (canvas,X,Y,CX,CY,color,ctx) {
    for(let k=Y;k<=CY;k++) {
        let p1 = canvas[k].split('');
        if (p1[X]==ctx) {
            for (let c=Y; c>0;c--) {
                let p2 = canvas[c].split('');
                if (p2[X]==ctx)
                    {canvas[c]=bucketFillX(p2,X,Y,CX,color,ctx)
                }
                else {
                    break;
                } 
            } 
            canvas[k]=bucketFillX(p1,X,Y,CX,color,ctx)
        }
        else {
            break;
        } 
    }
    return canvas;
}
export default bucketFillY;