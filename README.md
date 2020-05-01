[ENGLISH](./README_EN.md)

<h1 align="center">FS</h1>

<p align="center">
    <a href="https://github.com/jiaming743/FS/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/jiaming743/FS.svg" alt="LICENSE" />
    </a>
    <a href="https://www.npmjs.com/package/@jiaminghi/fs">
      <img src="https://img.shields.io/npm/v/@jiaminghi/fs.svg" alt="LICENSE" />
    </a>
</p>

### 使用 Promise 封装了一些常用的文件系统方法（基于 Node.js 的 fs 文件系统）

- **[stat](#stat)**

  读取文件状态

- **[mkDir](#mkDir)**

  创建文件夹

- **[access](#access)**

  连接文件

- **[copyDir](#copyDir)**

  复制文件夹到指定位置，若文件夹已存在将被清空后进行复制操作

- **[readDir](#readDir)**

  读取文件夹

- **[clearDir](#clearDir)**

  递归清空文件夹，若文件夹不存在将被创建

- **[emptyDir](#emptyDir)**

  递归清空文件夹

- **[readFile](#readFile)**

  读取文件

- **[writeFile](#writeFile)**

  写入文件

- **[dirForEach](#dirForEach)**

  遍历文件夹

- **[fileForEach](#fileForEach)**

  递归遍历文件

- **[unlinkDirFileByExtname](#unlinkDirFileByExtname)**

  递归删除指定 extname 的文件

### npm 安装

```shell
$ npm install @jiaminghi/fs
```

### 使用

```javascript
import { readFile } from '@jiaminghi/fs'

// do something
```

<h3 align="center">示例</h3>

#### stat

```javascript
/**
 * @description Promise fs.stat
 * @param {String|Buffer|URL} path Path
 * @param {Object} options         Options
 * @return {Promise} Promise
 */
function stat(path, options = {}) {
  // ...
}
```

#### mkDir

```javascript
/**
 * @description Promise fs.mkdir
 * @param {String|Buffer|URL} path Path
 * @param {Object} options         Options
 * @return {Promise} Promise
 */
function mkDir(path, options = {}) {
  // ...
}
```

#### access

```javascript
/**
 * @description Promise fs.access
 * @param {String|Buffer|URL} path Path
 * @param {Number} mode            Mode
 * @return {Promise} Promise will return a Boolean value
 */
function access(path, mode = fs.constants.F_OK) {
  // ...
}
```

#### copyDir

```javascript
/**
 * @description 复制文件夹到指定位置，
 * 如果文件夹已经存在，文件夹将被清空后进行复制操作
 * @param {String} src  Folder path
 * @param {String} dest Destination folder path
 * @return {Promise} Promise将返回一个布尔值
 */
async function copyDir(src, dest) {
  // ...
}
```

#### readDir

```javascript
/**
 * @description Promise fs.readdir
 * @param {String|Buffer|URL|FileHandle} path Path
 * @return {Promise} Promise
 */
function readDir(path) {
  // ...
}
```

#### clearDir

```javascript
/**
 * @description 递归清空文件夹,
 * 如果文件夹不存在，它将被自动创建.
 * @param {String} src Folder path
 * @return {Promise} Promise将返回一个布尔值
 */
async function clearDir(src) {
  // ...
}
```

#### emptyDir

```javascript
/**
 * @description 递归清空文件夹
 * @param {String} src Folder path
 * @return {Promise} Promise将返回一个布尔值
 */
async function emptyDir(src) {
  // ...
}
```

#### readFile

```javascript
/**
 * @description fs.readFile
 * @param {String|Buffer|URL|Integer} path File path
 * @param {Object|String} options          Options
 * @return {Promise} Promise
 */
async function readFile(path, options = 'utf8') {
  // ...
}
```

#### writeFile

```javascript
/**
 * @description fs.writeFile
 * @param {String|Buffer|URL|Integer} path         File path
 * @param {String|Buffer|TypedArray|DataView} data Data
 * @param {Object|String} options                  Options
 * @return {Promise} Promise将返回一个布尔值
 */
async function writeFile(src, data, option = 'utf8') {
  // ...
}
```

#### dirForEach

```javascript
/**
 * @description 遍历文件夹.
 * @param {String} src       Folder path
 * @param {Funtion} callback Callback
 * @return {Promise} Promise
 */
async function dirForEach(src, callback) {
  // ...
}
```

#### fileForEach

```javascript
/**
 * @description 递归遍历文件.
 * @param {String} src       Folder path
 * @param {Funtion} callback Callback
 * @return {Promise} Promise
 */
async function fileForEach(src, callback) {
  // ...
}
```

#### unlinkDirFileByExtname

```javascript
/**
 * @description 删除指定extname的文件.
 * @param {String} src             Folder path
 * @param {Array<String>} extnames Extnames
 * @return {Promise} Promise将返回一个布尔值
 */
async function unlinkDirFileByExtname(src, extnames = []) {
  // ...
}
```
