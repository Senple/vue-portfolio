// P.181 タブパネルを生成する。
Vue.component('tab-scout', {
    template: `<div class="tab"> \
      カブスカウトからローバースカウトまで大体10年以上の経験があります</p>
      </div>`,
});

Vue.component('tab-skills', {
    template: `<div class="tab"> \
      <p>2018年から、Pythonを書いています。<br /> 
        スタートアップへ就職してからは、vue.jsとAWSなどPython以外もさわり始めています。</p>
    </div>`
});

Vue.component('tab-travel', {
    template: `<div class="tab">
    <h3>今までの旅行先</h3>
    <div v-for="country in countries">
    Abroad: {{ country.name }} <br />
    Date: {{ country.date }} <br />
    Purpose: {{ country.purpose }} <br />
    {{ country.companion }}
    <hr>
    </div>
    </div>`,
    data: function () {
        return {
            countries: [
                {
                    "name": "Australia",
                    "date": "2010",
                    "purpose": "School Trip",
                    "companion": "School"
                }, {
                    "name": "Bangladesh",
                    "date": "2016",
                    "purpose": "Volunteer",
                    "companion": "Contingent"
                }, {
                    "name": "China",
                    "date": "2017",
                    "purpose": "Sight Seeing",
                    "companion": "Friends"
                }, {
                    "name": "Philliphine",
                    "date": "2018",
                    "purpose": "attend International Meeting",
                    "companion": "Contingent"
                }, {
                    "name": "India",
                    "date": "2019",
                    "purpose": "Academic Conference",
                    "companion": "Assisstant Professior"
                }, {
                    "name": "Thailand",
                    "date": "2019",
                    "purpose": "Sight Seeing",
                    "companion": "Alone"
                }
            ],
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
            'scout': 'Scout',
            'skills': 'Skills',
            'travel': 'Travel'
        },

    }
});