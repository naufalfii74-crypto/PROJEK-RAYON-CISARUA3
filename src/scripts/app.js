/* ==========================================================================
   APP.JS — Rayon Cisarua 3 Client-Side Logic
   Ported from inline <script> in index.html for Astro migration.
   ========================================================================== */

// ============================================================
// DATA (embedded for client-side mutation)
// ============================================================

const studentsData = [
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
    isAdmin: true,
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

const scheduleData = [
  { day: "Senin", students: ["Chieka Sharlie Wulandari", "Daniel Kurniawan", "M Zafa Zulprana", "Muhammad Asrul Gunawan", "Nadira Dewanti Putri", "Moch Luthfy Naufal", "Syifa Dwi Anggraini", "Zaghita Rahmah Firdaus"] },
  { day: "Selasa", students: ["Al'Fika Dwi Cahyani", "Fadlan Ahmad Jamil Al Ayubi", "Haphinatul Shafira", "Muhamad Aditya Abdilah", "Muhamad Azwan Muzaki", "Muhamad Fedliansyah Ilham", "Salsabila Destiana Putri"] },
  { day: "Rabu", students: ["Dervy Alita Wijaya", "Muhammad Naufal Alkahfi", "Sifa Aulia", "Fadliansyah Venanda", "Muhamad Fadilah", "Ridwan Faiz Rojabi", "Siti Aliya Zhafirah"] },
  { day: "Kamis", students: ["Adhwa Baihaqi", "Danisha Aniq Ayasha Firgiansa", "Ferhika Putri Maulidina", "Muhammad Faris Hisyam Azizi", "Mustafa Habibi Agnia", "Rizky Ikhsan Maulana", "Viona Oktora Mulyana Putri"] },
  { day: "Jumat", students: ["Alisya Zahwa Nurlatifah", "Dinda Aqila Nurfadilah", "Siti Erfina Nurmawati", "Bagas Dizwar Asfas", "Muhammad Rafliansyah Putra", "Sandy Prayogo", "Zyad Abdillah"] }
];

const announcementsData = [
  {
    title: "",
    date: "",
    content: "ASCENDING"
  },
  {
    title: "t",
    date: "d",
    content: "c"
  }
];

// ============================================================
// GLOBAL STATE
// ============================================================
let loggedInUser = null;
let tempAvatarSelection = null;

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setupStudentSearch();
  setupNavbarScroll();
  setupMobileMenu();
  setupGalleryLightbox();
  setupLoginModal();
  setupDashboardModal();
  setupAvatarModal();
  setupPiketAdminModal();
  setupQuickLoginButtons();
});

// ============================================================
// STUDENT SEARCH & FILTER
// ============================================================
function setupStudentSearch() {
  const searchInput = document.getElementById('student-search-input');
  const roleFilter = document.getElementById('student-role-filter');
  if (!searchInput || !roleFilter) return;

  function filterStudents() {
    const query = searchInput.value.toLowerCase().trim();
    const role = roleFilter.value;
    const cards = document.querySelectorAll('[data-student-card]');
    const emptyState = document.getElementById('students-empty-state');
    let visibleCount = 0;

    cards.forEach(card => {
      const fullname = (card.dataset.fullname || '').toLowerCase();
      const nis = card.dataset.nis || '';
      const isOfficer = card.dataset.officer === 'true';

      const matchesQuery = fullname.includes(query) || nis.includes(query);
      const matchesRole = role === 'ALL' ? true :
        role === 'Pengurus' ? isOfficer : !isOfficer;

      if (matchesQuery && matchesRole) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.classList.toggle('hidden', visibleCount > 0);
    }
  }

  searchInput.addEventListener('input', filterStudents);
  roleFilter.addEventListener('change', filterStudents);
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('glass-nav', 'shadow-sm');
    } else {
      navbar.classList.remove('glass-nav', 'shadow-sm');
    }
  });
}

// ============================================================
// MOBILE DRAWER MENU
// ============================================================
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMobileMenu() {
    if (mobileMenu) mobileMenu.classList.toggle('translate-x-full');
  }

  if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));
}

// ============================================================
// GALLERY LIGHTBOX
// ============================================================
function setupGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  // Open lightbox on gallery item click
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = document.getElementById('lightbox-img');
      const title = document.getElementById('lightbox-title');
      const date = document.getElementById('lightbox-date');
      const desc = document.getElementById('lightbox-desc');

      if (img) img.src = item.dataset.image;
      if (title) title.textContent = item.dataset.title;
      if (date) date.textContent = item.dataset.date;
      if (desc) desc.textContent = item.dataset.desc;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  function closeLightbox() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  const closeBtn = document.getElementById('lightbox-close-btn');
  const closeTextBtn = document.getElementById('lightbox-close-text-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (closeTextBtn) closeTextBtn.addEventListener('click', closeLightbox);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
}

// ============================================================
// LOGIN MODAL
// ============================================================
function setupLoginModal() {
  const modal = document.getElementById('login-modal');
  const form = document.getElementById('login-form');
  if (!modal || !form) return;

  // Open login modal
  function openLoginModal() {
    modal.classList.remove('hidden');
    const errorMsg = document.getElementById('login-error-msg');
    if (errorMsg) errorMsg.classList.add('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLoginModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Login button triggers
  const navLoginBtn = document.getElementById('nav-login-btn');
  const mobileLoginBtn = document.getElementById('mobile-login-btn');
  const mobileDrawerLoginBtn = document.getElementById('mobile-drawer-login-btn');

  if (navLoginBtn) navLoginBtn.addEventListener('click', openLoginModal);
  if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', openLoginModal);
  if (mobileDrawerLoginBtn) mobileDrawerLoginBtn.addEventListener('click', openLoginModal);

  // Close login modal
  const closeBtn = document.getElementById('login-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeLoginModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLoginModal();
  });

  // Demo fill buttons
  document.querySelectorAll('.demo-fill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fullnameInput = document.getElementById('login-fullname');
      const nisInput = document.getElementById('login-nis');
      if (fullnameInput) fullnameInput.value = btn.dataset.fullname;
      if (nisInput) nisInput.value = btn.dataset.nis;
    });
  });

  // Form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullnameInput = document.getElementById('login-fullname').value.trim();
    const nisInput = document.getElementById('login-nis').value.trim();

    const student = studentsData.find(s =>
      s.fullname.toLowerCase() === fullnameInput.toLowerCase() && s.nis === nisInput
    );

    if (student) {
      loggedInUser = student;
      closeLoginModal();
      openDashboard(student);
      updateNavState();
      updatePiketAdminVisibility();
    } else {
      const errorMsg = document.getElementById('login-error-msg');
      if (errorMsg) errorMsg.classList.remove('hidden');
    }
  });

  // Expose openLoginModal globally for quick-login buttons
  window._openLoginModal = openLoginModal;
  window._closeLoginModal = closeLoginModal;
}

// ============================================================
// QUICK LOGIN BUTTONS (on student cards)
// ============================================================
function setupQuickLoginButtons() {
  document.querySelectorAll('.quick-login-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window._openLoginModal) window._openLoginModal();
      const fullnameInput = document.getElementById('login-fullname');
      const nisInput = document.getElementById('login-nis');
      if (fullnameInput) fullnameInput.value = btn.dataset.fullname;
      if (nisInput) nisInput.value = btn.dataset.nis;
    });
  });
}

// ============================================================
// NAVIGATION AUTH STATE
// ============================================================
function updateNavState() {
  const navAuth = document.getElementById('nav-auth-container');
  if (!navAuth) return;

  if (loggedInUser) {
    navAuth.innerHTML = `
      <button id="nav-portal-btn" class="flex items-center gap-2 bg-brand-warm border border-brand-light text-brand-orange hover:bg-orange-100 px-4 py-2 rounded-full font-semibold text-xs transition-colors">
        <img src="${loggedInUser.photo}" class="w-6 h-6 rounded-full object-cover border border-brand-orange">
        <span>Portal (${loggedInUser.fullname.split(' ')[0]})</span>
      </button>
      <button id="nav-logout-btn" class="text-xs text-red-500 font-semibold hover:underline">Keluar</button>
    `;

    document.getElementById('nav-portal-btn').addEventListener('click', () => {
      openDashboard(loggedInUser);
    });

    document.getElementById('nav-logout-btn').addEventListener('click', logoutStudent);
  } else {
    navAuth.innerHTML = `
      <button id="nav-login-btn" class="flex items-center gap-2 bg-brand-orange hover:bg-brand-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md shadow-brand-orange/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
        <i class="fas fa-sign-in-alt text-xs"></i>
        <span>Login Siswa</span>
      </button>
    `;

    document.getElementById('nav-login-btn').addEventListener('click', () => {
      if (window._openLoginModal) window._openLoginModal();
    });
  }
}

// ============================================================
// DASHBOARD MODAL
// ============================================================
function setupDashboardModal() {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', logoutStudent);
}

function openDashboard(student) {
  const dashModal = document.getElementById('dashboard-modal');
  if (!dashModal) return;

  document.getElementById('dash-user-name').textContent = student.fullname;
  document.getElementById('dash-user-avatar').src = student.photo;
  document.getElementById('dash-welcome-name').textContent = student.fullname;

  document.getElementById('dash-card-avatar').src = student.photo;
  document.getElementById('dash-card-fullname').textContent = student.fullname;
  document.getElementById('dash-card-role').textContent = student.role;
  document.getElementById('dash-card-nis').textContent = student.nis;
  document.getElementById('dash-card-major').textContent = student.major;

  // Admin badge trigger
  const adminBadge = document.getElementById('dash-card-admin-badge');
  const adminShortcut = document.getElementById('dash-admin-shortcut');
  if (student.isAdmin) {
    adminBadge.classList.remove('hidden');
    adminShortcut.classList.remove('hidden');
  } else {
    adminBadge.classList.add('hidden');
    adminShortcut.classList.add('hidden');
  }

  // Render Announcements
  const announceList = document.getElementById('dash-announcements-list');
  if (announceList) {
    announceList.innerHTML = announcementsData.map(a => `
      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
        <div class="flex justify-between items-center mb-1">
          <h4 class="font-display font-bold text-sm text-brand-slate">${a.title}</h4>
          <span class="text-[10px] text-slate-400">${a.date}</span>
        </div>
        <p class="text-xs text-brand-muted leading-relaxed">${a.content}</p>
      </div>
    `).join('');
  }

  // Render Personal Achievements
  const achieveList = document.getElementById('dash-personal-achievements');
  if (achieveList) {
    if (student.achievements && student.achievements.length > 0) {
      achieveList.innerHTML = student.achievements.map(a => `
        <div class="p-4 rounded-2xl bg-orange-50/60 border border-brand-light flex items-center justify-between">
          <div>
            <h4 class="font-display font-bold text-sm text-brand-slate">${a.title}</h4>
            <p class="text-xs text-brand-orange mt-0.5">${a.level} &bull; ${a.date}</p>
          </div>
          <i class="fas fa-award text-brand-orange text-xl"></i>
        </div>
      `).join('');
    } else {
      achieveList.innerHTML = `
        <div class="text-center py-6 border border-dashed border-slate-200 rounded-2xl">
          <p class="text-xs text-slate-400">Belum ada catatan prestasi personal terdaftar.</p>
        </div>
      `;
    }
  }

  dashModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDashboardModal() {
  const dashModal = document.getElementById('dashboard-modal');
  if (dashModal) {
    dashModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function logoutStudent() {
  loggedInUser = null;
  closeDashboardModal();
  updateNavState();
  updatePiketAdminVisibility();
}

// ============================================================
// AVATAR MODAL
// ============================================================
function setupAvatarModal() {
  const modal = document.getElementById('avatar-modal');
  if (!modal) return;

  // Open avatar modal from dashboard buttons
  const avatarEditBtn = document.getElementById('avatar-edit-btn');
  const avatarChangeLink = document.getElementById('avatar-change-link');

  function openAvatarModal() {
    if (!loggedInUser) return;
    tempAvatarSelection = loggedInUser.photo;
    document.getElementById('avatar-preview-img').src = loggedInUser.photo;
    document.getElementById('avatar-url-input').value = '';
    document.getElementById('avatar-file-input').value = '';
    modal.classList.remove('hidden');
  }

  function closeAvatarModal() {
    modal.classList.add('hidden');
  }

  if (avatarEditBtn) avatarEditBtn.addEventListener('click', openAvatarModal);
  if (avatarChangeLink) avatarChangeLink.addEventListener('click', openAvatarModal);

  // Close
  const closeBtn = document.getElementById('avatar-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeAvatarModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAvatarModal();
  });

  // File input preview
  const fileInput = document.getElementById('avatar-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          tempAvatarSelection = e.target.result;
          document.getElementById('avatar-preview-img').src = tempAvatarSelection;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // URL input preview
  const urlInput = document.getElementById('avatar-url-input');
  if (urlInput) {
    urlInput.addEventListener('input', () => {
      const url = urlInput.value.trim();
      if (url.length > 5) {
        tempAvatarSelection = url;
        document.getElementById('avatar-preview-img').src = tempAvatarSelection;
      }
    });
  }

  // Reset avatar
  const resetBtn = document.getElementById('avatar-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      tempAvatarSelection = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400";
      document.getElementById('avatar-preview-img').src = tempAvatarSelection;
      document.getElementById('avatar-url-input').value = '';
      document.getElementById('avatar-file-input').value = '';
    });
  }

  // Save avatar
  const saveBtn = document.getElementById('avatar-save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!loggedInUser || !tempAvatarSelection) return;

      // Update student in state
      loggedInUser.photo = tempAvatarSelection;

      // Update master roster list
      const idx = studentsData.findIndex(s => s.nis === loggedInUser.nis);
      if (idx !== -1) {
        studentsData[idx].photo = tempAvatarSelection;
      }

      // Update dashboard UI elements
      document.getElementById('dash-user-avatar').src = tempAvatarSelection;
      document.getElementById('dash-card-avatar').src = tempAvatarSelection;

      // Update student card in main page
      const studentCards = document.querySelectorAll('[data-student-card]');
      studentCards.forEach(card => {
        if (card.dataset.nis === loggedInUser.nis) {
          const img = card.querySelector('img');
          if (img) img.src = tempAvatarSelection;
        }
      });

      closeAvatarModal();
      updateNavState();
    });
  }
}

// ============================================================
// PIKET ADMIN MODAL
// ============================================================
function updatePiketAdminVisibility() {
  const adminControls = document.getElementById('piket-admin-controls');
  if (adminControls) {
    if (loggedInUser && loggedInUser.isAdmin) {
      adminControls.classList.remove('hidden');
    } else {
      adminControls.classList.add('hidden');
    }
  }
}

function renderPiketSchedule() {
  const container = document.getElementById('piket-schedule-container');
  if (!container) return;

  container.innerHTML = scheduleData.map(item => `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-soft flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h4 class="font-display font-bold text-base text-brand-slate flex items-center gap-2">
            <i class="far fa-calendar-check text-brand-orange text-sm"></i>
            ${item.day}
          </h4>
          <span class="text-[10px] font-bold bg-brand-warm text-brand-orange px-2 py-0.5 rounded-full border border-brand-light">
            ${item.students.length} Siswa
          </span>
        </div>
        <ul class="space-y-2">
          ${item.students.map(name => `
            <li class="text-xs font-medium text-brand-slate flex items-center gap-2 py-1 px-2 rounded-lg bg-slate-50">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              <span>${name}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <p class="text-[10px] text-brand-muted mt-4 text-right italic">Piket Kebersihan</p>
    </div>
  `).join('');
}

function setupPiketAdminModal() {
  const modal = document.getElementById('piket-admin-modal');
  if (!modal) return;

  // Open from piket section button
  const openBtn = document.getElementById('piket-admin-open-btn');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      openPiketAdminModal();
    });
  }

  // Open from dashboard admin shortcut
  const dashPiketBtn = document.getElementById('dash-piket-admin-btn');
  if (dashPiketBtn) {
    dashPiketBtn.addEventListener('click', () => {
      closeDashboardModal();
      openPiketAdminModal();
    });
  }

  // Close buttons
  const closeBtn = document.getElementById('piket-admin-close-btn');
  const doneBtn = document.getElementById('piket-admin-done-btn');
  if (closeBtn) closeBtn.addEventListener('click', closePiketAdminModal);
  if (doneBtn) doneBtn.addEventListener('click', closePiketAdminModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePiketAdminModal();
  });

  // Add student to piket
  const addBtn = document.getElementById('piket-add-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const studentName = document.getElementById('piket-add-student').value;
      const targetDay = document.getElementById('piket-add-day').value;

      const dayObj = scheduleData.find(d => d.day === targetDay);
      if (dayObj) {
        if (!dayObj.students.includes(studentName)) {
          dayObj.students.push(studentName);
          renderPiketSchedule();
          renderPiketAdminList();
        }
      }
    });
  }
}

function openPiketAdminModal() {
  if (!loggedInUser || !loggedInUser.isAdmin) return;

  const modal = document.getElementById('piket-admin-modal');
  if (!modal) return;

  // Populate student dropdown
  const select = document.getElementById('piket-add-student');
  if (select) {
    select.innerHTML = studentsData.map(s => `
      <option value="${s.fullname}">${s.fullname}</option>
    `).join('');
  }

  renderPiketAdminList();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePiketAdminModal() {
  const modal = document.getElementById('piket-admin-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function renderPiketAdminList() {
  const list = document.getElementById('piket-admin-list');
  if (!list) return;

  let html = '';

  scheduleData.forEach((dayGroup, dayIdx) => {
    dayGroup.students.forEach((studentName, studentIdx) => {
      html += `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
          <div class="flex items-center gap-2">
            <span class="font-bold text-brand-orange bg-brand-warm px-2 py-0.5 rounded border border-brand-light">${dayGroup.day}</span>
            <span class="font-semibold text-brand-slate">${studentName}</span>
          </div>
          <div class="flex items-center gap-2">
            <select class="piket-day-change text-[11px] px-2 py-1 rounded border border-slate-200 bg-white" data-day-idx="${dayIdx}" data-student-idx="${studentIdx}">
              <option value="Senin" ${dayGroup.day === 'Senin' ? 'selected' : ''}>Senin</option>
              <option value="Selasa" ${dayGroup.day === 'Selasa' ? 'selected' : ''}>Selasa</option>
              <option value="Rabu" ${dayGroup.day === 'Rabu' ? 'selected' : ''}>Rabu</option>
              <option value="Kamis" ${dayGroup.day === 'Kamis' ? 'selected' : ''}>Kamis</option>
              <option value="Jumat" ${dayGroup.day === 'Jumat' ? 'selected' : ''}>Jumat</option>
            </select>
            <button class="piket-remove-btn text-red-500 hover:text-red-700 p-1" data-day-idx="${dayIdx}" data-student-idx="${studentIdx}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      `;
    });
  });

  list.innerHTML = html;

  // Attach event listeners to dynamically created elements
  list.querySelectorAll('.piket-day-change').forEach(select => {
    select.addEventListener('change', (e) => {
      const dayIdx = parseInt(e.target.dataset.dayIdx);
      const studentIdx = parseInt(e.target.dataset.studentIdx);
      const newDay = e.target.value;

      const studentName = scheduleData[dayIdx].students[studentIdx];
      scheduleData[dayIdx].students.splice(studentIdx, 1);

      const newDayObj = scheduleData.find(d => d.day === newDay);
      if (newDayObj && !newDayObj.students.includes(studentName)) {
        newDayObj.students.push(studentName);
      }

      renderPiketSchedule();
      renderPiketAdminList();
    });
  });

  list.querySelectorAll('.piket-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayIdx = parseInt(btn.dataset.dayIdx);
      const studentIdx = parseInt(btn.dataset.studentIdx);

      scheduleData[dayIdx].students.splice(studentIdx, 1);
      renderPiketSchedule();
      renderPiketAdminList();
    });
  });
}
