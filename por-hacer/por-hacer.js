const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer); //Función que convierte un objeto en un json

    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}
//Se pone un array vacio en el catch para que no de un error al intentar grabar datos en data.json cuando esta vacio
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (description) => {

    cargarDB();

    let porHacer = {
        description,
        completed: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
//Funcion que lista las tareas de la DB
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completed = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.description === description); //Función native de javascript "findIndex" que busca similitudes en objetos

    if (index >= 0) { //"0" Porque es el orden de un array
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.description === description); //Filtra en este caso los elecmentos que son diferentes a la descripción que se escriba por consola y crea una nuevo listado

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}