// P.181 タブパネルを生成する。
Vue.component('tab-scout', {
    template: `<div class="tab"> \
      <p>Scout<br /> \
      カブスカウトからローバー卒業までスカウティングで養成された</p>
      </div>`,
});

Vue.component('tab-skills', {
    template: `<div class="tab"> \
      <h3>エンジニアリング</h3> \
      <p>2018年から、Pythonを書いています。<br /> \
        スタートアップへ就職してからは、vue.jsとAWSなどPython以外もさわり始めています。</p>
    </div>`
});

Vue.component('tab-reading', {
    template: `<div class="tab">
      <p>最近は、様々な書籍を読んでいます。<br />
      苦しかったときの話をしようか。森岡剛</p>
      <label>名前：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
      </div>`,
    data: function () {
        return {
            name: ''
        }
    }
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
        current: 'scout',
        // 表示するタブのリスト
        tabs: {
            'scout': 'スカウト活動',
            'skills': '技術探究',
            'reading': '趣味：読書'
        }
    }
});