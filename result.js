// 選択肢の値と表示用ラベルの対応表を定義
const optionsMap = {
    departure: {
        haneda: '東京/羽田',
    },
    nights: {
        0: '日帰り',
        1: '1泊2日',
        2: '2泊3日',
        3: '3泊4日以上',
    },
    budget: {
        10000: '1万円未満',
        20000: '1万円〜2万円',
        30000: '2万円〜3万円',
        40000: '3万円〜5万円',
        50000: '5万円〜',
    },
};

// URLのクエリパラメータを取得する関数
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 結果を表示する関数
function displayResults() {
    const departureValue = getQueryParam('departure');
    const nightsValue = getQueryParam('nights');
    const budgetValue = getQueryParam('budget');

    // 対応表を使ってラベルを取得
    const departureLabel = optionsMap.departure[departureValue] || '不明';
    const nightsLabel = optionsMap.nights[nightsValue] || '不明';
    const budgetLabel = optionsMap.budget[budgetValue] || '不明';

    // 結果を表示
    const resultContainer = document.getElementById('result-container');

    // 結果表示用の要素を作成
    const departureElement = document.createElement('p');
    departureElement.innerHTML = `<strong>出発地:</strong> ${departureLabel}`;

    const nightsElement = document.createElement('p');
    nightsElement.innerHTML = `<strong>宿泊日数:</strong> ${nightsLabel}`;

    const budgetElement = document.createElement('p');
    budgetElement.innerHTML = `<strong>予算:</strong> ${budgetLabel}`;

    // 結果要素をresultContainerに追加
    resultContainer.appendChild(departureElement);
    resultContainer.appendChild(nightsElement);
    resultContainer.appendChild(budgetElement);

    
}

// ページが読み込まれたときに結果を表示
window.onload = displayResults;

