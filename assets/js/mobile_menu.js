// Mobile Menu - Unified version (same HTML for desktop and mobile)
document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const navMenuWrapper = document.getElementById("navMenuWrapper");
    const mobileOverlay = document.getElementById("mobileMenuOverlay");
    const closeBtn = document.getElementById("closeMenu");

    // Open menu
    if (mobileToggle) {
        mobileToggle.addEventListener("click", function () {
            navMenuWrapper.classList.add("active");
            mobileOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    // Close menu - X button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            navMenuWrapper.classList.remove("active");
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // Close menu - Overlay click
    if (mobileOverlay) {
        mobileOverlay.addEventListener("click", function () {
            navMenuWrapper.classList.remove("active");
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // Toggle submenus on mobile
    const menuItems = document.querySelectorAll(".nav-menu .has-submenu > a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            // Only prevent default on mobile
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const parent = this.parentElement;

                // Close other open submenus
                document
                    .querySelectorAll(".nav-menu .has-submenu")
                    .forEach(function (other) {
                        if (other !== parent) {
                            other.classList.remove("open");
                        }
                    });

                // Toggle current submenu
                parent.classList.toggle("open");
            }
        });
    });

    // Reset menu state on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) {
            navMenuWrapper.classList.remove("active");
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "";

            // Remove open class from all submenus
            document.querySelectorAll(".nav-menu .has-submenu").forEach(function (item) {
                item.classList.remove("open");
            });
        }
    });
});