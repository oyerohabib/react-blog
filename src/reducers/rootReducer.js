const initState = {
    posts : [
        {id: '1', title: 'play mini games', body: 'I love playing games after a hard day work'},
        {id: '2', title: 'program using python', body: 'I will multitask myself into programming and studies'},
        {id: '3', title: 'have a nice time with family', body: 'I love having nice time with my family at the beach'}
    ] 
}

const rootReducer = (state=initState, action) => {
    return state;
}

export default rootReducer