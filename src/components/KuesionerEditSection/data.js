export const blocks = [
  {
    title: "BLOK I. KETERANGAN TEMPAT USAHA",
    questions: [
      {
        label: "RT, RW, Dusun",
        placeholder: "Masukkan RT, RW, Dusun",
        name: "rt_rw_dusun",
      },
      {
        label: "Nama Kepala Keluarga",
        placeholder: "Masukkan Nama Kepala Keluarga",
        name: "nama_kepala_keluarga",
      },
      {
        label: "No. Urut Bangunan",
        placeholder: "Masukkan No. Urut Bangunan",
        name: "no_urut_bangunan",
      },
      {
        label: "Alamat (Jalan/Gang, Nomor Rumah)",
        placeholder: "Masukkan Alamat Rumah",
        name: "alamat",
      },
      {
        label: "Nama Usaha",
        placeholder: "Masukkan Nama Usaha",
        name: "nama_usaha",
      },
      { label: "Latitude", placeholder: "Masukkan Latitude", name: "latitude" },
      {
        label: "Longitude",
        placeholder: "Masukkan Longitude",
        name: "longitude",
      },
    ],
  },
  {
    title: "BLOK II. IDENTITAS PEMILIK/PENANGGUNG JAWAB USAHA",
    questions: [
      {
        label: "Nama Pemilik/Penganggungjawab",
        placeholder: "Masukkan Nama Pemilik/Penganggungjawab",
        name: "nama_pemilik_penanggungjawab",
      },
      {
        label: "Jenis Kelamin",
        placeholder: "Masukkan Jenis Kelamin",
        name: "jenis_kelamin",
      },
      {
        label: "Tanggal Lahir",
        placeholder: "Masukkan Tanggal Lahir ",
        name: "tanggal_lahir",
      },
      { label: "NIK", placeholder: "Masukkan NIK", name: "nik" },
      { label: "No. HP", placeholder: "Masukkan No. HP", name: "no_hp" },
      {
        label: "Pendidikan Terakhir ",
        placeholder: "Masukkan Pendidikan Terakhir",
        name: "pendidikan_terakhir",
      },
    ],
  },
  {
    title: "BLOK III. KARAKTERISTIK USAHA",
    questions: [
      {
        label: "Kategori Usaha",
        placeholder: "Masukkan Kategori Usaha",
        name: "kategori_usaha",
      },
      {
        label: "Kegiatan Utama Usaha",
        placeholder: "Masukkan Kegiatan Utama Usaha",
        name: "kegiatan_utama_usaha",
      },
      {
        label: "Bentuk Badan Usaha",
        placeholder: "Masukkan Bentuk Badan Usaha",
        name: "bentuk_badan_usaha",
      },
      {
        label: "Lokasi Tempat Usaha",
        placeholder: "Masukkan Lokasi Tempat Usaha",
        name: "lokasi_tempat_usaha",
      },
      {
        label: "Skala Usaha",
        placeholder: "Masukkan Skala Usaha",
        name: "skala_usaha",
      },
    ],
  },
  {
    title: "BLOK IV. CATATAN",
    questions: [
      {
        label: "Catatan",
        placeholder: "Masukkan Catatan",
        name: "catatan",
      },
    ],
  },
];

export const wilayahRt = [
  {
    value: "3515090013001001",
    label: "RT 001 RW 001 DUSUN SIMO",
  },
  {
    value: "3515090013001002",
    label: "RT 002 RW 001 DUSUN SIMO",
  },
  {
    value: "3515090013001003",
    label: "RT 003 RW 001 DUSUN SIMO",
  },
  {
    value: "3515090013002004",
    label: "RT 004 RW 002 DUSUN NGANGIN",
  },
  {
    value: "3515090013002005",
    label: "RT 005 RW 002 DUSUN NGANGIN",
  },
  {
    value: "3515090013002006",
    label: "RT 006 RW 002 DUSUN NGANGIN",
  },
  {
    value: "3515090013003007",
    label: "RT 007 RW 003 DUSUN BENDO MALANG",
  },
  {
    value: "3515090013003008",
    label: "RT 008 RW 003 DUSUN BENDO MALANG",
  },
  {
    value: "3515090013003009",
    label: "RT 009 RW 003 DUSUN BENDO MALANG",
  },
  {
    value: "3515090013004010",
    label: "RT 010 RW 004 DUSUN PEJAGALAN",
  },
  {
    value: "3515090013004011",
    label: "RT 011 RW 004 DUSUN PEJAGALAN",
  },
  {
    value: "3515090013004012",
    label: "RT 012 RW 004 DUSUN PEJAGALAN",
  },
  {
    value: "3515090013004013",
    label: "RT 013 RW 004 DUSUN PEJAGALAN",
  },
];

export const jenisKelamin = [
  {
    value: "laki-laki",
    label: "Laki-laki",
  },
  {
    value: "perempuan",
    label: "Perempuan",
  },
];

export const pendidikanTerakhir = [
  {
    value: "sd/sederajat-kebawah",
    label: "SD/Sederajat kebawah",
  },
  {
    value: "smp/sederajat",
    label: "SMP/Sederajat",
  },
  {
    value: "sma/sederajat",
    label: "SMA/Sederajat",
  },
  {
    value: "diploma/s1-keatas",
    label: "Diploma/S1 keatas",
  },
];

export const daftarKategori = [
  { value: "kbli_a", label: "A. Pertanian, Kehutanan, dan Perikanan" },
  { value: "kbli_b", label: "B. Pertambangan dan Penggalian" },
  { value: "kbli_c", label: "C. Industri Pengolahan" },
  {
    value: "kbli_d",
    label: "D. Pengadaan Listrik, Gas, Uap, dan Udara Bersih",
  },
  {
    value: "kbli_e",
    label: "E. Pengadaan Air, Pengelolaan Sampah, Limbah, dan Daur Ulang",
  },
  { value: "kbli_f", label: "F. Konstruksi" },
  {
    value: "kbli_g",
    label: "G. Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor",
  },
  { value: "kbli_h", label: "H. Transportasi dan Pergudangan" },
  {
    value: "kbli_i",
    label: "I. Penyediaan Akomodasi dan Penyediaan Makan Minum",
  },
  { value: "kbli_j", label: "J. Informasi dan Komunikasi" },
  { value: "kbli_k", label: "K. Jasa Keuangan dan Asuransi" },
  { value: "kbli_l", label: "L. Real Estat" },
  { value: "kbli_m", label: "M. Jasa Profesional, Ilmiah, dan Teknis" },
  { value: "kbli_n", label: "N. Jasa Administratif dan Jasa Dukungan" },
  { value: "kbli_o", label: "O. Jasa Pendidikan" },
  { value: "kbli_p", label: "P. Jasa Kesehatan dan Kegiatan Sosial" },
  { value: "kbli_q", label: "Q. Jasa Hiburan, Pariwisata, dan Rekreasi" },
  { value: "kbli_r", label: "R. Jasa Perorangan dan Rumah Tangga" },
  { value: "kbli_s", label: "S. Jasa Lainnya" },
  { value: "kbli_t", label: "T. Aktivitas Rumah Tangga sebagai Pengusaha" },
  {
    value: "kbli_u",
    label: "U. Organisasi Internasional dan Badan Ekstrateritorial",
  },
];

export const bentukBadanUsaha = [
  {
    value: "pt/persero/sejenisnya",
    label: "PT/Persero/Perum/NV/CV/Yayasan/Koperasi/Sejenisnya",
  },
  {
    value: "ijin-desa/ijin-lainnya",
    label: "Ijin Desa atau Ijin lainnya",
  },
  {
    value: "tidak-berbadan-hukum",
    label: "Tidak berbadan hukum/usaha",
  },
];

export const lokasiTempatUsaha = [
  {
    value: "bangunan-khusus-usaha",
    label: "Bangunan Khusus Usaha",
  },
  {
    value: "bangunan-campuran",
    label: "Bangunan Campuran",
  },
  {
    value: "kaki-lima",
    label: "Kaki Lima",
  },
  {
    value: "keliling",
    label: "Keliling",
  },
  {
    value: "didalam-bangunan-tempat-tinggal/online",
    label: "Didalam Bangunan Tempat Tinggal/Online",
  },
];

export const skalaUsaha = [
  {
    value: "usaha-mikro",
    label: "Usaha Mikro (nilai penjualan tahunan <2 Miliyar Rupiah)",
  },
  {
    value: "usaha-kecil",
    label: "Usaha Kecil (nilai penjualan tahunan 2-15 Miliyar Rupiah)",
  },
  {
    value: "usaha-menengah",
    label: "Usaha Menengah (nilai penjualan tahunan 15-50 Miliyar Rupiah)",
  },
];
