var d = new Array();
$.getJSON("data/herolist.json",function(res){
    var htype = {
            1:'战士',
            2:'法师',
            3:'坦克',
            4:'刺客',
            5:'射手',
            6:'辅助'
        };
    var type_sum = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
    };
    
    $.each(res,function(item){
        type_sum[res[item]['hero_type']] += 1 ;
    });
    
    $.each(type_sum,function(item){
        var f = {value:0,name:""};
        f["value"] = type_sum[item];
        f["name"] = htype[item];
        d.push(f);
    })
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById("chartmain"),"roma");

    //使用制定的配置项和数据显示图表
    myChart.setOption(option);
});
//指定图标的配置和数据
var option = {
    title : {
        text: '英雄类型统计',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['战士','法师','坦克','刺客','射手','辅助']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'英雄类型统计',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:d
        }
    ]
};




