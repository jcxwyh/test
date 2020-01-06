// 初始化稽核能力框的方法
/**
 * data的传入形式
 * {
 *     polygon1: {
 *          title1: '',
 *          title2: '',
 *          value: '',
 *          unit: ''
 *     },
 *     polygon2: {
 *
 *     }
 *     ...
 * }
 *
 *
 *
 * @param data
 */
var auditPowerStyle = {
    pd1Style: {
        text1: {
            "x": "120",
                "y": "110",
                "fill": "#3EABBE",
                "font-size": "45",
                "font-weight": "bold"
        },
        text2: {
            "x": "220",
            "y": "107",
            "fill": "#3EABBE",
            "font-size": "25",
            "font-weight": "bold"
        },
        value: {
            "x": "80",
                "y": "210",
                "fill": "#fff",
                "font-size": "50",
                "font-weight": "bold"
        },
        unit: {

        }
    },
    pd2Style: {
        text1: {
            "x": "580",
            "y": "110",
            "fill": "#3EABBE",
            "font-size": "45",
            "font-weight": "bold"
        },
        text2: {
            "x": "680",
            "y": "107",
            "fill": "#3EABBE",
            "font-size": "25",
            "font-weight": "bold"
        },
        value: {
            "x": "550",
            "y": "210",
            "fill": "#fff",
            "font-size": "50",
            "font-weight": "bold"
        },
        unit: {

        }
    },
    pd3Style: {
        text1: {
            "x": "120",
            "y": "330",
            "fill": "#3EABBE",
            "font-size": "45",
            "font-weight": "bold"
        },
        text2: {
            "x": "120",
            "y": "380",
            "fill": "#3EABBE",
            "font-size": "20",
            "font-weight": "bold"
        },
        value: {
            "x": "120",
            "y": "460",
            "fill": "#fff",
            "font-size": "50",
            "font-weight": "bold"
        },
        unit: {
            "x": "230",
            "y": "460",
            "fill": "#fff",
            "font-size": "25",
            "font-weight": "bold"
        }
    },
    pd4Style: {
        text1: {
            "x": "420",
            "y": "330",
            "fill": "#3EABBE",
            "font-size": "45",
            "font-weight": "bold"
        },
        text2: {
            "x": "420",
            "y": "380",
            "fill": "#3EABBE",
            "font-size": "20",
            "font-weight": "bold"
        },
        value: {
            "x": "420",
            "y": "460",
            "fill": "#fff",
            "font-size": "50",
            "font-weight": "bold"
        },
        unit: {
            "x": "490",
            "y": "460",
            "fill": "#fff",
            "font-size": "25",
            "font-weight": "bold"
        }
    },
    pd5Style: {
        text1: {
            "x": "690",
            "y": "330",
            "fill": "#3EABBE",
            "font-size": "45",
            "font-weight": "bold"
        },
        text2: {
            "x": "690",
            "y": "380",
            "fill": "#3EABBE",
            "font-size": "20",
            "font-weight": "bold"
        },
        value: {
            "x": "690",
            "y": "460",
            "fill": "#fff",
            "font-size": "50",
            "font-weight": "bold"
        },
        unit: {
            "x": "790",
            "y": "460",
            "fill": "#fff",
            "font-size": "25",
            "font-weight": "bold"
        }
    }
};


/**
 * 外边框的模糊效果
 */
var frameShadow = svgUtils.createFrameShadow({
    "id": "shadow1",
    "in": "SourceGraphic",
    "stdDeviation": "5"
});

/**
 * 初始化方法
 * @param parentEle
 * @param data
 */
function initAuditPowerPolygon(parentEle, data){
    var svg = svgUtils.createSvgTag('svg', {
        "xmlns": svgNamespace,
        "width": "100%",
        "height": "100%",
        "viewBox": "0 0 920 520"
    });
    svg.appendChild(frameShadow);
    insertFrame(svg);
    insertDataFrame(svg,data);
    parentEle.appendChild(svg);
}

/**
 * 插入数据展示
 * @param svg
 * @param data
 */
function insertDataFrame(svg, data){
    var pd1 = data.polygon1;
    var pd2 = data.polygon2;
    var pd3 = data.polygon3;
    var pd4 = data.polygon4;
    var pd5 = data.polygon5;

    // 创建text
    insertTextTag(svg, pd1, auditPowerStyle.pd1Style);
    insertTextTag(svg, pd2, auditPowerStyle.pd2Style);
    insertTextTag(svg, pd3, auditPowerStyle.pd3Style);
    insertTextTag(svg, pd4, auditPowerStyle.pd4Style);
    insertTextTag(svg, pd5, auditPowerStyle.pd5Style);
}

/**
 * 插入数据展示
 * @param gTag
 * @param data
 * @param options
 */
function insertTextTag(gTag, data, options){
    var text1 = svgUtils.createSvgTag('text', options.text1);
    text1.innerHTML = data.title1;

    var text2 = svgUtils.createSvgTag('text', options.text2);
    text2.innerHTML = data.title2;

    var value = svgUtils.createSvgTag('text', options.value);
    value.innerHTML = data.value;

    var unit = svgUtils.createSvgTag('text', options.unit);
    unit.innerHTML = data.unit;

    gTag.appendChild(text1);
    gTag.appendChild(text2);
    gTag.appendChild(value);
    gTag.appendChild(unit);
}

/**
 * 插入背景边框
 * @param svg
 */
function insertFrame(svg){
    var placeholderPath = svgUtils.createSvgTag('path', {
        "d": "M0 0L920 0L920 520L0 520Z",
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none"
    });
    var shadowPath = svgUtils.createSvgTag('path', {
        "d": "M10 260L10 240L90 35L110 20L350 20L370 40L550 40L570 20L810 20L830 35L910 240L910 280L830 485L810 500L570 500L550 480L370 480L350 500L110 500L90 485L10 280Z",
        "stroke": "#3EABBE",
        "stroke-width": "3",
        "fill": "none",
        "filter": "url(#shadow1)"
    });
    var path1 = svgUtils.createSvgTag('path', {
       "d": "M10 260L10 240L90 35L110 20L350 20L370 40L550 40L570 20L810 20L830 35L910 240L910 280L830 485L810 500L570 500L550 480L370 480L350 500L110 500L90 485L10 280Z",
        "stroke": "#3EABBE",
        "stroke-width": "2",
        "fill": "none"
    });
    var path2 = svgUtils.createSvgTag('path', {
        "d": "M20 260L900 260",
        "stroke": "#3EABBE",
        "stroke-width": "2",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path3 = svgUtils.createSvgTag('path', {
        "d": "M375 45L545 45L460 260L375 45Z",
        "stroke": "#3EABBE",
        "stroke-width": "1",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path4 = svgUtils.createSvgTag('path', {
        "d": "M265 260L350 500Z",
        "stroke": "#3EABBE",
        "stroke-width": "1",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path5 = svgUtils.createSvgTag('path', {
        "d": "M655 260L570 500Z",
        "stroke": "#3EABBE",
        "stroke-width": "1",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    svg.appendChild(placeholderPath);
    svg.appendChild(shadowPath);
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(path4);
    svg.appendChild(path5);
}