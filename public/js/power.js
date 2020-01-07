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
            "font-size": "40",
            "font-weight": "bold"
        },
        text2: {
            "x": "215",
            "y": "110",
            "fill": "#3EABBE",
            "font-size": "22",
            "font-weight": "bold"
        },
        value: {
            "x": "80",
            "y": "210",
            "fill": "#fff",
            "font-size": "45",
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
            "font-size": "40",
            "font-weight": "bold"
        },
        text2: {
            "x": "675",
            "y": "110",
            "fill": "#3EABBE",
            "font-size": "22",
            "font-weight": "bold"
        },
        value: {
            "x": "550",
            "y": "210",
            "fill": "#fff",
            "font-size": "45",
            "font-weight": "bold"
        },
        unit: {

        }
    },
    pd3Style: {
        text1: {
            "x": "115",
            "y": "325",
            "fill": "#3EABBE",
            "font-size": "40",
            "font-weight": "bold"
        },
        text2: {
            "x": "115",
            "y": "360",
            "fill": "#3EABBE",
            "font-size": "22",
            "font-weight": "bold"
        },
        value: {
            "x": "115",
            "y": "425",
            "fill": "#fff",
            "font-size": "45",
            "font-weight": "bold"
        },
        unit: {
            "x": "205",
            "y": "425",
            "fill": "#fff",
            "font-size": "25",
            "font-weight": "bold"
        }
    },
    pd4Style: {
        text1: {
            "x": "420",
            "y": "325",
            "fill": "#3EABBE",
            "font-size": "40",
            "font-weight": "bold"
        },
        text2: {
            "x": "420",
            "y": "360",
            "fill": "#3EABBE",
            "font-size": "22",
            "font-weight": "bold"
        },
        value: {
            "x": "420",
            "y": "425",
            "fill": "#fff",
            "font-size": "45",
            "font-weight": "bold"
        },
        unit: {
            "x": "485",
            "y": "425",
            "fill": "#fff",
            "font-size": "25",
            "font-weight": "bold"
        }
    },
    pd5Style: {
        text1: {
            "x": "675",
            "y": "325",
            "fill": "#3EABBE",
            "font-size": "40",
            "font-weight": "bold"
        },
        text2: {
            "x": "675",
            "y": "360",
            "fill": "#3EABBE",
            "font-size": "22",
            "font-weight": "bold"
        },
        value: {
            "x": "675",
            "y": "425",
            "fill": "#fff",
            "font-size": "45",
            "font-weight": "bold"
        },
        unit: {
            "x": "760",
            "y": "425",
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
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "width": "100%",
        "height": "100%",
        "viewBox": "0 0 920 480"
    });
    svg.appendChild(frameShadow);
    insertFrame(svg);
    insertImgFrame(svg);
    insertDataFrame(svg,data);
    parentEle.appendChild(svg);
}

function insertImgFrame(svg){
    var busImg = svgUtils.createSvgTag('image', {
        "width":"50",
        "height":"50",
        "x": "80",
        "y": "210",
        "xlink:href": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1002090122,3609295104&fm=26&gp=0.jpg"
    });
    svg.appendChild(busImg)
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
        "d": "M10 240L10 220L90 35L110 20L350 20L370 40L550 40L570 20L810 20L830 35L910 220L910 260L830 445L810 460L570 460L550 440L370 440L350 460L110 460L90 445L10 260Z",
        "stroke": "#3EABBE",
        "stroke-width": "3",
        "fill": "none",
        "filter": "url(#shadow1)"
    });
    var path1 = svgUtils.createSvgTag('path', {
       "d": "M10 240L10 220L90 35L110 20L350 20L370 40L550 40L570 20L810 20L830 35L910 220L910 260L830 445L810 460L570 460L550 440L370 440L350 460L110 460L90 445L10 260Z",
        "stroke": "#3EABBE",
        "stroke-width": "2",
        "fill": "none"
    });
    var path2 = svgUtils.createSvgTag('path', {
        "d": "M20 240L900 240",
        "stroke": "#3EABBE",
        "stroke-width": "2",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path3 = svgUtils.createSvgTag('path', {
        "d": "M375 45L545 45L460 240L375 45",
        "stroke": "#3EABBE",
        "stroke-width": "1",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path4 = svgUtils.createSvgTag('path', {
        "d": "M265 240L350 460Z",
        "stroke": "#3EABBE",
        "stroke-width": "1",
        "fill": "none",
        "stroke-opacity":"0.75"
    });
    var path5 = svgUtils.createSvgTag('path', {
        "d": "M655 240L570 460Z",
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