document.addEventListener('DOMContentLoaded', function() {
    const moreInfoButtons = document.querySelectorAll('.btn[data-toggle="modal"]');
    moreInfoButtons.forEach(button => {
      button.addEventListener('touchstart', function(e) {
        e.preventDefault();
        const targetModal = document.querySelector(this.getAttribute('data-target'));
        if (targetModal) {
          $(targetModal).modal('show');
        }
      });
    });
  });