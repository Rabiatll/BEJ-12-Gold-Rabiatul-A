class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  getAll(req, res) {
    const users = this.userService.getAll();

    res.status(200).send({
      users: users
    });
  }

  getByEmail(req, res) {
    const email = req.params.email;
    const user = this.userService.getByEmail(email);

    let statusCode = 200;

    if (user === null) {
      statusCode = 404;
    }

    res.status(statusCode).send({
      user: user
    });
  }

  register(req, res) {
    // TODO:
    // return 201 (created) ketika berhasil
    // gagal return 400

    // ===> tambahkan kode this.register = this.register.bind(this) ke constructor

    // 1. ambil data dari body yang dikirim di postman
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    // 2. check apakah email tersebut sudah terdaftar atau belum dengan memanggil userService
    const emailExist = this.userService.getByEmail(email);

    // 3. kalau email sudah terdaftar maka return 400, alias gagal
    if (emailExist) {
      res.status(400).send('Gagal')
    } else {
    // kalau tidak ada maka masukkan data dari body tadi ke daftar user di user repository
    // dengan cara memanggil userService.create dengan parameter name, email dan password
    this.userService.create(name, email, password)

    // return 200 (OK)
    res.status(200).send('OK')
    }
  }

  login(req, res) {
    // TODO:
    // return 200 (OK) ketika berhasil
    // gagal return 400

    // pertama tambah kode this.login = this.login.bind(this) ke constructor
    // 1. ambil email dan password dari body yang dikirim di postman
    const email = req.body.email
    const password = req.body.password

    // cek apakah user dengan email tersebut ada di daftar user
    const user = this.userService.getByEmail(email);

    // kalau tidak ada maka return 400 (Gagal)
    if (!user) {
      res.status(400).send('Gagal')
    }

    // kalau ada, lanjut cek password yang dikirim di body
    // apakah password tersebut cocok/sesuai dengan yang tersimpan di data user
    // kalau cocok maka return 200 OK, kalau tidak cocok maka return 400 Gagal
    if (password == user.password) {
      res.status(200).send('OK')
    } else {
      res.status(400).send('Gagal')
    }

  }
}

module.exports = UserHandler;
