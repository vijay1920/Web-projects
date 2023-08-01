window.addEventListener('load', function() {
    setTimeout(function() {
      var preloader = document.querySelector('.preloader');
      preloader.classList.add('fade-out');
    }, 4000);
  });
  
  function demo() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
  
      let img = new Image;
      let filename = "";
  
      const upload = document.getElementById('upload-file');
  
      // File Upload
      upload.addEventListener('change', (event) => {
        const file = document.getElementById('upload-file').files[0];
        const reader = new FileReader();
        if (file) {
          filename = file.name;
          reader.readAsDataURL(file);
        }
        // File Upload ends
  
        // Display the image
        reader.addEventListener('load', () => {
          img = new Image();
          img.src = reader.result;
          img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
          }
        });
        // Display image ends
  
        // Filters
        document.addEventListener('click', (event) => {
          if (event.target.classList.contains('filter-btn')) {
            if (event.target.classList.contains('Increase-bright')) {
              Caman('#canvas', img, function() {
                this.brightness(10).render();
              });
            } else if (event.target.classList.contains('decrease-bright')) {
              Caman('#canvas', img, function() {
                this.brightness(-10).render();
              });
            } else if (event.target.classList.contains('Increase-expo')) {
              Caman('#canvas', img, function() {
                this.exposure(10).render();
              });
            } else if (event.target.classList.contains('decrease-expo')) {
              Caman('#canvas', img, function() {
                this.exposure(-10).render();
              });
            } else if (event.target.classList.contains('Increase-Saturation')) {
              Caman('#canvas', img, function() {
                this.saturation(4).render();
              });
            } else if (event.target.classList.contains('decrease-Saturation')) {
              Caman('#canvas', img, function() {
                this.saturation(-4).render();
              });
            } else if (event.target.classList.contains('Increase-Contrast')) {
              Caman('#canvas', img, function() {
                this.contrast(10).render();
              });
            } else if (event.target.classList.contains('decrease-Contrast')) {
              Caman('#canvas', img, function() {
                this.contrast(-10).render();
              });
            } else if (event.target.classList.contains('Vibrance')) {
              Caman('#canvas', img, function() {
                this.vibrance(20).render();
              });
            } else if (event.target.classList.contains('Noise')) {
              Caman('#canvas', img, function() {
                this.noise(10).render();
              });
            } else if (event.target.classList.contains('Invert')) {
              Caman('#canvas', img, function() {
                this.invert().render();
              });
            } else if (event.target.classList.contains('vintage')) {
              Caman('#canvas', img, function() {
                this.vintage().render();
              });
            } else if (event.target.classList.contains('black')) {
              Caman('#canvas', img, function() {
                this.greyscale(1.4).render();
              });
            } else if (event.target.classList.contains('reset')) {
              Caman('#canvas', img, function() {
                this.revert().render();
              });
            }
          }
        });
  
        // Download button
        const downloadBtn = document.getElementById('downloadBtn');
  
        downloadBtn.addEventListener('click', () => {
          // Create a temporary link element
          const link = document.createElement('a');
  
          // Set the href attribute of the link to the data URL of the canvas
          link.href = canvas.toDataURL();
  
          // Set the download attribute of the link to the desired filename
          link.download = filename;
  
          // Simulate a click on the link to trigger the download
          link.click();
        });
      });
      // Filters ends
    }
  }
  