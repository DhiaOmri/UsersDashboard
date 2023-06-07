var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/users.controllers");
const passport = require("passport");
const { inRole, ROLES } = require("../security/Rolemiddleware");
const {
  FindAllProfiles,
  FindSingleProfile,
  AddProfile,
  Deleterofile,
} = require("../controllers/profiles.controllers");
var router = express.Router();

/* Users Routes */
router.post("/register", Register);
router.post("/login", Login);

/* Test Routes */
router.get("/test", passport.authenticate("jwt", { session: false }), Test);

/* Profile  Routes */

router.post(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  AddProfile
);
router.get(
  "/profiles",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  FindAllProfiles
);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  FindSingleProfile
);
router.delete(
  "/profiles/:id",
  passport.authenticate("jwt", { session: false }),
  inRole(ROLES.ADMIN),
  Deleterofile
);

module.exports = router;
