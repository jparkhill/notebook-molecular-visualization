/* Custom nightwatch functions based on
https://github.com/hainm/nbtests
*/

exports.command = function (notebookName, callback) {
    let result = this.url("http://localhost:5678/notebooks/" + notebookName);
    if (typeof callback === "function") { callback.call(self, result) };
    return result;
};