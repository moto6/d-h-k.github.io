//Document 객체는 웹 페이지 그 자체를 의미합니다.
//웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때는 반드시 Document 객체부터 시작
/*
const toDoForm = document.querySelector("js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
*/
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
  


// document.querySelector의미
// 출처 : https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
// 제공한 선택자/선택자 뭉치와 일치하는 내 첫번쨰 Element를 반환, 없으면 NULL
// 예시 : HTML 문서에서 "myclass"라는 클래스를 사용하는 첫 번째 요소 반환
// var el = document = document.querySelector(".myclass");



const TODOS_LS = "toDos";
let toDos = [];
//toDos 라는 변수, var 대신에 let 씀 기억나제?


//이 필터는 마치 forEach에서 Function을 실행하는것과 같이 각각의 item을 실행하는거야
//function filterFn(toDo) {
    //필터는 어레이 하나 만듬
    //함수가 true를 리턴하는
  //  return toDo.id === 1 //아이디가 1이면!
//}



function deleteToDo(event) {
    const btn = event.target;
    // target은 삭제버튼을 눌렀는데 이게 부모객체가 뭔지, 어떤 ToDo Item의 삭제 버튼인지 알아내는거임

    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


// ToDo 를 추가하는 함수
function paintToDo(text) {

    const li = document.createElement("li");
    //
    const delBtn = document.createElement("button");
    //삭제버튼 만들기
    const span = document.createElement("span");
    //
    const newId = toDos.length + 1;
    
    
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo);
    // 이벤트 리스너를 추가하는데 클릭 이벤트가 발생하면
    // deleteToDo 라는 함수를 호출함


    span.innerText= text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);
    //차일드 추가, 
    const toDoObj = {
        text : text,
        id : newId
    };

    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    // preventDefault : 이벤트를 취소할 수 있는 경우
    // 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
    // https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault

    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // paintToDo() 함수는 투두 아이템 만드는거지

    toDoInput.value = "";
    // toDoInput = toDoForm.querySelector("input")

}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {// 투두 아이템이 뭐가 있다면???
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
            // 제이슨파일에서 읽어와서 존나게 추가한다
        });
    }
    
    //toDoForm.addEventListener("submit",handleSubmit);
    
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();