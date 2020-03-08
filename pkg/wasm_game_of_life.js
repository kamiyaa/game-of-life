import * as wasm from './wasm_game_of_life_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? require('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function handleError(e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
}
/**
*/
export const Cell = Object.freeze({ Dead:0,Alive:1, });
/**
*/
export class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_universe_free(ptr);
    }
    /**
    * @param {string} canvas_name
    * @param {number} width
    * @param {number} height
    * @returns {Universe}
    */
    static new(canvas_name, width, height) {
        var ptr0 = passStringToWasm0(canvas_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.universe_new(ptr0, len0, width, height);
        return Universe.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    render() {
        try {
            wasm.universe_render(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {number}
    */
    width() {
        var ret = wasm.universe_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        var ret = wasm.universe_height(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cells() {
        var ret = wasm.universe_cells(this.ptr);
        return ret;
    }
    /**
    * @param {number} row
    * @param {number} column
    */
    toggle_cell(row, column) {
        wasm.universe_toggle_cell(this.ptr, row, column);
    }
    /**
    * @param {number} row
    * @param {number} column
    */
    set_alive(row, column) {
        wasm.universe_set_alive(this.ptr, row, column);
    }
    /**
    * @param {number} row
    * @param {number} column
    */
    set_dead(row, column) {
        wasm.universe_set_dead(this.ptr, row, column);
    }
    /**
    * @returns {boolean}
    */
    tick() {
        var ret = wasm.universe_tick(this.ptr);
        return ret !== 0;
    }
    /**
    */
    draw_grid() {
        wasm.universe_draw_grid(this.ptr);
    }
    /**
    */
    draw_cells() {
        wasm.universe_draw_cells(this.ptr);
    }
}

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export const __wbg_instanceof_Window_04bba8b54ef81db0 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

export const __wbg_document_f023a2b0d5b3d060 = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_getElementById_87fd6611f51eaa51 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_instanceof_CanvasRenderingContext2d_a3cc87f343a7e4b9 = function(arg0) {
    var ret = getObject(arg0) instanceof CanvasRenderingContext2D;
    return ret;
};

export const __wbg_fillStyle_d72ab49007d815ac = function(arg0, arg1) {
    getObject(arg0).fillStyle = getObject(arg1);
};

export const __wbg_beginPath_06a3bee6af57dd8d = function(arg0) {
    getObject(arg0).beginPath();
};

export const __wbg_stroke_f2e62ebca12793e8 = function(arg0) {
    getObject(arg0).stroke();
};

export const __wbg_lineTo_72f7b15f12007abe = function(arg0, arg1, arg2) {
    getObject(arg0).lineTo(arg1, arg2);
};

export const __wbg_moveTo_218a2b604aa328ea = function(arg0, arg1, arg2) {
    getObject(arg0).moveTo(arg1, arg2);
};

export const __wbg_fillRect_bb3ca120d93cd2f5 = function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).fillRect(arg1, arg2, arg3, arg4);
};

export const __wbg_instanceof_HtmlCanvasElement_69ef8df401e5d26d = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLCanvasElement;
    return ret;
};

export const __wbg_getContext_fc68e7f629e2b10a = function(arg0, arg1, arg2) {
    try {
        var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbg_newnoargs_4f6527054d7f1f1d = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_call_183c0b733b35a027 = function(arg0, arg1) {
    try {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbg_globalThis_eb9027a878db64ad = function() {
    try {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbg_self_69a78003cf074413 = function() {
    try {
        var ret = self.self;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbg_window_db757fdea9443777 = function() {
    try {
        var ret = window.window;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbg_global_8efdae4f126ac8b4 = function() {
    try {
        var ret = global.global;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

export const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

export const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

