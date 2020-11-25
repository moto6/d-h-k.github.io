var count = 0;
var time = 0;
var settime = 0;

function KUKOO() {


    // 타이머 초기화 (initialize)
    //document.getElementById("html 태그 아이디").value; //로 객체 가져와도 되지만
    clearInterval(time); 
    

    //Choice 라는 HTML 오브젝트를 찾아 값 읽어오기
    settime = document.myform.Choice.selectedIndex;
    console.log("settime : "+settime);
    //alert(settime);


    // 찾은 index로 value찾기
    count = parseInt(document.myform.Choice.options[settime].value);
    console.log("count : "+count);
    //alert(count);


    // 0.1초마다 타이머 인터럽트 발생
    time = setInterval("myTim()", 100);

}


document.oncontextmenu = function () {
    alert("우클릭은 사용방지")
    return false;
}

function myTim() {
    count = count - 0.1; //0.1초가 지날때마다 시간 줄어듬
    document.title = "Activating"; 
    document.getElementById("countdown").innerHTML = "완료까지 <b>" + count.toFixed(1) + "</b>초 남았습니다.";
    
    if (count <= 0) {
        clearInterval(time); // 시간 초기화
        alert("조리 완료!")
        // 비프음 내기 추가
    }
}
