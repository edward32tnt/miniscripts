
"use strict";

var D3 = require('d3');

var NS = {};
NS.margin = {top:20, right:20, bottom:30, left:50};
NS.box = {width:450, height:300}

var data = [
  {boy:[1,2,3,4],girl:[4,3,2,1]},
  {boy:[10,20,30,40],girl:[40,30,20,10]},
  {boy:[1,2,3,4],girl:[4,3,2,1]},
]

var StackBarChart = function(el) {
  var svg = D3.select(el).select('svg');
  if (svg.empty()) {
    svg = D3.select(el).append('svg')
        .attr('width', 450)
        .attr('height', 300)
      .append('g')
        .attr('class', 'canvas')
        .attr('transform', 'translate('+30+')')
  }

  svg = D3.select(el).select('svg g.canvas');

  var range = {x: NS.box.width - NS.margin.left - NS.margin.right,
              y: NS.box.height - NS.margin.top - NS.margin.bottom};

  //把range.x里的值等分成3分
  var x = D3.scale.ordinal().rangeRoundBands([0, range.x]);
  x.domain(Object.keys(data));

  //把调用的数字 从 0到range.y找出相应的位置
  var y = D3.scale.linear().range([range.y, 0])
  y.domain([D3.max(data, function(d){ return D3.max([D3.max(d.boy), D3.max(d.girl)]) }), 0])

                                  // 使用x函数         文字在下面
  var xAxisScale = D3.svg.axis().scale(x).orient('bottom');

  var xAxis = svg.select('g.xaxis');
  if (xAxis.empty()) {
    xAxis = svg.append('g')
      .attr('class', 'xaxis')
      .attr('transform', 'translate(0, '+(range.y)+')') //移动横线到下面
  }
  xAxis.attr('y', 25).call(xAxisScale); //通过xAxisScale来画下面的字

}

StackBarChart(document.getElementById('el'));
