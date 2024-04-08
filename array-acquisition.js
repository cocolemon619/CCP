let count_facutly_management = 0;
let count_study_basic = 0;
let count_english = 0;
let count_math_ai = 0;
let count_PD_Basics = 0;
let count_teaching_job = 0;
export let cnt_func_facutly_confirm = function(titles_Array){
    let count_facutly_management_confirm = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < facutly_management.length; i++) {
            if (title[0] == facutly_management[i][0] && title[1] !== "成績:履修中") {
                count_facutly_management_confirm = count_facutly_management_confirm + facutly_management[i][1];
            }
        }
    });
    return count_facutly_management_confirm
}

export let cnt_func_studying_confirm = function(titles_Array){
    let count_study_basic_confirm = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < study_basic.length; i++) {
            if (title[0] == study_basic[i][0] && title[1] !== "成績:履修中") {
                count_study_basic_confirm = count_study_basic_confirm + study_basic[i][1];
            }
        }
    });
    return count_study_basic_confirm
}

export let cnt_func_english_confirm = function(titles_Array){
    let count_english_confirm = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < english.length; i++) {
            if (title[0] == english[i][0] && title[1] !== "成績:履修中") {
                count_english_confirm = count_english_confirm + english[i][1];
            }
        }
    });
    return count_english_confirm
}

export let cnt_func_math_confirm = function(titles_Array){
    let count_math_confirm = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < math_ai.length; i++) {
            if (title[0] == math_ai[i][0] && title[1] !== "成績:履修中") {
                count_math_confirm = count_math_confirm + math_ai[i][1];
            }
        }
    });
    if(count_math_confirm > 15){
        count_math_confirm = count_math_confirm + (sum_math_ai - 15);
        count_math_confirm = 15;
    }
    return count_math_confirm
}

export let cnt_func_PD_confirm = function(titles_Array){
    let count_PD_confirm = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < PD_Basics.length; i++) {
            if (title[0] == PD_Basics[i][0] && title[1] !== "成績:履修中") {
                count_PD_confirm = count_PD_confirm + PD_Basics[i][1];
            }
        }
    });
    return count_PD_confirm
}

export let cnt_func_katei_confirm = function(titles_Array){
    let count_katei_kyoutsuu_confirm = HousouDaigaku /2;//放送大学のカウントが2重にカウントされているため、それの対応で"/2"をしている
    titles_Array.forEach(title => {
        for (let i = 0; i < lifeLong_learning.length; i++) {
            if (title[0] == lifeLong_learning[i][0] && title[1] !== "成績:履修中") {
                count_katei_kyoutsuu_confirm = count_katei_kyoutsuu_confirm + lifeLong_learning[i][1];
            }
        }
    });
    if(sum_study_basics > 12){
        katei_point = katei_point + (sum_study_basics - 12);
        sum_study_basics = 12;
    }
    if(sum_english > 8){
        katei_point = katei_point + (sum_english - 8);
        sum_english = 8;
    }
    if(sum_math_ai > 15){
        katei_point = katei_point + (sum_math_ai - 15);
        sum_math_ai = 15;
    }
    if(sum_PD_Basics > 10){
        katei_point = katei_point + (sum_PD_Basics - 10);
        sum_PD_Basics = 10;
    }
    if(sum_facutly > 60){
        katei_point = katei_point + (sum_facutly - 60);
        sum_facutly = 60;
    }
    return count_katei_kyoutsuu_confirm
}

export let sum_facutly = 0;
export let sum_study_basics = 0;
export let sum_english = 0;
export let sum_math_ai = 0;
export let sum_PD_Basics = 0;

/*
//専門(経営情報)
let facutly_management = [["マーケティング基礎", 2], ["統計学Ⅰ", 2], ["戦略会計入門", 2],
["イノベーションマネジメント", 2], ["会計情報とビジネス法規", 2], ["ロジカルシンキング", 2],
["データベースマネジメント", 2], ["Webプログラミング", 2], ["統計学Ⅱ", 2], ["キャリア構築論", 2],
["数理マネジメント", 2], ["システムモデリング", 2], ["経営分析", 2], ["マーケティング戦略", 2], ["戦略会計応用", 2]];
//修学基礎
let study_basic = [["技術者と持続可能社会", 2], ["日本学（日本と日本人）Ａ", 1], ["日本学（日本と日本人）Ｂ", 1], ["日本文学の世界", 2], ["人間と哲学", 2],
["法と社会", 2], ["こころのはたらき", 2], ["経済と社会", 2], ["グローバル社会(ヨーロッパ)", 2], ["グローバル社会(アジア)", 2],
["芸術へのアプローチ", 2], ["企業の組織と戦略", 2], ["科学技術と社会", 2], ["技術者のためのコミュニケーション", 2], ["生涯学習特別(コミュニケーション技法)", 2],
["生涯学習特別(芸術への思索)", 2], ["生涯学習特別(インターンシップ実習)", 2], ["生涯学習特別(麹の化学)", 2], ["生涯学習特別(地域計画演習)", 2], ["生涯学習特別(金沢市まちづくり)", 2], ["工業概論", 2]];
//英語
let english = [["ビジネスコミュニケーション２", 2], ["ビジネスコミュニケーション１", 2], ["アカデミックリーディング２", 2], ["アカデミックプレゼンテーション", 2],
["イングリッシュセミナー", 2], ["インテンシブイングリッシュ", 2], ["イングリッシュトピックス３", 2]];
//数理・DS・AI
let math_ai = [["アドバンスト情報数理Ａ", 2], ["アドバンスト情報数理Ａ", 2], ["情報数理Ｂ", 2],
["基礎生物", 2], ["アドバンスト数理Ａ", 2], ["アドバンスト数理Ｂ", 2],
["データサイエンス基礎Ⅱ", 1], ["技術者のための統計", 2], ["ＡＩプログラミング入門", 1], ["ビジネスデータサイエンス", 1]];
//PD基礎
let PD_Basics = [["プロジェクトデザインⅡ", 2], ["グローバルＰＤ", 2], ["プロジェクトデザイン実践（実験）", 2], ["エンベデッドシステム", 2]];
//教職
let teaching_job = [["教育心理学", 2], ["道徳教育の理論と実践", 2], ["特別活動の指導法", 2], ["特別支援教育概論", 1], ["学習・発達論", 2], ["教育課程論", 2]];
*/

//1～2年次まで修学基礎科目。（単位数が不明なものは分かりやすいように3と置いた。） (生涯学習に関しては別の配列に格納する。)
let study_basic = [["修学基礎Ａ",2],["健康・体力づくり",1],["人間と自然",0],
["修学基礎Ｂ",2],["生涯スポーツ演習",1],
["技術者と持続可能社会", 2], ["日本学（日本と日本人）Ａ", 1], ["日本学（日本と日本人）Ｂ", 1], ["日本文学の世界", 2], ["人間と哲学", 2],
["法と社会", 2], ["こころのはたらき", 2], ["経済と社会", 2], ["グローバル社会(ヨーロッパ)", 2], ["グローバル社会(アジア)", 2],
["芸術へのアプローチ", 2], ["企業の組織と戦略", 2], ["科学技術と社会", 2], ["技術者のためのコミュニケーション", 2], ["工業概論", 2]];

//1～2年次までの生涯学習。
let lifeLong_learning = [["生涯学習特別講義（石川県の市町）",3],["生涯学習特別講義（航空機の設計開発）",1],["生涯学習特別講義（ポジティブ心理学と組織活性化）",1],["生涯学習特別講義（対話を通して学ぶプロとしての働き方）",1],
["生涯学習特別講義（石川未来プロジェクトⅠ）",1],["生涯学習特別講義（株式と経済）",1],["生涯学習特別講義（病気から学ぶ私たちの心と身体）",1],["生涯学習特別講義（食生活と健康）",1],["生涯学習特別講義(コミュニケーション技法)", 2],
["生涯学習特別講義（金融・投資基礎講座）",2],["生涯学習特別講義（コーオプ実習）",3],["生涯学習特別講義（保育教材演習）",3],["生涯学習特別講義（石川未来プロジェクトⅡ）",3],["生涯学習特別講義(芸術への思索)", 2], ["生涯学習特別講義(インターンシップ実習)", 2], ["生涯学習特別講義(麹の化学)", 2], ["生涯学習特別講義(地域計画演習)", 2], ["生涯学習特別講義(金沢市まちづくり)", 2]
]

//1～2年次までの専門科目（FS）。
let facutly_management = [["情報フロンティア大意（経営情報）",1],["Ｗｅｂデザイン",2],["経営学入門",2],["データアナリティックス入門",2],["ＩＴシステム基礎",2],
["プログラミング基礎",2],["経営戦略と組織",2],["企業会計基礎",2],["マーケティング基礎",2],["統計学Ⅰ",2],["戦略会計入門",2],
["イノベーションマネジメント",2],["会計情報とビジネス法規",2],["ロジカルシンキング",2],["データベースマネジメント",2],["Ｗｅｂプログラミング",2],
["統計学Ⅱ",2],["キャリア構築論",2],["数理マネジメント",2],["システムモデリング",2],["経営分析",2],["マーケティング戦略",2],["戦略会計応用",2]];


//1～2年次までのPD基礎科目。
let PD_Basics = [["プロジェクトデザイン入門（実験）",2],["プロジェクトデザインⅠ",2],["ＩＣＴ入門",1],["データサイエンス入門",1],["ＩｏＴ基礎",1],["ＩｏＴプログラミング入門",1],["ＩｏＴ応用",1],["ロボティクス基礎",1],["情報ネットワーク基礎",1],["ネットワークセキュリティ",1],["プロジェクトデザインⅡ", 2], ["グローバルＰＤ", 2], ["プロジェクトデザイン実践（実験）", 2], ["エンベデッドシステム", 2]];

//1～2年次までの教職科目。
let teaching_job = [["教師入門セミナー",2],["教育原理",2],["教育心理学", 2], ["道徳教育の理論と実践", 2], ["特別活動の指導法", 2], ["特別支援教育概論", 1], ["学習・発達論", 2], ["教育課程論", 2]];


//1~2年次までの数理基礎科目。
let math_ai = [["線形代数Ⅰ",2],["ＡＩプログラミング入門",1],["情報のための数学",4],["基礎情報数理",2],["ＡＩ応用Ⅰ",1],["ＡＩ応用Ⅱ",1],
["ビジネスデータサイエンス",1],["データサイエンス応用",1],["線形代数Ⅱ",2],["情報数理Ａ",2],["ＡＩ基礎",1],["データサイエンス基礎Ⅰ",1],
["アドバンスト情報数理Ａ", 2], ["アドバンスト情報数理Ａ", 2], ["情報数理Ｂ", 2],["基礎生物", 2], ["アドバンスト数理Ａ", 2], 
["アドバンスト数理Ｂ", 2],["データサイエンス基礎Ⅱ", 2], ["技術者のための統計", 2]];

//1~2年次までの英語教育科目。
let english = [["ビジネスコミュニケーション２", 2], ["ビジネスコミュニケーション１", 2], ["アカデミックリーディング２", 2],
 ["アカデミックプレゼンテーション", 2],["イングリッシュセミナー", 2], ["インテンシブイングリッシュ", 2], ["イングリッシュトピックス３", 2],
 ["イングリッシュトピックス１",2],["イングリッシュトピックス２",2],["イングリッシュトピックス５",2],["イングリッシュトピックス４",2],
 ["アカデミックリーディング１",2],["ライティングベーシックス",2],["ＳＴＥＭイングリッシュ",2],["ＴＯＥＩＣ　初級",2],["ＴＯＥＩＣ　中級",2]];

//--start-- 現在の履修しているtitleを取得してくる
let titles = new Set();
export let titles_Array = Array.from(titles);
export let HousouDaigaku = 0;

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://navi.mars.kanazawa-it.ac.jp/portal/student/KITP00500")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            let tdSearch = doc.querySelectorAll("td");
            tdSearch.forEach(td => {
                if(td.getAttribute("data-housou") == 1){
                    HousouDaigaku = HousouDaigaku + 2;//2回カウントされるので、その対応はcnt_func_katei_confirm内で行なう。
                }
            })
            let spanSearch = doc.querySelectorAll("td > span");
            spanSearch.forEach(span => {
                if (span.getAttribute('title') !== null) {
                    titles.add([span.title.split("<br>")[0],span.title.split("<br>")[1]]);
                }
            });
            console.log("titles:" + titles);//ここがset(45)が出力される部分。
            titles_Array = Array.from(titles);
            titles_Array.splice(titles_Array.length / 2);
            sum_facutly = cnt_func_facutly(titles_Array);
            sum_study_basics = cnt_func_studying_basics(titles_Array);
            sum_english = cnt_func_english(titles_Array);
            sum_math_ai = cnt_func_math_ai(titles_Array);
            sum_PD_Basics = cnt_func_PD_Basics(titles_Array);
            // cnt_func_teaching_job();
            cnt_func_S_grade(spanSearch);
            cnt_func_facutly_confirm(titles_Array);
            cnt_func_studying_confirm(titles_Array);
            cnt_func_english_confirm(titles_Array);
            cnt_func_math_confirm(titles_Array);
            cnt_func_PD_confirm(titles_Array);
        })
});

//-- ここまで--

function cnt_func_facutly(titles_Array) {
    count_facutly_management = 0;
    console.log('titles_Array:' + titles_Array);
    titles_Array.forEach(title => {
        for (let i = 0; i < facutly_management.length; i++) {
            if (title[0] == facutly_management[i][0]) {
                count_facutly_management = count_facutly_management + facutly_management[i][1];
            }
        }
    });
    return count_facutly_management;
};

function cnt_func_studying_basics(titles_Array) {
    count_study_basic = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < study_basic.length; i++) {
            if (title[0] == study_basic[i][0]) {
                count_study_basic = count_study_basic + study_basic[i][1];
            }
        }
    });
    return count_study_basic
}

function cnt_func_english(titles_Array) {
    count_english = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < english.length; i++) {
            if (title[0] == english[i][0]) {
                count_english = count_english + english[i][1];
            }
        }
    });
    return count_english
}

function cnt_func_math_ai(titles_Array) {
    count_math_ai = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < math_ai.length; i++) {
            if (title[0] == math_ai[i][0]) {
                count_math_ai = count_math_ai + math_ai[i][1];
            }
        }
    });
    return count_math_ai
}

function cnt_func_PD_Basics(titles_Array){
    count_PD_Basics = 0;
    titles_Array.forEach(title => {
        for (let i = 0; i < PD_Basics.length; i++) {
            if (title[0] == PD_Basics[i][0]) {
                count_PD_Basics = count_PD_Basics + PD_Basics[i][1];
            }
        }
    });
    return count_PD_Basics
}

function cnt_func_teaching_job(titles_Array){
    titles_Array.forEach(title => {
        for (let i = 0; i < teaching_job.length; i++) {
            if (title[0] == teaching_job[i][0]) {
                count_teaching_job = count_teaching_job + teaching_job[i][1];
            }
        }
    });
}

let count_S_Grade = 0;
let kyoukaArray = [study_basic,english,math_ai,PD_Basics,facutly_management,teaching_job];
function cnt_func_S_grade(spanSearch){
    let S_grade_set = new Set();
    spanSearch.forEach(span => {
        if (span.getAttribute('title') !== null && (span.title.split("<br>成績:")[1]).split("")[0] == "Ｓ") {
            S_grade_set.add(span.title.split("<br>成績:")[0]);
        }
    });
    count_S_Grade = 0;
    for(let j = 0; j < kyoukaArray.length;j++){
        for(let k = 0;k < kyoukaArray[j].length;k++){
            S_grade_set.forEach(title => {
                if (title == kyoukaArray[j][k][0]) {
                count_S_Grade = count_S_Grade + kyoukaArray[j][k][1];
                }
            });
        }
    }
    console.log("下の結果は成績Sの教科です");
    console.log(S_grade_set);
    console.log("下の結果は成績Sの教科の単位数です");
    console.log(count_S_Grade);
}

export let katei_point = cnt_func_katei_confirm(titles_Array);