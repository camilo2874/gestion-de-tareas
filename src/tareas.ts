let tareas = [
    { id: 1, nombre: "Estudiar JavaScript", completada: false },
    { id: 2, nombre: "Hacer ejercicios de TypeScript", completada: false },
    { id: 3, nombre: "Leer sobre Node.js", completada: false }
];
const cambiarEstadoTarea = (tareas: { id: number, nombre: string, completada: boolean }[], id: number) => {
    return tareas.map(tarea =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
};
const obtenerEstadoTarea = (tarea: { id: number, nombre: string, completada: boolean }) => {
    return tarea.completada ? "Completada" : "Pendiente";
};
const nuevaTarea = { id: 4, nombre: "Ver videos de tutoriales", completada: false };
const tareasActualizadas = [...tareas, nuevaTarea];
const mostrarTareas = (tareas: { id: number, nombre: string, completada: boolean }[]) => {
    tareas.map(tarea => {
        console.log(`Tarea: ${tarea.nombre} - Estado: ${obtenerEstadoTarea(tarea)}`);
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
