function fire(id) {
    const sound = document.getElementById('fire');
    
    sound.pause();
    sound.currentTime = 0;
    
    const bird = document.getElementById(id);
    bird.style.transform = 'translateX(-10%) rotate(180deg)';
   
    bird.style.backgroundImage = "url('./images/fire.webp')";
    bird.classList.remove("anim");
    bird.style.display = 'none';
    
      sound.play();
}



