// 背景を便箋っぽく変更する。
Vue.component('tab-about', {
    template: `<div class="tab"> \
      人生は喜劇だ。</p>
      <h3>今までの軌跡</h3>
      <div v-for="topic in history">
      Title: {{ topic.title }} <br />
      Date: {{ topic.date }} <br />
      Type: {{ topic.type }} <br />
      Note:{{ topic.remarks }}
      <hr>
      </div>
      </div>`,
    data: function () {
        return {
            history: [
                {
                    "type": "scout",
                    "date": "2016",
                    "title": "第3回CJKプロジェクト・バングラデシュ派遣",
                    "remarks": "初めての海外ボランティア"
                }, {
                    "type": "scout",
                    "date": "2018",
                    "title": "第9回アジア太平洋地域スカウトユースフォーラム",
                    "remarks": "初めての国際会議"
                }, {
                    "type": "Academic",
                    "date": "2019",
                    "title": "SPIN2019",
                    "remarks": "初めての国際学会"
                }
            ]
        }
    }
});

Vue.component('tab-skill', {
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
            ]
        }
    }
});


Vue.component('tab-contact', {
    template: `<div class="tab" id="contact"> \
    <h2> Dear Semple </h2>
    <div class="contents">
    </div>
    <div class="sender">
    Best regardly <br />
    <span v-text="name" id="yourname"></span><br />
    <input type="text" max-font="8" placeholder="あなたのお名前" v-model="name"/> 
    </div>
    <div class="font">
    <button type="button" name="font1" class="wf-hannari" @click=onclick1() value="0">しっかり</button>
    <button type="button" name="font2" class="wf-nikukyu" @click=onclick2() value="1" >にゃーん</button>
    <button type="button" name="font3" class="wf-nicomoji" @click=onclick3() value="2">やわらかい</button>
    </div>
    </div>`,
    data: function () {
        return {
            name: ""
        }
    },
    methods: {
        onclick1: function () {
            // var a = document.getElementById("contact");
            var a = document.getElementById("yourname");
            a.className = "";
            a.className = "wf-hannari";
            console.log(a);
        },
        onclick2: function () {
            // var a = document.getElementById("contact");
            var a = document.getElementById("yourname");
            a.className = "";
            a.className = "wf-nikukyu";
            console.log(a);

        },
        onclick3: function () {
            // var a = document.getElementById("contact");
            var a = document.getElementById("yourname");
            a.className = "";
            a.className = "wf-nicomoji";
            console.log(a);

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
        current: 'about',
        // 表示するタブのリスト
        tabs: {
            'about': "About",
            'skill': 'Skill',
            'travel': 'Travel',
            'contact': "Contact"
        },

    }
});