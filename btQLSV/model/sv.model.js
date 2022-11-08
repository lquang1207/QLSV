function SinhVien(ma, ten, email, matKhau, diemToan, diemLy, diemHoa) {
  this.maSv = ma;
  this.tenSv = ten;
  this.email = email;
  this.matKhau = matKhau;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.diemTB = function () {
    return (this.diemHoa + this.diemLy + this.diemToan) / 3;
  };
}
