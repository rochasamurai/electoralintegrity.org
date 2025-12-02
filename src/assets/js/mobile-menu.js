/**
 * Mobile Menu Toggle Functionality
 * Add this to your main JavaScript file
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    document.body.appendChild(backdrop);

    // Return early if elements don't exist
    if (!menuToggle || !mainNav) {
      console.warn('Mobile menu elements not found');
      return;
    }

    /**
     * Toggle mobile menu
     */
    function toggleMenu() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle states
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('mobile-menu-open');
      backdrop.classList.toggle('active');
      body.classList.toggle('menu-open');
      
      // Update focus
      if (!isExpanded) {
        // Menu is opening - focus first nav item
        const firstNavLink = mainNav.querySelector('a');
        if (firstNavLink) {
          setTimeout(() => firstNavLink.focus(), 300);
        }
      }
    }

    /**
     * Close menu
     */
    function closeMenu() {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('mobile-menu-open');
      backdrop.classList.remove('active');
      body.classList.remove('menu-open');
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking backdrop
    backdrop.addEventListener('click', closeMenu);

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mainNav.classList.contains('mobile-menu-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Close menu on window resize to desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 968) {
          closeMenu();
        }
      }, 250);
    });

    // Trap focus inside menu when open
    mainNav.addEventListener('keydown', function(e) {
      if (e.key === 'Tab' && mainNav.classList.contains('mobile-menu-open')) {
        const focusableElements = mainNav.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });

  });

})();
