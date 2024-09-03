# Tugas GUIDEBOOK PROJECT 5 || CRUD and Authentication Backend Project

## Deskripsi

Tugas ini adalah sebuah proyek backend yang memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data pengguna dan juga melakukan autentikasi menggunakan token JWT. Proyek ini dibangun menggunakan Node.js, Express, MySQL, dan JSON Web Tokens (JWT).

## Fitur Utama

1. **Autentikasi Pengguna**:
   - **Register**: Pengguna baru dapat mendaftar dengan nama, email, dan password.
   - **Login**: Pengguna dapat login dan mendapatkan token JWT untuk autentikasi.

2. **Operasi CRUD**:
   - **Create**: Pengguna baru dapat membuat data pengguna baru.
   - **Read**: Pengguna dapat membaca data pengguna yang ada.
   - **Update**: Pengguna dapat memperbarui data pengguna yang ada.
   - **Delete**: Pengguna dapat menghapus data pengguna yang ada.

## Instalasi

1. Clone repository ini ke dalam direktori lokal Anda:
   ```bash
   git clone https://github.com/adzizPe/nodejs-crud-auth.git
   ```

2. Pindah ke direktori proyek:
   ```bash  
   cd nodejs-crud-auth
   ```

3. Instal dependensi:
   ```bash
   npm install
   ```

4. Buat file `.env` dan tambahkan variabel lingkungan:
   ```bash
   PORT=5000
   DATABASE_URL=mysql://root:@localhost:3306/crud_db
   JWT_SECRET=your_jwt_secret

   ```  

5. Jalankan server:
   ```bash
   npm start
   ```

## Penggunaan

### Postman:

1. **Autentikasi**:
   - **Register**: Kirim permintaan POST ke `http://localhost:5000/api/auth/register` dengan body:
     ```json    
     {
       "name": "Nama Pengguna",
       "email": "email@contoh.com",
       "password": "password"
     }
     ```
   - **Login**: Kirim permintaan POST ke `http://localhost:5000/api/auth/login` dengan body:
     ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTcyNTM3ODIyNywiZXhwIjoxNzI1MzgxODI3fQ.Ta00_KZ2RyTVkZ_f-lpc8lbbhX1-g_ogsjzqnYttW5w",
        "id": ,
        "name": "Nama Pengguna",
        "email": "email@contoh.com",
        "password": "password",
        "created_at": "2024-09-01T15:42:40.000Z"
    }
    ```

2. **Operasi CRUD**:
   - **Create**: Kirim permintaan POST ke `http://localhost:5000/api/profile` dengan body:
   ```json
   {
    "message": "User created successfully",
    "newUser": {
        "id": ,
        "name": "Nama Pengguna Baru",
        "email": "email@contoh.com"
          }   
    }
    ```

 4. **Read**: Kirim permintaan GET ke `http://localhost:5000/api/profile` untuk mendapatkan semua data pengguna.
   ```json
   {
    "message": "User fetched successfully!",
    "user": {
        "id": 1,
        "name": "Nama Pengguna",
        "email": "email@contoh.com",
        "password": "password",
        "created_at": "2024-09-01T15:42:40.000Z"
    }
    }
    ```

5. **Update**: Kirim permintaan PUT ke `http://localhost:5000/api/profile` dengan body:
     ```json
    {
    "message": "User updated successfully!"
    }
    ``` 

6. **Delete**: Kirim permintaan DELETE ke `http://localhost:5000/api/profile` untuk menghapus data pengguna berdasarkan ID.
    ```json
    {
    "message": "User deleted successfully!"
    }
    ```     

## Catatan
- Pastikan untuk mengganti kunci rahasia (secret key) di file `.env` dengan kunci yang aman.
- Gunakan token JWT yang valid untuk mengakses rute yang memerlukan autentikasi.        
