import ModelBarang from "../models/BarangModel.js";
import ModelLaporan from "../models/LaporanModel.js";
import ModelPengeluaran from "../models/PengeluaranModel.js";

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
    const Pengeluaran = await ModelPengeluaran.findOne({
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
    const Pengeluaran = await ModelPengeluaran.findOne({
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
    if (!ModelBarang.findOne({ where: { KodeBarang: req.body.KodeBarang } })) {
      throw new Error("Kode barang tidak ditemukan");
    }

    const Stok = await ModelBarang.findOne({
      where: {
        KodeBarang: req.body.KodeBarang,
      },
    });

    const tambahStok = await ModelBarang.update(
      { ...Stok, stok: parseInt(Stok.stok) - parseInt(req.body.Jumlah) },
      {
        where: {
          KodeBarang: req.body.KodeBarang,
        },
      }
    );
    const Laporan = await ModelLaporan.create({
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
    const Pengeluaran = await ModelPengeluaran.create({
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
    const Pengeluaran = await ModelPengeluaran.update(req.body, {
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
    const Pengeluaran = await ModelPengeluaran.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengeluaran Deleted", data: Pengeluaran });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
