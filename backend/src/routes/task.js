import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, getTasksCount, updateTask } from "../controllers/taskController";
const router=Router()


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 */
router.get('/tasks',getTasks)
/**
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Get a task
 *      tags: [Tasks]
 */
router.get('/tasks/:id',getTask)
/**
 * @swagger
 * /count:
 *  get:
 *      summary: Get a total tasks
 *      tags: [Tasks]
 */
router.get('/count',getTasksCount)
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: crete a task
 *      tags: [Tasks]
 */
router.post('/tasks',createTask)
/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task
 *      tags: [Tasks]
 */
router.delete('/tasks/:id',deleteTask)
/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update a task
 *      tags: [Tasks]
 */
router.put('/tasks/:id',updateTask)

export default router







