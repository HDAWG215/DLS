const AddOvers = (xOvers, yOvers) => {
    const xInt = Math.floor(xOvers);
    const yInt = Math.floor(yOvers);
    const xDec = Math.round((xOvers - xInt) * 10);
    const yDec = Math.round((yOvers - yInt) * 10);

    const totalXBalls = (xInt * 6) + xDec;
    const totalYBalls = (yInt * 6) + yDec;

    const addition = totalXBall + totalYBalls;

    const intOvers = Math.floor(addition/6);
    const decOvers = (addition % 6) / 10;

    return xInt + yInt + decTotal;
}

export default AddOvers;