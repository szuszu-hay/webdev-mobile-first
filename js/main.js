(() => {
  const initNavigationBar = () => {
    const burgerMenu = document.querySelector(".burger");
    const navBar = document.querySelector("nav");
    let navBarStatus = false;

    // Helper function to close the menu
    const closeMenu = () => {
      navBar.style.height = "0px";
      burgerMenu?.classList.remove("changeBurger");
      navBarStatus = false;
    };

    // Helper function to open the menu
    const openMenu = () => {
      const navHeight = navBar.scrollHeight; // Dynamically get the height
      navBar.style.height = `${navHeight}px`;
      burgerMenu?.classList.add("changeBurger");
      navBarStatus = true;
    };

    // Toggles the menu open/close
    const toggleMenu = () => {
      navBarStatus ? closeMenu() : openMenu();
    };

    // Initialize burger menu behavior
    if (burgerMenu && !burgerMenu.dataset.listenerAdded) {
      burgerMenu.addEventListener("click", toggleMenu);
      burgerMenu.dataset.listenerAdded = "true"; // Use data attribute to mark listener added
    }

    // Close the menu by default
    closeMenu();
  };

  const handleResize = () => {
    const navBar = document.querySelector("nav");
    const isDesktop = window.innerWidth >= 720; // Threshold for desktop view

    if (isDesktop) {
      navBar.style.height = "auto"; // Ensure nav is fully visible on desktop
    } else {
      navBar.style.height = "0px"; // Reset nav height for mobile
      initNavigationBar(); // Re-initialize burger menu for mobile
    }
  };

  // Initialize on page load
  const init = () => {
    initNavigationBar();
    handleResize();
    window.addEventListener("resize", handleResize);
  };

  // Execute initialization
  init();
})();
