const Project = require("../model/projectModel");

exports.createIssue = async (req, res, next) => {
  const { projectName, title, description, priority } = req.body;
  console.log(req.body);

  const issue = await Project.create({
    projectName,
    title,
    description,
    priority,
  });

  res.status(201).json({
    success: true,
    issue,
  });
};

exports.getAllIssues = async (req, res, next) => {
  const issues = await Project.find();
  console.log(issues);

  res.status(200).json({
    success: true,
    issues,
  });
};

exports.getIssue = async (req, res, next) => {
  const issue = await Project.findById(req.params.id);

  res.status(200).json({
    success: true,
    issue,
  });
};

exports.getIssue = async (req, res, next) => {
  const issue = await Project.findById(req.params.id);

  res.status(200).json({
    success: true,
    issue,
  });
};

exports.updateIssue = async (req, res, next) => {
  let issue = await Project.findById(req.params.id);

  if (!issue) {
    return res.status(500).json({
      success: false,
      message: "Project Issue not found",
    });
  }

  issue = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    issue,
  });
};

exports.deleteIssue = async (req, res, next) => {
  let issue = await Project.findById(req.params.id);

  if (!issue) {
    return res.status(500).json({
      success: false,
      message: "Project Issue not found",
    });
  }

  await issue.remove();

  res.status(200).json({
    success: true,
    message: "Project Issue is deleted Successfully",
  });
};
