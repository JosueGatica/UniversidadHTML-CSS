function setProgress(percent,habilidad) {
    const progress = document.querySelector(habilidad);
    progress.style.width = percent + '%';
  }

setProgress(40,'.progreso-html');
setProgress(50,'.progreso-photoshop');
setProgress(55,'.progreso-edicion');
setProgress(60,'.progreso-python');
setProgress(60,'.progreso-java');
setProgress(80,'.progreso-pascal');
setProgress(50,'.progreso-ingles');
setProgress(78,'.progreso-office');
setProgress(67,'.progreso-cm');