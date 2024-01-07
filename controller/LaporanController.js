import LaporanModel from "../models/LaporanModel.js";

export const getLaporan = async (req, res) => {
  try {
    const Laporan = await LaporanModel.findAll();
    res.status(200).json(Laporan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLaporanById = async (req, res) => {
  try {
    const Laporan = await LaporanModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(Laporan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLaporan = async (req, res) => {
  try {
    const Laporan = await LaporanModel.create(req.body);
    res.status(201).json({ msg: "Laporan Created", data: Laporan });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateLaporan = async (req, res) => {
  try {
    const Laporan = await LaporanModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Laporan Updated", data: Laporan });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLaporan = async (req, res) => {
  try {
    const Laporan = await LaporanModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Laporan Deleted", data: Laporan });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
