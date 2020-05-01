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

```typescript
type stat = (
  path: fs.PathLike,
  options: fs.StatOptions = { bigint: false }
) => Promise<fs.Stats | fs.BigIntStats | false>
```

#### mkDir

```typescript
type mkDir = (path: fs.PathLike, options: fs.MakeDirectoryOptions = {}) => Promise<boolean>
```

#### access

```typescript
type access = (path: fs.PathLike, mode = fs.constants.F_OK) => Promise<boolean>
```

#### copyDir

```typescript
type copyDir = (path: fs.PathLike, dest: string) => Promise<boolean>
```

#### readDir

```typescript
type readDir = (path: fs.PathLike) => Promise<string[] | false>
```

#### clearDir

```typescript
type clearDir = (path: fs.PathLike) => Promise<boolean>
```

#### emptyDir

```typescript
type emptyDir = (path: fs.PathLike) => Promise<boolean>
```

#### readFile

```typescript
type readFile = (
  path: fs.PathLike,
  options: { encoding: string; flag?: string } = { encoding: 'utf8' }
) => Promise<string | false>
```

#### writeFile

```typescript
type writeFile = (
  path: fs.PathLike,
  data: any,
  option: fs.WriteFileOptions = 'utf8'
) => Promise<boolean>
```

#### dirForEach

```typescript
type dirForEach = (path: fs.PathLike, callback: (path: string) => any) => Promise<boolean>
```

#### fileForEach

```typescript
type fileForEach = (path: fs.PathLike, callback: (path: string) => any) => Promise<boolean>
```

#### unlinkDirFileByExtname

```typescript
type unlinkDirFileByExtname = (path: fs.PathLike, extnames: string[] = []) => Promise<boolean>
```
