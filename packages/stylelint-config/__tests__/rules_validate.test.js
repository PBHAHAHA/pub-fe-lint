const assert = require('assert')
const stylelint = require('stylelint')
const path = require("path")

describe('test rules.test.js', () => {
    it('validate default', async () => {
        const filePaths = [path.join(__dirname, './fixtures/index.css')]
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: true
        })
        // console.log(result.errored)
        if(result?.errored){
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(result => {
                console.log(`❌css测试未通过`,result.warnings)
            });
            assert.fail()
        }
    })

    it('validate scss', async ()  => {
        const filePaths = [path.join(__dirname, './fixtures/index.scss')]
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: true,
        })
        if(result?.errored){
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(result => {
                console.log(`❌scss测试未通过`,result)
            });
            assert.fail()
        }
    })
    it('validate less', async ()  => {
        const filePaths = [path.join(__dirname, './fixtures/index.less')]
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: true,
        })
        if(result?.errored){
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(result => {
                console.log(`❌less测试未通过`,result.warnings)
            });
            assert.fail()
        }
    })
    it('validate vue', async ()  => {
        const filePaths = [path.join(__dirname, './fixtures/index.vue')]
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: true,
        })
        if(result?.errored){
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(result => {
                console.log(`❌vue测试未通过`,result.warnings)
            });
            assert.fail()
        }
    })
})