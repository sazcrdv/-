// travel-form の submit イベントを取得
document.getElementById('travel-form').addEventListener('submit', function(event) {
    // フォームの内容を取得
    const departure = document.getElementById('departure').value;
    const nights = document.getElementById('nights').value;
    const budget = document.getElementById('budget').value;

    // URLのクエリパラメータを作成
    const queryParams = `?departure=${departure}&nights=${nights}&budget=${budget}`;

    // action属性にクエリパラメータを追加してフォームを送信
    this.action = `result.html${queryParams}`;

    // フォーム送信を続行
    // ここではデフォルトの送信動作を有効にします。
});
