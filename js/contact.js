/**
 * PetCare - Contact Form 7 Interactive Validation
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm7");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cfName")?.value.trim();
      const phone = document.getElementById("cfPhone")?.value.trim();
      const message = document.getElementById("cfMessage")?.value.trim();

      if (!name || !phone) {
        alert("Vui lòng nhập họ tên và số điện thoại liên hệ!");
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Đang gửi thông tin...";
      }

      setTimeout(() => {
        if (window.PetCareToast) {
          window.PetCareToast.show(
            `Cảm ơn bạn ${name}! PetCare đã tiếp nhận yêu cầu và sẽ gọi lại cho bạn sớm nhất.`,
          );
        } else {
          alert(`Cảm ơn bạn ${name}! PetCare đã tiếp nhận thông tin.`);
        }

        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Gửi liên hệ";
        }
      }, 1000);
    });
  }
});
