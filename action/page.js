/**
 * Test Action
 * */
'use strict'

module.exports = async function(ctx) {
    await ctx.render('page', {
        text: 'hello world'
    })
}
