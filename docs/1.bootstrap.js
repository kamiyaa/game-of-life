(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: Cell, Universe, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_instanceof_Window_04bba8b54ef81db0, __wbg_document_f023a2b0d5b3d060, __wbg_getElementById_87fd6611f51eaa51, __wbg_instanceof_CanvasRenderingContext2d_a3cc87f343a7e4b9, __wbg_fillStyle_d72ab49007d815ac, __wbg_beginPath_06a3bee6af57dd8d, __wbg_stroke_f2e62ebca12793e8, __wbg_lineTo_72f7b15f12007abe, __wbg_moveTo_218a2b604aa328ea, __wbg_fillRect_bb3ca120d93cd2f5, __wbg_instanceof_HtmlCanvasElement_69ef8df401e5d26d, __wbg_getContext_fc68e7f629e2b10a, __wbg_newnoargs_4f6527054d7f1f1d, __wbg_call_183c0b733b35a027, __wbg_globalThis_eb9027a878db64ad, __wbg_self_69a78003cf074413, __wbg_window_db757fdea9443777, __wbg_global_8efdae4f126ac8b4, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbindgen_debug_string, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_04bba8b54ef81db0\", function() { return __wbg_instanceof_Window_04bba8b54ef81db0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_f023a2b0d5b3d060\", function() { return __wbg_document_f023a2b0d5b3d060; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getElementById_87fd6611f51eaa51\", function() { return __wbg_getElementById_87fd6611f51eaa51; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_CanvasRenderingContext2d_a3cc87f343a7e4b9\", function() { return __wbg_instanceof_CanvasRenderingContext2d_a3cc87f343a7e4b9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillStyle_d72ab49007d815ac\", function() { return __wbg_fillStyle_d72ab49007d815ac; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_beginPath_06a3bee6af57dd8d\", function() { return __wbg_beginPath_06a3bee6af57dd8d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stroke_f2e62ebca12793e8\", function() { return __wbg_stroke_f2e62ebca12793e8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_lineTo_72f7b15f12007abe\", function() { return __wbg_lineTo_72f7b15f12007abe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_moveTo_218a2b604aa328ea\", function() { return __wbg_moveTo_218a2b604aa328ea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fillRect_bb3ca120d93cd2f5\", function() { return __wbg_fillRect_bb3ca120d93cd2f5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_HtmlCanvasElement_69ef8df401e5d26d\", function() { return __wbg_instanceof_HtmlCanvasElement_69ef8df401e5d26d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getContext_fc68e7f629e2b10a\", function() { return __wbg_getContext_fc68e7f629e2b10a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4f6527054d7f1f1d\", function() { return __wbg_newnoargs_4f6527054d7f1f1d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_183c0b733b35a027\", function() { return __wbg_call_183c0b733b35a027; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_eb9027a878db64ad\", function() { return __wbg_globalThis_eb9027a878db64ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_69a78003cf074413\", function() { return __wbg_self_69a78003cf074413; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_db757fdea9443777\", function() { return __wbg_window_db757fdea9443777; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_8efdae4f126ac8b4\", function() { return __wbg_global_8efdae4f126ac8b4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(e) {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,Alive:1, });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {string} canvas_name\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(canvas_name, width, height) {\n        var ptr0 = passStringToWasm0(canvas_name, _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](ptr0, len0, width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](8, this.ptr);\n            var r0 = getInt32Memory0()[8 / 4 + 0];\n            var r1 = getInt32Memory0()[8 / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, column);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    set_alive(row, column) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_alive\"](this.ptr, row, column);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    set_dead(row, column) {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_dead\"](this.ptr, row, column);\n    }\n    /**\n    * @returns {boolean}\n    */\n    tick() {\n        var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    */\n    draw_grid() {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_draw_grid\"](this.ptr);\n    }\n    /**\n    */\n    draw_cells() {\n        _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_draw_cells\"](this.ptr);\n    }\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_Window_04bba8b54ef81db0 = function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    return ret;\n};\n\nconst __wbg_document_f023a2b0d5b3d060 = function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nconst __wbg_getElementById_87fd6611f51eaa51 = function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n};\n\nconst __wbg_instanceof_CanvasRenderingContext2d_a3cc87f343a7e4b9 = function(arg0) {\n    var ret = getObject(arg0) instanceof CanvasRenderingContext2D;\n    return ret;\n};\n\nconst __wbg_fillStyle_d72ab49007d815ac = function(arg0, arg1) {\n    getObject(arg0).fillStyle = getObject(arg1);\n};\n\nconst __wbg_beginPath_06a3bee6af57dd8d = function(arg0) {\n    getObject(arg0).beginPath();\n};\n\nconst __wbg_stroke_f2e62ebca12793e8 = function(arg0) {\n    getObject(arg0).stroke();\n};\n\nconst __wbg_lineTo_72f7b15f12007abe = function(arg0, arg1, arg2) {\n    getObject(arg0).lineTo(arg1, arg2);\n};\n\nconst __wbg_moveTo_218a2b604aa328ea = function(arg0, arg1, arg2) {\n    getObject(arg0).moveTo(arg1, arg2);\n};\n\nconst __wbg_fillRect_bb3ca120d93cd2f5 = function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);\n};\n\nconst __wbg_instanceof_HtmlCanvasElement_69ef8df401e5d26d = function(arg0) {\n    var ret = getObject(arg0) instanceof HTMLCanvasElement;\n    return ret;\n};\n\nconst __wbg_getContext_fc68e7f629e2b10a = function(arg0, arg1, arg2) {\n    try {\n        var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbg_newnoargs_4f6527054d7f1f1d = function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbg_call_183c0b733b35a027 = function(arg0, arg1) {\n    try {\n        var ret = getObject(arg0).call(getObject(arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbg_globalThis_eb9027a878db64ad = function() {\n    try {\n        var ret = globalThis.globalThis;\n        return addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbg_self_69a78003cf074413 = function() {\n    try {\n        var ret = self.self;\n        return addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbg_window_db757fdea9443777 = function() {\n    try {\n        var ret = window.window;\n        return addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbg_global_8efdae4f126ac8b4 = function() {\n    try {\n        var ret = global.global;\n        return addHeapObject(ret);\n    } catch (e) {\n        handleError(e)\n    }\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_render, universe_width, universe_height, universe_cells, universe_toggle_cell, universe_set_alive, universe_set_dead, universe_tick, universe_draw_grid, universe_draw_cells, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life.js */ \"../pkg/wasm_game_of_life.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst CELL_SIZE = 15 | 0;\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\nconst ctx = canvas.getContext('2d');\n\nlet universe = null;\nlet universe_width = 0;\nlet universe_height = 0;\n\nlet mouse_down = false;\n\ncanvas.addEventListener(\"mousedown\", event => {\n\tmouse_down = true;\n});\n\ncanvas.addEventListener(\"mouseup\", event => {\n\tmouse_down = false;\n});\n\ncanvas.addEventListener(\"mousemove\", event => {\n\tif (!paused || !mouse_down) {\n\t\treturn;\n\t}\n\tconst boundingRect = canvas.getBoundingClientRect();\n\n\tconst scaleX = canvas.width / boundingRect.width;\n\tconst scaleY = canvas.height / boundingRect.height;\n\n\tconst canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n\tconst canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n\tconst row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), universe_height - 1);\n\tconst col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), universe_width - 1);\n\n\tuniverse.set_alive(row, col);\n\n\tuniverse.draw_cells();\n});\n\nconst createCanvasBtn = document.getElementById(\"CreateCanvas\");\nfunction createUniverse() {\n\tconst widthField = document.getElementById(\"CanvasWidth\");\n\tconst width = widthField.value;\n\n\tconst heightField = document.getElementById(\"CanvasHeight\");\n\tconst height = heightField.value;\n\n\tcanvas.height = (CELL_SIZE + 1) * height + 1;\n\tcanvas.width = (CELL_SIZE + 1) * width + 1;\n\n\tuniverse = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(\"game-of-life-canvas\", width, height);\n\tuniverse_width = universe.width();\n\tuniverse_height = universe.height();\n\n\tuniverse.draw_grid();\n\tuniverse.draw_cells();\n}\ncreateCanvasBtn.addEventListener(\"click\", event => {\n\tcreateUniverse();\n});\n\nlet animationId = null;\n\nlet paused = true;\nlet interval = document.getElementById(\"CanvasUpdateInterval\").value;\n\nconst isPaused = () => {\n\treturn animationId === null;\n};\n\nconst play = () => {\n\tif (universe === null) {\n\t\treturn;\n\t}\n\tinterval = document.getElementById(\"CanvasUpdateInterval\").value;\n\tpaused = false;\n\tplayPauseButton.textContent = \"Pause\";\n\trenderLoop();\n};\n\nconst pause = () => {\n\tplayPauseButton.textContent = \"Play\";\n\tcancelAnimationFrame(animationId);\n\tanimationId = null;\n\tpaused = true;\n};\n\nconst renderLoop = () => {\n\tsetTimeout( () => {\n\t\tif (paused) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (!universe.tick()) {\n\t\t\tpause();\n\t\t}\n\t\tuniverse.draw_cells();\n\t\tanimationId = requestAnimationFrame(renderLoop);\n\n\t}, interval);\n};\n\nconst playPauseButton = document.getElementById(\"play-pause\");\nplayPauseButton.textContent = \"Play\";\nplayPauseButton.addEventListener(\"click\", event => {\n\tif (isPaused()) {\n\t\tplay();\n\t} else {\n\t\tpause();\n\t}\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./index.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\n  background: #141a30;\\n  margin: 0;\\n  z-index: 0; }\\n\\n.flex_group {\\n  background-color: #fefefe;\\n  border: none;\\n  border-width: 0;\\n  border-radius: 6px;\\n  box-shadow: 0 0 0.3rem 0.001rem #999;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: \\\"IBM Plex Sans\\\", sans-serif;\\n  margin: 1rem;\\n  padding: 40px 40px 40px 40px; }\\n  .flex_group h1 {\\n    margin: 0;\\n    padding: 0.6rem 0 0.2rem 0; }\\n  .flex_group h3 {\\n    margin: 0;\\n    padding: 0; }\\n  .flex_group .block_group {\\n    display: block; }\\n  .flex_group .flex_group {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between; }\\n  .flex_group input[type=text], .flex_group input[type=email], .flex_group input[type=password] {\\n    flex: 3;\\n    font-size: 14px;\\n    margin: 0.4rem 0 1rem 0;\\n    padding: 14px 8px; }\\n  .flex_group input[type=checkbox] {\\n    margin: 0 0.7rem 0 0.4rem; }\\n  .flex_group label {\\n    flex: 1; }\\n\\n.canvas_group {\\n  background-color: #fefefe;\\n  border: none;\\n  border-width: 0;\\n  border-radius: 6px;\\n  box-shadow: 0 0 0.3rem 0.001rem #999;\\n  font-family: \\\"IBM Plex Sans\\\", sans-serif;\\n  margin: 1rem;\\n  padding: 40px 40px 40px 40px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

}]);