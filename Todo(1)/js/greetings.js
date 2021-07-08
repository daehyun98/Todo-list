const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const ck = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const quote_list = document.querySelector("#quote");
const wether_list = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username} 님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  ck.classList.remove(HIDDEN_CLASSNAME);   //시계
  todoForm.classList.remove(HIDDEN_CLASSNAME);  //투두리스트
  // todoList.classList.remove(HIDDEN_CLASSNAME);
  // quote_list.classList.remove(HIDDEN_CLASSNAME);  //명언
  wether_list.classList.remove(HIDDEN_CLASSNAME);    //날씨

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
