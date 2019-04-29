const fs = require('fs-extra')
const path = require('path')

const readFiles = async (filePath, name, callback) => {
  const files = fs.readdirSync(filePath)
  files.forEach(file => {
    const filedir = path.join(filePath, file)
    fs.stat(filedir, (error, stats) => {
      if (error) {
        console.warn('获取文件stats失败', error)
      } else {
        const isFile = stats.isFile() // file
        const isDir = stats.isDirectory() //dir
        if (isFile && filedir.indexOf(name) > -1) {
          callback && callback(filedir)
        }
        isDir && readFiles(filedir, name, callback)
      }
    })
  })
}

const componentsPath = 'src/components'
readFiles(path.join(__dirname, '../', componentsPath), '.less', file => {
  console.log(file)
  fs.outputFileSync(
    file.replace(componentsPath, 'publish/lib'),
    fs.readFileSync(file)
  )
})
