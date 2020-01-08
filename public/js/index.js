// 供参考的渐变色方案
// 供参考的渐变色方案

var macaronColor = ["#389af4", "#a181fc",
    "#53d5ff", "#ffbf61",
    "#00e9db", "#6446e9"];

var warnColor = {
    red: '#f12',
    green: 'lime',
    yellow: '#F6D06F'
};

var provinceCompany = [106.807161, 26.857146]

var gzCityMap = {
    '省公司': [106.807161, 26.857146],
    '贵阳': [106.713478,26.578343],
    '安顺': [105.932188,26.245544],
    '遵义': [106.937265,27.706626],
    '铜仁': [109.191555,27.718346],
    '毕节': [105.28501,27.301693],
    '黔南': [107.517156,26.258219],
    '六盘水': [104.846743,26.584643],
    '黔东南': [107.977488,26.583352],
    '黔西南': [104.897971,25.08812],
    '贵安': [106.322333,26.411911]
};

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
                text: '稽核量分布情况',
                textStyle: {
                    fontSize: publicTextSize.fiveTitle,
                    color: "#6ffffb"
                },
                textAlign: "center",
                x: "45%",
                y: "5%"
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
                radius: '80%',
                center: ['50%', '50%'],
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
                        show: true,
                        position: 'inner',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        },
                        formatter: '{b}: {c}'
                    }
                },
                itemStyle: {
                    normal: {
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
            formatter: "{b}<br/>{c}({d}%)"
        },
        title: [
            {
                text: '工单派发量',
                subtext: 11554,
                textStyle: {
                    fontSize: publicTextSize.fourTitle,
                    color: "white"
                },
                subtextStyle: {
                    fontSize: publicTextSize.twoTitle,
                    color: 'white'
                },
                top: '40%',
                left: 'center'
            }],
        color: ['#53d5ff', '#ffbf61',],
        series: [
            {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                // radius: ['50%', '70%'],
                radius: ['40%', '50%'],
                center: ["50%", "50%"],
                label: {
                    normal: {
                        show: true,
                        //show: false
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        },
                        formatter: '{b}\n{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5
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
                text: '工单分布情况',
                textStyle: {
                    fontSize: publicTextSize.fiveTitle,
                    color: "#6ffffb"
                },
                x: '40%',
                y: "5%"
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
                radius: '80%',
                center: ['65%', '50%'],
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
                        show: true,
                        position: 'inner',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        },
                        formatter: '{b}\n{c}'
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
    var bottom = publicLengDistance.one*1.3;
    if (count == 0) {
        xData = ['市场部', '信息技术部', '财务部', '大数据中心', '政企分公司'];
        yData = [120, 200, 150, 80, 70]
    } else {
        xData = ['贵阳', '遵义', '安顺', '黔南', '黔东南', '毕节', '铜仁', '六盘水', '黔西南', '贵安'];
        yData = [120, 200, 150, 80, 70, 142, 201, 59, 88, 96];
        bottom = publicLengDistance.two;
    }
    var mychart = getCharts("receiverType");
    var option = {
        /* legend: {
             show: true,
             x: 'right',
             y: '0',
             icon: 'stack',
             itemWidth: 10,
             itemHeight: 10,
             textStyle: {
                 color: '#1bb4f6',
                 fontSize: publicTextSize.sixTitle
             },
             data: ['工单接收情况']
         },*/
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
                rotate: 45,
                textStyle: {
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                },
                interval: 0
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
            name: "业务",
            data: yData,
            type: 'bar',
            stack: "工单",
            /* label: {
                 position: 'top',
                 color: '#fff',
                 show: true,
                 textStyle: {
                     fontSize: publicTextSize.sixTitle
                 }
             },*/
            itemStyle: {
                normal: {
                    show: true,
                    //barBorderRadius: [15, 15, 0, 0],
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
                            offset: 1, color: '#91a1d4' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        }, {
            name: "资金",
            data: yData,
            type: 'bar',
            stack: "工单",
            /*label: {
                position: 'top',
                color: '#fff',
                show: true,
                textStyle: {
                    fontSize: publicTextSize.sixTitle
                }
            },*/
            itemStyle: {
                normal: {
                    show: true,
                    //barBorderRadius: [15, 15, 0, 0],
                    //color: "#6decf6"
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#a181fc' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#c4acd4' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        }, {
            name: "异动",
            data: yData,
            type: 'bar',
            stack: "工单",
            /* label: {
                 position: 'top',
                 color: '#fff',
                 show: true,
                 textStyle: {
                     fontSize: publicTextSize.sixTitle
                 }
             },*/
            itemStyle: {
                normal: {
                    show: true,
                    //barBorderRadius: [15, 15, 0, 0],
                    //color: "#6decf6"
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#53d5ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#acccd4' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        }, {
            name: "付现",
            data: yData,
            type: 'bar',
            stack: "工单",
            /* label: {
                 position: 'top',
                 color: '#fff',
                 show: true,
                 textStyle: {
                     fontSize: publicTextSize.sixTitle
                 }
             },*/
            itemStyle: {
                normal: {
                    show: true,
                    // barBorderRadius: [15, 15, 0, 0],
                    //color: "#6decf6"
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#ff8c37' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#ced4b0' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        }, {
            name: "实物",
            data: yData,
            type: 'bar',
            stack: "工单",
            /* label: {
                 position: 'top',
                 color: '#fff',
                 show: true,
                 textStyle: {
                     fontSize: publicTextSize.sixTitle
                 }
             },*/
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
                            offset: 0, color: '#c1d498' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#91c9d4' // 100% 处的颜色
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
        if ($(this).text() == "省公司") {
            $(".item1").addClass("item-cur");
            $(".item2").removeClass("item-cur");
            count = 0;
        } else {
            $(".item2").addClass("item-cur");
            $(".item1").removeClass("item-cur");
            count = 1;
        }
        receiverType();
    })
}

//超时在途量
function ticketStatus() {
    var mychart = getCharts("ticketStatus");

    var option = {
        tooltip: {
            formatter: '{a} <br/>{c}'
        },
        series: [
            {
                name: '超时在途量',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '98%',
                axisLine: {//坐标轴
                    // show:false,// 是否显示仪表盘轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.3, 'lime'], [0.6, '#ff4500'], [1, 'red']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 2
                    }
                },
                axisLabel: {            // 刻度字体
                    // fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                    //shadowColor: '#fff', //默认透明
                    //shadowBlur: 5
                },
                axisTick: {            // 刻度样式
                    length: 5,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                splitLine: {           // 分隔线
                    length: 6,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 1,
                        color: '#fff',
                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                pointer: {// 指针
                    length: "75%",
                    shadowColor: '#fff', //默认透明
                    //shadowBlur: 2
                    width: 6
                },
                title: {
                    offsetCenter: [0, "-15%"],
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: publicTextSize.sixTitle,
                        fontStyle: 'italic',
                        color: '#fff',

                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                detail: {
                    backgroundColor: '#4a99ff',
                    borderRadius: 10,
                    width: 4,
                    height: 4,
                    // borderWidth: 1,
                    borderColor: '#fff',
                    //shadowColor: '#fff', //默认透明
                    //shadowBlur: 2,
                    offsetCenter: [0, '60%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff',
                        fontSize: publicTextSize.fourTitle
                    }
                },
                data: [{value: 10, name: '超时在途量/笔'}]
            }
        ]
    };
    mychart.setOption(option)
}

//超时在途量雷达
function overtimeWorkOrderRadar() {
    var mychart = getCharts("overtimeWorkOrderRadar");
    var indicator = [{
        text: '贵阳',
        max: 6000,
    },
        {
            text: '贵安',
            max: 5000
        },
        {
            text: '遵义',
            max: 5000
        },
        {
            text: '黔南',
            max: 5000,
            //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },
        {
            text: '六盘水',
            max: 5000
        },
        {
            text: '安顺',
            max: 5000
        }, {
            text: '黔东南',
            max: 5000
        }, {
            text: '黔西南',
            max: 5000
        }, {
            text: '毕节',
            max: 5000
        }, {
            text: '铜仁',
            max: 5000
        }
    ];
    var dataArr = [{
        value: [4300, 4700, 3600, 3900, 3800, 4200, 3200, 2500, 4500, 4651],
        name: "超时在途量",
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#4A99FF',
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                    // width:150
                },
                shadowColor: '#4A99FF',
                shadowBlur: 10,

            },
        },
        areaStyle: {
            normal: { // 单项区域填充样式
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                        offset: 0,
                        color: '#4A99FF'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#4A99FF'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        }
    }
    ];
    var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
    option = {
        tooltip: {},
        color: colorArr,
        //radius:"50%",
        center: ['50%', '50%'],
        legend: {
            orient: 'vertical',
            icon: 'circle', //图例形状
            data: ["超时在途量"],
            top: 5,
            right: publicLengDistance.five,
            itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
            // itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: publicTextSize.sixTitle,
                color: '#00E4FF',
            },
        },
        radar: {
            shape: 'circle',
            radius: '62%',
            //center: ['43%', '60%'],
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                },
            },
            indicator: indicator,
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
        },
        series: [{
            type: 'radar',
            symbolSize: 5,
            label: {
                fontSize: 10,
                show: false
            },
            // symbol: 'angle',
            data: dataArr
        }]
    };
    mychart.setOption(option)
}

//超时响应量
function overtimeResponse() {
    var mychart = getCharts("overtimeResponse");

    var option = {
        tooltip: {
            formatter: '{a} <br/>{c}'
        },
        grid: {
            top: publicLengDistance.one*2
        },
        series: [
            {
                name: '超时在途量',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '98%',
                axisLine: {//坐标轴
                    // show:false,// 是否显示仪表盘轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.3, 'lime'], [0.6, '#ff4500'], [1, 'red']],
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 2
                    }
                },
                axisLabel: {            // 刻度字体
                    // fontWeight: 'bolder',
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                    //shadowColor: '#fff', //默认透明
                    //shadowBlur: 5
                },
                axisTick: {            // 刻度样式
                    length: 5,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                splitLine: {           // 分隔线
                    length: 6,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 1,
                        color: '#fff',
                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                pointer: {// 指针
                    length: "75%",
                    shadowColor: '#fff', //默认透明
                    //shadowBlur: 2
                    width: 6
                },
                title: {
                    offsetCenter: [0, "-15%"],
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: publicTextSize.sixTitle,
                        fontStyle: 'italic',
                        color: '#fff',

                        //shadowColor: '#fff', //默认透明
                        //shadowBlur: 5
                    }
                },
                detail: {
                    backgroundColor: '#4a99ff',
                    borderRadius: 10,
                    width: 4,
                    height: 4,
                    // borderWidth: 1,
                    borderColor: '#fff',
                    //shadowColor: '#fff', //默认透明
                    //shadowBlur: 2,
                    offsetCenter: [0, '60%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff',
                        fontSize: publicTextSize.fourTitle
                    }
                },
                data: [{value: 50, name: '超时响应量/笔'}]
            }
        ]
    };
    mychart.setOption(option)
}

//超时响应量雷达
function overtimeResponseRadar() {
    var mychart = getCharts("overtimeResponseRadar");
    var indicator = [{
        text: '贵阳',
        max: 6000,
    },
        {
            text: '贵安',
            max: 5000
        },
        {
            text: '遵义',
            max: 5000
        },
        {
            text: '黔南',
            max: 5000,
            //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },
        {
            text: '六盘水',
            max: 5000
        },
        {
            text: '安顺',
            max: 5000
        }
    ];
    var dataArr = [{
        value: [4300, 4700, 3600, 3900, 3800, 4200],
        name: "超时响应量",
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#4A99FF',
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                    // width:150
                },
                shadowColor: '#4A99FF',
                shadowBlur: 10,

            },
        },
        areaStyle: {
            normal: { // 单项区域填充样式
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                        offset: 0,
                        color: '#4A99FF'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#4A99FF'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        }
    }
    ];
    var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
    option = {
        tooltip: {

        },
        color: colorArr,
        //radius:"50%",
        center: ['50%', '50%'],
        legend: {
            orient: 'vertical',
            icon: 'circle', //图例形状
            data: ["超时响应量"],
            top: 5,
            right: publicLengDistance.five,
            itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
            // itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: publicTextSize.sixTitle,
                color: '#00E4FF',
            },
        },
        radar: {
            shape: 'circle',
            radius: '62%',
            //center: ['43%', '60%'],
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: publicTextSize.sevenTitle
                },
            },
            indicator: indicator,
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
        },
        series: [{
            type: 'radar',
            symbolSize: 5,
            label: {
                fontSize: publicTextSize.sevenTitle,
                show: false
            },
            // symbol: 'angle',
            data: dataArr
        }]
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
                subtext: 1231 + '个',
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
                        show: false,
                        position: 'inner',
                        textStyle: {
                            show: false,
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

function riskMap() {

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

    echarts.extendsMap = function (id, opt) {
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

    var option = {
        title: {
            text: '合理化建议采纳分析',
            textStyle: {
                fontWeight: 'normal',
                fontSize: publicTextSize.fourTitle,
                color: '#F1F1F3'
            },
            left: '5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'circle',
            // itemWidth: 14,
            // itemHeight: 5,
            itemGap: 13,
            data: ['采纳量', '采纳率'],
            right: '9.4%',
            textStyle: {
                fontSize: publicTextSize.sixTitle,
                color: '#F1F1F3'
            }
        },
        grid: {
            top: publicLengDistance.two,
            left: '3%',
            right: '4%',
            bottom: publicLengDistance.four,
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: publicTextSize.sixTitle,
                    color: 'white'
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: publicTextSize.sixTitle,
                    color: 'white'
                },
                formatter: function(value){
                   return value == 0?'':value;
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            splitNumber: 5
        },{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: publicTextSize.sixTitle,
                    color: 'white'
                },
                formatter: function(value){
                    if(value == 0){
                        return '';
                    }
                    return value + '%';
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            yAxisIndex: 0,
            name: '采纳量',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)'
                }
            },
            data: [21,31,12,5,17,26,18,19,4,9,7,15]
        }, {
            yAxisIndex: 1,
            name: '采纳率',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)'
                }
            },
            data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
        }]
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


/**
 * 设置稽核效益下方滚动
 *
 */
function scrollRationalizeAdoption1() {
    var $container = $('#rationalize-adoption-text');
    $container.bxSlider({
        slideWidth: $container.outerWidth(),
        minSlides: 1,
        auto: true,
        autoDelay: 800,
        autoHover: true
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
                subtext: 12312,
                textStyle: {
                    fontSize: publicTextSize.fourTitle,
                    color: "white"
                },
                subtextStyle: {
                    fontSize: publicTextSize.oneTitle * 0.9,
                    color: 'white'
                },
                top: '38%',
                left: 'center'
            }],
        color: ['#ffbf61', '#389af4',],
        series: [
            {
                name: '',
                type: 'pie',
                selectedMode: 'single',
                /* radius: ['50%', '70%'],*/
                radius: ['40%', '60%'],
                center: ["50%", "50%"],
                label: {
                    normal: {
                        //show:false,
                        show: true,
                        position: 'outside',
                        textStyle: {
                            fontSize: publicTextSize.sixTitle
                        },
                        formatter: '{b}\n{d}%({c})'
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5
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


function riskMap2(){
    var uploadedDataURL = "public/mapsource/guizhouQ.json";
    var myChart = echarts.init(document.querySelector('#risk-map'))

    /**
     此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，
     来达到hover散点和区域显示tooltip的效果

     默认情况下，map series 会自己生成内部专用的 geo 组件。
     但是也可以用这个 geoIndex 指定一个 geo 组件。
     这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。
     并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
     当设定了 geoIndex 后，series-map.map 属性，
     以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

     http://echarts.baidu.com/option.html#series-map.geoIndex

     并且加了pin气泡图标以示数值大小
     */
    // myChart.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('guizhou', geoJson);
        // myChart.hideLoading();
        var geoCoordMap = {
            '省公司': [106.807161, 26.857146],
            '贵阳': [106.713478,26.578343],
            '安顺': [105.932188,26.245544],
            '遵义': [106.937265,27.706626],
            '铜仁': [109.191555,27.718346],
            '毕节': [105.28501,27.301693],
            '黔南': [107.517156,26.258219],
            '六盘水': [104.846743,26.584643],
            '黔东南': [107.977488,26.583352],
            '黔西南': [104.897971,25.08812],
            '贵安': [106.32205,26.367844]
        };
        var moveLine = {
            'normal':[
                {"fromName":"省公司","toName":"贵阳","warnLevel":"red",'coords':[[106.807161, 26.857146],[106.713478,26.578343]]},
                {"fromName":"省公司","toName":"安顺","warnLevel":"green",'coords':[[106.807161, 26.857146],[105.932188,26.245544]]},
                {"fromName":"省公司","toName":"遵义","warnLevel":"red",'coords':[[106.807161, 26.857146],[106.937265,27.706626]]},
                {"fromName":"省公司","toName":"铜仁","warnLevel":"yellow",'coords':[[106.807161, 26.857146],[109.191555,27.718346]]},
                {"fromName":"省公司","toName":"毕节","warnLevel":"red",'coords':[[106.807161, 26.857146],[105.28501,27.301693]]},
                {"fromName":"省公司","toName":"黔南","warnLevel":"yellow",'coords':[[106.807161, 26.857146],[107.517156,26.258219]]},
                {"fromName":"省公司","toName":"六盘水","warnLevel":"red",'coords':[[106.807161, 26.857146],[104.846743,26.584643]]},
                {"fromName":"省公司","toName":"黔东南","warnLevel":"green",'coords':[[106.807161, 26.857146],[107.977488,26.583352]]},
                {"fromName":"省公司","toName":"黔西南","warnLevel":"red",'coords':[[106.807161, 26.857146],[104.897971,25.08812]]},
                {"fromName":"省公司","toName":"贵安","warnLevel":"green",'coords':[[106.807161, 26.857146],[106.32205,26.367844]]}
            ],
            'warning':[

            ]
        };
        var data = [
            {name:'贵阳',value:190},
            {name:'安顺',value:190},
            {name:'遵义',value:190},
            {name:'铜仁',value:190},
            {name:'毕节',value:90},
            {name:'黔南',value:120},
            {name:'六盘水',value:120},
            {name:'黔东南',value:120},
            {name:'黔西南',value:120},
            {name:'贵安',value:190}
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };


        option = {
            backgroundColor: 'transparent',
            title: {
                top:20,
                text: '',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#ccc'
                }
            },

            // tooltip: {
            //     trigger: 'item',
            //     formatter: function (params) {
            //         console.log(params)
            //         if(typeof(params.value)[2] == "undefined"){
            //             return params.name + ' : ' + params.value;
            //         }else{
            //             return params.name + ' : ' + params.value[2];
            //         }
            //     }
            // },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'right',
                data:['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    // color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                    //color: ['#23074d', '#cc5333'] // 紫红
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿

                }
            },
            // toolbox: {
            //     show: true,
            //     orient: 'vertical',
            //     left: 'right',
            //     top: 'center',
            //     feature: {
            //             dataView: {readOnly: false},
            //             restore: {},
            //             saveAsImage: {}
            //             }
            // },
            geo: {
                show: true,
                map: 'guizhou',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#3fdaff',
                        borderWidth: 2,
                        shadowColor: 'rgba(63, 218, 255, 0.5)',
                        shadowBlur: 30
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series : [
                // {
                //     name: 'light',
                //     type: 'scatter',
                //     coordinateSystem: 'geo',
                //     data: convertData(data),
                //     symbolSize: function (val) {
                //         return val[2] / 10;
                //     },
                //     label: {
                //         normal: {
                //             formatter: '{b}',
                //             position: 'right',
                //             show: true
                //         },
                //         emphasis: {
                //             show: true
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: '#F4E925'
                //         }
                //     }
                // },
                {
                    type: 'map',
                    map: 'guizhou',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 5,
                    showEffectOn: 'render',
                    rippleEffect: {
                        period: 9,
                        scale: 6,
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                            fontSize: publicTextSize.fiveTitle
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },
                {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbolSize: publicLengSize.nine,
                        trailLength: 0.02
                    },

                    lineStyle: {
                        normal: {
                            color:function(params){
                                return warnColor[params.data.warnLevel];
                            },
                            /*
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#58B3CC'
                                }, {
                                    offset: 1, color: '#F58158'
                                }], false),*/
                            width: 1,
                            opacity: 1.0,
                            curveness: 0.15
                        }
                    },
                    data: moveLine.normal
                },
                {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbolSize: 10,
                        trailLength: 0,
                    },

                    lineStyle: {
                        normal: {
                            color:'rgb(255, 0, 0)',
                            width: 2,
                            opacity: 1,
                            curveness: 0.15
                        }
                    },
                    data: moveLine.warning
                }

            ]
        };
        myChart.setOption(option);
    });
}

function scrollIndicators(){
    var $container = $('.scroll-indicators');
    $container.bxSlider({
        mode: 'vertical',
        slideWidth: $container.outerWidth(),
        minSlides: 1,
        auto: true,
        autoDelay: 800,
        autoHover: true
    });
}

function scrollAuditCount(){
    var $container = $('.audit-count-scroll');
    $container.bxSlider({
        // mode: 'vertical',
        slideWidth: $container.outerWidth(),
        minSlides: 1,
        auto: true,
        autoDelay: 200,
        autoHover: true,
    });
}

function recoveryAmount(){
    var cahrts = getCharts("recovery-amount")
    cahrts.setOption(waveOption({
        text: '挽回损失金额',
        subtext: '12',
        unit: '万元',
        value: '0.45',
        color: '#389af4'
    }))
}

function correctAmount(){
    var cahrts = getCharts("correct-amount")
    cahrts.setOption(waveOption({
        text: '纠正错误金额',
        subtext: '2',
        unit: '万元',
        value: '0.25',
        color: '#a181fc'
    }))
}

function deductionAmount() {

    var cahrts = getCharts("deduction-amount")
    cahrts.setOption(waveOption({
        text: '扣罚金额',
        subtext: '5',
        unit: '万元',
        value: '0.35',
        color: '#53d5ff'
    }))
}

function channelShutdowns() {

    var cahrts = getCharts("channel-shutdowns")
    cahrts.setOption(waveOption({
        text: '渠道关停数',
        subtext: '5',
        unit: '',
        value: '0.10',
        color: '#ff8c37'
    }))
}

function waveOption(options) {
    return {
        title: {
            top: '40%',
            left: 'center',
            text: options.text,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: publicTextSize.fourTitle
            },
            subtext: options.subtext + options.unit,
            subtextStyle: {
                color: '#fff',
                fontSize: publicTextSize.threeTitle
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(res) {

                if (res.componentSubType == 'liquidFill') {
                    return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                } else {
                    return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
                }
            }
        },
        series: {
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue'
                }
            },
            name: options.text,
            data: [{
                value: options.value,
                itemStyle: {
                    normal: {
                        color: options.color,
                        opacity: 0.6
                    }
                }
            }],
            //  background: '#fff',
            color: [options.color],
            center: ['50%', '50%'],
            radius: '90%',
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
                    borderColor: options.color,
                    borderWidth: 3
                },
                borderDistance: 1
            }
        }

    }
}

function initIndexPage(){
    try{
        rationalizeAdoptionAll();
    }catch (e) {

    }
    try{
        // riskMap();
    }catch (e) {

    }

    try{
        recoveryAmount();
    }catch (e) {

    }

    try{
        correctAmount()
    }catch (e) {

    }

    try{
        deductionAmount()
    }catch (e) {

    }

    try{
        channelShutdowns()
    }catch (e) {

    }

    try{
        riskMap2()
    }catch (e) {

    }

    // try{
    //     rationalizeAdoptionBus()
    // }catch (e) {
    //
    // }
    //
    // try{
    //     rationalizeAdoptionCash()
    // }catch (e) {
    //
    // }
    //
    // try{
    //     rationalizeAdoptionGoods()
    // }catch (e) {
    //
    // }
    //
    // try{
    //     rationalizeAdoptionFunds()
    // }catch (e) {
    //
    // }
    // try{
    //     rationalizeAdoptionChange()
    // }catch (e) {
    //
    // }
    try{
        // initAuditPowerPolygon(document.querySelector("#audit-power"), {
        //     polygon1: {
        //         title1: "业务",
        //         title2: "稽核点总数"
        //     },
        //     polygon2: {
        //         title1: "资金",
        //         title2: "稽核点总数",
        //     },
        //     polygon3: {
        //         title1: "异动",
        //         title2: "稽核点总数",
        //     },
        //     polygon4: {
        //         title1: "付现",
        //         title2: "稽核点总数",
        //     },
        //     polygon5: {
        //         title1: "实物",
        //         title2: "稽核点总数",
        //     }
        // });

        // initAuditPower();
    }catch (e) {

    }

    try{
        scrollRationalizeAdoption1();
        scrollIndicators();
        scrollAuditCount();
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
    } catch (e) {

    }
    try {
        overtimeWorkOrderRadar();
    } catch (e) {

    }
    try{
        clickTab();
    }catch (e) {

    }
    try{
        coverCount();
    }catch (e) {

    }
    try {
        overtimeResponseRadar()
    } catch (e) {

    }
    try {
        overtimeResponse()
    } catch (e) {

    }
}

window.onload = function(){

    $('.audit-input').datepicker({
        autoHide: true,
        autoPick: true,
        language: 'zh-CN',
        format: 'yyyy年mm月',
        endDate: new Date(),
        startView: 1,
        yearSuffix: '',
        months: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthsShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        offset: '15'
    });

    // $('.month-selector-icon').on('click', function(){
    //     $('.audit-input').datepicker('show')
    // });
    initIndexPage();
    $('body').css({
        visibility: "visible"}
    )
};

