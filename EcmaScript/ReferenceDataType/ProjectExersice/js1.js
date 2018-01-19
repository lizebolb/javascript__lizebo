//选项卡的实现思路非常简单，就是当鼠标滑倒一个div上面
//有样式其他的没有

//获得三个标签
var lTab=document.getElementById("tab");
var llists=lTab.getElementsByTagName("li");
		//这里如果是document会导致视频div无法显示
		//注意你要获取的是那个document文档下面的对象
var ldivs=lTab.getElementsByTagName("div");

//函数
function dispearLi() {
    for(var i=0;i<llists.length;i++){
        llists[i].className="";
        ldivs[i].className="";
        llists[i].index=i;
       
    }

}
//利用循环进行事件的绑定，注意代码执行完毕事件也就跟着绑定好了，但是需要在浏览器中进行触发，当一出发就会得到被触发的那个标签的
//对象，所以，在使用过程中，尽量使用this，以避免不必要的麻烦。
for(var i  =0;i<ldivs.length;i++){
    llists[i].onmouseover=function () {
        dispearLi();
        llists[this.index].className="select";
        ldivs[this.index].className="select";
        console.log(this.index);
    }
}
//注意思路，首先获得所需要的标签，在写控制函数，最后时间绑定。这里注意的是，需要我们注意过程是，浏览器加载是先把js代码全部加载进入浏览器
//所以这里进行for循环的时候，注意如果这里的this.index换成j就是错误的代码示范，在加载的时候我们的循环是结束的，所以我们j的值永远是3
//最好的方法就是采用为每个li和div对象自定义添加一个属性index,然后点击谁，谁出发事件就从那个对象进行获取值。


//总结，在js中this是个很好的东西。在后续的学习一定要多使用this。

