/**
 * PetCare - Gallery Lightbox
 */

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(
    ".gallery-card, .gallery-item",
  );

  galleryItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      const caption =
        item.querySelector(".img-caption")?.textContent ||
        "Hình ảnh hoạt động tại PetCare";
      openLightbox(caption);
    });
  });
});

function openLightbox(caption) {
  let modal = document.getElementById("lightboxModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lightboxModal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-content" style="max-width:700px;text-align:center;">
        <button class="modal-close">&times;</button>
        <div class="img-placeholder ratio-16-9" style="margin-bottom:16px;">
          <div class="img-badge">IMG</div>
          <span class="img-caption" id="lightboxTitle" style="font-size:1.1rem;"></span>
          <span class="img-sub">Full HD Lightbox (1920x1080)</span>
        </div>
        <p style="color:#666;font-size:0.9rem;margin:0;">Phòng khám Thú Y PetCare Thủ Dầu Một • 386 CMT8, Bình Dương</p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  const titleEl = modal.querySelector("#lightboxTitle");
  if (titleEl) titleEl.textContent = caption;
  modal.classList.add("active");
}
