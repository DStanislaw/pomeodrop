  const boxes = document.getElementById('boxes');
        const spinButton = document.getElementById('spinButton');
        const boxWidth = 300; 
        const totalBoxes = 161;
        const visibleBoxes = 5;
        const spinDuration = 7000; 

        function spin() {
            
            spinButton.disabled = true;

           
            const winningIndex = Math.floor(Math.random() * totalBoxes);

            
            const offset = (winningIndex - Math.floor(visibleBoxes / 2)) * boxWidth;


            boxes.style.transition = `left ${spinDuration}ms cubic-bezier(0.33, 1, 0.68, 1)`;
            boxes.style.left = `-${offset}px`;

            
            setTimeout(() => {
                alert(`Wygrana: Box #${winningIndex + 1}`);
               
                boxes.style.transition = 'none';
                boxes.style.left = '0px';
                spinButton.disabled = false;
            }, spinDuration);
        }

        spinButton.addEventListener('click', spin);