import * as express from 'express';
import { check, validationResult } from 'express-validator';
import { createUserResolver, getAllUsersResolver } from './resolvers';

const router = express.Router();

router.get(
    '/',
    async (_, res): Promise<void> => {
        res.send(await getAllUsersResolver());
    },
);

router.post(
    '/',
    [check('email').isEmail(), check('password').isLength({ min: 8, max: 255 })],
    async (req: express.Request, res: express.Response): Promise<void> => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        } else {
            const email = req.body.email;
            const password = req.body.password;
            await createUserResolver(email, password);
            res.send(JSON.stringify(req.body));
        }
    },
);

export default router;
