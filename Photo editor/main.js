function demo()
{
    const canvas=document.getElementById('canvas');
    if(canvas.getContext)
    {
        const ctx= canvas.getContext('2d');

        let img = new Image;
        let filename="";

        const upload = document.getElementById('upload-file');
// File Upload

upload.addEventListener('change', (event)=>
{
    const file = document.getElementById('upload-file').files[0];
    const  reader = new FileReader();
    if(file)
    {
        filename= file.name;
        reader.readAsDataURL(file);
       
        
    }
    // File Upload ends   

//Display the image
    reader.addEventListener('load', () =>
{
  img = new Image();
  img.src= reader.result;
  img.onload = function()
  {
    canvas.width= img.width;
    canvas.height= img.height;
    ctx.drawImage(img,0,0,img.width, img.height);

  }
})
//display image ends
// filters 

document.addEventListener('click', (event)=>
{
    if(event.target.classList.contains('filter-btn'))
    {
        if (event.target.classList.contains('Increase-bright'))

         {
            Caman('#canvas',img,function()
            {
                this.brightness(10).render();
            }
    
)}   else   
if(event.target.classList.contains('decrease-bright'))

         {
            Caman('#canvas',img,function()
            {
                this.brightness(-10).render();
            }
    
)}   
else   
if(event.target.classList.contains('Increase-Saturation'))

         {
            Caman('#canvas',img,function()
            {
                this.saturation(4).render();
            }
    
)} 
else   
if(event.target.classList.contains('decrease-Saturation'))

         {
            Caman('#canvas',img,function()
            {
                this.saturation(-4).render();
            }
    
)} 
else   
if(event.target.classList.contains('Increase-Contrast'))

         {
            Caman('#canvas',img,function()
            {
                this.contrast(10).render();
            }
    
)} 
else   
if(event.target.classList.contains('decrease-Contrast'))

         {
            Caman('#canvas',img,function()
            {
                this.contrast(-10).render();
            }
    
)} 
else   
if(event.target.classList.contains('Vibrance'))

         {
            Caman('#canvas',img,function()
            {
                this.vibrance(20).render();
            }
    
)} 
else   
if(event.target.classList.contains('Noise'))

         {
            Caman('#canvas',img,function()
            {
                this.noise(10).render();
            }
    
)}
else   
if(event.target.classList.contains('Invert'))

         {
            Caman('#canvas',img,function()
            {
                this.invert().render();
            }
    
)}
else   
if(event.target.classList.contains('vintage'))

         {
            Caman('#canvas',img,function()
            {
                this.vintage().render();
            }
    
)}
else   
if(event.target.classList.contains('reset'))

         {
            Caman('#canvas',img,function()
            {
                this.revert().render();
            }
    
)}
//filter


  }

}


)

}
)}
}