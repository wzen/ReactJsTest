let nextTodoId = 0;

// TODO追加
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

// TODO完了
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

// TODOをフィルタリング
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};