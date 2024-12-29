document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Toggle visibility of icons
    document.getElementById('sun-icon').classList.toggle('hidden');
    document.getElementById('moon-icon').classList.toggle('hidden');
  });
  