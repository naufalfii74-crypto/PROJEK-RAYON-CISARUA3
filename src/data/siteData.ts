// ============================================================
// SITE DATA — Rayon Cisarua 3
// ============================================================

export interface Achievement {
  title: string;
  level: string;
  date: string;
}

export interface Student {
  nis: string;
  fullname: string;
  role: string;
  angkatan?: string;
  isOfficer: boolean;
  isAdmin: boolean;
  major: string;
  photo: string;
  achievements: Achievement[];
}

export interface ScheduleItem {
  day: string;
  students: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  date: string;
  desc: string;
  image: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  image: string;
}

export interface Announcement {
  title: string;
  date: string;
  content: string;
}

export interface MentorInfo {
  name: string;
  title: string;
  photo: string;
  bio: string;
  quote: string;
}

// Mentor Data
export const mentorData: MentorInfo = {
  name: "Mohamad Rizal S.Pd",
  title: "Pembimbing Rayon Cisarua 3",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  bio: "",
  quote: ""
};

// Master Student Roster
export const studentsData: Student[] = [
  {
    nis: "12511074",
    fullname: "Moch Luthfy Naufal",
    role: "Anggota",
    angkatan: "30",
    isOfficer: true,
    isAdmin: true,
    major: "PPLG (Pengembangan Perangkat Lunak)",
    photo: "",
    achievements: []
  },
  {
    nis: "12511094",
    fullname: "Muhamad Azwan Muzaki",
    role: "Ketua Rayon",
    angkatan: "30",
    isOfficer: true,
    isAdmin: true,
    major: "TJKT (Teknik Jaringan Komputer dan Telekomunikasi)",
    photo: "",
    achievements: []
  },
  {
    nis: "12510978",
    fullname: "Haphinatul Shafira",
    role: "Sekretaris",
    angkatan: "30",
    isOfficer: true,
    isAdmin: false,
    major: "DKV (Desain Komunikasi Visual)",
    photo: "",
    achievements: []
  },
  {
    nis: "12510816",
    fullname: "Al'fika Dwi Cahyani",
    role: "Bendahara",
    angkatan: "30",
    isOfficer: false,
    isAdmin: false,
    major: "MPLB (Manajemen Perkantoran dan Layanan Bisnis)",
    photo: "",
    achievements: []
  },
  {
    nis: "12510875",
    fullname: "Bagas Dizwar Asfas",
    role: "Anggota",
    angkatan: "30",
    isOfficer: false,
    isAdmin: false,
    major: "PPLG (Pengembangan Perangkat Lunak)",
    photo: "",
    achievements: []
  },
  {
    nis: "12511415",
    fullname: "Zaghita Rahmah Firdaus",
    role: "Wakil Ketua",
    angkatan: "30",
    isOfficer: false,
    isAdmin: false,
    major: "KLN (Kuliner)",
    photo: "",
    achievements: []
  },
  {
    nis: "12511365",
    fullname: "Siti Aliya Zhafirah",
    role: "Anggota",
    angkatan: "30",
    isOfficer: false,
    isAdmin: false,
    major: "PMN (Pemasaran)",
    photo: "",
    achievements: []
  },
  {
    nis: "",
    fullname: "",
    role: "",
    angkatan: "",
    isOfficer: false,
    isAdmin: false,
    major: "",
    photo: "",
    achievements: []
  },
  {
    nis: "12611961",
    fullname: "Rizky Ikhsan Maulana",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "MPLB (Manajemen Perkantoran dan Layanan Bisnis)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611861",
    fullname: "Mustafa Habibi Agnia",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "PMN (Pemasaran)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611831",
    fullname: "Muhammad Naufal Alkahfi",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "PPLG (Pengembangan Perangkat Lunak)",
    photo: "",
    achievements: []
  },
  {
    nis: "12612043",
    fullname: "Viona Oktora Mulyana Putri",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "HTL (Perhotelan)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611539",
    fullname: "Chieka Sharlie Wulandari",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "KLN (Kuliner)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611612",
    fullname: "Ferhika Putri Maulidina",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "PMN (Pemasaran)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611994",
    fullname: "Siti Erfina Nurmawati",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "MPLB (Manajemen Perkantoran dan Layanan Bisnis)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611468",
    fullname: "Alisya Zahwa Nurlatifah",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "PPLG (Pengembangan Perangkat Lunak)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611807",
    fullname: "Muhammad Faris Hisyam Azizi",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "HTL (Perhotelan)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611795",
    fullname: "Muhammad Asrul Gunawan",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "TJKT (Teknik Jaringan Komputer dan Telekomunikasi)",
    photo: "",
    achievements: []
  },
  {
    nis: "12611549",
    fullname: "Danisha Aniq Ayasha Firgiansa",
    role: "Anggota",
    angkatan: "31",
    isOfficer: false,
    isAdmin: false,
    major: "TJKT (Teknik Jaringan Komputer dan Telekomunikasi)",
    photo: "",
    achievements: [
      { title: "Lomba Silat Tingkat Sekolah", level: "Sekolah", date: "2023" },
      { title: "Lomba Tolak Peluru Mendapatkan Perunggu", level: "Kabupaten", date: "2025" },
      { title: "Lomba Karate", level: "Kabupaten", date: "2019" },
      { title: "Lomba Karate", level: "Kabupaten", date: "2019" },
      { title: "Lomba Karate", level: "Kelas", date: "2022" }
    ]
  },
  {
    nis: "",
    fullname: "",
    role: "",
    angkatan: "",
    isOfficer: false,
    isAdmin: false,
    major: "",
    photo: "",
    achievements: []
  },
  {
    nis: "",
    fullname: "",
    role: "",
    angkatan: "",
    isOfficer: false,
    isAdmin: false,
    major: "",
    photo: "",
    achievements: []
  },
];

// Duty Schedule Data (Jadwal Piket)
export const scheduleData: ScheduleItem[] = [
  { day: "Senin", students: ["Chieka Sharlie Wulandari", "Daniel Kurniawan", "M Zafa Zulprana", "Muhammad Asrul Gunawan", "Nadira Dewanti Putri", "Moch Luthfy Naufal", "Syifa Dwi Anggraini", "Zaghita Rahmah Firdaus"] },
  { day: "Selasa", students: ["Al'Fika Dwi Cahyani", "Fadlan Ahmad Jamil Al Ayubi", "Haphinatul Shafira", "Muhamad Aditya Abdilah", "Muhamad Azwan Muzaki", "Muhamad Fedliansyah Ilham", "Salsabila Destiana Putri"] },
  { day: "Rabu", students: ["Dervy Alita Wijaya", "Muhammad Naufal Alkahfi", "Sifa Aulia", "Fadliansyah Venanda", "Muhamad Fadilah", "Ridwan Faiz Rojabi", "Siti Aliya Zhafirah"] },
  { day: "Kamis", students: ["Adhwa Baihaqi", "Danisha Aniq Ayasha Firgiansa", "Ferhika Putri Maulidina", "Muhammad Faris Hisyam Azizi", "Mustafa Habibi Agnia", "Rizky Ikhsan Maulana", "Viona Oktora Mulyana Putri"] },
  { day: "Jumat", students: ["Alisya Zahwa Nurlatifah", "Dinda Aqila Nurfadilah", "Siti Erfina Nurmawati", "Bagas Dizwar Asfas", "Muhammad Rafliansyah Putra", "Sandy Prayogo", "Zyad Abdillah"] }
];

// Moments Activity Gallery
export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Latihan Dasar Kepemimpinan (LDK)",
    date: "14 Agustus 2026",
    desc: "Momen kebersamaan seluruh siswa Rayon Cisarua 3 dalam pelatihan karakter dan kepemimpinan.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Kunjungan Industri & Tech Expo",
    date: "22 Juli 2026",
    desc: "Perjalanan edukatif memperluas wawasan teknologi dan dunia kerja siswa.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Kolaborasi Proyek Rayon",
    date: "10 Juni 2026",
    desc: "Siswa lintas jurusan berkolaborasi merancang karya digital.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Peringatan Hari Kemerdekaan",
    date: "17 Agustus 2026",
    desc: "Keseruan lomba kebersamaan antar anggota rayon Cisarua 3.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Momen Rayon Terbersih Mingguan",
    date: "02 Mei 2026",
    desc: "Kebanggaan bersama saat meraih penghargaan kebersihan dan kerapihan rayon.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Gathering & Outing Kebersamaan",
    date: "18 Januari 2026",
    desc: "Rekreasi perakrabian antara junior dan senior Rayon Cisarua 3.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
  }
];

// Rayon Achievements Data
export const achievementsData: AchievementItem[] = [
  {
    title: "Rayon Terdisiplin & Terbersih",
    description: "Meraih penghargaan Rayon dengan standar kerapihan, kebersihan, dan kedisiplinan harian terbaik tingkat sekolah.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Juara 1 Web Development Competition",
    description: "Diraih oleh Moch Luthfy Naufal dalam ajang kompetisi desain & pengembangan web tingkat kota.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Juara 1 Poster Design Edukasi",
    description: "Karya desain komunikasi visual membanggakan oleh Haphinatul Shafira pada National Student Art Festival.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600"
  }
];

// Rayon Announcements
export const announcementsData: Announcement[] = [
  {
    title: "Pemeriksaan Kebiasaan Baik & Kerapihan",
    date: "Sabtu, 22 Agustus 2026",
    content: "Diimbau seluruh anggota Rayon Cisarua 3 berkumpul di Aula Rayon tepat pukul 08:00 WIB membawa buku jurnal."
  },
  {
    title: "Evaluasi Piket Harian Minggu Ini",
    date: "Rabu, 26 Agustus 2026",
    content: "Seluruh petugas piket diharapkan menjalankan tugas tepat waktu setelah jam pelajaran terakhir."
  }
];
