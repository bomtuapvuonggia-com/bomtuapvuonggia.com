/**
 * Bơm Tự Áp Vương Gia - Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Product Data ---
  const productsData = {
    1: {
      title: "Bơm tự áp 60",
      subtitle: "Phù hợp hộ gia đình, trang trại nhỏ",
      img: "assets/images/prod_ram_pump.jpg",
      videoUrl: "https://youtube.com/shorts/iPGwI9vyqzQ?si=-Bo3wuA7Nc_8_lkg",
      features: [
        "Đưa nước lên cao thẳng đứng tối đa 15m - 30m, đường dẫn xa 300m",
        "Điều kiện hoạt động: Cần nguồn nước chảy đủ ống 60, cột áp đầu vào 2m",
        "Đầu ra ống nước phi 21",
        "Giá niêm yết: 4.500.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    2: {
      title: "Bơm tự áp 90",
      subtitle: "Hiệu suất cao, bền bỉ cho nông nghiệp",
      img: "assets/images/prod_ram_pump_90.jpg",
      videoUrl: "https://youtube.com/shorts/iPGwI9vyqzQ?si=-Bo3wuA7Nc_8_lkg",
      features: [
        "Đưa nước lên cao tối đa 20m,dẫn dài 300m",
        "Đầu cấp nước vào bơm ống kích thước phi 90,Cột áp nước 2m,Chiều dài đường nước cấp 20m",
        "Đầu ra ống nước kích thước phi 27",
        "Giá niêm yết: 5.500.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    3: {
      title: "Bơm Tự Áp 110",
      subtitle: "Giải pháp bơm nước cho vùng núi cao & trang trại lớn",
      img: "assets/images/prod_ram_pump.jpg",
      videoUrl: "https://youtu.be/sro3ah-d3Ec?si=v324-qD3u3Pscmo0",
      features: [
        "Bơm cao 30m thẳng đứng,dẫn dài 300m",
        "Đầu cấp nước vào bơm ống kích thước phi 110,Cột áp nước 2m,Chiều dài đường nước cấp 20m",
        "Đầu ra ống nước kích thước phi 34",
        "Giá 7.000.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    4: {
      title: "Bơm tự áp 140",
      subtitle: "Đẩy nước lên cao, dẫn xa tưới tiêu trang trại rộng",
      img: "assets/images/prod_ram_pump_90.jpg",
      videoUrl: "https://youtube.com/shorts/gEdJT31fnjg?si=KjXS2s8jUo4xQiP5",
      features: [
        "Đưa nước lên cao tối đa 35m,dẫn dài 300m",
        "Đầu cấp nước vào bơm ống kích thước phi 140,Cột áp nước 3m,Chiều dài đường nước cấp 20m",
        "Đầu ra ống nước kích thước phi 40",
        "Giá 10.000.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    5: {
      title: "Bơm Tự Áp 160",
      subtitle: "Công suất cực đại cấp nước sinh hoạt toàn thôn bản",
      img: "assets/images/prod_ram_pump.jpg",
      videoUrl: "https://youtu.be/TRAgV0a496M?si=uE49envh48nVKSSc",
      features: [
        "Dẫn nươc lên cao tối đa 40m,dẫn dài 300m",
        "Đầu cấp nước vào bơm ống kích thước phi 160,Cột áp nước 4m,Chiều dài đường nước cấp 20m",
        "Đầu ra ống nước kích thước phi 48",
        "Giá 13.000.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    6: {
      title: "Bơm Tự Áp Mini",
      subtitle: "Nhỏ gọn, tiện lợi cho khe suối nhỏ",
      img: "assets/images/prod_ram_pump_mini.jpg",
      videoUrl: "https://youtu.be/0tY04huhNWg?si=aHLhppQw2dpPahD0",
      features: [
        "Đưa nước lên cao thẳng đứng tối đa 25m,dẫn dài 300m",
        "Đầu cấp nước vào bơm ống kích thước phi 60,Cột áp nước 2m,đường ống cấp nước vào máy dài 20m",
        "Đầu ra ống nước kích thước phi 10",
        "Giá 2.300.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    7: {
      title: "bàn bẻ đai f1",
      subtitle: "Nhỏ gọn linh hoạt",
      img: "assets/images/ban-be-dai-f1.jpg",
      videoUrl: "https://youtu.be/cBep8_uOwc4?si=AOLivv8OQXxcVOOk",
      features: [
        "Bẻ đai sắt 6, 8, 10,đai lớn tối đa 500, bẻ vuông,chữ nhật,tam giác",
        "Giá 650.000đ",
        "Bảo hành chính hãng 12 tháng toàn quốc"
      ]
    },
    8: {
      title: "bàn bẻ sắt phi 18 bé",
      subtitle: "Nhỏ gọn,linh hoạt,trục bạc trợ lực",
      img: "assets/images/ban-be-sat-phi-18.jpg",
      videoUrl: "https://youtube.com/shorts/LZ7li3a3pcc?si=RFAuWwssGiDspsL3",
      features: [
        "Công năng : uốn sắt cây phi 18 trở về,bẻ vuông và móc câu",
        "Giá :650.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    9: {
      title: "bàn bẻ sắt phi 18 có đế",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/ban-be-sat-phi-18-co-de.jpg",
      videoUrl: "https://youtube.com/shorts/SwEzLyFYpnk?si=z8f9gscXoSb3Guef",
      features: [
        "1 cần tay công rỗng,trục bạc trợ lực,u sắt 10. Thao tác bẻ 2 bên, bẻ sắt phi 18 về 12",
        "Giá 900.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    10: {
      title: "bàn bẻ sắt phi 20 có đế",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/ban-be-sat-phi-20-co-de.jpg",
      videoUrl: "https://youtube.com/shorts/9Vhufv0D6xA?si=mHYZjBNQUT7Xoe_r",
      features: [
        "1 cần tay công rỗng, trục bạc trợ lực, u sắt 10. Thao tác bẻ 2 bên, bẻ sắt phi 20 về 14",
        "Giá 1.000.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    11: {
      title: "bàn bẻ sắt phi 20 không đế",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/ban-be-sat-phi-20-khong-de.jpg",
      videoUrl: "https://youtube.com/shorts/MBIfwUsYT8g?si=t3oaKXbH6xXRnBdo",
      features: [
        "Bàn bẻ phi 20 không đế,2 cần tay công rỗng,mặt bích dày,trục bạc trợ lực,tăng chỉnh cự ly sắt vào,cữ lấy vuông.nhỏ gọn linh hoạ",
        "Giá 900.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    12: {
      title: "bàn bẻ sắt phi 22 có đế",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/ban-be-sat-phi-22-co-de.jpg",
      videoUrl: "https://youtube.com/shorts/MBIfwUsYT8g?si=t3oaKXbH6xXRnBdo",
      features: [
        "Bàn bẻ có đế u sắt 12",
        "2 cần tay công đặc phi 34. Trục bạc trợ lực,có điều chỉnh cự ly sắt vào. Cữ lấy vuông",
        "Giá 1.600.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    13: {
      title: "tay gắp đá bó vỉa hai người khiêng",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/tay-gap-da-boc-via.jpg",
      videoUrl: "https://youtu.be/xERVPzm7J_Q?si=pQ-MJBu9r205FXlL",
      features: [
        "Tay khiêng tải trọng 150kg trở xuống,sắt dày,mút chặt.an toàn tiện lợi,kẹp hai đầu cự ly 1m, kẹp bụng biên độ 35cm",
        "Giá 1.200.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    14: {
      title: "tay gắp đá bó vỉa pro",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/tay-gap-da-boc-via-pro.jpg",
      videoUrl: "https://youtu.be/xERVPzm7J_Q?si=pQ-MJBu9r205FXlL",
      features: [
        "cứng cáp chắc chắn,biên độ kẹp 35cm",
        "tải trọng nâng 300kg",
        "tuyệt đối an toàn,dễ dàng thao tác,độ bền cao",
        "Giá 1.800.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    15: {
      title: "xe gắp đá 150",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/xe-gap-da-150.jpg",
      videoUrl: "https://youtu.be/xERVPzm7J_Q?si=pQ-MJBu9r205FXlL",
      features: [
        "ctải trọng nâng 150kg trở xuống,biên độ kẹp 2 đầu 1m. kẹp bụng biên độ 40cm",
        "tải trọng nâng 300kg",
        "lốp xe rùa,có thể tháo rời các bộ phận.dễ dàng di chuyển địa hình gồ ghề",
        "Giá 2.300.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    16: {
      title: "xe gắp đá 250",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/xe-gap-da-250.jpg",
      videoUrl: "https://youtube.com/shorts/8gMBhO-hfag?si=LX7k0G67Cl1xClDw",
      features: [
        "tải trọng nâng 250kg trở xuống,biên độ kẹp 2 đầu 1m. kẹp bụng biên độ 40cm",
        "lốp xe rùa,có thể tháo rời các bộ phận.dễ dàng di chuyển địa hình gồ ghề",
        "Giá 2.800.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    17: {
      title: "xe gắp đá 350",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/xe-gap-da-350.jpg",
      videoUrl: "https://youtube.com/shorts/aTmb3xSHC34?si=iQoe9uem0sMJxGg8",
      features: [
        "tải trọng nâng 350kg trở xuống,biên độ kẹp 2 đầu 1m. kẹp bụng biên độ 40cm",
        "lốp xe rùa,có thể tháo rời các bộ phận.dễ dàng di chuyển địa hình gồ ghề",
        "Giá 3.200.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    18: {
      title: "vận thang mini",
      subtitle: "Thuận tiện, giá rẻ",
      img: "assets/images/vận-thang-mini.jpg",
      videoUrl: "https://youtube.com/shorts/nh1rkgpKPqQ?si=6rvOzkt03Eij8ERN",
      features: [
        "Vận chuyển vật liệu lên tầng nhanh chóng an toàn,tải trọng vận chuyển tối đa  300kg",
        "lên cao tối đa 50m thẳng đứng, điều khiển từ xa,chống rơi chống trượt",
        "Giá Liên Hệ 0978493028",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    19: {
      title: "Máy bơm vữa bê tông",
      subtitle: "Thuận tiện, hiệu quả cao",
      img: "assets/images/may-bom-vua-be-tong.jpg",
      videoUrl: "https://youtube.com/shorts/nnt0a5q4UbY?si=YgWzpF3tpux1flgD",
      features: [
        "Vận chuyển vữa bê tông lên tầng nhanh chóng an toàn",
        "Mô tơ 220v, 4,5kw. Bơm cao 4,5m. Bơm vữa nhanh hiệu quả",
        "Giá 25.000.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    20: {
      title: "máy đầm thước V kẽm điện",
      subtitle: "Nhỏ gọn, linh hoạt",
      img: "assets/images/may-dam-thuoc-v-kem.jpg",
      videoUrl: "https://youtu.be/QuVg1TBK6W0?si=qWlS-k7mYFM1OFSz",
      features: [
        "thước V nhôm chấn dày dặn",
        "thước dài 2m,đầm lướt. điện 220v,công suất 550w",
        "Giá 2.200.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    21: {
      title: "máy đầm thước V nhôm điện",
      subtitle: "Thuận tiện, giá rẻ",
      img: "assets/images/may-dam-thuoc-v-nhom.jpg",
      videoUrl: "https://youtu.be/QuVg1TBK6W0?si=qWlS-k7mYFM1OFSz",
      features: [
        "thước V nhôm chấn dày dặn",
        "thước dài 2m,đầm lướt. điện 220v,công suất 550w",
        "Giá 2.500.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
    22: {
      title: "máy đầm thước bê tông Pin",
      subtitle: "Thuận tiện, giá rẻ",
      img: "assets/images/may-dam-thuoc-be-tong-pin.jpg",
      videoUrl: "https://youtube.com/shorts/1GGHLwjpY3c?si=J6bcs2210ejSqMKv",
      features: [
        "Máy đầm pin 9 cấp độ rung mạnh mẽ,hàng nội địa trung quốc.",
        "chân pin phổ thông.thời gian rung liên tục 4h,thước inox dày dặn, thước dài 1,5m",
        "Giá 2.500.000đ",
        "Bảo hành 12 tháng toàn quốc"
      ]
    },
  };

  // --- 1. Category Tab Filtering ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || category === cardCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 2. Dynamic Autocomplete Live Search ---
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults');

  // Extended Search Catalog Database
  const searchCatalog = [
    { id: 1, title: "Bơm tự áp 60", subtitle: "Phù hợp hộ gia đình, trang trại nhỏ", img: "assets/images/prod_ram_pump.jpg", cat: "Bơm Tự Áp" },
    { id: 2, title: "Bơm tự áp 90", subtitle: "Hiệu suất cao, bền bỉ cho nông nghiệp", img: "assets/images/prod_ram_pump_90.jpg", cat: "Bơm Tự Áp" },
    { id: 3, title: "Bơm tự áp 110", subtitle: "Giải pháp cho địa hình núi cao 100m", img: "assets/images/prod_ram_pump.jpg", cat: "Bơm Tự Áp" },
    { id: 4, title: "Bơm tự áp 140", subtitle: "Đẩy cao, dẫn xa tưới tiêu trang trại", img: "assets/images/prod_ram_pump_90.jpg", cat: "Bơm Tự Áp" },
    { id: 5, title: "Bơm tự áp 160", subtitle: "Công suất cực đại cấp nước sinh hoạt", img: "assets/images/prod_ram_pump.jpg", cat: "Bơm Tự Áp" },
    { id: 6, title: "Bơm Tự Áp Mini", subtitle: "Nhỏ gọn, tiện lợi cho khe suối nhỏ", img: "assets/images/prod_ram_pump_mini.jpg", cat: "Bơm Tự Áp" },
    { id: 7, title: "Bàn bẻ đai F1", subtitle: "Nhỏ gọn linh hoạt, bẻ đai sắt 6, 8, 10", img: "assets/images/ban-be-dai-f1.jpg", cat: "Máy Công Trình" },
    { id: 8, title: "Bàn bẻ sắt phi 18 bé", subtitle: "Nhỏ gọn, linh hoạt, trục bạc trợ lực", img: "assets/images/ban-be-sat-phi-18.jpg", cat: "Máy Công Trình" },
    { id: 9, title: "Bàn bẻ sắt phi 18 có đế", subtitle: "U sắt 10, bẻ sắt 18 về 12, thao tác 2 bên", img: "assets/images/ban-be-sat-phi-18-co-de.jpg", cat: "Máy Công Trình" },
    { id: 10, title: "Bàn bẻ sắt phi 20 có đế", subtitle: "U sắt 10, bẻ sắt 20 về 14, trục bạc trợ lực", img: "assets/images/ban-be-sat-phi-20-co-de.jpg", cat: "Máy Công Trình" },
    { id: 11, title: "Bàn bẻ sắt phi 20 không đế", subtitle: "2 cần tay công rỗng, mặt bích dày, cữ lấy vuông", img: "assets/images/ban-be-sat-phi-20-khong-de.jpg", cat: "Máy Công Trình" },
    { id: 12, title: "Bàn bẻ sắt phi 22 có đế", subtitle: "Đế U12, 2 cần tay công đặc phi 34, cữ vuông chuẩn", img: "assets/images/ban-be-sat-phi-22-co-de.jpg", cat: "Máy Công Trình" },
    { id: 13, title: "Tay gắp đá bó vỉa hai người khiêng", subtitle: "Tải trọng 150kg, kẹp chặt an toàn", img: "assets/images/tay-gap-da-boc-via.jpg", cat: "Máy Công Trình" },
    { id: 14, title: "Tay gắp đá bó vỉa Pro", subtitle: "Tải trọng nâng 300kg, cơ cấu khóa tự hãm", img: "assets/images/tay-gap-da-boc-via-pro.jpg", cat: "Máy Công Trình" },
    { id: 15, title: "Xe gắp đá 150", subtitle: "Bánh xe lốp hơi, kẹp bụng 40cm, tải nâng 150kg", img: "assets/images/xe-gap-da-150.jpg", cat: "Máy Công Trình" },
    { id: 16, title: "Xe gắp đá 250", subtitle: "Tải nâng 250kg, bánh lốp hơi vượt địa hình", img: "assets/images/xe-gap-da-250.jpg", cat: "Máy Công Trình" },
    { id: 17, title: "Xe gắp đá 350", subtitle: "Bản nâng cấp tải trọng 350kg, đòn bẩy trợ lực", img: "assets/images/xe-gap-da-350.jpg", cat: "Máy Công Trình" },
    { id: 18, title: "Vận thang mini", subtitle: "Nâng vật liệu lên tầng tải trọng 300kg, cao 50m", img: "assets/images/van-thang-mini.jpg", cat: "Máy Công Trình" },
    { id: 19, title: "Máy bơm vữa bê tông", subtitle: "Động cơ 220V 4.5kW, bơm cao 4.5m", img: "assets/images/may-bom-vua-be-tong.jpg", cat: "Máy Công Trình" },
    { id: 20, title: "Máy đầm thước V kẽm điện", subtitle: "Thước dài 2m, điện 220V 550W đầm lướt mịn", img: "assets/images/may-dam-thuoc-v-kem.jpg", cat: "Máy Công Trình" },
    { id: 21, title: "Máy đầm thước V nhôm điện", subtitle: "Thước nhôm 2m siêu nhẹ, 220V 550W", img: "assets/images/may-dam-thuoc-v-nhom.jpg", cat: "Máy Công Trình" },
    { id: 22, title: "Máy đầm thước bê tông Pin", subtitle: "9 cấp độ rung, chân pin phổ thông, thước inox 1.5m", img: "assets/images/may-dam-thuoc-be-tong-pin.jpg", cat: "Máy Công Trình" }
  ];

  function handleLiveSearch() {
    if (!searchInput || !searchResults) return;

    const term = searchInput.value.toLowerCase().trim();

    // Also filter product grid cards on current page
    productCards.forEach(card => {
      const title = card.querySelector('.product-name') ? card.querySelector('.product-name').textContent.toLowerCase() : '';
      const desc = card.querySelector('.product-desc') ? card.querySelector('.product-desc').textContent.toLowerCase() : '';

      if (term === '' || title.includes(term) || desc.includes(term)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // If query is empty, hide dropdown
    if (term.length === 0) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    // Filter searchCatalog
    const matches = searchCatalog.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.subtitle.toLowerCase().includes(term) ||
      item.cat.toLowerCase().includes(term)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-no-result">Không tìm thấy sản phẩm phù hợp với <strong>"${searchInput.value}"</strong></div>`;
    } else {
      searchResults.innerHTML = matches.map(item => `
        <div class="search-result-item" data-id="${item.id}">
          <img src="${item.img}" alt="${item.title}" class="search-item-img">
          <div class="search-item-info">
            <span class="search-item-title">${item.title}</span>
            <span class="search-item-subtitle">${item.subtitle}</span>
          </div>
          <span class="search-item-badge">Xem chi tiết &rarr;</span>
        </div>
      `).join('');

      // Add click handlers for search result items
      searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          searchResults.classList.remove('active');

          const data = productsData[id];
          if (data && productModal) {
            populateProductModal(data, id);
          } else {
            window.location.href = 'bom-tu-ap-ram-pump.html';
          }
        });
      });
    }

    searchResults.classList.add('active');
  }

  if (searchInput) {
    searchInput.addEventListener('input', handleLiveSearch);
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length > 0) {
        handleLiveSearch();
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', handleLiveSearch);
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (searchResults && !e.target.closest('.search-box')) {
      searchResults.classList.remove('active');
    }
  });

  // --- 3. Video Modal ---
  const playVideoBtn = document.getElementById('playVideoBtn');
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');

  if (playVideoBtn && videoModal) {
    playVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('show');
    });
  }

  if (closeVideoModal && videoModal) {
    closeVideoModal.addEventListener('click', () => {
      videoModal.classList.remove('show');
    });
  }

  // Close modal on background click
  window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('show');
    }
    if (e.target === productModal) {
      productModal.classList.remove('show');
    }
  });

  // --- 4. Product Details Modal & Order Form Population ---
  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');
  const modalProdTitle = document.getElementById('modalProdTitle');
  const modalProdSubtitle = document.getElementById('modalProdSubtitle');
  const modalProdImg = document.getElementById('modalProdImg');
  const modalProdFeatures = document.getElementById('modalProdFeatures');

  function populateProductModal(data, prodId) {
    if (!data || !productModal) return;

    if (modalProdTitle) modalProdTitle.textContent = data.title;
    if (modalProdSubtitle) modalProdSubtitle.textContent = data.subtitle || '';
    if (modalProdImg) {
      modalProdImg.src = data.img;
      modalProdImg.alt = data.title;
    }

    // Cập nhật Hotline và giá liên hệ theo loại sản phẩm (Bơm tự áp: 0852 982 555 vs Máy công trình: 0978 493 028)
    const numericId = parseInt(prodId || data.id, 10);
    const isMachinery = (numericId >= 7) ||
      (data.cat && data.cat.includes('Máy Công Trình')) ||
      (data.category && data.category.includes('may-cong-trinh')) ||
      window.location.pathname.includes('may-cong-trinh');

    const modalPriceValue = productModal.querySelector('.price-value');
    if (modalPriceValue) {
      modalPriceValue.textContent = isMachinery ? '0978 493 028' : '0852 982 555';
    }

    const orderHotlineLink = productModal.querySelector('.order-hotline-note a');
    if (orderHotlineLink) {
      if (isMachinery) {
        orderHotlineLink.href = 'tel:0978493028';
        orderHotlineLink.innerHTML = '<strong>0978 493 028</strong>';
      } else {
        orderHotlineLink.href = 'tel:0852982555';
        orderHotlineLink.innerHTML = '<strong>0852 982 555</strong>';
      }
    }

    if (modalProdFeatures) {
      if (data.features && data.features.length > 0) {
        modalProdFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
      } else {
        modalProdFeatures.innerHTML = '<li>Sản phẩm chính hãng Bơm Tự Áp Vương Gia</li><li>Bảo hành chu đáo 24 tháng toàn quốc</li><li>Hỗ trợ tư vấn kỹ thuật tận tâm 24/7</li>';
      }
    }

    // Cập nhật link xem video thực tế ở phần xem chi tiết
    let modalProdVideoLink = document.getElementById('modalProdVideoLink');
    if (!modalProdVideoLink) {
      const modalFeatures = document.querySelector('.modal-features');
      if (modalFeatures) {
        const videoActionBox = document.createElement('div');
        videoActionBox.className = 'modal-video-action';
        videoActionBox.innerHTML = `
          <a href="${data.videoUrl || 'video.html'}" id="modalProdVideoLink" class="btn-modal-video" target="_blank" rel="noopener noreferrer">
            <span class="video-play-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </span>
            <span>Xem Video Vận Hành Thực Tế &rarr;</span>
          </a>
        `;
        modalFeatures.insertAdjacentElement('afterend', videoActionBox);
        modalProdVideoLink = document.getElementById('modalProdVideoLink');
      }
    } else {
      modalProdVideoLink.href = data.videoUrl || 'video.html';
      modalProdVideoLink.setAttribute('title', `Xem video vận hành thực tế: ${data.title}`);
    }

    // Tự động điền tên sản phẩm vào ô "Sản phẩm" trong form đặt hàng
    const orderProductInput = document.getElementById('orderProduct');
    if (orderProductInput) {
      orderProductInput.value = data.title;
    }

    const orderSubjectInput = document.getElementById('orderSubject');
    if (orderSubjectInput) {
      orderSubjectInput.value = `[Bơm Tự Áp Vương Gia] Đơn đặt mua: ${data.title}`;
    }

    // Ẩn thông báo phản hồi cũ nếu có
    const orderFormMessage = document.getElementById('orderFormMessage');
    if (orderFormMessage) {
      orderFormMessage.style.display = 'none';
      orderFormMessage.innerHTML = '';
    }

    productModal.classList.add('show');
  }

  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      const data = productsData[id];

      if (data) {
        populateProductModal(data, id);
      } else {
        const card = btn.closest('.product-card') || btn.closest('.product-intro-card');
        const title = card && (card.querySelector('.product-name') || card.querySelector('.catalog-card-title')) ? (card.querySelector('.product-name') || card.querySelector('.catalog-card-title')).textContent.trim() : 'Sản phẩm';
        const desc = card && card.querySelector('.product-desc') ? card.querySelector('.product-desc').textContent.trim() : '';
        const img = card && card.querySelector('img') ? card.querySelector('img').src : 'assets/images/prod_ram_pump.jpg';
        const isMach = (id && parseInt(id, 10) >= 7) || (card && card.getAttribute('data-category') === 'may-cong-trinh') || window.location.pathname.includes('may-cong-trinh');
        populateProductModal({
          id: id,
          title: title,
          subtitle: desc,
          img: img,
          cat: isMach ? 'Máy Công Trình' : 'Bơm Tự Áp',
          features: [
            'Sản phẩm công nghệ mới tiết kiệm chi phí thi công',
            'Chất liệu thép/kim loại siêu bền chịu lực cao',
            'Bảo hành chính hãng uy tín toàn quốc'
          ]
        }, id);
      }
    });
  });

  if (closeProductModal && productModal) {
    closeProductModal.addEventListener('click', () => {
      productModal.classList.remove('show');
    });

    // Close modal when tapping overlay backdrop
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.classList.remove('show');
      }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && productModal.classList.contains('show')) {
        productModal.classList.remove('show');
      }
    });
  }

  // --- 5. Mobile Navigation Toggle & Accordions ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active', isOpen);
    });

    // Handle mobile sub-menu accordion toggle
    const dropdownItems = mainNav.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const arrow = item.querySelector('.arrow-down');

      if (arrow) {
        arrow.addEventListener('click', (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            item.classList.toggle('open');
          }
        });
      }

      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 992) {
            // First tap opens submenu on mobile
            if (!item.classList.contains('open')) {
              e.preventDefault();
              // Close other open dropdowns
              dropdownItems.forEach(other => {
                if (other !== item) other.classList.remove('open');
              });
              item.classList.add('open');
            }
          }
        });
      }
    });

    // Close mobile menu when clicking a normal nav link or dropdown sublink
    const autoCloseLinks = mainNav.querySelectorAll('.nav-link:not(.dropdown > .nav-link), .dropdown-menu a');
    autoCloseLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          mainNav.classList.remove('mobile-open');
          mobileMenuBtn.classList.remove('active');
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 992 && mainNav.classList.contains('mobile-open')) {
        if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mainNav.classList.remove('mobile-open');
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
  }

  // --- 6. Contact Form Submission (FormSubmit AJAX) ---
  const contactForm = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'GỬI ĐĂNG KÝ TƯ VẤN &rarr;';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Đang gửi yêu cầu...';
      }

      if (formResponse) {
        formResponse.style.display = 'none';
      }

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://formsubmit.co/ajax/vuongxaydung1989@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (formResponse) {
            formResponse.style.display = 'block';
            formResponse.style.background = '#e6f4ea';
            formResponse.style.color = '#2e7d32';
            formResponse.style.border = '1px solid #a3e635';
            formResponse.innerHTML = '<strong>✅ Gửi thành công!</strong> Cảm ơn bạn, thông tin đã được gửi đến <strong>vuongxaydung1989@gmail.com</strong>. Kỹ thuật viên sẽ gọi tư vấn ngay.';
          } else {
            alert('Gửi thành công! Chúng tôi đã nhận được thông tin và sẽ gọi lại tư vấn ngay.');
          }
          contactForm.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        if (formResponse) {
          formResponse.style.display = 'block';
          formResponse.style.background = '#fef2f2';
          formResponse.style.color = '#991b1b';
          formResponse.style.border = '1px solid #fca5a5';
          formResponse.innerHTML = '<strong>❌ Lỗi kết nối.</strong> Đã có lỗi xảy ra khi gửi. Vui lòng gọi trực tiếp Hotline: <strong>0852 982 555</strong>';
        } else {
          alert('Đã có lỗi xảy ra. Vui lòng gọi trực tiếp Hotline: 0852 982 555');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  // --- 7. Modal Order Form Submission (FormSubmit AJAX) ---
  const orderModalForm = document.getElementById('orderModalForm');
  const orderFormMessage = document.getElementById('orderFormMessage');

  if (orderModalForm) {
    orderModalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('btnSubmitOrder') || orderModalForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'XÁC NHẬN GỬI ĐẶT HÀNG &rarr;';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Đang gửi đơn hàng...';
      }

      if (orderFormMessage) {
        orderFormMessage.style.display = 'none';
      }

      const formData = new FormData(orderModalForm);

      try {
        const response = await fetch('https://formsubmit.co/ajax/vuongxaydung1989@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (orderFormMessage) {
            orderFormMessage.style.display = 'block';
            orderFormMessage.className = 'order-form-message success';
            orderFormMessage.innerHTML = '🎉 <strong>Đặt hàng thành công!</strong> Thông tin mua hàng đã được gửi trực tiếp đến <strong>vuongxaydung1989@gmail.com</strong>. Nhân viên kỹ thuật sẽ liên hệ lại qua số điện thoại để xác nhận đơn và tiến hành giao hàng.';
          } else {
            alert('Đặt hàng thành công! Thông tin đã được gửi về email vuongxaydung1989@gmail.com. Chúng tôi sẽ liên hệ lại ngay.');
          }
          const savedProduct = document.getElementById('orderProduct') ? document.getElementById('orderProduct').value : '';
          orderModalForm.reset();
          if (document.getElementById('orderProduct')) {
            document.getElementById('orderProduct').value = savedProduct;
          }
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        if (orderFormMessage) {
          orderFormMessage.style.display = 'block';
          orderFormMessage.className = 'order-form-message error';
          orderFormMessage.innerHTML = '❌ <strong>Chưa thể gửi thông tin lúc này.</strong> Quý khách vui lòng gọi trực tiếp Hotline: <a href="tel:0852982555"><strong>0852 982 555</strong></a> để được hỗ trợ đặt hàng ngay!';
        } else {
          alert('Đã có lỗi xảy ra. Quý khách vui lòng gọi Hotline 0852 982 555 để đặt hàng trực tiếp.');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  // --- 8. Catalog Page (san-pham.html) Interactive Filtering ---
  const catalogFilterBtns = document.querySelectorAll('.catalog-filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-card');
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  const catalogCountBadge = document.getElementById('catalogCountBadge');

  function filterCatalog() {
    if (!catalogCards || catalogCards.length === 0) return;

    const activeBtn = document.querySelector('.catalog-filter-btn.active');
    const selectedCategory = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    const term = catalogSearchInput ? catalogSearchInput.value.toLowerCase().trim() : '';

    let visibleCount = 0;

    catalogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const fullText = card.textContent.toLowerCase();

      const matchesCat = (selectedCategory === 'all' || selectedCategory === cardCategory);
      const matchesSearch = (term === '' || fullText.includes(term));

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.35s ease';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (catalogCountBadge) {
      catalogCountBadge.innerHTML = `Đang hiển thị: <strong>${visibleCount}</strong> sản phẩm`;
    }
  }

  if (catalogFilterBtns.length > 0) {
    catalogFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catalogFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterCatalog();
      });
    });
  }

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', filterCatalog);
  }

});
