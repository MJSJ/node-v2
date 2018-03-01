'use strict'

const app = require('@mjsj/node-server')

app.run({
    appRoot: __dirname,
    ajax: true
}, async function() {
    // 启动过程中的异步流程放在这里， 也可以在这里挂中间件上去
})
