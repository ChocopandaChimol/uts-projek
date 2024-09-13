1. Instal Git Bash
Jika kamu belum menginstal Git Bash, kamu bisa mengunduh dan menginstalnya dari situs web Git. Pilih versi yang sesuai dengan sistem operasi kamu dan ikuti petunjuk instalasi.

2. Buka Git Bash
Setelah Git Bash terinstal, buka aplikasi Git Bash di komputer kamu.

3. Clone Repositori dari GitHub
   Untuk meng-clone repositori GitHub ke komputer kamu, ikuti langkah-langkah berikut:
   1. Dapatkan URL Repositori:
      URL repositori yang ingin di-clone adalah: https://github.com/ChocopandaChimol/nextjs-uts.git
   2. Jalankan Perintah Clone:
      Di Git Bash, navigasikan ke direktori tempat kamu ingin menyimpan repositori tersebut. Gunakan perintah cd untuk berpindah direktori.
      
      cd path/to/your/directory

      Setelah berada di direktori yang tepat, jalankan perintah berikut untuk meng-clone repositori:

      git clone https://github.com/ChocopandaChimol/nextjs-uts.git

    3. Masuk ke Direktori Proyek:
       Setelah cloning selesai, masuk ke direktori proyek dengan perintah:

       cd nextjs-uts
4. Instal Dependensi Proyek
Setelah meng-clone repositori, kamu perlu menginstal dependensi proyek. Jika proyek ini menggunakan Node.js, kamu biasanya akan menggunakan npm atau yarn untuk mengelola dependensi.
    1. Instal Dependensi dengan npm:
       Jika proyek menggunakan npm, jalankan perintah berikut :
       
       npm install

    2. Instal Dependensi dengan Yarn:
       Jika proyek menggunakan yarn, jalankan perintah berikut :

       yarn install

5. Jalankan Proyek
Setelah semua dependensi terinstal, kamu dapat menjalankan proyek. Biasanya, ada skrip yang sudah didefinisikan di package.json yang memungkinkan kamu untuk menjalankan proyek.
     1. Jalankan Proyek dengan npm:
        Untuk menjalankan proyek menggunakan npm, jalankan perintah berikut :

        npm run dev

     2. Jalankan Proyek dengan Yarn:
        Untuk menjalankan proyek menggunakan yarn, jalankan perintah berikut :

        yarn dev
        
6. Cek Proyek di Browser
Jika proyek berjalan dengan baik, kamu biasanya akan melihat pesan di terminal yang menunjukkan URL tempat proyek dapat diakses, biasanya http://localhost:3000. Buka URL tersebut di browser untuk melihat aplikasi.

