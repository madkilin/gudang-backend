import PenerimaanModel from "../models/PenerimaanModel.js";
import LaporanModel from "../models/LaporanModel.js";
import BarangModel from "../models/BarangModel.js";

export const getPenerimaan = async (req, res) => {
  try {
    const Penerimaan = await PenerimaanModel.findAll();
    res.status(200).json(Penerimaan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPenerimaanById = async (req, res) => {
  try {
    const Penerimaan = await PenerimaanModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(Penerimaan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPenerimaanByIdLaporan = async (req, res) => {
  try {
    const Penerimaan = await PenerimaanModel.findOne({
      where: {
        Idlaporan: req.params.id,
      },
    });
    res.status(200).json(Penerimaan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPenerimaan = async (req, res) => {
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
      { ...Stok, stok: parseInt(Stok.stok) + parseInt(req.body.Jumlah) },
      {
        where: {
          KodeBarang: req.body.KodeBarang,
        },
      }
    );

    const Laporan = await LaporanModel.create({
      JenisLaporan: "Penerimaan",
      Jenis: req.body.JenisPenerimaan,
      Nama: req.body.Nama,
      KodeBarang: req.body.KodeBarang,
      NamaBarang: req.body.NamaBarang,
      Jumlah: req.body.Jumlah,
      KondisiBarang: req.body.KondisiBarang,
      Keterangan: req.body.Keterangan,
      Staf: req.body.Staf,
    });
    const Penerimaan = await PenerimaanModel.create({
      Idlaporan: Laporan.id,
      JenisPenerimaan: req.body.JenisPenerimaan,
      IdPemasok: req.body.IdPemasok,
      Nama: req.body.Nama,
      Perusahaan: req.body.Perusahaan,
      KodeBarang: req.body.KodeBarang,
      NamaBarang: req.body.NamaBarang,
      Jumlah: req.body.Jumlah,
      KondisiBarang: req.body.KondisiBarang,
      Keterangan: req.body.Keterangan,
      Staf: req.body.Staf,
    });
    res.status(201).json({
      msg: "Penerimaan Created",
      data: { Penerimaan, Laporan, Stok, tambahStok },
    });
    // .json({ msg: "Penerimaan Created", data: { Stok, tambahStok } });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePenerimaan = async (req, res) => {
  try {
    const Penerimaan = await PenerimaanModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Penerimaan Updated", data: Penerimaan });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePenerimaan = async (req, res) => {
  try {
    const Penerimaan = await PenerimaanModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Penerimaan Deleted", data: Penerimaan });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
