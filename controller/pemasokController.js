import PemasokModel from "../models/PemasokModel.js";

export const getPemasok = async (req, res) => {
  try {
    const Pemasok = await PemasokModel.findAll();
    res.status(200).json(Pemasok);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPemasokById = async (req, res) => {
  try {
    const Pemasok = await PemasokModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(Pemasok);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPemasok = async (req, res) => {
  try {
    const Pemasok = await PemasokModel.create(req.body);
    res.status(201).json({ msg: "Pemasok Created", data: Pemasok });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePemasok = async (req, res) => {
  try {
    const Pemasok = await PemasokModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pemasok Updated", data: Pemasok });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePemasok = async (req, res) => {
  try {
    const Pemasok = await PemasokModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pemasok Deleted", data: Pemasok });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
