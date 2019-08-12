import { Express } from 'express';
import { userRouter } from '../features/user/';

const loadControllers = (app: Express): Express => {
    app.use(`/user`, userRouter);

    return app;
};

export default loadControllers;
