function LayThongTinTuForm() {
  var maSv = document.getElementById("txtMaSV").value;
  var tenSv = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemLy = document.getElementById("txtDiemLy").value * 1;
  var diemHoa = document.getElementById("txtDiemHoa").value * 1;

  var newSinhVien = new SinhVien(
    maSv,
    tenSv,
    email,
    matKhau,
    diemToan,
    diemLy,
    diemHoa
  );
  return newSinhVien;
}

function renderThongTin(svarr) {
  var contentHTML = ``;
  for (var i = 0; i < svarr.length; i++) {
    var sv = svarr[i];
    var content = `<tr>
    <td>${sv.maSv}</td>
    <td>${sv.tenSv}</td>
    <td>${sv.email}</td>
    <td>${sv.diemTB()}</td>
    <td>
    <button onClick='xoaSinhVien(${
      sv.maSv
    })' class="btn btn-danger">Xoá</button>
    <button onClick='suaSinhVien(${
      sv.maSv
    })' class="btn btn-warning">Sửa</button>
    </td>
    </tr>`;
    contentHTML += content;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function timViTri(id, dssv) {
  for (index = 0; index < dssv.length; index++) {
    var sv = dssv[index];

    if (sv.maSv == id) {
      return index;
    }
  }
  return -1;
}

function showThongTin(sv) {
  document.getElementById("txtMaSV").value = sv.maSv;
  document.getElementById("txtTenSV").value = sv.tenSv;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemLy").value = sv.diemLy;
  document.getElementById("txtDiemHoa").value = sv.diemHoa;
}
