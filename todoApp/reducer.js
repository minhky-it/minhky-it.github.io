import storage from "./util/storage.js";
const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: ()=> true,
        active: todo => !todo.completed, 
        completed: todo => todo.completed, 
    },
    editIndex: null
}

const actions = {
    add({ todos }, title){
        if(title){
            todos.push({title, completed: false});
        }
    },
    toggle({todos}, index){
        const todo = todos[index];
        todo.completed = !todo.completed;
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => {
            todo.completed = completed;
        });
    },
    destroy({todos}, index){
        todos.splice(index, 1);
    },
    switch(state, filter){
        state.filter = filter
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active);
    },
    startEdit(state, index){
        state.editIndex = index;
    },
    endEdit(state, title){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title = title;
                state.editIndex = null;
            }else{
                this.destroy(state, state.editIndex);
            }
        }
    },
    cancelEdit(state){
        state.editIndex = null;
    }
}
export default function reducer(state = init, action, args){
        actions[action] && actions[action](state, ...args);
        storage.set(state.todos);
        return state;
}