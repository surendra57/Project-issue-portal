const express = require("express");
const {
  createIssue,
  getAllIssues,
  getIssue,
  updateIssue,
  deleteIssue,
} = require("../controller/projectController");
const router = express.Router();

router.route("/issue").post(createIssue);
router.route("/issues").get(getAllIssues);
router.route("/issue/:id").get(getIssue);
router.route("/issue/:id").put(updateIssue);
router.route("/issue/:id").delete(deleteIssue);

module.exports = router;
