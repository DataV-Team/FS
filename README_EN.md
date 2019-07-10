[中文](./README.md)

<h1 align="center">FS</h1>

<p align="center">
    <a href="https://github.com/jiaming743/FS/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/jiaming743/FS.svg" alt="LICENSE" />
    </a>
    <a href="https://www.npmjs.com/package/@jiaminghi/fs">
      <img src="https://img.shields.io/npm/v/@jiaminghi/fs.svg" alt="LICENSE" />
    </a>
</p>

### Encapsulating some common file system methods with Promise (based Node.js - fs)

- **[stat](#stat)**

  fs.stat.

- **[mkDir](#mkDir)**

  fs.mkdir.

- **[access](#access)**

  fs.access.

- **[copyDir](#copyDir)**

  Copy the folder to the specified location.

- **[readDir](#readDir)**

  fs.readdir.

- **[clearDir](#clearDir)**

  Recursively empty the specified folder.

- **[emptyDir](#emptyDir)**

  Recursively empty the specified folder.

- **[readFile](#readFile)**

  fs.readFile.

- **[writeFile](#writeFile)**

  fs.writeFile.

- **[dirForEach](#dirForEach)**

  Traverse all folders.

- **[fileForEach](#fileForEach)**

  Recursively traverse all files.

- **[unlinkDirFileByExtname](#unlinkDirFileByExtname)**

  Delete the specified extname file.

### Install with npm

```shell
$ npm install @jiaminghi/fs
```

### Use

```javascript
import { readFile } from '@jiaminghi/fs'

// do something
```


<h3 align="center">Examples</h3>

#### stat

```javascript
/**
 * @description Promise fs.stat
 * @param {String|Buffer|URL} path Path
 * @param {Object} options         Options
 * @return {Promise} Promise
 */
function stat (path, options = {}) {
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
function mkDir (path, options = {}) {
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
function access (path, mode = fs.constants.F_OK) {
  // ...
}
```

#### copyDir

```javascript
/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 * @param {String} src  Folder path
 * @param {String} dest Destination folder path
 * @return {Promise} Promise will return a Boolean value
 */
async function copyDir (src, dest) {
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
function readDir (path) {
  // ...
}
```

#### clearDir

```javascript
/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 * @param {String} src Folder path
 * @return {Promise} Promise will return a Boolean value
 */
async function clearDir (src) {
  // ...
}
```

#### emptyDir

```javascript
/**
 * @description Recursively empty the folder.
 * @param {String} src Folder path
 * @return {Promise} Promise will return a Boolean value
 */
async function emptyDir (src) {
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
async function readFile (path, options = 'utf8') {
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
 * @return {Promise} Promise will return a Boolean value
 */
async function writeFile (src, data, option = 'utf8') {
  // ...
}
```

#### dirForEach

```javascript
/**
 * @description Traverse all folders.
 * @param {String} src       Folder path
 * @param {Funtion} callback Callback
 * @return {Promise} Promise
 */
async function dirForEach (src, callback) {
  // ...
}
```

#### fileForEach

```javascript
/**
 * @description Recursively traverse all files.
 * @param {String} src       Folder path
 * @param {Funtion} callback Callback
 * @return {Promise} Promise
 */
async function fileForEach (src, callback) {
  // ...
}
```

#### unlinkDirFileByExtname

```javascript
/**
 * @description Delete the specified extname file.
 * @param {String} src             Folder path
 * @param {Array<String>} extnames Extnames
 * @return {Promise} Promise will return a Boolean value
 */
async function unlinkDirFileByExtname (src, extnames = []) {
  // ...
}
```