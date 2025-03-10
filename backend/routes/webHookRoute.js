import express from 'express';  // import express
import { clerkWebHook } from '../controller/webHookController.js';
import bodyParser from "body-parser";
const router = express.Router();

router.post('/clerk',bodyParser.raw({ type: 'application/json' }), clerkWebHook)

export default router 