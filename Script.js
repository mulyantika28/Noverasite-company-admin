function bukaMenu(namaMenu) {
  if (namaMenu === "Data Tim") {
    document.getElementById("halamanTim").style.display = "block";
    document.getElementById("halamanTim").scrollIntoView({
      behavior: "smooth"
    });
  } else {
    alert("Menu " + namaMenu + " sedang dikembangkan.");
  }
}

function tambahTim() {
  const nama = document.getElementById("namaTim").value.trim();
  const jabatan = document.getElementById("jabatanTim").value.trim();
  const kontak = document.getElementById("kontakTim").value.trim();

  if (!nama || !jabatan || !kontak) {
    alert("Lengkapi semua data anggota!");
    return;
  }

  const daftar = document.getElementById("daftarTim");
  const anggota = document.createElement("div");

  anggota.className = "card";

  const info = document.createElement("p");
  info.textContent = nama + " - " + jabatan + " - " + kontak;

  const hapus = document.createElement("button");
  hapus.textContent = "Hapus";
  hapus.onclick = function() {
    anggota.remove();
  };

  anggota.appendChild(info);
  anggota.appendChild(hapus);
  daftar.appendChild(anggota);

  document.getElementById("namaTim").value = "";
  document.getElementById("jabatanTim").value = "";
  document.getElementById("kontakTim").value = "";
}
