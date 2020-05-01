import * as fs from 'fs'
import * as path from 'path'

const _path = path

/**
 * @description Promise fs.readdir
 */
function readDir(path: fs.PathLike): Promise<string[] | false> {
  return new Promise(resolve => {
    fs.readdir(path, (err, paths) => {
      if (err) {
        console.error(err)

        resolve(false)
      }

      resolve(paths)
    })
  })
}

/**
 * @description Promise fs.stat
 */
function stat(
  path: fs.PathLike,
  options: fs.StatOptions = { bigint: false }
): Promise<fs.Stats | fs.BigIntStats | false> {
  return new Promise(resolve => {
    fs.stat(path, options, (err, stats) => {
      if (err) {
        console.error(err)

        resolve(false)
      }

      resolve(stats)
    })
  })
}

/**
 * @description Promise fs.mkdir
 */
function mkDir(path: fs.PathLike, options: fs.MakeDirectoryOptions = {}): Promise<boolean> {
  return new Promise(resolve => {
    fs.mkdir(path, options, err => {
      if (err) {
        console.error(err)

        resolve(false)
      }

      resolve(true)
    })
  })
}

/**
 * @description Promise fs.access
 */
function access(path: fs.PathLike, mode = fs.constants.F_OK): Promise<boolean> {
  return new Promise(resolve => {
    fs.access(path, mode, err => {
      if (err) {
        resolve(false)

        return
      }

      resolve(true)
    })
  })
}

/**
 * @description Promise fs.unlink
 */
function unlink(path: fs.PathLike): Promise<boolean> {
  return new Promise(resolve => {
    fs.unlink(path, err => {
      if (err) {
        console.error(err)

        resolve(false)
      }

      resolve(true)
    })
  })
}

/**
 * @description Promise fs.rmdir
 */
function rmDir(path: fs.PathLike): Promise<boolean> {
  return new Promise(resolve => {
    fs.rmdir(path, err => {
      if (err) {
        console.error(err)

        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

/**
 * @description Recursively empty the folder.
 */
async function emptyDir(path: fs.PathLike): Promise<boolean> {
  const paths = await readDir(path)

  if (!paths) {
    console.error('Exception in emptyDir: paths!')

    return false
  }

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (!stats) {
      console.error('Exception in emptyDir: stats!')

      return false
    }

    if (stats.isFile()) {
      const isUnlink = await unlink(fullPath)

      if (!isUnlink) {
        console.error('Exception in emptyDir: isUnlink!')

        return false
      }
    } else if (stats.isDirectory()) {
      const isEmpty = await emptyDir(fullPath)

      if (!isEmpty) {
        console.error('Exception in emptyDir: isEmpty!')

        return false
      }

      if (!(await rmDir(fullPath))) {
        console.error('Exception in emptyDir: rmDir!')

        return false
      }
    }
  }

  return true
}

/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 */
async function clearDir(path: fs.PathLike): Promise<boolean> {
  const isExists = await access(path)

  if (!isExists) return await mkDir(path)

  return await emptyDir(path)
}

/**
 * @description Delete the specified extname file.
 */
async function unlinkDirFileByExtname(
  path: fs.PathLike,
  extnames: string[] = []
): Promise<boolean> {
  const paths = await readDir(path)

  if (!paths) {
    console.error('Exception in unlinkDirFileByExtname: paths!')

    return false
  }

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (!stats) {
      console.error('Exception in unlinkDirFileByExtname: stats!')

      return false
    }

    if (stats.isFile()) {
      const cxtname = _path.extname(fullPath)
      if (extnames.findIndex(name => name === cxtname) === -1) continue

      const isUnlink = await unlink(fullPath)
      if (!isUnlink) {
        console.error('Exception in unlinkDirFileByExtname: isUnlink!')

        return false
      }
    } else if (stats.isDirectory()) {
      const recursive = await unlinkDirFileByExtname(fullPath, extnames)

      if (!recursive) {
        console.error('Exception in unlinkDirFileByExtname: recursive!')

        return false
      }
    }
  }

  return true
}

/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 */
async function copyDir(path: fs.PathLike, dest: string): Promise<boolean> {
  if (!path || !dest) {
    console.error('copyDir: Missing parameters!')

    return false
  }

  const isClear = await clearDir(dest)

  if (!isClear) {
    console.error('Exception in copyDir: isClear!')

    return false
  }

  const paths = await readDir(path)
  if (!paths) {
    console.error('Exception in copyDir: paths!')

    return false
  }

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const fullDest = dest + '/' + paths[i]
    const stats = await stat(fullPath)

    if (!stats) {
      console.error('Exception in copyDir: stats!')

      return false
    }

    if (stats.isFile()) {
      fs.createReadStream(fullPath).pipe(fs.createWriteStream(fullDest))
    } else if (stats.isDirectory()) {
      const isMkdir = await mkDir(fullDest)

      if (!isMkdir) {
        console.error('Exception in copyDir: isMkdir!')

        return false
      }

      const isCopy = await copyDir(fullPath, fullDest)

      if (!isCopy) {
        console.error('Exception in copyDir: isCopy!')

        return false
      }
    }
  }

  return true
}

/**
 * @description Recursively traverse all files.
 */
// eslint-disable-next-line
async function fileForEach(path: fs.PathLike, callback: (path: string) => any): Promise<boolean> {
  if (!path || !callback) {
    console.error('fileForEach missing parameters!')

    return false
  }

  const paths = await readDir(path)
  if (!paths) {
    console.error('Exception in fileForEach: paths!')

    return false
  }

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (!stats) {
      console.error('Exception in fileForEach: stats!')

      return false
    }

    if (stats.isFile()) {
      await callback(fullPath)
    } else if (stats.isDirectory()) {
      const recursive = await fileForEach(fullPath, callback)

      if (!recursive) {
        console.error('Exception in fileForEach: recursive!')

        return false
      }
    }
  }

  return true
}

/**
 * @description fs.readFile
 */
async function readFile(
  path: fs.PathLike,
  options: { encoding: string; flag?: string } = { encoding: 'utf8' }
): Promise<string | false> {
  return new Promise(resolve => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        console.error(err)

        resolve(false)
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
): Promise<boolean> {
  return new Promise(resolve => {
    fs.writeFile(path, data, option, err => {
      if (err) {
        console.error(err)

        resolve(false)
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
async function dirForEach(path: fs.PathLike, callback: (path: string) => any): Promise<boolean> {
  if (!path || !callback) {
    console.error('dirForEach: Missing parameters!')

    return false
  }

  const paths = await readDir(path)
  if (!paths) {
    console.error('Exception in dirForEach: paths!')

    return false
  }

  for (let i = 0; i < paths.length; i++) {
    const fullPath = path + '/' + paths[i]
    const stats = await stat(fullPath)

    if (!stats) {
      console.error('Exception in dirForEach: stats!')

      return false
    }

    if (stats.isDirectory()) await callback(fullPath)
  }

  return true
}

export {
  stat,
  mkDir,
  access,
  copyDir,
  readDir,
  clearDir,
  emptyDir,
  readFile,
  writeFile,
  dirForEach,
  fileForEach,
  unlinkDirFileByExtname,
}
