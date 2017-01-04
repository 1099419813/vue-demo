/**
 * Created by 王国富 on 2017/1/4.
 */
window.onload = function () {
    // (function init() {
        var vm=new Vue({
            el: '#app',
            data: {
                username: '',
                age: '',
                myData: [],
                warnMsg: '',
                nowIndex: -100
            },
            methods: {
                add: function () {
                    if(this.username!=''&&this.age!=''){
                        this.myData.push({name: this.username, age: this.age});
                        this.username = '';
                        this.age = '';
                    }
                },
                getIndex: function (index) {
                    this.warnMsg = "确认删除么";
                    this.nowIndex = index;
                },
                changeNowIndex: function () {
                    this.warnMsg = "确认删除全部么";
                    this.nowIndex = -100;
                },
                deleteMsg: function () {
                    if (this.nowIndex == -100) {
                        this.myData = [];
                    } else {
                        this.myData.splice(this.nowIndex, 1)
                    }
                }
            }
        })
    // })();
}