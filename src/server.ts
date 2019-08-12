import dotenv from 'dotenv';
import buildApp from './app/';

dotenv.config();

const port = process.env.PORT || 3000;

buildApp()
    .then((app): void => {
        app.listen(port, (): void => {
            console.log(`server started on port: ${port} in mode: ${process.env.NODE_ENV}`);
        });
    })
    .catch((reason): void => {
        console.log(reason);
    });
