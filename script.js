
document.addEventListener('DOMContentLoaded', () => {
    
    
    const amplop = document.getElementById('amplop');
    const surat = document.getElementById('surat');
    const petunjuk = document.getElementById('petunjuk');

    
    if (amplop) {
        amplop.addEventListener('dblclick', () => {
            
            
            surat.classList.add('terbuka');

            
            if (petunjuk) {
                petunjuk.style.display = 'none';
            }
            
            
            amplop.style.backgroundColor = '#fff0f5'; 
            amplop.style.border = 'none';
        });
    }

});


document.addEventListener('DOMContentLoaded', () => {
    
    
    const progressBar = document.getElementById('progressBar');
    const persenTeks = document.getElementById('persenTeks');

   
    if (progressBar && persenTeks) {
        let progress = 0;
        
        
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';
            persenTeks.innerText = progress + '%';

            
            if (progress >= 100) {
                clearInterval(interval); 
                
           
                setTimeout(() => {
                    window.location.href = 'surat.html';
                }, 500); 
            }
        }, 30); 
    }

    
    
    const amplop = document.getElementById('amplop');
    const surat = document.getElementById('surat');
    const petunjuk = document.getElementById('petunjuk');

    
    if (amplop) {
     
        amplop.addEventListener('dblclick', () => {
            
            
            surat.classList.add('terbuka');

         
            if (petunjuk) {
                petunjuk.style.display = 'none';
            }
            
            
            amplop.style.backgroundColor = '#fff0f5'; 
            amplop.style.border = 'none';
        });
    }

});