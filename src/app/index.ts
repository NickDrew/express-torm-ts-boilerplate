import { Express } from 'express';
import appGen from './appGen';
import loadControllers from './loadControllers';
import loadModules from './loadModules';
import connectDatbase from './connectDatabase';

async function buildApp(): Promise<Express> {
    let app = appGen;
    await connectDatbase();
    app = loadModules(app);
    app = loadControllers(app);
    return app;
}

export default buildApp;
