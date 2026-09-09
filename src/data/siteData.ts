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
  name: "Ibu Rina Wulandari, S.Pd.",
  title: "Pembimbing Rayon Cisarua 3",
  photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  bio: "Pendamping dan pengasuh Rayon Cisarua 3 yang berdedikasi dalam membangun kedisiplinan, etika kerja, serta rasa kekeluargaan yang erat bagi para siswa.",
  quote: "Karakter yang tangguh dan semangat belajar tiada henti adalah fondasi utama meraih impian. Di Rayon Cisarua 3, kita tumbuh bersama."
};

// Master Student Roster
export const studentsData: Student[] = [
  {
    nis: "12511074",
    fullname: "Moch Luthfy Naufal",
    role: "Ketua Rayon",
    isOfficer: true,
    isAdmin: true,
    major: "PPLG (Pengembangan Perangkat Lunak)",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Juara 1 Web Development Competition", level: "Tingkat Kota", date: "Juli 2026" },
      { title: "Sertifikasi Junior Software Engineer", level: "Nasional", date: "Mei 2026" }
    ]
  },
  {
    nis: "12511085",
    fullname: "Siti Rahma Azzahra",
    role: "Wakil Ketua Rayon",
    isOfficer: true,
    isAdmin: false,
    major: "TJKT (Teknik Jaringan Komputer)",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Juara 2 Cisco Network Challenge", level: "Tingkat Provinsi", date: "Juni 2026" }
    ]
  },
  {
    nis: "12511092",
    fullname: "Ahmad Fauzi",
    role: "Sekretaris Rayon",
    isOfficer: true,
    isAdmin: false,
    major: "PPLG",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Best UI/UX Design Hackathon 2026", level: "Tingkat Kota", date: "April 2026" }
    ]
  },
  {
    nis: "12511101",
    fullname: "Dewi Lestari",
    role: "Bendahara Rayon",
    isOfficer: true,
    isAdmin: false,
    major: "DKV (Desain Komunikasi Visual)",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Juara 1 Poster Design Edukasi", level: "Tingkat Nasional", date: "Maret 2026" }
    ]
  },
  {
    nis: "12511115",
    fullname: "Rizky Pratama",
    role: "Divisi Kedisiplinan",
    isOfficer: true,
    isAdmin: false,
    major: "TJKT",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Siswa Terdisiplin Pekan Kebiasaan Baik", level: "Tingkat Sekolah", date: "Agustus 2026" }
    ]
  },
  {
    nis: "12511123",
    fullname: "Anisa Putri",
    role: "Divisi Kebersihan",
    isOfficer: true,
    isAdmin: false,
    major: "MPLB (Manajemen Perkantoran)",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    achievements: []
  },
  {
    nis: "12511130",
    fullname: "Bagas Setiawan",
    role: "Anggota",
    isOfficer: false,
    isAdmin: false,
    major: "PPLG",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    achievements: [
      { title: "Peserta Logic Programming Olympiad", level: "Tingkat Nasional", date: "Februari 2026" }
    ]
  },
  {
    nis: "12511142",
    fullname: "Nabila Zahra",
    role: "Anggota",
    isOfficer: false,
    isAdmin: false,
    major: "KLN (Kuliner)",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
    achievements: []
  }
];

// Duty Schedule Data (Jadwal Piket)
export const scheduleData: ScheduleItem[] = [
  { day: "Senin", students: ["Moch Luthfy Naufal", "Siti Rahma Azzahra"] },
  { day: "Selasa", students: ["Ahmad Fauzi", "Dewi Lestari"] },
  { day: "Rabu", students: ["Rizky Pratama", "Anisa Putri"] },
  { day: "Kamis", students: ["Bagas Setiawan", "Nabila Zahra"] },
  { day: "Jumat", students: ["Moch Luthfy Naufal", "Rizky Pratama", "Ahmad Fauzi"] }
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
    description: "Karya desain komunikasi visual membanggakan oleh Dewi Lestari pada National Student Art Festival.",
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
