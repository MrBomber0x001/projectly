import express from 'express'
import projectRoutes from './src/routers/project.routes.js';
import taskRoutes from './src/routes/task.routes.js';
import userRoutes from './src/routes/user.routes.js';
import meRoutes from './src/routers/me.routes.js';
import appRoutes from './src/routers/auth.routes.js'
import session from 'session';


export class App {
    constructor(app) {
        this.app = app
    }

    sessionMangement() {
        this.app.use(session({}))
        this.app.use(passport.init());
    }

    config() {

    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(meRoutes);
        this.app.use(projectRoutes);
        this.app.use(taskRoutes);
        this.app.use(authRoutes);
        this.app.use(userRoutes);
    }

    async start() {
        try {
            // await sequelize.authenticate(); // for authenticating and testing
            await sequelize.sync({ force: false }); // to start models { force: true }
            console.log("Connection has been established succesfully!");
            this.app.listen(3000, () => {
                console.log(`:rocket: is running`)
            })
        } catch (error) {
            console.log("unable to connect to the database!", error);
        }
    }
}