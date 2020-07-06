"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var _path = __importStar(require("path"));
/**
 * @description Promise fs.readdir
 */
function readDir(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, paths) {
            if (err) {
                reject(err);
            }
            else {
                resolve(paths);
            }
        });
    });
}
exports.readDir = readDir;
/**
 * @description Promise fs.stat
 */
function stat(path, options) {
    if (options === void 0) { options = { bigint: false }; }
    return new Promise(function (resolve, reject) {
        fs.stat(path, options, function (err, stats) {
            if (err) {
                reject(err);
            }
            else {
                resolve(stats);
            }
        });
    });
}
exports.stat = stat;
/**
 * @description Promise fs.mkdir
 */
function mkDir(path, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        fs.mkdir(path, options, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.mkDir = mkDir;
/**
 * @description Promise fs.access
 */
function access(path, mode) {
    if (mode === void 0) { mode = fs.constants.F_OK; }
    return new Promise(function (resolve, reject) {
        fs.access(path, mode, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.access = access;
/**
 * @description Promise fs.unlink
 */
function unlink(path) {
    return new Promise(function (resolve, reject) {
        fs.unlink(path, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
/**
 * @description Promise fs.rmdir
 */
function rmDir(path) {
    return new Promise(function (resolve, reject) {
        fs.rmdir(path, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });
    });
}
/**
 * @description Recursively empty the folder.
 */
function emptyDir(path) {
    return __awaiter(this, void 0, void 0, function () {
        var paths, i, fullPath, stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readDir(path)];
                case 1:
                    paths = _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < paths.length)) return [3 /*break*/, 9];
                    fullPath = path + '/' + paths[i];
                    return [4 /*yield*/, stat(fullPath)];
                case 3:
                    stats = _a.sent();
                    if (!stats.isFile()) return [3 /*break*/, 5];
                    return [4 /*yield*/, unlink(fullPath)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 5:
                    if (!stats.isDirectory()) return [3 /*break*/, 8];
                    return [4 /*yield*/, emptyDir(fullPath)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, rmDir(fullPath)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/, true];
            }
        });
    });
}
exports.emptyDir = emptyDir;
/**
 * @description Recursively empty the folder,
 * the folder will be created if it does not exist.
 */
function clearDir(path) {
    return __awaiter(this, void 0, void 0, function () {
        var isExists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, access(path)];
                case 1:
                    isExists = _a.sent();
                    if (!!isExists) return [3 /*break*/, 3];
                    return [4 /*yield*/, mkDir(path)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [4 /*yield*/, emptyDir(path)];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.clearDir = clearDir;
/**
 * @description Delete the specified extname file.
 */
function unlinkDirFileByExtname(path, extnames) {
    if (extnames === void 0) { extnames = []; }
    return __awaiter(this, void 0, void 0, function () {
        var paths, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readDir(path)];
                case 1:
                    paths = _a.sent();
                    _loop_1 = function (i) {
                        var fullPath, stats, cxtname_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fullPath = path + '/' + paths[i];
                                    return [4 /*yield*/, stat(fullPath)];
                                case 1:
                                    stats = _a.sent();
                                    if (!stats.isFile()) return [3 /*break*/, 3];
                                    cxtname_1 = _path.extname(fullPath);
                                    if (extnames.findIndex(function (name) { return name === cxtname_1; }) === -1)
                                        return [2 /*return*/, "continue"];
                                    return [4 /*yield*/, unlink(fullPath)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 5];
                                case 3:
                                    if (!stats.isDirectory()) return [3 /*break*/, 5];
                                    return [4 /*yield*/, unlinkDirFileByExtname(fullPath, extnames)];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < paths.length)) return [3 /*break*/, 5];
                    return [5 /*yield**/, _loop_1(i)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, true];
            }
        });
    });
}
exports.unlinkDirFileByExtname = unlinkDirFileByExtname;
/**
 * @description Copy the folder to the specified location.
 * If the folder already exists in the specified location,
 * the folder will be cleared.
 */
function copyDir(path, dest) {
    return __awaiter(this, void 0, void 0, function () {
        var paths, i, fullPath, fullDest, stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!path || !dest)
                        throw new Error('copyDir: Missing parameters!');
                    return [4 /*yield*/, clearDir(dest)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, readDir(path)];
                case 2:
                    paths = _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < paths.length)) return [3 /*break*/, 9];
                    fullPath = path + '/' + paths[i];
                    fullDest = dest + '/' + paths[i];
                    return [4 /*yield*/, stat(fullPath)];
                case 4:
                    stats = _a.sent();
                    if (!stats.isFile()) return [3 /*break*/, 5];
                    fs.createReadStream(fullPath).pipe(fs.createWriteStream(fullDest));
                    return [3 /*break*/, 8];
                case 5:
                    if (!stats.isDirectory()) return [3 /*break*/, 8];
                    return [4 /*yield*/, mkDir(fullDest)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, copyDir(fullPath, fullDest)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 3];
                case 9: return [2 /*return*/, true];
            }
        });
    });
}
exports.copyDir = copyDir;
function copyFile(path, dest) {
    return __awaiter(this, void 0, void 0, function () {
        var stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!path || !dest)
                        throw new Error('copyFile: Missing parameters!');
                    return [4 /*yield*/, stat(path)];
                case 1:
                    stats = _a.sent();
                    if (!stats.isFile())
                        throw new Error(path + " is not a file!");
                    fs.createReadStream(path).pipe(fs.createWriteStream(dest));
                    return [2 /*return*/];
            }
        });
    });
}
exports.copyFile = copyFile;
/**
 * @description Recursively traverse all files.
 */
function fileForEach(path, 
// eslint-disable-next-line
callback, filterDir, filterFile) {
    if (filterDir === void 0) { filterDir = []; }
    if (filterFile === void 0) { filterFile = []; }
    return __awaiter(this, void 0, void 0, function () {
        var isRegExpTarget, paths, i, fullPath, stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!path || !callback)
                        throw new Error('fileForEach missing parameters!');
                    isRegExpTarget = function (regs, _) {
                        return !!(_ && regs.findIndex(function (_r) { return _r.test(_); }) !== -1);
                    };
                    return [4 /*yield*/, readDir(path)];
                case 1:
                    paths = _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < paths.length)) return [3 /*break*/, 8];
                    fullPath = path + '/' + paths[i];
                    return [4 /*yield*/, stat(fullPath)];
                case 3:
                    stats = _a.sent();
                    if (!(stats.isFile() && !isRegExpTarget(filterFile, fullPath))) return [3 /*break*/, 5];
                    return [4 /*yield*/, callback(fullPath)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    if (!(stats.isDirectory() && !isRegExpTarget(filterDir, fullPath))) return [3 /*break*/, 7];
                    return [4 /*yield*/, fileForEach(fullPath, callback, filterDir, filterFile)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8: return [2 /*return*/, true];
            }
        });
    });
}
exports.fileForEach = fileForEach;
/**
 * @description fs.readFile
 */
function readFile(path, options) {
    if (options === void 0) { options = { encoding: 'utf-8' }; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readFile(path, options, function (err, data) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(data);
                        }
                    });
                })];
        });
    });
}
exports.readFile = readFile;
/**
 * @description fs.writeFile
 */
function writeFile(path, 
// eslint-disable-next-line
data, option) {
    if (option === void 0) { option = 'utf8'; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.writeFile(path, data, option, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(true);
                        }
                    });
                })];
        });
    });
}
exports.writeFile = writeFile;
/**
 * @description Traverse all folders.
 */
// eslint-disable-next-line
function dirForEach(path, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var paths, i, fullPath, stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!path || !callback)
                        throw new Error('dirForEach: Missing parameters!');
                    return [4 /*yield*/, readDir(path)];
                case 1:
                    paths = _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < paths.length)) return [3 /*break*/, 6];
                    fullPath = path + '/' + paths[i];
                    return [4 /*yield*/, stat(fullPath)];
                case 3:
                    stats = _a.sent();
                    if (!stats.isDirectory()) return [3 /*break*/, 5];
                    return [4 /*yield*/, callback(fullPath)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 2];
                case 6: return [2 /*return*/, true];
            }
        });
    });
}
exports.dirForEach = dirForEach;
function isDir(path) {
    return __awaiter(this, void 0, void 0, function () {
        var stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stat(path).catch(function (_) { return false; })];
                case 1:
                    stats = _a.sent();
                    if (!stats)
                        return [2 /*return*/, false];
                    return [2 /*return*/, stats.isDirectory()];
            }
        });
    });
}
exports.isDir = isDir;
