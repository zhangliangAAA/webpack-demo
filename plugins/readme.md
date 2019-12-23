Plugin: 开始打包，在某个时刻，帮助我们处理理⼀一些什什么事情的机制
plugin要⽐比loader稍微复杂⼀一些，在webpack的源码中，⽤用plugin的机制还是占有⾮非常⼤大的场景，可以 说plugin是webpack的灵魂
设计模式 事件驱动
  开课吧web全栈架构师
发布订阅 plugin是⼀一个类，⾥里里⾯面包含⼀一个apply函数，接受⼀一个参数，compiler