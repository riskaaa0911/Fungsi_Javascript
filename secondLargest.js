//Fungsi untuk mencari angka terbesar kedua
function secondLargest(arr) {
  // Menyimpan angka terbesar dan terbesar kedua
  // Nilai awal menggunakan -Infinity agar bisa membandingkan angka negatif juga
  let terbesar = -Infinity;
  let terbesarKedua = -Infinity;

  // Melakukan perulangan untuk memeriksa setiap elemen array
  for (let i = 0; i < arr.length; i++) {
    // Jika angka saat ini lebih besar dari angka terbesar
    if (arr[i] > terbesar) {
      // Angka terbesar sebelumnya dipindahkan menjadi terbesar kedua
      terbesarKedua = terbesar;

      // Angka saat ini menjadi angka terbesar yang baru
      terbesar = arr[i];

      // Jika angka saat ini lebih besar dari terbesar kedua
      // dan tidak sama dengan angka terbesar
    } else if (arr[i] > terbesarKedua && arr[i] !== terbesar) {
      // Menyimpan angka saat ini sebagai angka terbesar kedua
      terbesarKedua = arr[i];
    }
  }

  // Jika tidak ditemukan angka terbesar kedua yang berbeda, kembalikan null
  // Jika ditemukan, kembalikan angka terbesar kedua
  return terbesarKedua === -Infinity ? null : terbesarKedua;
}

// Contoh penggunaan pertama
console.log(secondLargest([10, 5, 8, 20, 15]));
// Output: 15

// Contoh penggunaan kedua (terdapat angka duplikat)
console.log(secondLargest([10, 10, 8, 8, 5]));
// Output: 8

//Jika tidak ada angka terbesar kedua
console.log(secondLargest([5, 5, 5]));
// Output: null
