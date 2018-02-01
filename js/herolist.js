
var table = new Vue({
    el: "#herolist",
    data: {
        hlist: [],
        htype:{
            1:'战士',
            2:'法师',
            3:'坦克',
            4:'刺客',
            5:'射手',
            6:'辅助'
        }
    },
    methods: {
        getList: function(){
            var self = this;
            $.getJSON("../data/herolist.json",function(res){
                self.hlist = res.slice(0,10);
            })
        }
    },
    mounted(){
        this.getList();
    }
})

var paging = new Vue({
    el: "#paging",
    data:{
        cur_page:1,
        page_count:10,
        start_page:1,
        end_page:0,
        items_sum:0,
        activate:0
    },
    methods: {
        init:function(){
            var self = this;
            $.getJSON("../data/herolist.json",function(res){
                self.items_sum = res.length;
                self.end_page = Math.ceil(self.items_sum/self.page_count);
            });
            
        },
        getnewdata:function(e){
            var self = this;
            self.cur_page = e;
            $.getJSON("../data/herolist.json",function(res){
                table.hlist = res.slice((self.cur_page-1)*10,self.cur_page*10);
            }) ;
        }
    },
    mounted(){
        this.init();
    }
})





