const backendPort = 8080;

document.getElementById("wordForm").addEventListener("submit", function(event) {
    event.preventDefault();  // 防止表單提交後頁面重新載入

    const word = document.getElementById('word').value;
    const kana = document.getElementById('kana').value;
    const romaji = document.getElementById("romaji").value;
    const meaning = document.getElementById('meaning').value;
    const sentence = document.getElementById('sentence').value;
    const sentenceMeaning = document.getElementById('sentenceMeaning').value;

    const data = {
        word: word,
        kana: kana, 
        romaji: romaji, 
        meaning: meaning, 
        sentence: sentence, 
        sentenceMeaning: sentenceMeaning
    };

    // 使用 fetch API 將資料提交給後端
    fetch(`http://localhost:${backendPort}/api/data`, {
        method: 'POST',
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
        // 顯示返回的書籍資料
        const dataDetails = document.getElementById('dataDetails');
        dataDetails.innerHTML = `
            <p><strong>日文詞語：</strong> ${data.word}</p>
            <p><strong>假名：</strong> ${data.kana}</p>
            <p><strong>羅馬拼音：</strong> ${data.romaji}</p>
            <p><strong>詞語意思：</strong> ${data.meaning}</p>
            <p><strong>例句：</strong> ${data.sentence}</p>
            <p><strong>例句意思：</strong> ${data.sentenceMeaning}</p>
        `;
        document.getElementById("wordForm").reset();
    })
    .catch(error => {
        console.error('錯誤:', error);
    });
});