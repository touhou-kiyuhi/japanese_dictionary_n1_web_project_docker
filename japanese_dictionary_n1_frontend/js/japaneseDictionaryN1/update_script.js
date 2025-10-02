const backendPort = 8080;
let id = 0

document.addEventListener("DOMContentLoaded", function() {
    // 獲取查詢表單
    const searchForm = document.getElementById("searchForm")
    const wordForm = document.getElementById("wordForm")

    // 查詢表單提交事件
    searchForm.addEventListener("submit", function(event) {
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
        fetch(`http://localhost:${backendPort}/api/data/update/search?${keywordType}=${encodeURIComponent(keyword)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())  // 假設後端返回的是 JSON 格式
        .then(data => {
            console.log(data);
            id = data.id
            inertResultToForm(data);  // 顯示查詢結果
        })
        .catch(error => {
            console.error('查詢錯誤:', error);
            document.getElementById('result').innerHTML = '查詢出現錯誤，請稍後再試。';
        });
    })

    wordForm.addEventListener("submit", function(event) {
        event.preventDefault();  // 防止表單提交後頁面重新載入

        const word = document.getElementById("word").value
        const kana = document.getElementById("kana").value
        const romaji = document.getElementById("romaji").value
        const meaning = document.getElementById("meaning").value
        const sentence = document.getElementById("sentence").value
        const sentenceMeaning = document.getElementById("sentenceMeaning").value

        const data = {
            word: word,
            kana: kana, 
            romaji: romaji, 
            meaning: meaning, 
            sentence: sentence, 
            sentenceMeaning: sentenceMeaning
        };

        // 使用 fetch API 將資料提交給後端
        fetch(`http://localhost:${backendPort}/api/data/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // 取得後端的回應
        .then(response => response.json())
        .then(data => {
            alert('資料已提交');
            console.log(data);
            displayResult(data)
        })
        .catch(error => {
            console.error('錯誤:', error);
        });
    })
})

// 插入查詢結果的函數
function inertResultToForm(data) {
    document.getElementById('result').innerHTML = ''

    document.getElementById("word").value = data.word
    document.getElementById("kana").value = data.kana
    document.getElementById("romaji").value = data.romaji
    document.getElementById("meaning").value = data.meaning
    document.getElementById("sentence").value = data.sentence
    document.getElementById("sentenceMeaning").value = data.sentenceMeaning

    document.getElementById("dataDetails").innerHTML = ``
}

// 顯示查詢結果的函數
function displayResult(data) {
    // 顯示返回的書籍資料
    const dataDetails = document.getElementById('dataDetails')
    dataDetails.innerHTML = `
        <p><strong>日文詞語：</strong> ${data.word}</p>
        <p><strong>假名：</strong> ${data.kana}</p>
        <p><strong>羅馬拼音：</strong> ${data.romaji}</p>
        <p><strong>詞語意思：</strong> ${data.meaning}</p>
        <p><strong>例句：</strong> ${data.sentence}</p>
        <p><strong>例句意思：</strong> ${data.sentenceMeaning}</p>
    `;
    document.getElementById("searchForm").reset()
    document.getElementById("wordForm").reset()
}