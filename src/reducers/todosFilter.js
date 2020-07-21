const todosFilter= (state=[], action) => {
    switch(action.type){
        case 'SET_TODOS_FILTER':
            return action.filter
        default:
            return 'all'
    }
}

export default todosFilter;