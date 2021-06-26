import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListCreatedUsersController } from "./controllers/ListCreatedUsersController";
import { ListCreatedTagsController } from "./controllers/ListCreatedTagsController";

const router = Router();

// users
const listCreatedUsersController = new ListCreatedUsersController();
const createUserController = new CreateUserController();
router.get(
  "/users",
  ensureAuthenticated,
  ensureAdmin,
  listCreatedUsersController.handle
);
router.post("/users", createUserController.handle);

// tags
const createTagController = new CreateTagController();
const listCreatedTagsController = new ListCreatedTagsController();
router.get(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  listCreatedTagsController.handle
);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

// auth
const authenticateUserController = new AuthenticateUserController();
router.post("/auth", authenticateUserController.handle);

// compliments
const createComplimentController = new CreateComplimentController();
const listUserSentComplimentsController =
  new ListUserSentComplimentsController();
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/compliments/sent",
  ensureAuthenticated,
  listUserSentComplimentsController.handle
);
router.get(
  "/compliments/received",
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle
);

export { router };
