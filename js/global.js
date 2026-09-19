document.addEventListener("DOMContentLoaded", () => {
  initMobileSidebar();
  initVkaDial();
  initScrollTop();
  initLiveSearch();
});
function initMobileSidebar() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("closeSidebarBtn");
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (openBtn && sidebar && overlay) {
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    const closeMenu = () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    };
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
}
function initVkaDial() {
  const vkaWrapper = document.getElementById("vkaWrapper");
  const vkaMainBtn = document.getElementById("vkaMainBtn");

  if (vkaWrapper && vkaMainBtn) {
    vkaMainBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      vkaWrapper.classList.toggle("open");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!vkaWrapper.contains(e.target)) {
        vkaWrapper.classList.remove("open");
      }
    });
  }
}
