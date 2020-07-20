const todosFilter= (state=[], action) => {
    switch(action.type){
        case 'SET_TODOS_FILTER':
            console.log("filter")
            return action.filter
        default:
            return 'all'
    }
}

export default todosFilter;