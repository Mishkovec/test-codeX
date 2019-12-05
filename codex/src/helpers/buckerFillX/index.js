function bucketFillX (point,X,Y,CX, color, ctx) {
    for (let i=X; i<CX;i++) {
        if (point[i]==ctx) {
            for (let j=X; j>0;j--) {
                if (point[j]==ctx)
                    {point[j]=color}
                else {
                    break;
                }    
            }                
            point[i]=color                
        }
        else {
            break;
        }    
    }        
    return point.join('');
    
}
export default bucketFillX;