// 队列

class Queue {
  constructor(length) {
    this.maxCount = length // 支持执行队列最大长度
    this.count = 0 // 当前执行队列长度
    this.list = [] // 待执行任务队列
  }

  add(...args) {
    this.list.push(...args)
    this.start()
  }

  start() {
    if(this.count < this.maxCount && this.list.length) {
      this.count++
      let task = this.list.shift()
      Promise.resolve(task()).then((res) => {
        console.log(res)
        this.count--
        this.start()
      })
    }
  }
}

const queue = new Queue(3)

const createAsyncFun = (timer) => {
  return () => new Promise(resolve => {
    setTimeout(() => resolve(timer), 1000)
  })
}

for(let i = 0; i < 100; i++) {
  queue.add(createAsyncFun(i))
}