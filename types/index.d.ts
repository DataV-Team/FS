/// <reference types="node" />
import * as fs from 'fs';
/**
 * @description Promise fs.readdir
 */
declare function readDir(path: fs.PathLike): Promise<string[]>;
/**
 * @description Promise fs.stat
 */
declare function stat(path: fs.PathLike, options?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats>;
/**
 * @description Promise fs.mkdir
 */
declare function mkDir(path: fs.PathLike, options?: fs.MakeDirectoryOptions): Promise<true>;
/**
 * @description Promise fs.access
 */
declare function access(path: fs.PathLike, mode?: number): Promise<true>;
/**
 * @description Recursively empty the folder.
 */
declare function emptyDir(path: fs.PathLike): Promise<true>;
/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 */
declare function clearDir(path: fs.PathLike): Promise<true>;
/**
 * @description Delete the specified extname file.
 */
declare function unlinkDirFileByExtname(path: fs.PathLike, extnames?: string[]): Promise<true>;
/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 */
declare function copyDir(path: fs.PathLike, dest: string): Promise<true>;
declare function copyFile(path: fs.PathLike, dest: string): Promise<void>;
/**
 * @description Recursively traverse all files.
 */
declare function fileForEach(path: fs.PathLike, callback: (path: string) => any, filterDir?: RegExp[], filterFile?: RegExp[]): Promise<true>;
/**
 * @description fs.readFile
 */
declare function readFile(path: fs.PathLike, options?: {
    encoding?: BufferEncoding;
    flag?: string;
}): Promise<string | Buffer>;
/**
 * @description fs.writeFile
 */
declare function writeFile(path: fs.PathLike, data: any, option?: fs.WriteFileOptions): Promise<true>;
/**
 * @description Traverse all folders.
 */
declare function dirForEach(path: fs.PathLike, callback: (path: string) => any): Promise<true>;
declare function isDir(path: string): Promise<boolean>;
export { stat, mkDir, isDir, access, copyDir, readDir, clearDir, copyFile, emptyDir, readFile, writeFile, dirForEach, fileForEach, unlinkDirFileByExtname, };
