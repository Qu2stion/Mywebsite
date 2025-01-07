// DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    // 헤더 클릭 시 색상 변경
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        header.style.backgroundColor = header.style.backgroundColor === "blue" ? "#333" : "blue";
        alert("Header color changed!");
    });
});
