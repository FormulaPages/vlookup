(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-iserror', 'formula-isblank', 'formula-errors'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-iserror'), require('formula-isblank'), require('formula-errors'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.ISERROR, global.ISBLANK, global.error);
        global.VLOOKUP = mod.exports;
    }
})(this, function (exports, module, _formulaIserror, _formulaIsblank, _formulaErrors) {
    'use strict';

    module.exports = VLOOKUP;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ISERROR = _interopRequireDefault(_formulaIserror);

    var _ISBLANK = _interopRequireDefault(_formulaIsblank);

    var _error = _interopRequireDefault(_formulaErrors);

    function VLOOKUP(needle, table, index, exactmatch) {

        if ((0, _ISERROR['default'])(needle) || (0, _ISBLANK['default'])(needle)) {
            return needle;
        }

        index = index || 0;
        exactmatch = exactmatch || false;
        for (var i = 0; i < table.length; i++) {
            var row = table[i];
            if (exactmatch && row[0] === needle || (row[0] === needle || typeof row[0] === 'string' && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1)) {
                return index < row.length + 1 ? row[index - 1] : row[0];
            }
        }

        return _error['default'].na;
    }
});
