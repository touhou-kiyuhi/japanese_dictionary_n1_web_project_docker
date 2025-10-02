const backendPort = 8080;
let id = 0;

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const deleteButton = document.getElementById("deleteButton");

    // 查詢
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const keywordType = document.getElementById("keywordType").value;
        const keyword = document.getElementById("keyword").value.trim().toLowerCase();

        const result = document.getElementById('result');
        if (keyword === "") {
            result.innerHTML = '查詢出現錯誤，請稍後再試。';
            return;
        }

        fetch(`http://localhost:${backendPort}/api/data/delete/search?${keywordType}=${encodeURIComponent(keyword)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            id = data.id;
            result.innerHTML = '';
            displayResult(data);
        })
        .catch(error => {
            console.error('查詢錯誤:', error);
            document.getElementById('result').innerHTML = '查詢出現錯誤，請稍後再試。';
        });
    });

    // 刪除
    deleteButton.addEventListener("click", function () {
        if (!id) {
            alert("請先查詢要刪除的資料。");
            return;
        }

        const confirmDelete = confirm("你確定要刪除這筆資料嗎？此操作無法復原！");
        if (!confirmDelete) return;

        fetch(`http://localhost:${backendPort}/api/data/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert("資料已成功刪除！");
                // 清空畫面
                document.getElementById('dataDetails').innerHTML = '';
                document.getElementById('searchForm').reset();
                document.getElementById('result').innerHTML = '';
                id = 0;
            } else {
                alert("刪除失敗，請稍後再試。");
            }
        })
        .catch(error => {
            console.error("刪除錯誤:", error);
            alert("發生錯誤，無法刪除資料。");
        });
    });
});

// 顯示查詢結果
function displayResult(data) {
    const dataDetails = document.getElementById('dataDetails');
    dataDetails.innerHTML = `
        <p><strong>日文詞語：</strong> ${data.word}</p>
        <p><strong>假名：</strong> ${data.kana}</p>
        <p><strong>羅馬拼音：</strong> ${data.romaji}</p>
        <p><strong>詞語意思：</strong> ${data.meaning}</p>
        <p><strong>例句：</strong> ${data.sentence}</p>
        <p><strong>例句意思：</strong> ${data.sentenceMeaning}</p>
    `;
}
