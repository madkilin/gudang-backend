import userModel from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const users = await userModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  try {
    const users = await userModel.create(req.body);
    res.status(201).json({ msg: "User Created", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const users = await userModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const users = await userModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted", data: users });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const users = await userModel.findOne({
      where: {
        username: req.body.username,
        password: req.body.password,
      },
    });
    if (users != null) {
      res.status(200).json(users);
    } else {
      res.json({ status: "404", message: "User not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
