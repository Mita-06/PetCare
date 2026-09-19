/**
 * PetCare - Centralized Data Store
 */
window.PetCareData = {
  clinicInfo: {
    name: "Phòng Khám Thú Y PetCare",
    address: "386 CMT8, P. Phú Cường, TP. Thủ Dầu Một, Tỉnh Bình Dương",
    hotline: "0918 708 179",
    email: "contact@petcare.vn",
    hours: "8h00 - 20h00 (Thứ 2 - Chủ Nhật)",
    socials: {
      facebook: "https://www.facebook.com/petcare.vn",
      zalo: "https://zalo.me/0918708179",
      tiktok: "https://www.tiktok.com/@petcare.vn",
      maps: "https://maps.app.goo.gl/4oZKq91Q1LPxfotM6",
    },
  },

  services: [
    {
      id: "srv-consultation",
      title: "Tư vấn & Điều trị",
      url: "service-consultation-treatment.html",
      category: "treatment",
      desc: "Khám tổng quát, chẩn đoán triệu chứng và xây dựng phác đồ điều trị chuyên sâu cho chó mèo.",
    },
    {
      id: "srv-vaccination",
      title: "Tiêm ngừa",
      url: "service-vaccination.html",
      category: "care",
      desc: "Tiêm phòng vắc xin 7 bệnh cho chó, 4 bệnh cho mèo và vắc xin dại chính hãng nhập khẩu.",
    },
    {
      id: "srv-blood-test",
      title: "Xét nghiệm máu",
      url: "service-blood-test.html",
      category: "diagnostic",
      desc: "Xét nghiệm sinh hóa máu, kiểm tra chức năng gan thận và tầm soát mầm bệnh tiềm ẩn.",
    },
    {
      id: "srv-blood-parasites",
      title: "Xét nghiệm ký sinh trùng máu",
      url: "service-blood-parasites.html",
      category: "diagnostic",
      desc: "Soi kính hiển vi và test nhanh phát hiện ký sinh trùng lây truyền qua ve, bọ chét.",
    },
    {
      id: "srv-ultrasound",
      title: "Siêu âm",
      url: "service-ultrasound.html",
      category: "diagnostic",
      desc: "Siêu âm Doppler màu ổ bụng, siêu âm thai, phát hiện sỏi bàng quang và khối u mô mềm.",
    },
    {
      id: "srv-antibiogram",
      title: "Kháng sinh đồ",
      url: "service-antibiogram.html",
      category: "diagnostic",
      desc: "Nuôi cấy phân lập vi khuẩn giúp lựa chọn chính xác loại kháng sinh nhạy cảm nhất.",
    },
    {
      id: "srv-surgery",
      title: "Phẫu thuật",
      url: "service-surgery.html",
      category: "surgery",
      desc: "Phẫu thuật triệt sản không đau, mổ đẻ cấp cứu, xử lý dị vật và chấn thương chỉnh hình.",
    },
    {
      id: "srv-pet-shop",
      title: "Pet Shop & Dinh dưỡng",
      url: "pet-shop.html",
      category: "shop",
      desc: "Cung cấp thức ăn hạt cao cấp, pate dinh dưỡng, cát vệ sinh và phụ kiện chăm sóc chó mèo.",
    },
  ],

  reviews: [
    {
      name: "Jet",
      rating: 5,
      date: "Google Maps",
      content:
        "Bác sĩ đội ngũ chuyên nghiệp và tận tâm. Yên tâm khi mang pet đến đây khám. Mèo mình bệnh rất nặng tưởng như không ổn nay đã gần như khỏi bệnh, đánh giá 5 sao!",
    },
    {
      name: "Quyen Vo",
      rating: 5,
      date: "Google Maps",
      content:
        "Bác sĩ An chăm sóc bé tận tâm lắm luôn ạ, cảm ơn bác sĩ rất nhiều ạ 🍀",
    },
    {
      name: "Ý Nguyễn",
      rating: 5,
      date: "Google Maps",
      content:
        "Phòng khám PetCare rất sạch sẽ và chuyên nghiệp. Bác sĩ tư vấn kỹ, tận tâm nên mình rất yên tâm khi đưa bé tới khám. Nhân viên thân thiện, hỗ trợ nhiệt tình. Sẽ tiếp tục ủng hộ lâu dài!",
    },
    {
      name: "Trinh Nguyen",
      rating: 5,
      date: "Google Maps",
      content:
        "Phòng khám sạch sẽ, bác sĩ tận tâm và điều trị tốt, 2 bé nhà mình đều theo dõi sức khoẻ và thăm khám ở đây, highly recommend cho ba mẹ nào ở bình dương thì đến đây thăm khám cho các con nhé.",
    },
    {
      name: "Cửa Hàng Đồ Chơi Bảo Bảo",
      rating: 5,
      date: "Google Maps",
      content:
        "Mấy bé nhà mình đều khám, chích ngừa và triệt sản ở đây. Bác sĩ tư vấn nhiệt tình theo dõi và nhắn tin tình trạng của bé liên tục. Môi trường sạch sẽ và chuyên nghiệp mọi người nên ghé.",
    },
    {
      name: "Thư Nguyễn",
      rating: 5,
      date: "Google Maps",
      content:
        "Bác sĩ rất tận tâm trong quá trình khám mèo ạ. Mèo nhà e bị bệnh trị ở đây khi về nhà bsi luôn nhiệt tình hỏi thăm xem tình trạng của bé mèo e rất thích điều đó ạ 🫶🏻🫶🏻",
    },
  ],
};
