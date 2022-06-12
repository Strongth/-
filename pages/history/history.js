// pages/history/history.js
import * as echarts from '../ec-canvas/echarts';

function getOption(humi) {
  var option = {
    //定义图标的标题和颜色
      title: {
        text: '历史数据',
        left: 'center'
      },
      color: ["#37A2DA"],
      //定义你图标的线的类型种类
      legend: {
      data: ['A'],
      top: 50,
      left: 'center',
      backgroundColor: 'red',
      z: 100
      },
      grid: {
      containLabel: true
    },
    //当你选中数据时的提示框
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      //	x轴
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // data: [0,1,2,4,5,6,7],//x轴数据
        // x轴的字体样式
        axisLabel: {
          show: true,
          textStyle: {
            color: '#000',
            fontSize: '14',
          }
        },
        // 控制网格线是否显示
        splitLine: {
          show: true,
          //  改变轴线颜色
          lineStyle: {
            // 使用深浅的间隔色
            color: ['#aaaaaa']
          }
        },
        // x轴的颜色和宽度
        axisLine: {
          lineStyle: {
            color: '#000',
            width: 1,   //这里是坐标轴的宽度,可以去掉
          }
        }
        // show: false //是否显示坐标
      },
      yAxis: {
        x: 'center',
        type: 'value',
        //网格线
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        // show: false
      },
      series: [{
        name: '数据',
        type: 'line',
        smooth: true,
        data: humi||[]
      }]
    };
  return option;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: null
    },
    show1 : {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let dataBase = JSON.parse(options.listData);
    var snow = [parseInt(dataBase[0]),
    parseInt(dataBase[1]),
    parseInt(dataBase[2]),
    parseInt(dataBase[3]),
    parseInt(dataBase[4]),
    parseInt(dataBase[5]),
    parseInt(dataBase[6]),
    parseInt(dataBase[7]),
    parseInt(dataBase[8]),
    parseInt(dataBase[9]),
  ]
  that.setData({
    show1:snow
  })
  console.log(snow)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var ecc = {onInit: this.initChart }
    that.setData({
      ec :  ecc
    })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
 initChart(canvas, width, height) {
  var that=this;
  console.log("1111111",that.data.show1)
  const chart = echarts.init(canvas, null, {
    width:width,
    height: height
  });
  canvas.setChart(chart);


  var optionss = getOption(this.data.show1);
  chart.setOption(optionss);
  return chart;
}

})

