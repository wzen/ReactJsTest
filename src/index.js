import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisiblilityFilter } from '../actions/index';
import { todoApp } from '../reducers/index.js';

let store = createStore(todoApp);

// TODO追加
var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementsByTagName('input')[0];
var button = addTodoElem.getElementsByTagName('button')[0];
button.addEndEventListener('click', () => {
  var todoText = input.value;
  store.dispatch(addTodo(todoText));
});

// TODO完了
var todoList = document.getElementById('todoList');
var elements = todoList.getElementsByTagName('li');
var listArray = [...elements];
listArray.forEach((v, index) => {
  v.addEventListener('click', e => {
    store.dispatch(toggleTodo(index))
  });
});

// フィルタリング
var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
  v.addEventListener('click', e => {
    var filterText = v.innerHTML;
    store.dispatch(setVisiblilityFilter(filterText));
  });
});