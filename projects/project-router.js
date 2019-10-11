const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      projects.map(project => {
          project.completed === 0
          ? project.completed = false
          : project.completed = true;
      })
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});
  
router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});
  
router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(tasks => {
      tasks.map(task => {
          task.completed === 0
          ? task.completed = false
          : task.completed = true;
      })
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});
  
router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});
  
router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    taskData.project_id >= 1
    ? Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new task' });
    })
    : res.status(500).json({ message: 'No project specified' })
});

module.exports = router;