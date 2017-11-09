export default SubtractOvers = (xOvers, yOvers) => {
    const xInt = Math.floor(xOvers);
    const yInt = Math.floor(yOvers);
    const xDec = Math.round((xOvers - xInt) * 10);
    const yDec = Math.round((yOvers - yInt) * 10);

    const totalXBalls = (xInt * 6) + xDec;
    const totalYBalls = (yInt * 6) + yDec;

    const subtraction = totalXBalls - totalYBalls;
    
    const intOvers = Math.floor((subtraction)/6);
    const decOvers = (subtraction % 6) / 10;

    return intOvers + decOvers;
}