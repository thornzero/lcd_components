/* ========================================
   LCD Components Design System - JavaScript
   ======================================== */

// DOM Ready function
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Initialize all components when DOM is ready
ready(function() {
  initializeAccordions();
  initializeModals();
  initializeSmoothScrolling();
  initializeFormValidation();
});

/* ========================================
   Accordion Component
   ======================================== */

function initializeAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items in this accordion
      const accordion = accordionItem.closest('.accordion');
      const allItems = accordion.querySelectorAll('.accordion-item');
      allItems.forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('.accordion-icon');
        if (icon) icon.textContent = '+';
      });
      
      // Toggle current item
      if (!isActive) {
        accordionItem.classList.add('active');
        const icon = this.querySelector('.accordion-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

/* ========================================
   Modal Component
   ======================================== */

function initializeModals() {
  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

/* ========================================
   Smooth Scrolling for Navigation
   ======================================== */

function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 20; // Add some padding
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ========================================
   Form Validation & Enhancement
   ======================================== */

function initializeFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      // Add real-time validation feedback
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        clearFieldError(this);
      });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });
      
      if (isValid) {
        showNotification('Form submitted successfully!', 'success');
      } else {
        showNotification('Please correct the errors above.', 'error');
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  let isValid = true;
  let errorMessage = '';
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required.';
  }
  
  // Email validation
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address.';
    }
  }
  
  // Password validation
  if (type === 'password' && value && value.length < 6) {
    isValid = false;
    errorMessage = 'Password must be at least 6 characters long.';
  }
  
  // Number validation
  if (type === 'number' && value) {
    if (isNaN(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid number.';
    }
  }
  
  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError(field);
  }
  
  return isValid;
}

function showFieldError(field, message) {
  clearFieldError(field); // Remove any existing error
  
  field.classList.add('error');
  
  const errorElement = document.createElement('div');
  errorElement.className = 'field-error';
  errorElement.textContent = message;
  
  field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
  field.classList.remove('error');
  
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

/* ========================================
   Notification System
   ======================================== */

function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="notification-close">&times;</button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

/* ========================================
   Utility Functions
   ======================================== */

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

// Theme toggle functionality (bonus feature)
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  if (isDark) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme preference
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('Copied to clipboard!', 'success');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      showNotification('Failed to copy to clipboard.', 'error');
    });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showNotification('Copied to clipboard!', 'success');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      showNotification('Failed to copy to clipboard.', 'error');
    }
    
    document.body.removeChild(textArea);
  }
}

// Initialize theme on load
ready(loadThemePreference); 