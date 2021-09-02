const search = document.querySelector('#js-search');
const searchInput = search.querySelector('input');
search.addEventListener('submit', function(e){
    e.preventDefault();
    //IE 호환 문제 백틱기호 안쓰고 바꿈
    window.location.href = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query="+searchInput.value;
    // window.location.href = `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${searchInput.value}`;
    searchInput.value = '';
    return false;
});
