/**
 * 堆栈概念与垃圾回收机制
 * */


/**
 * 存取方式
 * 	1、栈	先进后出，后进先出
 * 	2、堆	无序存取，根据引用直接获取
 * 	3、队列	先进先出，后进后出（定时器那里会讲）
 *
*/

/**
 *  内存空间（存储位置）
 *
 * 	1、栈内存（堆栈内存）			2、堆内存
 * 	存储基本数据类型				存储引用数据类型
 * 	按值访问						按引用访问
 * 	存储的值大小固定				存储的值大小不定，可动态调整
 * 	系统自动分配空间				手动分配空间
 * 	系统自动释放空间				手动释放空间
 * 	主要用来执行程序				主要用来存放对象
 * 	空间小，运行效率高			空间大，但是运行效率相对较低
 * 	先进后出，后进先出			无序存储，可根据引用直接获取
 * */

//标记清除
function fn1(){
    var a=10;	//进入环境
    a++;
    a=null;		//离开环境

    var b=20;	//进入环境
    var c='kaivon';
    b=c;		//离开环境
}
fn1();


function fn2(){
    var a = {};
    var b = {};

    a.name = b;
    b.name = a;
    console.log(a,b);
}
fn2();





