const OversPlusBalls = (xOvers, balls) => {
    const xInt = Math.floor(xOvers); 
    const xDec = Math.round((xOvers - xInt) * 10); 

    const totalXBall = (xInt * 6) + xDec;

    const addition = totalXBall + balls;

    const intOvers = Math.floor(addition / 6);
    const decOvers = (addition % 6) / 10;

    return intOvers + decOvers;
}

export default OversPlusBalls;