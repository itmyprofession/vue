var Compiler = require('./compiler')

/*
 *  ViewModel exposed to the user that holds data,
 *  computed properties, event handlers
 *  and a few reserved methods
 */
function ViewModel (options) {
    // just compile. options are passed directly to compiler
    new Compiler(this, options)
}

var VMProto = ViewModel.prototype

/*
 *  Convenience function to set an actual nested value
 *  from a flat key string. Used in directives.
 */
VMProto.$set = function (key, value) {
    var path = key.split('.'),
        obj = this
    for (var d = 0, l = path.length - 1; d < l; d++) {
        obj = obj[path[d]]
    }
    obj[path[d]] = value
}

/*
 *  watch a key on the viewmodel for changes
 *  fire callback with new value
 */
VMProto.$watch = function () {
    // TODO just listen on this.$compiler.observer
}

/*
 *  remove watcher
 */
VMProto.$unwatch = function () {
    // TODO
}

/*
 *  unbind everything, remove everything
 */
VMProto.$destroy = function () {
    this.$compiler.destroy()
    this.$compiler = null
}

module.exports = ViewModel