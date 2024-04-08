//変数Housoudaigakuをimportしてきてはいるけど、使わないでほしい。（ここでは、"/2"の処理をしていない状態なことを忘れてそうだから。）
import { sum_facutly, sum_study_basics, sum_english, sum_math_ai, sum_PD_Basics, cnt_func_facutly_confirm, cnt_func_studying_confirm, cnt_func_english_confirm, cnt_func_math_confirm, cnt_func_PD_confirm, titles_Array, HousouDaigaku, cnt_func_katei_confirm ,katei_point} from "./array-acquisition.js";
document.addEventListener('DOMContentLoaded', function () {

    //ここからsetTimeout文。
    setTimeout(() => {
        const ctx = document.getElementById('myChart');
        console.log("cnt_kateikyoutsu:" + cnt_func_katei_confirm(titles_Array));//自己成長ポイントの課程共通を値として持ってくることは成功した。
        console.log("katei_point:" + katei_point)

        // let katei_point = cnt_func_katei_confirm(titles_Array);
        // //下の(>=12)は2年前学期までの値。厳密な処理を書くの無理だから、簡易実装。
        // if(sum_study_basics > 12){
        //     katei_point = katei_point + (sum_study_basics - 12);
        //     sum_study_basics = 12;
        // }
        // if(sum_english > 8){
        //     katei_point = katei_point + (sum_english - 8);
        //     sum_english = 8;
        // }
        // if(sum_math_ai > 15){
        //     katei_point = katei_point + (sum_math_ai - 15);
        //     sum_math_ai = 15;
        // }
        // if(sum_PD_Basics > 10){
        //     katei_point = katei_point + (sum_PD_Basics - 10);
        //     sum_PD_Basics = 10;
        // }
        // if(sum_facutly > 60){
        //     katei_point = katei_point + (sum_facutly - 60);
        //     sum_facutly = 60;
        // }
        console.log(katei_point);
        new Chart(ctx, {
            type: "horizontalBar",
            data: {
                labels: ["今期末単位修得状況", "受講完了単位数"],
                datasets: [
                    {
                        label: "修学基礎科目",
                        backgroundColor: "#4F81BD",
                        data: [sum_study_basics, cnt_func_studying_confirm(titles_Array)]
                    },
                    {
                        label: "英語科目",
                        backgroundColor: "#C0504D",
                        data: [sum_english, cnt_func_english_confirm(titles_Array)]
                    },
                    {
                        label: "数理・DS・AI",
                        backgroundColor: "#9BBB59",
                        data: [sum_math_ai, cnt_func_math_confirm(titles_Array)]
                    },
                    {
                        label: "PD基礎",
                        backgroundColor: "#8064A2",
                        data: [sum_PD_Basics, cnt_func_PD_confirm(titles_Array)]
                    },
                    {
                        label: "専門科目",
                        backgroundColor: "#4BACCD",
                        data: [sum_facutly, cnt_func_facutly_confirm(titles_Array)]
                    },
                    {
                        label: "課程共通",
                        backgroundColor: "orange",
                        data: [katei_point,cnt_func_katei_confirm(titles_Array)]
                    }
                ]
            },
            options: {
                responsive: false,
                scales: {
                    xAxes: [
                        {
                            stacked: true  // 積み上げの指定
                        }
                    ],
                    yAxes: [
                        {
                            stacked: true  //  積み上げの指定
                        }
                    ]
                }
            }
        })
    }, 300)

    //ここまでsetTimeout文。

});