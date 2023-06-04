document.getElementById("tombol").addEventListener("click", function () {
    Swal.fire({
      title: "Absensi Terkirim!",
      text: "Absensi Anda telah terkirim.",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(function () {
      location.reload();
      window.scrollTo(0, 0);
    });
  });
  