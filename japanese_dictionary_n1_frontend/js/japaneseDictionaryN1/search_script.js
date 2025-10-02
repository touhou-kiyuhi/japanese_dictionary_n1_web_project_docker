const backendPort = 8080;

document.getElementById("searchForm").addEventListener("submit", function(event) {
    // 防止表單提交後頁面刷新
    event.preventDefault()

    const keywordType = document.getElementById("keywordType").value
    // 獲取輸入值
    const keyword = document.getElementById("keyword").value.trim().toLowerCase()
    // console.log(`/api/data/search?${keywordType}=${encodeURIComponent(keyword)}`)
    // 檢查是否有輸入查詢詞
    if (keyword === "") {
        console.error('查詢錯誤:', keyword.value);
        document.getElementById('result').innerHTML = '查詢出現錯誤，請稍後再試。';
        return
    }
    // 發送請求到後端查詢資料
    fetch(`http://localhost:${backendPort}/api/data/search?${keywordType}=${encodeURIComponent(keyword)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())  // 假設後端返回的是 JSON 格式
    .then(data => {
        console.log(data);
        displayResult(data);  // 顯示查詢結果
    })
    .catch(error => {
        console.error('查詢錯誤:', error);
        document.getElementById('result').innerHTML = '查詢出現錯誤，請稍後再試。';
    });
})

// 顯示查詢結果的函數
function displayResult(data) {
    const resultDiv = document.getElementById("result");
    
    if (data && data.length > 0) {
        let html = '<ul>';
        data.forEach(item => {
            html += `
                <li>
                    <strong>日文詞語：</strong> ${item.word}<br>
                    <strong>假名：</strong> ${item.kana}<br>
                    <strong>羅馬拼音：</strong> ${item.romaji}<br>
                    <strong>詞語意思：</strong> ${item.meaning}<br>
                    <strong>例句：</strong> ${item.sentence}<br>
                    <strong>例句意思：</strong> ${item.sentenceMeaning}<br>
                </li>
                <br>
            `;
        });
        html += '</ul>';
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = '未找到相關資料。';
    }
}