var dssv = [];

const DSSV_LOCALSTORAGE = "DSSV_LOCALSTORAGE";

let dssvLayLen = localStorage.getItem(DSSV_LOCALSTORAGE);
if (dssvLayLen != null) {
  dssv = JSON.parse(dssvLayLen);
  for (var index = 0; index < dssv.length; index++) {
    sv = dssv[index];
    dssv[index] = new SinhVien(
      sv.maSv,
      sv.tenSv,
      sv.email,
      sv.matKhau,
      sv.diemToan,
      sv.diemLy,
      sv.diemHoa
    );
  }
  renderThongTin(dssv);
}

function ThemSinhVien() {
  var newSv = LayThongTinTuForm();
  dssv.push(newSv);

  //tạo json
  var dssJson = JSON.stringify(dssv);

  //lưu json

  localStorage.setItem(DSSV_LOCALSTORAGE, dssJson);

  renderThongTin(dssv);
  console.log(dssv);
}

function xoaSinhVien(id) {
  var index = timViTri(id, dssv);

  // var index = dssv.findIndex(function (sinhVien) {
  //   return sinhVien.maSv == id;
  // });
  if (index != -1) {
    dssv.splice(index, 1);
    renderThongTin(dssv);
  }
}

function suaSinhVien(id) {
  var index = timViTri(id, dssv);
  if (index != -1) {
    var sv = dssv[index];
    showThongTin(sv);
  }
  console.log(sv);
}

function capNhatThongTin() {
  var sinhVienUpdate = LayThongTinTuForm();
  var maSinhVienupdate = sinhVienUpdate.maSv;
  var index = timViTri(maSinhVienupdate, dssv);
  if (index != -1) {
    dssv[index] = sinhVienUpdate;
    renderThongTin(dssv);
  }
}

function reSetThongTin() {
  var dssvNul = new SinhVien(
    (maSv = ""),
    (tenSv = ""),
    (email = ""),
    (matKhau = ""),
    (diemToan = ""),
    (diemLy = ""),
    (diemHoa = "")
  );
  showThongTin(dssvNul);
}
