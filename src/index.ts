import * as fs from 'fs'
import * as _path from 'path'

/**
 * @description Promise fs.readdir
 */
function readDir(path: fs.PathLike): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, paths) => {
      if (err) {
        reject(err)
      } else {
        resolve(paths)
      }
    })
  })
}

/**
 * @description Promise fs.stat
 */
function stat(
  path: fs.PathLike,
  options: fs.StatOptions = { bigint: false }
): Promise<fs.Stats | fs.BigIntStats> {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}

/**
 * @description Promise fs.mkdir
 */
function mkDir(path: fs.PathLike, options: fs.MakeDirectoryOptions = {}): Promise<true> {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Promise fs.access
 */
function access(path: fs.PathLike, mode = fs.constants.F_OK): Promise<true> {
  return new Promise((resolve, reject) => {
    fs.access(path, mode, err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Promise fs.unlink
 */
function unlink(path: fs.PathLike): Promise<true> {
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Promise fs.rmdir
 */
function rmDir(path: fs.PathLike): Promise<true> {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Recursively empty the folder.
 */
async function emptyDir(path: fs.PathLike): Promise<true> {
  const paths = await readDir(path)

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (stats.isFile()) {
      await unlink(fullPath)
    } else if (stats.isDirectory()) {
      await emptyDir(fullPath)

      await rmDir(fullPath)
    }
  }

  return true
}

/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 */
async function clearDir(path: fs.PathLike): Promise<true> {
  const isExists = await access(path)

  if (!isExists) return await mkDir(path)

  return await emptyDir(path)
}

/**
 * @description Delete the specified extname file.
 */
async function unlinkDirFileByExtname(path: fs.PathLike, extnames: string[] = []): Promise<true> {
  const paths = await readDir(path)

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (stats.isFile()) {
      const cxtname = _path.extname(fullPath)
      if (extnames.findIndex(name => name === cxtname) === -1) continue

      await unlink(fullPath)
    } else if (stats.isDirectory()) {
      await unlinkDirFileByExtname(fullPath, extnames)
    }
  }

  return true
}

/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 */
async function copyDir(path: fs.PathLike, dest: string): Promise<true> {
  if (!path || !dest) throw new Error('copyDir: Missing parameters!')

  await clearDir(dest)
  const paths = await readDir(path)

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const fullDest = dest + '/' + paths[i]
    const stats = await stat(fullPath)

    if (stats.isFile()) {
      fs.createReadStream(fullPath).pipe(fs.createWriteStream(fullDest))
    } else if (stats.isDirectory()) {
      await mkDir(fullDest)

      await copyDir(fullPath, fullDest)
    }
  }

  return true
}

async function copyFile(path: fs.PathLike, dest: string): Promise<void> {
  if (!path || !dest) throw new Error('copyFile: Missing parameters!')

  const stats = await stat(path)

  if (!stats.isFile()) throw new Error(`${path} is not a file!`)

  fs.createReadStream(path).pipe(fs.createWriteStream(dest))
}

/**
 * @description Recursively traverse all files.
 */
async function fileForEach(
  path: fs.PathLike,
  // eslint-disable-next-line
  callback: (path: string) => any,
  filterDir: RegExp[] = [],
  filterFile: RegExp[] = []
): Promise<true> {
  if (!path || !callback) throw new Error('fileForEach missing parameters!')

  const isRegExpTarget = (regs: RegExp[], _: string): boolean =>
    !!(_ && regs.findIndex(_r => _r.test(_)) !== -1)

  const paths = await readDir(path)

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (stats.isFile() && !isRegExpTarget(filterFile, fullPath)) {
      await callback(fullPath)
    } else if (stats.isDirectory() && !isRegExpTarget(filterDir, fullPath)) {
      await fileForEach(fullPath, callback, filterDir, filterFile)
    }
  }

  return true
}

/**
 * @description fs.readFile
 */
async function readFile(
  path: fs.PathLike,
  options: { encoding?: BufferEncoding; flag?: string } = { encoding: 'utf-8' }
): Promise<string | Buffer> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

/**
 * @description fs.writeFile
 */
async function writeFile(
  path: fs.PathLike,
  // eslint-disable-next-line
  data: any,
  option: fs.WriteFileOptions = 'utf8'
): Promise<true> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, option, err => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Traverse all folders.
 */
// eslint-disable-next-line
async function dirForEach(path: fs.PathLike, callback: (path: string) => any): Promise<true> {
  if (!path || !callback) throw new Error('dirForEach: Missing parameters!')

  const paths = await readDir(path)

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (stats.isDirectory()) await callback(fullPath)
  }

  return true
}

async function isDir(path: string): Promise<boolean> {
  const stats = await stat(path).catch(_ => false)
  if (!stats) return false

  return (stats as fs.Stats).isDirectory()
}

export {
  stat,
  mkDir,
  isDir,
  access,
  copyDir,
  readDir,
  clearDir,
  copyFile,
  emptyDir,
  readFile,
  writeFile,
  dirForEach,
  fileForEach,
  unlinkDirFileByExtname,
}
