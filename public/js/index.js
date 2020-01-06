// 供参考的渐变色方案
// 供参考的渐变色方案

var macaronColor = ['#00FFFF','#00bfff','#b8cbe3','#5c91ff',
    '#70c0ff','#FFFFF0'];

//dom选择器
function getCharts(id) {
    var myChart = echarts.init(document.getElementById(id));
    return myChart
}
//业务流
function businessFlow() {
    var mychart = getCharts("businessFlow");
    var option = {
        title: [
            {
                text: '稽核业务类型',
                textStyle: {
                    fontSize: publicTextSize.fiveTitle,
                    color: "#6ffffb"
                },
                textAlign: "center",
                x:"35%",
                y:"5%"
            }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
            {

                name: '业务类型',
                type: 'pie',
                radius: '90%',
                center:['50%', '62%'],
                roseType: 'area',

                data: [
                    {value: 10, name: '业务'},
                    {value: 8, name: '资金'},
                    {value: 15, name: '实物'},
                    {value: 25, name: '付现'},
                    {value: 20, name: '异动'}
                ],
                label: {
                    normal: {
                        position: 'inner',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        labelLine: {
                            length: 10
                        },
                        color: function (params) {
                            return macaronColor[params.dataIndex]
                        }
                    }
                }
            }
        ]
    };
    mychart.setOption(option);
}

//派单方式
function dispatchMethod() {
    var mychart = getCharts("dispatchMethod");
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: [
            {
                text: '工单派发量',
                subtext: 11554 ,
                textStyle: {
                    fontSize: publicTextSize.fourTitle,
                    color: "white"
                },
                subtextStyle: {
                    fontSize:  publicTextSize.twoTitle,
                    color: 'white'
                },
                top: '43%',
                left: 'center'
            }],
        color: ['#00FFFF','#00bfff',],
        series: [
            {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                // radius: ['50%', '70%'],
                radius: ['40%', '50%'],
                center:["50%","50%"],
                label: {
                    normal: {
                        show:true,
                        //show: false
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                data: [
                    {value: 335, name: '系统工单\n派发量'},
                    {value: 679, name: '人工工单\n派发量'}
                ]
            }
        ]
    };
    mychart.setOption(option);
}

//派单类型
function dispatchType() {
    var mychart = getCharts("dispatchType");
    var option = {
        title: [
            {
                text: '工单派发类型',
                textStyle: {
                    fontSize: publicTextSize.fiveTitle,
                    color: "#6ffffb"
                },
                left: 'center',
                y:"5%"
            }],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
            {
                name: '派单类型',
                type: 'pie',
                radius: '90%',
                center: ['50%', '62%'],
                roseType: 'area',

                data: [
                    {value: 10, name: '预警'},
                    {value: 8, name: '问题'},
                    {value: 15, name: '建议'},
                    {value: 25, name: '采集'},
                    {value: 20, name: '质检'}
                ],
                label: {
                    normal: {
                        position: 'inner',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        labelLine: {
                            length: 10
                        },
                        color: function (params) {
                            return macaronColor[params.dataIndex]
                        }
                    }
                }
            }
        ]
    };
    mychart.setOption(option);
}

var count = 0;
//接收人类型
function receiverType() {
    var xData = [];
    var yData = [];
    var bottom = 65;
    if (count == 0) {
        xData = ['市场部', '信息技术部', '财务部', '大数据中心', '政企分公司'];
        yData = [120, 200, 150, 80, 70]
    } else {
        xData = ['贵阳', '遵义', '安顺', '黔南', '黔东南', '毕节', '铜仁', '六盘水', '黔西南', '贵安'];
        yData = [120, 200, 150, 80, 70, 142, 201, 59, 88, 96];
        bottom = 48;
    }
    var mychart = getCharts("receiverType");
    var option = {
        legend: {
            show: true,
            x: 'right',
            y: '0',
            icon: 'stack',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#1bb4f6',
                fontSize: publicTextSize.sevenTitle
            },
            data: ['工单接收人类型']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {       // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: "{b}:{c}"
        },
        xAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            type: 'category',
            data: xData,
            axisLabel: {
                rotate:45,
                textStyle: {
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                },
                interval:0
            },
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            labelLine: {
                show: true
            },
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                },
            },
        },
        grid: {
            top: 25,
            bottom: bottom
        },
        series: [{
            name:"工单接收人类型",
            data: yData,
            type: 'bar',
            label: {
                position: 'top',
                color: '#fff',
                show: true,
                textStyle: {
                    fontSize: publicTextSize.sixTitle
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    barBorderRadius: [15, 15, 0, 0],
                    //color: "#6decf6"
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#3987e4' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#00d4c7' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        }]

    };
    mychart.setOption(option)
}

function clickTab() {
    $(".tab-title a").click(function () {
        if ($(this).text() == "省公司"){
            $(".item1").addClass("item-cur");
            $(".item2").removeClass("item-cur");
            count = 0;
        }else {
            $(".item2").addClass("item-cur");
            $(".item1").removeClass("item-cur");
            count = 1;
        }
        receiverType();
    })
}
function ticketStatus() {
    var mychart = getCharts("ticketStatus");

    var fontColor = '#30eee9';
    var option = {

        grid: {
            left: '5%',
            right: '10%',
            top: '20%',
            bottom: publicLengDistance.five,
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'item'
        },
        legend: {
            show: true,
            x: 'center',
            y: '5',
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#1bb4f6',
                fontSize: publicTextSize.sixTitle
            },
            data: ['在途', '归档', '响应']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: publicTextSize.sixTitle
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
        ],
        yAxis: [

            {
                type: 'value',
                name: '',
                /*min:0,
                max:1000,*/
                axisLabel: {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#fff',
                        fontSize: publicTextSize.sixTitle
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#11366e'
                    }
                }
            }
        ],
        series: [
            {
                name: '在途',
                type: 'line',

                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#0092f6',
                        lineStyle: {
                            color: "#0092f6",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(7,44,90,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(0,146,246,0.9)'
                            }]),
                        }
                    }
                },
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
            },
            {
                name: '归档',
                type: 'line',

                symbol: 'circle',
                symbolSize: 8,

                itemStyle: {
                    normal: {
                        color: '#00d4c7',
                        lineStyle: {
                            color: "#00d4c7",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(7,44,90,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(0,212,199,0.9)'
                            }]),
                        }
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
            },
            {
                name: '响应',
                type: 'line',

                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#aecb56',
                        lineStyle: {
                            color: "#aecb56",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(7,44,90,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(114,144,89,0.9)'
                            }]),
                        }
                    }
                },
                data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
            }
        ]
    };
    mychart.setOption(option)
}

//稽核覆盖营业厅数量
function coverCount() {
    var mychart = getCharts("coverCount");
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: [
            {
                text: '覆盖量',
                subtext: 1231+ '个',
                textStyle: {
                    fontSize: publicTextSize.sixTitle,
                    color: "white"
                },
                subtextStyle: {
                    fontSize: publicTextSize.sixTitle,
                    color: 'white'
                },
                top: '38%',
                left: 'center'
            }],
        color: macaronColor,
        series: [
            {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                radius: ['60%', '85%'],

                label: {

                    normal: {
                        show:false,
                        position: 'inner',
                        textStyle: {
                            show:false,
                            fontSize: 10
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 201, name: '自有实体营业厅'},
                    {value: 104, name: '社会渠道数量'},
                    {value: 224, name: '线上渠道数量'},
                    {value: 117, name: '其他渠道数量'},
                ]
            }
        ]
    }
    mychart.setOption(option)
}

function riskMap(){

    var yingtan = "/asset/get/s/data-1518338860057-By447tpLf.json";
    var yichun = "/asset/get/s/data-1518338852969-Hy677KTIf.json";
    var xinyu = "/asset/get/s/data-1518338838010-SyAzQYTIf.json";
    var shangrao = "/asset/get/s/data-1518338829670-H1UfQYa8G.json";
    var pingxiang = "/asset/get/s/data-1518338823093-HkyMQtpUf.json";
    var nanchang = "/asset/get/s/data-1518338805373-S1Temta8G.json";
    var jiujiang = "/asset/get/s/data-1518338799987-S1deQFTLz.json";
    var jingdezhen = "/asset/get/s/data-1518338783915-HJOJXtaLf.json";
    var jian = "/asset/get/s/data-1518338772507-BJnAMKTIz.json";
    var ganzhou = "/asset/get/s/data-1518338763250-S17RfKpLM.json";
    var fuzhou = "/asset/get/s/data-1518338684239-S1EFGtp8f.json";

    var guizhou = "public/mapsource/guizhou.json";

    echarts.extendsMap = function(id, opt){
        // 实例
        var chart = this.init(document.getElementById(id));

        var curGeoJson = {};
        var cityMap = {
            "贵阳市": nanchang,
            "景德镇市": jingdezhen,
            "萍乡市": pingxiang,
            "九江市": jiujiang,
            "新余市": xinyu,
            "鹰潭市": yingtan,
            "赣州市": ganzhou,
            "吉安市": jian,
            "宜春市": yichun,
            "抚州市": fuzhou,
            "上饶市": shangrao
        };
        var geoCoordMap = {
            '贵阳': [106.713478,26.578343],
            '遵义': [106.937265,27.706626],
            '安顺': [105.932188,26.245544],
            '六盘水': [104.846743,26.584643],
            '黔南': [107.517156,26.258219],
            '黔东南': [107.977488,26.583352],
            '黔西南': [104.897971,25.08812],
            '贵安': [115.05, 26.88],
            '铜仁': [109.191555,27.718346],
            '毕节': [105.28501,27.301693]
        };
        var levelColorMap = {
            '1': 'rgba(241, 109, 115, .8)',
            '2': 'rgba(255, 235, 59, .7)',
            '3': 'rgba(147, 235, 248, 1)'
        };

        var defaultOpt = {
            mapName: 'china',     // 地图展示
            goDown: false,        // 是否下钻
            bgColor: 'rgba(0,0,0,0)',   // 画布背景色
            activeArea: [],       // 区域高亮,同echarts配置项
            data: [],
            // 下钻回调(点击的地图名、实例对象option、实例对象)
            callback: function(name, option, instance){}
        };
        if(opt) opt = this.util.extend(defaultOpt, opt);

        // 层级索引
        var name = [opt.mapName];
        var idx = 0;
        var pos = {
            leftPlus: 115,
            leftCur: 150,
            left: 198,
            top: 50
        };

        var line = [[0, 0], [8, 11], [0, 22]];
        // style
        var style = {
            font: '18px "Microsoft YaHei", sans-serif',
            textColor: '#eee',
            lineColor: 'rgba(147, 235, 248, .8)'
        };

        var handleEvents = {
            /**
             * i 实例对象
             * o option
             * n 地图名
            **/
            resetOption: function(i, o, n){
                var breadcrumb = this.createBreadcrumb(n);

                var j = name.indexOf(n);
                var l = o.graphic.length;
                if(j < 0){
                    o.graphic.push(breadcrumb);
                    o.graphic[0].children[0].shape.x2 = 145;
                    o.graphic[0].children[1].shape.x2 = 145;
                    if(o.graphic.length > 2){
                        for(var x = 0; x < opt.data.length; x++){
                            if(n === opt.data[x].name + '市'){
                                o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
                                break;
                            }else o.series[0].data = [];
                        }
                    };
                    name.push(n);
                    idx++;
                }else{
                    o.graphic.splice(j + 2, l);
                    if(o.graphic.length <= 2){
                        o.graphic[0].children[0].shape.x2 = 60;
                        o.graphic[0].children[1].shape.x2 = 60;
                        o.series[0].data = handleEvents.initSeriesData(opt.data);
                    };
                    name.splice(j + 1, l);
                    idx = j;
                    pos.leftCur -= pos.leftPlus * (l - j - 1);
                };

                o.geo.map = n;
                o.geo.zoom = 0.4;
                i.clear();
                i.setOption(o);
                this.zoomAnimation();
                opt.callback(n, o, i);
            },

            /**
             * name 地图名
            **/
            createBreadcrumb: function(name){
                var cityToPinyin = {
                    "南昌市": "nanchang",
                    "景德镇市": "jingdezhen",
                    "萍乡市": "pingxiang",
                    "九江市": "jiujiang",
                    "新余市": "xinyu",
                    "鹰潭市": "yingtan",
                    "赣州市": "ganzhou",
                    "吉安市": "jian",
                    "宜春市": "yichun",
                    "抚州市": "fuzhou",
                    "上饶市": "shangrao"
                };
                var breadcrumb = {
                    type: 'group',
                    id: name,
                    left: pos.leftCur + pos.leftPlus,
                    top: pos.top + 3,
                    children: [{
                        type: 'polyline',
                        left: -90,
                        top: -5,
                        shape: {
                            points: line
                        },
                        style: {
                            stroke: '#fff',
                            key: name
                            // lineWidth: 2,
                        },
                        onclick: function(){
                            var name = this.style.key;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }, {
                        type: 'text',
                        left: -68,
                        top: 'middle',
                        style: {
                            text: name,
                            textAlign: 'center',
                            fill: style.textColor,
                            font: style.font
                        },
                        onclick: function(){
                            var name = this.style.text;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }, {
                        type: 'text',
                        left: -68,
                        top: 10,
                        style: {

                            name: name,
                            text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                            textAlign: 'center',
                            fill: style.textColor,
                            font: '12px "Microsoft YaHei", sans-serif',
                        },
                        onclick: function(){
                            // console.log(this.style);
                            var name = this.style.name;
                            handleEvents.resetOption(chart, option, name);
                        }
                    }]
                }

                pos.leftCur += pos.leftPlus;

                return breadcrumb;
            },

            // 设置effectscatter
            initSeriesData: function(data){
                var temp = [];
                for(var i = 0;i < data.length;i++){
                    var geoCoord = geoCoordMap[data[i].name];
                    if(geoCoord){
                        temp.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value, data[i].level)
                        });
                    }
                };
                return temp;
            },

            zoomAnimation: function(){
                var count = null;
                var zoom = function(per){
                    if(!count) count = per;
                    count = count + per;
                    // console.log(per,count);
                    chart.setOption({
                        geo: {
                            zoom: count
                        }
                    });
                    if(count < 1) window.requestAnimationFrame(function(){
                        zoom(0.2);
                    });
                };
                window.requestAnimationFrame(function(){
                    zoom(0.2);
                });
            }
        };

        var option = {
            // backgroundColor: opt.bgColor,
            backgroundColor: 'rgba(0,0,0,0)',
            // graphic: [{
            //     type: 'group',
            //     left: pos.left,
            //     top: pos.top - 4,
            //     children: [{
            //         type: 'line',
            //         left: 0,
            //         top: -20,
            //         shape: {
            //             x1: 0,
            //             y1: 0,
            //             x2: 60,
            //             y2: 0
            //         },
            //         style: {
            //             stroke: style.lineColor,
            //         }
            //     }, {
            //         type: 'line',
            //         left: 0,
            //         top: 20,
            //         shape: {
            //             x1: 0,
            //             y1: 0,
            //             x2: 60,
            //             y2: 0
            //         },
            //         style: {
            //             stroke: style.lineColor,
            //         }
            //     }]
            // }, {
            //     id: name[idx],
            //     type: 'group',
            //     left: pos.left + 2,
            //     top: pos.top,
            //     children: [{
            //         type: 'polyline',
            //         left: 90,
            //         top: -12,
            //         shape: {
            //             points: line
            //         },
            //         style: {
            //             stroke: 'transparent',
            //             key: name[0]
            //         },
            //         onclick: function(){
            //             var name = this.style.key;
            //             handleEvents.resetOption(chart, option, name);
            //         }
            //     }, {
            //         type: 'text',
            //         left: 0,
            //         top: 'middle',
            //         style: {
            //             text: name[0] === '贵州' ? '贵州省' : name[0],
            //             textAlign: 'center',
            //             fill: style.textColor,
            //             font: style.font
            //         },
            //         onclick: function(){
            //             handleEvents.resetOption(chart, option, '贵州');
            //         }
            //     }, {
            //         type: 'text',
            //         left: 0,
            //         top: 10,
            //         style: {
            //             text: 'GUIZHOU',
            //             textAlign: 'center',
            //             fill: style.textColor,
            //             font: '12px "Microsoft YaHei", sans-serif',
            //         },
            //         onclick: function(){
            //             handleEvents.resetOption(chart, option, '江西');
            //         }
            //     }]
            // }],
            geo: {
                map: opt.mapName,
                // roam: true,
                zoom: 1,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: publicTextSize.fourTitle,
                            offset: [0, 30]
                        },

                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#3fdaff',
                        borderWidth: 1,
                        areaColor: 'rgba(147, 235, 248, 0)',
                        // areaColor: {
                        //     type: 'radial',
                        //     x: 0.5,
                        //     y: 0.5,
                        //     r: 0.8,
                        //     colorStops: [{
                        //         offset: 0,
                        //         color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        //     }, {
                        //         offset: 1,
                        //         color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        //     }],
                        //     globalCoord: false // 缺省为 false
                        // },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                regions: opt.activeArea.map(function(item){
                    if(typeof item !== 'string'){
                        return {
                            name: item.name,
                            itemStyle: {
                                normal: {
                                    areaColor: item.areaColor || '#389BB7'
                                }
                            },
                            label: {
                                normal: {
                                    show: item.showLabel,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            }
                        }
                    }else{
                        return {
                            name: item,
                            itemStyle: {
                                normal: {
                                    borderColor: '#91e6ff',
                                    areaColor: '#389BB7'
                                }
                            }
                        }
                    }
                })
            },
            series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                // symbol: 'diamond',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 5,
                    scale: 5,
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: function(params){
                            return levelColorMap[params.value[3]];
                        },
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: handleEvents.initSeriesData(opt.data)
            }]
        };

        chart.setOption(option);
        // 添加事件
        chart.on('click', function(params){
            var _self = this;
            if(opt.goDown && params.name !== name[idx]){
                if(cityMap[params.name]){
                    var url = cityMap[params.name];
                    $.get(url, function(response){
                        // console.log(response);
                        curGeoJson = response;
                        echarts.registerMap(params.name, response);
                        handleEvents.resetOption(_self, option, params.name);
                    });
                }
            }
        });

        chart.setMap = function(mapName){
            var _self = this;
            if(mapName.indexOf('市') < 0) mapName = mapName + '市';
            var citySource = cityMap[mapName];
            if(citySource){
                var url = './map/' + citySource + '.json';
                $.get(url, function(response){
                    // console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(mapName, response);
                    handleEvents.resetOption(_self, option, mapName);
                });
            }
            // handleEvents.resetOption(this, option, mapName);
        };

        return chart;
    };

    $.getJSON(guizhou, function(geoJson){
        echarts.registerMap('贵州', geoJson);
        var myChart = echarts.extendsMap('risk-map', {
            bgColor: 'rgba(0,0,0,0)', // 画布背景色
            mapName: '贵州',    // 地图名
            goDown: true,       // 是否下钻
            // 下钻回调
            callback: function(name, option, instance){
                console.log(name, option, instance);
            },
            // 数据展示
            data: [{
                name: '贵阳',
                value: 10,
                level: 2
            },{
                name: '安顺',
                value: 12,
                level: 2
            },{
                name: '遵义',
                value: 11,
                level: 2
            },{
                name: '黔东南',
                value: 16,
                level: 2
            },{
                name: '六盘水',
                value: 12,
                level: 2
            },
            {
                name: '黔西南',
                value: 12,
                level: 2
            },
            {
                name: '黔南',
                value: 14,
                level: 2
            },
            {
                name: '贵安',
                value: 2,
                level: 2
            },
            {
                name: '毕节',
                value: 5,
                level: 2
            },
            {
                name: '铜仁',
                value: 9,
                level: 2
            }]
        });
    })

}

function  rationalizeAdoptionAll(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-all'));

    var val1data2 = [{
            value: 0.2,
            name: '业务',
        },
        {
            value: 0.3,
            name: '资金',
        },
        {
            value: 0.4,
            name: '实物',
        },
        {
            value: 0.3,
            name: '付现',
        },
        {
            value: 0.1,
            name: '异动',
        }
    ];

    var arr = ['middleLost', 0.6, val1data2, '合理化建议采纳率'];

    var option = {
        title: {
            top: '45%',
            left: 'center',
            text: arr[3],
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: publicTextSize.sixTitle
            },
            subtext: (arr[1] * 10000 / 100).toFixed(2) + '%',
            subtextStyle: {
                color: '#fff',
                fontSize: publicTextSize.fourTitle
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(res) {
                console.log(res)

                if (res.componentSubType == 'liquidFill') {
                    return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                } else {
                    return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
                }
            }
        },
        series: [{
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue'
                }
            },
            name: arr[3],
            data: [{
                value: 0.6,
                itemStyle: {
                    normal: {
                        color: '#53d5ff',
                        opacity: 0.6
                    }
                }
            }],
            //  background: '#fff',
            color: ['#53d5ff'],
            center: ['50%', '50%'],
            radius: '40%',
            // radius: ['0%', '70%'],
            backgroundStyle: {
                color: 'rgba(0,0,0,0)'
            },
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 0
                },
                borderDistance: 0
            }
        },
            {
                type: 'pie',
                radius: ['40%', '55%'],
                //radius: ['70%', '90%'],
                color: macaronColor,
                hoverAnimation: true, ////设置饼图默认的展开样式
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.fiveTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },

                // itemStyle: { // 此配置
                //     normal: {
                //         borderWidth: 0,
                //         borderColor: '#fff',
                //     },
                //     // emphasis: {
                //     //     borderWidth: 0,
                //     //     shadowBlur: 2,
                //     //     shadowOffsetX: 10,
                //     //     shadowColor: 'rgba(0, 0, 0, 0.22)'
                //     // }
                // },
                data: arr[2]
            }
        ]
    };

    charts.setOption(option);
}


function rationalizeAdoptionBus(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-bus'));


    var option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            style:{
                text:'业务',
                textAlign:'center',
                fill:'#fff',
                width:30,
                height:30,
                font: '0.8vw "STHeiti", sans-serif'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['人工稽核','系统稽核']
        // },
        color:macaronColor,
        series: [
            // {
            //     name:'按稽核类型',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: ['50%', '60%'],
            //     label: '',
            //     itemStyle: {
            //         color: function(param){
            //             if(param.dataIndex === 0){
            //                 return 'yellow'
            //             } else{
            //                 return '#c0c0c0'
            //             }
            //         }
            //     },
            //
            //     // {
            //     //     normal: {
            //     //         position: 'inner'
            //     //     }
            //     // },
            //     // labelLine: {
            //     //     normal: {
            //     //         show: false
            //     //     }
            //     // },
            //     data:[
            //         {value:335, name:'人工稽核'},
            //         {value:679, name:'系统稽核'}
            //     ]
            // },
            {
                name:'',
                type:'pie',
                radius: ['30%', '50%'],
                //radius: ['50%', '70%'],
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                //label: '',
                itemStyle: {
                    // color: function(param){
                    //     if(param.dataIndex === 0){
                    //         return '#c0c0c0'
                    //     } else{
                    //         return 'skyblue'
                    //     }
                    // }
                },
                // {
                // normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                // rich: {
                //     a: {
                //         color: '#999',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     // abg: {
                //     //     backgroundColor: '#333',
                //     //     width: '100%',
                //     //     align: 'right',
                //     //     height: 22,
                //     //     borderRadius: [4, 4, 0, 0]
                //     // },
                //     hr: {
                //         borderColor: '#aaa',
                //         width: '100%',
                //         borderWidth: 0.5,
                //         height: 0
                //     },
                //     b: {
                //         fontSize: 16,
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#eee',
                //         backgroundColor: '#334455',
                //         padding: [2, 4],
                //         borderRadius: 2
                //     }
                // }
                // }
                // },
                data:[
                    {value:335, name:'基础业务'},
                    {value:679, name:'营销案'},
                    {value:559, name:'渠道酬金'},
                    {value:489, name:'政企业务'}
                ]
            }
        ]
    };

    charts.setOption(option);
}

function rationalizeAdoptionFunds(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-funds'));


    var option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            style:{
                text:'资金',
                textAlign:'center',
                fill:'#fff',
                width:30,
                height:30,
                font: '0.8vw "STHeiti", sans-serif'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['人工稽核','系统稽核']
        // },
        color:macaronColor,
        series: [
            // {
            //     name:'按稽核类型',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: ['50%', '60%'],
            //     label: '',
            //     itemStyle: {
            //         color: function(param){
            //             if(param.dataIndex === 0){
            //                 return 'yellow'
            //             } else{
            //                 return '#c0c0c0'
            //             }
            //         }
            //     },
            //
            //     // {
            //     //     normal: {
            //     //         position: 'inner'
            //     //     }
            //     // },
            //     // labelLine: {
            //     //     normal: {
            //     //         show: false
            //     //     }
            //     // },
            //     data:[
            //         {value:335, name:'人工稽核'},
            //         {value:679, name:'系统稽核'}
            //     ]
            // },
            {
                name:'按稽核类型',
                type:'pie',
                radius: ['30%', '50%'],
                //radius: ['50%', '70%'],
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                itemStyle: {
                    // color: function(param){
                    //     if(param.dataIndex === 0){
                    //         return '#c0c0c0'
                    //     } else{
                    //         return 'skyblue'
                    //     }
                    // }
                },
                // {
                // normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                // rich: {
                //     a: {
                //         color: '#999',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     // abg: {
                //     //     backgroundColor: '#333',
                //     //     width: '100%',
                //     //     align: 'right',
                //     //     height: 22,
                //     //     borderRadius: [4, 4, 0, 0]
                //     // },
                //     hr: {
                //         borderColor: '#aaa',
                //         width: '100%',
                //         borderWidth: 0.5,
                //         height: 0
                //     },
                //     b: {
                //         fontSize: 16,
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#eee',
                //         backgroundColor: '#334455',
                //         padding: [2, 4],
                //         borderRadius: 2
                //     }
                // }
                // }
                // },
                data:[
                    {value:335, name:'自由营业厅'},
                    {value:679, name:'社会实体渠道'},
                    {value:679, name:'线上渠道'},
                    {value:679, name:'在线公司'},
                    {value:679, name:'政企'}
                ]
            }
        ]
    };

    charts.setOption(option);
}

function rationalizeAdoptionGoods(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-goods'));


    var option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            style:{
                text:'实物',
                textAlign:'center',
                fill:'#fff',
                width:30,
                height:30,
                font: '0.8vw "STHeiti", sans-serif'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['人工稽核','系统稽核']
        // },
        color:macaronColor,
        series: [
            // {
            //     name:'按稽核类型',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: ['50%', '60%'],
            //     label: '',
            //     itemStyle: {
            //         color: function(param){
            //             if(param.dataIndex === 0){
            //                 return 'yellow'
            //             } else{
            //                 return '#c0c0c0'
            //             }
            //         }
            //     },
            //
            //     // {
            //     //     normal: {
            //     //         position: 'inner'
            //     //     }
            //     // },
            //     // labelLine: {
            //     //     normal: {
            //     //         show: false
            //     //     }
            //     // },
            //     data:[
            //         {value:335, name:'人工稽核'},
            //         {value:679, name:'系统稽核'}
            //     ]
            // },
            {
                name:'按稽核类型',
                type:'pie',
                radius: ['30%', '50%'],
                //radius: ['50%', '70%'],
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                itemStyle: {
                    // color: function(param){
                    //     if(param.dataIndex === 0){
                    //         return '#c0c0c0'
                    //     } else{
                    //         return 'skyblue'
                    //     }
                    // }
                },
                // {
                // normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                // rich: {
                //     a: {
                //         color: '#999',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     // abg: {
                //     //     backgroundColor: '#333',
                //     //     width: '100%',
                //     //     align: 'right',
                //     //     height: 22,
                //     //     borderRadius: [4, 4, 0, 0]
                //     // },
                //     hr: {
                //         borderColor: '#aaa',
                //         width: '100%',
                //         borderWidth: 0.5,
                //         height: 0
                //     },
                //     b: {
                //         fontSize: 16,
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#eee',
                //         backgroundColor: '#334455',
                //         padding: [2, 4],
                //         borderRadius: 2
                //     }
                // }
                // }
                // },
                data:[
                    {value:335, name:'业务用卡'},
                    {value:679, name:'终端产品'},
                    {value:679, name:'异业销售品'}
                ]
            }
        ]
    };

    charts.setOption(option);
}

function rationalizeAdoptionCash(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-cash'));


    var option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            style:{
                text:'付现',
                textAlign:'center',
                fill:'#fff',
                width:30,
                height:30,
                font: '0.8vw "STHeiti", sans-serif'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['人工稽核','系统稽核']
        // },
        color:macaronColor,
        series: [
            // {
            //     name:'按稽核类型',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: ['50%', '60%'],
            //     label: '',
            //     itemStyle: {
            //         color: function(param){
            //             if(param.dataIndex === 0){
            //                 return 'yellow'
            //             } else{
            //                 return '#c0c0c0'
            //             }
            //         }
            //     },
            //
            //     // {
            //     //     normal: {
            //     //         position: 'inner'
            //     //     }
            //     // },
            //     // labelLine: {
            //     //     normal: {
            //     //         show: false
            //     //     }
            //     // },
            //     data:[
            //         {value:335, name:'人工稽核'},
            //         {value:679, name:'系统稽核'}
            //     ]
            // },
            {
                name:'按稽核类型',
                type:'pie',
                radius: ['30%', '50%'],
                //radius: ['50%', '70%'],
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                itemStyle: {
                    // color: function(param){
                    //     if(param.dataIndex === 0){
                    //         return '#c0c0c0'
                    //     } else{
                    //         return 'skyblue'
                    //     }
                    // }
                },
                // {
                // normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                // rich: {
                //     a: {
                //         color: '#999',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     // abg: {
                //     //     backgroundColor: '#333',
                //     //     width: '100%',
                //     //     align: 'right',
                //     //     height: 22,
                //     //     borderRadius: [4, 4, 0, 0]
                //     // },
                //     hr: {
                //         borderColor: '#aaa',
                //         width: '100%',
                //         borderWidth: 0.5,
                //         height: 0
                //     },
                //     b: {
                //         fontSize: 16,
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#eee',
                //         backgroundColor: '#334455',
                //         padding: [2, 4],
                //         borderRadius: 2
                //     }
                // }
                // }
                // },
                data:[
                    {value:335, name:'电费稽核'},
                    {value:679, name:'欠费稽核(个人)'},
                    {value:679, name:'退费稽核'},
                    {value:579, name:'刚补稽核'},
                    {value:479, name:'滞纳金减免稽核'},
                    {value:519, name:'SP结算'}
                ]
            }
        ]
    };

    charts.setOption(option);
}

function rationalizeAdoptionChange(){
    var charts = echarts.init(document.querySelector('#rationalize-adoption-change'));


    var option = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            style:{
                text:'异动',
                textAlign:'center',
                fill:'#fff',
                width:30,
                height:30,
                font: '0.8vw "STHeiti", sans-serif'
            }
        },
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['人工稽核','系统稽核']
        // },
        color:macaronColor,
        series: [
            // {
            //     name:'按稽核类型',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: ['50%', '60%'],
            //     label: '',
            //     itemStyle: {
            //         color: function(param){
            //             if(param.dataIndex === 0){
            //                 return 'yellow'
            //             } else{
            //                 return '#c0c0c0'
            //             }
            //         }
            //     },
            //
            //     // {
            //     //     normal: {
            //     //         position: 'inner'
            //     //     }
            //     // },
            //     // labelLine: {
            //     //     normal: {
            //     //         show: false
            //     //     }
            //     // },
            //     data:[
            //         {value:335, name:'人工稽核'},
            //         {value:679, name:'系统稽核'}
            //     ]
            // },
            {
                name:'按稽核类型',
                type:'pie',
                radius: ['30%', '50%'],
                //radius: ['50%', '70%'],
                label: {
                    normal: {
                        formatter: '{b}\n{d}',
                        show: true,
                        //show: false,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                        //show: false
                    }
                },
                itemStyle: {
                    // color: function(param){
                    //     if(param.dataIndex === 0){
                    //         return '#c0c0c0'
                    //     } else{
                    //         return 'skyblue'
                    //     }
                    // }
                },
                // {
                // normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                // rich: {
                //     a: {
                //         color: '#999',
                //         lineHeight: 22,
                //         align: 'center'
                //     },
                //     // abg: {
                //     //     backgroundColor: '#333',
                //     //     width: '100%',
                //     //     align: 'right',
                //     //     height: 22,
                //     //     borderRadius: [4, 4, 0, 0]
                //     // },
                //     hr: {
                //         borderColor: '#aaa',
                //         width: '100%',
                //         borderWidth: 0.5,
                //         height: 0
                //     },
                //     b: {
                //         fontSize: 16,
                //         lineHeight: 33
                //     },
                //     per: {
                //         color: '#eee',
                //         backgroundColor: '#334455',
                //         padding: [2, 4],
                //         borderRadius: 2
                //     }
                // }
                // }
                // },
                data:[
                    {value:335, name:'套利'},
                    {value:679, name:'工号'},
                    {value:679, name:'实名制'},
                    {value:679, name:'业务异常办理'},
                    {value:679, name:'其他'},
                ]
            }
        ]
    };

    charts.setOption(option);
}

/**
 * 设置饼状图滚动
 *
 */
function scrollRationalizeAdoption(){

    var $container = $('#rationalize-adoption-pies');

    // alert($container.find("li.scroll-item").eq(0).outerWidth())

    var carousel = new Carousel($container.children('ul'), {
        transition: ".4s",
        // switchBtn: $demo3.children("i.btn-direct"),
        offsetDistance: $container.find("ul>li").eq(0).outerWidth(),
        isAuto: true,
        noLastAnimation: true
    });
}

//稽核总量
function auditMode() {
    var mychart = getCharts("auditMode");
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: [
            {
                text: '稽核总量',
                subtext: 12312 ,
                textStyle: {
                    fontSize:  publicTextSize.fourTitle,
                    color: "white"
                },
                subtextStyle: {
                    fontSize: publicTextSize.oneTitle*0.9,
                    color: 'white'
                },
                top: '38%',
                left: 'center'
            }],
        color: ['#00FFFF','#00bfff',],
        series: [
            {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                /* radius: ['50%', '70%'],*/
                radius: ['40%', '50%'],
                center:["50%","50%"],
                label: {
                    normal: {
                        //show:false,
                        show:true,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:5,
                        length2:5
                    }
                },
                data: [
                    {value: 335, name: '系统稽核量'},
                    {value: 679, name: '人工稽核量'}
                ]
            }
        ]
    };
    mychart.setOption(option);
}



function initIndexPage(){
    try{
        rationalizeAdoptionAll();
    }catch (e) {

    }
    try{
        riskMap();
    }catch (e) {

    }


    try{
        rationalizeAdoptionBus()
    }catch (e) {

    }

    try{
        rationalizeAdoptionCash()
    }catch (e) {

    }

    try{
        rationalizeAdoptionGoods()
    }catch (e) {

    }

    try{
        rationalizeAdoptionFunds()
    }catch (e) {

    }
    try{
        rationalizeAdoptionChange()
    }catch (e) {

    }
    try{
        initAuditPowerPolygon(document.querySelector("#audit-power"), {
            polygon1: {
                title1: "业务",
                title2: "稽核总数",
                value: "12,411,555",
                unit: ""
            },
            polygon2: {
                title1: "资金",
                title2: "稽核总数",
                value: "9,321,44",
                unit: ""
            },
            polygon3: {
                title1: "异动",
                title2: "稽核总数",
                value: "555",
                unit: "万"
            },
            polygon4: {
                title1: "付现",
                title2: "稽核总数",
                value: "55",
                unit: "万"
            },
            polygon5: {
                title1: "实物",
                title2: "稽核总数",
                value: "111",
                unit: "万"
            }
        });
    }catch (e) {

    }

    try{
        scrollRationalizeAdoption();
    }catch (e) {

    }

    try{
        auditMode();
    }catch (e) {

    }
    try{
        businessFlow();
    }catch (e) {

    }
    try{
        dispatchMethod();
    }catch (e) {

    }
    try{
        dispatchType();
    }catch (e) {

    }
    try{
        receiverType();
    }catch (e) {

    }
    try{
        ticketStatus();
    }catch (e) {

    }
    try{
        clickTab();
    }catch (e) {

    }
    try{
        coverCount();
    }catch (e) {

    }
}

window.onload = function(){
    initIndexPage();
    $('body').css({
        visibility: "visible"}
    )
};

