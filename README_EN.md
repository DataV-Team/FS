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
