var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tareas = [
    { id: 1, nombre: "Estudiar JavaScript", completada: false },
    { id: 2, nombre: "Hacer ejercicios de TypeScript", completada: false },
    { id: 3, nombre: "Leer sobre Node.js", completada: false }
];
var cambiarEstadoTarea = function (tareas, id) {
    return tareas.map(function (tarea) {
        return tarea.id === id ? __assign(__assign({}, tarea), { completada: !tarea.completada }) : tarea;
    });
};
var obtenerEstadoTarea = function (tarea) {
    return tarea.completada ? "Completada" : "Pendiente";
};
var nuevaTarea = { id: 4, nombre: "Ver videos de tutoriales", completada: false };
var tareasActualizadas = __spreadArray(__spreadArray([], tareas, true), [nuevaTarea], false);
var mostrarTareas = function (tareas) {
    tareas.map(function (tarea) {
        console.log("Tarea: ".concat(tarea.nombre, " - Estado: ").concat(obtenerEstadoTarea(tarea)));
    });
};
// Mostrar el estado inicial de las tareas
console.log("Estado inicial de las tareas:");
mostrarTareas(tareas);
// Cambiar el estado de una tarea
tareas = cambiarEstadoTarea(tareas, 1);
// Mostrar el estado después de cambiar una tarea
console.log("\nEstado de las tareas después de cambiar el estado de la tarea con id 1:");
mostrarTareas(tareas);
