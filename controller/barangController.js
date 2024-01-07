import barangModel from "../models/barangModel.js";

export const getBarang = async (req, res) => {
  try {
    const Barang = await barangModel.findAll();
    res.status(200).json(Barang);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBarangById = async (req, res) => {
  try {
    const Barang = await barangModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(Barang);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBarangByKode = async (req, res) => {
  try {
    const Barang = await barangModel.findOne({
      where: {
        kodebarang: req.params.id,
      },
    });
    res.status(200).json(Barang);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBarang = async (req, res) => {
  try {
    const Barang = await barangModel.create(req.body);
    res.status(201).json({ msg: "barang Created", data: Barang });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBarang = async (req, res) => {
  try {
    const Barang = await barangModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "barang Updated", data: Barang });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBarang = async (req, res) => {
  try {
    const Barang = await barangModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "barang Deleted", data: Barang });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
