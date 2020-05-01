/// <reference types="node" />
import * as fs from 'fs';
/**
 * @description Promise fs.readdir
 */
declare function readDir(path: fs.PathLike): Promise<string[] | false>;
/**
 * @description Promise fs.stat
 */
declare function stat(path: fs.PathLike, options?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats | false>;
/**
 * @description Promise fs.mkdir
 */
declare function mkDir(path: fs.PathLike, options?: fs.MakeDirectoryOptions): Promise<boolean>;
/**
 * @description Promise fs.access
 */
declare function access(path: fs.PathLike, mode?: number): Promise<boolean>;
/**
 * @description Recursively empty the folder.
 */
declare function emptyDir(path: fs.PathLike): Promise<boolean>;
/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 */
declare function clearDir(path: fs.PathLike): Promise<boolean>;
/**
 * @description Delete the specified extname file.
 */
declare function unlinkDirFileByExtname(path: fs.PathLike, extnames?: string[]): Promise<boolean>;
/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 */
declare function copyDir(path: fs.PathLike, dest: string): Promise<boolean>;
/**
 * @description Recursively traverse all files.
 */
declare function fileForEach(path: fs.PathLike, callback: (path: string) => any): Promise<boolean>;
/**
 * @description fs.readFile
 */
declare function readFile(path: fs.PathLike, options?: {
    encoding: string;
    flag?: string;
}): Promise<string | false>;
/**
 * @description fs.writeFile
 */
declare function writeFile(path: fs.PathLike, data: any, option?: fs.WriteFileOptions): Promise<boolean>;
/**
 * @description Traverse all folders.
 */
declare function dirForEach(path: fs.PathLike, callback: (path: string) => any): Promise<boolean>;
export { stat, mkDir, access, copyDir, readDir, clearDir, emptyDir, readFile, writeFile, dirForEach, fileForEach, unlinkDirFileByExtname, };
