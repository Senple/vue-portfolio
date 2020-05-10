// P.178 動的コンポーネントの基本 
Vue.component('banner-member', {
    template: '<div class="banner"> \
    <h3>WINGSメンバー募集中</h3> \
    <p>あなたもWINGSプロジェクトに参加しませんか？<br /> \
    現在、WINGSプロジェクでは、ご一緒にお仕事ができる仲間を募集中です。</p> \
    </div>'
});

Vue.component('banner-new', {
    template: `<div class="banner">
      <h3>新刊「HTML5超入門 」発売</h3>
      <p>ステップバイステップで学ぶ入門書です。<br />
        HTML5アプリの基礎知識、画面のデザイン、コードの書き方などが理解できます。</p>
    </div>`
});

Vue.component('banner-env', {
    template: `<div class="banner">
      <h3>環境構築設定</h3>
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br />
        紹介している各モジュールは、日々頻繁にバージョンアップが行われています。</p>
    </div>`
});

// P.181 タブパネルを生成する。
Vue.component('tab-member', {
    template: `<div class="tab">
      <p>あなたもWINGSプロジェクトに参加しませんか？<br />
        現在、WINGSプロジェクトでは、ご一緒にお仕事ができる仲間を募集中です。</p>
      <label>名前：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
    </div>`,
    data: function () {
        return {
            name: ''
        }
    }
});

Vue.component('tab-new', {
    template: `<div class="tab">
      <h3>「HTML5超入門 」発売！</h3>
      <p>ステップバイステップで学ぶ入門書です。<br />
        HTML5アプリの基礎知識、画面のデザイン、コードの書き方などが理解できます。</p>
    </div>`
});

Vue.component('tab-env', {
    template: `<div class="tab">
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br />
        紹介している各モジュールは、日々頻繁にバージョンアップが行われています。</p>
    </div>`
});

new Vue({
    el: "#app",
    methods: {
        // クリック時にタブを切り替え
        onclick: function (tab) {
            this.current = tab;
        }
    },
    computed: {
        // タブ名の取得(「tab-xxxx」のxxxxx部分)
        tabNames: function () {
            return Object.keys(this.tabs);
        },
        // 現在表示すべきコンポーネント名を取得する。
        currentTab: function () {
            return 'tab-' + this.current;
        }
    },
    data: {
        // 表示中のタブ
        current: 'member',
        // 表示するタブのリスト
        tabs: {
            'member': 'メンバー紹介',
            'new': '新刊紹介',
            'env': '環境構築設定'
        }
    }
});