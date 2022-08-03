
  const menuToggle = document.querySelector('#toggle');
  const menuToggleNavbar = document.querySelector('#navbar');
  const menuToggleHeader = document.querySelector('#header');

  document.onclick = function(e) {
  	if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
		menuToggle.classList.remove('active');
  		menuToggleNavbar.classList.remove('active');
	}
  }
  
  toggle.onclick = function() {
  	 menuToggle.classList.toggle('active');
  	 menuToggleNavbar.classList.toggle('active');
  }







	


