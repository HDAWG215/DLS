const calculateScoreData = [
    {
        data: {
            lengthOfGame: 50, // Initial Game Length
            fTLostByInterruption: 12.5, // First Team Lost Due to interruption
            firstTeamTotal: 180, // First Team Total
            sTLostByInterruption: 0, // Second Team Lost Due to Interruption
            sTInningsLength: 40, // Second Team Innings Length Before Play
            sTLengthAfterInts: 40, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 0, // Second Team Wickets Gone
            oversGoneAtStage: 40 // Overs Gone At Particular Stage
        },
        expected: 184,
        msg: "Can calculate correct score if there is a first innings interruption"
    },
    {
        data: {
            lengthOfGame: 45, // Initial Game Length
            fTLostByInterruption: 0, // First Team Lost Due to interruption
            firstTeamTotal: 212, // First Team Total
            sTLostByInterruption: 0, // Second Team Lost Due to Interruption
            sTInningsLength: 35, // Second Team Innings Length Before Play
            sTLengthAfterInts: 35, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 0, // Second Team Wickets Gone
            oversGoneAtStage: 35 // Overs Gone At Particular Stage
        },
        expected: 184,
        msg: "Can calculate correct score if second team are delayed"
    },
    {
        data: {
            lengthOfGame: 50, // Initial Game Length
            fTLostByInterruption: 0, // First Team Lost Due to interruption
            firstTeamTotal: 250, // First Team Total
            sTLostByInterruption: 13.2, // Second Team Lost Due to Interruption
            sTInningsLength: 50, // Second Team Innings Length Before Play
            sTLengthAfterInts: 40, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 1, // Second Team Wickets Gone
            oversGoneAtStage: 40 // Overs Gone At Particular Stage
        },
        expected: 217,
        msg: "Can calculate correct score if second team are interrupted"
    },
    {
        data: {
            lengthOfGame: 50, // Initial Game Length
            fTLostByInterruption: 0, // First Team Lost Due to interruption
            firstTeamTotal: 250, // First Team Total
            sTLostByInterruption: 36.2, // Second Team Lost Due to Interruption
            sTInningsLength: 50, // Second Team Innings Length Before Play
            sTLengthAfterInts: 30.2, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 3, // Second Team Wickets Gone
            oversGoneAtStage: 30.2 // Overs Gone At Particular Stage
        },
        expected: 159,
        msg: "Can calculate correct score if second team are interrupted more than once"
    },
    {
        data: {
            lengthOfGame: 50, // Initial Game Length
            fTLostByInterruption: 6.9, // First Team Lost Due to interruption
            firstTeamTotal: 226, // First Team Total
            sTLostByInterruption: 0, // Second Team Lost Due to Interruption
            sTInningsLength: 33, // Second Team Innings Length Before Play
            sTLengthAfterInts: 33, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 0, // Second Team Wickets Gone
            oversGoneAtStage: 33 // Overs Gone At Particular Stage
        },
        expected: 193,
        msg: "Can calculate correct score if termination of T1s innings and delay to team 2"
    },
    {
        data: {
            lengthOfGame: 50, // Initial Game Length
            fTLostByInterruption: 6.9, // First Team Lost Due to interruption
            firstTeamTotal: 226, // First Team Total
            sTLostByInterruption: 15.1, // Second Team Lost Due to Interruption
            sTInningsLength: 33, // Second Team Innings Length Before Play
            sTLengthAfterInts: 28, // Second Team Innings Lengths After Interruptions
            secondTeamCurrentWicketsLost: 0, // Second Team Wickets Gone
            oversGoneAtStage: 28 // Overs Gone At Particular Stage
        },
        expected: 157,
        msg: "Can calculate correct score if termination of T1s innings with delay and interruption to team 2"
    }
]

export default calculateScoreData;