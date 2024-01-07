import PengeluaranModel from "../models/PengeluaranModel.js";
import LaporanModel from "../models/LaporanModel.js";
import BarangModel from "../models/BarangModel.js";

export const getPengeluaran = async (req, res) => {
  try {
    const Pengeluaran = await PengeluaranModel.findAll();
    res.status(200).json(Pengeluaran);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPengeluaranById = async (req, res) => {
  try {
    const Pengeluaran = await PengeluaranModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(Pengeluaran);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPengeluaranByIdLaporan = async (req, res) => {
  try {
    const Pengeluaran = await PengeluaranModel.findOne({
      where: {
        Idlaporan: req.params.id,
      },
    });
    res.status(200).json(Pengeluaran);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPengeluaran = async (req, res) => {
  try {
    if (!BarangModel.findOne({ where: { KodeBarang: req.body.KodeBarang } })) {
      throw new Error("Kode barang tidak ditemukan");
    }

    const Stok = await BarangModel.findOne({
      where: {
        KodeBarang: req.body.KodeBarang,
      },
    });

    const tambahStok = await BarangModel.update(
      { ...Stok, stok: parseInt(Stok.stok) - parseInt(req.body.Jumlah) },
      {
        where: {
          KodeBarang: req.body.KodeBarang,
        },
      }
    );
    const Laporan = await LaporanModel.create({
      JenisLaporan: "Pengeluaran",
      Jenis: req.body.JenisPengeluaran,
      Nama: req.body.Nama,
      KodeBarang: req.body.KodeBarang,
      NamaBarang: req.body.NamaBarang,
      Jumlah: req.body.Jumlah,
      KondisiBarang: req.body.KondisiBarang,
      Keterangan: req.body.Keterangan,
      Staf: req.body.Staf,
    });
    const Pengeluaran = await PengeluaranModel.create({
      Idlaporan: Laporan.id,
      JenisPengeluaran: req.body.JenisPengeluaran,
      IdPemasok: req.body.IdPemasok,
      Nama: req.body.Nama,
      Tujuan: req.body.Tujuan,
      KodeBarang: req.body.KodeBarang,
      NamaBarang: req.body.NamaBarang,
      Jumlah: req.body.Jumlah,
      KondisiBarang: req.body.KondisiBarang,
      Keterangan: req.body.Keterangan,
      Staf: req.body.Staf,
    });
    res.status(201).json({
      msg: "Pengeluaran Created",
      data: { Pengeluaran, Laporan, Stok, tambahStok },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePengeluaran = async (req, res) => {
  try {
    const Pengeluaran = await PengeluaranModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengeluaran Updated", data: Pengeluaran });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePengeluaran = async (req, res) => {
  try {
    const Pengeluaran = await PengeluaranModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengeluaran Deleted", data: Pengeluaran });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
