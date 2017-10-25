export default pageChanger() = (state, action) => {
    if (action.type === 'firstInterruption') {
        return 'firstInterruption'
    } else if (action.type === 'secondInterruption') {
        return 'secondInterruption'
    } else if (action.type === 'bothInterruption') {
        return 'bothInterruption'
    } else if (action.type === 'multiInterruptions') {
        return 'multiInterruptions'
    }
}

expect(pageChanger('', {type: 'firstInterruption'})).toEqual(1);