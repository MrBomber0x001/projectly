
router.get("/tasks", verifyToken, getAllTasks);
router.get("/tasks/:id", verifyToken, getTask);
router.delete("/tasks/:id", verifyToken, deleteTask);
router.put("/tasks/:id", verifyToken, updateTask)
router.post("/tasks", verifyToken, createTask);
router.get("/tasks/:id/comments", verifyToken, getTaskComment)





router.get("/projects", getAllProjects);
router.get("/projects/:id", getProject);
router.delete("/projects/:id", verifyToken, deleteProject);
router.put("/projects/:id", verifyToken, updateProject)
router.post("/projects", verifyToken, createProject);
router.get("/projects/:id/tasks", getProjectTasks)



router.post("/auth/login", login);
router.post("/auth/signup", signup)

/**
 * Comment routes
 */
router.get("/comments", verifyToken, getAllComments);
router.get("/comments/:id", verifyToken, getComment);
router.delete("/comments/:id", verifyToken, deleteComment);
router.put("/commenst/:id", verifyToken, editComment)
router.post("/comments", verifyToken, addComment);


router.get("/me/tasks", verifyToken, getMyTasks);
router.get("/me/projects", verifyToken, getMyProjects);
