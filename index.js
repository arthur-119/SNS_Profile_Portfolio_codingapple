window.onload = function() {
    var button = document.getElementById("contact");
    var link = 'https://www.instagram.com/im.arthur119/';
    button.addEventListener('click', function() {
        // alert('버튼만든김에 js까지 연결해봄')
        window.open(link)
    })
}