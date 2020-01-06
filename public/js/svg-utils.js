var svgNamespace = 'http://www.w3.org/2000/svg';

var svgUtils = {
    createSvgTag: function(tagName, options){
        var tempSvg = document.createElementNS(svgNamespace, tagName);
        for(var i in options){
            tempSvg.setAttribute(i, options[i]);
        }
        return tempSvg;
    },
    createFrameShadow: function(options){
        var defs = svgUtils.createSvgTag('defs', {});
        var filter = svgUtils.createSvgTag('filter', {
            "id": options.id
        });

        var blur = svgUtils.createSvgTag('feGaussianBlur', {
            "in": options.in,
            "stdDeviation": options.stdDeviation
        });

        filter.appendChild(blur);
        defs.appendChild(filter);

        return defs;
    }
};