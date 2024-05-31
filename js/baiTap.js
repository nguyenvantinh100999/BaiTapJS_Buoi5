// Bài 1
document.getElementById("ketQua11").onclick = function () {
  /**
   * Input: điểm chuẫn: number, khu vực, đối tượng
   *        điểm 3 môn: number
   *  */
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  let diemMonThuNhat = document.getElementById("diemMonThu1").value * 1;
  let diemMonThuHai = document.getElementById("diemMonThu2").value * 1;
  let diemMonThuBa = document.getElementById("diemMonThu3").value * 1;
  /**
   * Output: kết quả: str
   */
  let ketqua11 = "";
  /**
   * progress:
   */
  if (khuVuc === "A") {
    khuVuc = 2;
  } else if (khuVuc === "B") {
    khuVuc = 1;
  } else if (khuVuc === "C") {
    khuVuc = 0.5;
  } else {
    khuVuc = 0;
  }
  // console.log(khuVuc);
  if (doiTuong === 1) {
    doiTuong = 2.5;
  } else if (doiTuong === 2) {
    doiTuong = 1.5;
  } else if (doiTuong === 3) {
    doiTuong = 1;
  } else {
    doiTuong = 0;
  }
  // console.log(typeof doiTuong, doiTuong);
  let diemTong =
    khuVuc + doiTuong + diemMonThuNhat + diemMonThuHai + diemMonThuBa;
  if (
    diemChuan <= diemTong &&
    diemMonThuNhat > 0 &&
    diemMonThuHai > 0 &&
    diemMonThuBa > 0
  ) {
    ketqua11 = "Đậu";
  } else {
    ketqua11 = "Rớt";
  }
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Bạn đã ${ketqua11}. Tổng điểm ${diemTong}`;
};

//Bài 2
document.getElementById("tinhTienDien").onclick = function () {
  /**
   * Input: Nhập họ tên: str
   *        nhập số kw: number
   */
  let hoTen = document.getElementById("nhapHoTen").value;
  let soKw = document.getElementById("nhapSoKw").value * 1;
  /**
   * Output: kết Quả: str
   */
  let ketQua2 = "";
  /**
   * Progress: Tính tiến điện
   */
  let tongTien = 0;
  if (soKw <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tongTien.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}`;
};

//bài 3
document.getElementById("tinhTienThue").onclick = function () {
  console.log("123");
  /**
   * Input: Nhập họ tên: str, tổng thu nhập: number, người phụ thuộc : number
   */
  let nhapHoTen = document.getElementById("nhapHoTen1").value;
  let tongThuNhap = document.getElementById("tongThuNhapNam").value * 1;
  let nguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  /**
   * Output: thuế phải dóng: number
   */
  let tienThueTNCN = 0;
  /**
   * Progress: Quỷ đổi tiền
   */
  let thuNhapChiuThue = tongThuNhap - 4e6 - nguoiPhuThuoc * 1.6e6;
  if (thuNhapChiuThue < 0) {
    alert("số tiền thu nhập không hợp lệ");
  } else if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e6) {
    tienThueTNCN = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    tienThueTNCN = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    tienThueTNCN = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    tienThueTNCN = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    tienThueTNCN = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    tienThueTNCN = thuNhapChiuThue * 0.3;
  } else {
    tienThueTNCN = thuNhapChiuThue * 0.35;
  }
  console.log(tienThueTNCN);
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên:${nhapHoTen}, thu nhập chịu thuế: ${thuNhapChiuThue.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )} và số tiền thuế phải đóng: ${tienThueTNCN.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}`;
};

//bài 4
document.getElementById("tinhTienCap").onclick = function () {
  /**
   * Input: loại khách hàng: str, mã KH: str, số kênh: number, số kết nối:  number
   */
  let loaiKH = document.getElementById("mySelect").value;
  let maKH = document.getElementById("nhapMaKH").value;
  let soKenhCaoCap = document.getElementById("nhapSoKenh").value * 1;
  /**
   * OutPut: Tiền cáp: number
   */
  let tienCap = 0;
  /**
   * Progress: tính tiền cáp
   */
  if (loaiKH == "nhaDan") {
    tienCap = 4.5 + 20.5 + soKenhCaoCap * 7.5;
  } else if (loaiKH == "DoanhNghiep") {
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    if (soKetNoi > 10) {
      tienCap = 15 + 75 + soKenhCaoCap * 50 + (soKetNoi - 10) * 5;
    } else {
      tienCap = 15 + 75 + soKenhCaoCap * 50;
    }
  } else {
    alert("Hãy chọn loại khách hàng");
  }
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Mã khách hàng: ${maKH}; Tiền cáp: $${tienCap} `;
};

function soKetNoi() {
  let x = document.getElementById("mySelect").value;
  if (x == "DoanhNghiep") {
    document.getElementById("inPutSoKetNoi").innerHTML = `<input
    type="text"
    id="soKetNoi"
    placeholder="Số Kết Nối"
    class="nhapNgayLam"
  />`;
  } else {
    document.getElementById("inPutSoKetNoi").innerHTML = "";
  }
}
