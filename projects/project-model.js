const db = require('../data/db-config.js');

module.exports = {
    find,
    findResources,
    findTasks,
    add,
    addResource,
    addTask
};

function find() {
    return db('projects');
}

function findResources() {
    return db('resources')
}

function findTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return id;
        });
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return id;
        });
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => {
            return id;
        });
}