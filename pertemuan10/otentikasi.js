function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");
    if (inp_nama == "ahmad2017" && inp_pass == "integrity") {
      form.setAttribute("action", "loginberhasil.html");
      window.alert("Login Berhasil");
    } else {
      window.alert("Login Gagal");
    }
    console.log(inp_pass + inp_nama);
  }