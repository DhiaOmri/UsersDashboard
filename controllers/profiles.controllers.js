const ProfileModel = require("../models/profiles.models");

const AddProfile = async (req, res) => {
  try {
    ProfileModel.findOne({ user: req.user.id }).then(async (profile) => {
      if (!profile) {
        await ProfileModel.create(req.body);
        res.status(200).json({ message: "seccess" });
      } else {
        await ProfileModel.findOneAndUpdate({ user: user.req.id }, req.body, {
          new: true,
        }).then((result) => {
          res.status(200).json(result);
        });
      }
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const FindAllProfiles = async (req, res) => {
  res.send("ok");
};
const FindSingleProfile = async (req, res) => {
  res.send("ok");
};
const Deleterofile = async (req, res) => {
  res.send("ok");
};

module.exports = {
  AddProfile,
  FindAllProfiles,
  FindSingleProfile,
  Deleterofile,
};
