var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
var userImageRef;
 var MenuButton = function(x, y, n) {
        this.x = x;
        this.y = y;
        this.number = n;
        if (this.number == 1){
        this.sprite = 'images/button1.png';
    };  
        if (this.number == 2){
        this.sprite = 'images/button2.png';
    };
    };
MenuButton.prototype.renderButton = function(){

            ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 300, 75);
        };
MenuButton.prototype.clickMenuHandler = function(coorX, coorY) {
            if (!gameOver) {
                    if (coorX > this.x && coorY > this.y && coorX < this.x + 300 && coorY < this.y + 75) {
                        console.log(coorX, coorY);
                        
                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, 600, 600);
                        if (this.number == 1) {
                            gameStarted = true;
                            canvas.removeEventListener('click', listener, false);
                            init();
                        };
                        if (this.number == 2) {
                            canvas.removeEventListener('click', eventListnerGame, false);
                            canvas.removeEventListener('click', listener, false);
                            if (mainReq!== undefined) {
                                window.cancelAnimationFrame(mainReq);
                            };
                            browseImage();
                        };
                    };
            };
        };
var allGameButtons = [];
var newGameButton = new MenuButton(165,250,1);
allGameButtons.push(newGameButton);
var browseImageButton = new MenuButton(165,350,2);
allGameButtons.push(browseImageButton);
 var initMenu = function() {
            if (!gameStarted) {
                if (eventListnerGame) {
                canvas.removeEventListener('click', eventListnerGame, false);
                };
                ctx.drawImage(Resources.get('images/background.jpg'), 0, 0, 600, 600);
                ctx.drawImage(Resources.get('images/title.png'), 215, 10, 200, 75);
                ctx.drawImage(Resources.get('images/pnsh.png'), 120, 90, 400, 150);
            
                allGameButtons.forEach(function(MenuButton) {
                MenuButton.renderButton();
            });
                canvas.addEventListener('click', listener, false);
   
};
};
var listener = function(e) {
                var coorX = e.pageX - canvas.offsetLeft;
                var coorY = e.pageY - canvas.offsetTop;
                allGameButtons.forEach(function(MenuButton) {
                MenuButton.clickMenuHandler(coorX, coorY);
            });
        };
var browseImage = function (){
                canvas.height = 300;
                ctx.drawImage(Resources.get('images/browse.png'), 165, 100, 300, 150);

                var addElements = function(){

                var iDiv = document.createElement('div');
                iDiv.id = 'block';
                document.getElementsByTagName('body')[0].appendChild(iDiv);

                var iInput = document.createElement('input');
                iInput.type = "file";
                iInput.id= "Imgfile";
                document.getElementsByTagName('div')[0].appendChild(iInput);

                var choseBtn = document.createElement('button');
                choseBtn.innerHTML = 'Chose';
                choseBtn.id = "saveBtn";
                document.getElementsByTagName('div')[0].appendChild(choseBtn);

                };
                var handleElements = function(){
                function backButton() {

                        var elem = document.getElementById("block");
                        elem.parentNode.removeChild(elem);
                        canvas.height = 600;
                        initMenu();

                };
                function handleFileSelect(evt) {
                  var canvasWidth = 500;
                  var canvasHeight = 500;
                  var file = evt.target.files[0];
                  
                  
                  
                  var reader = new FileReader();
                  reader.onload = function(fileObject) {
                    var data = fileObject.target.result;
                    
                    // Create an image object
                    var userImage = new Image();
                    userImage.onload = function() {
                      
                      window.imageSrc = this;
                      userImageRef = window.imageSrc;
                    }
                    
                    // Set image data to background image.
                    userImage.src = data;
                    console.log(fileObject.target.result);
                  };
                  reader.readAsDataURL(file)
                }

                document.getElementById("Imgfile").addEventListener('change', handleFileSelect, false);
                document.getElementById("saveBtn").addEventListener('click', backButton, false);
                };
                addElements();
                handleElements();
};
    

    
                    
           /*        if (KeyPress == 'enter' && menuChosen == 1 && gameStarted == false) {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, 505, 620);
                        ctx.drawImage(Resources.get('images/rules.png'), 0, 0);
                        setTimeout(function(){gameOver = true;
                        resetCurrentGame();
                        }, 100);
                    };
             }
             else   
                if (gameOver && KeyPress == 'enter' && gameStarted == false) {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, 505, 620);
                    initMenu();
                    setTimeout(function(){gameOver = false;
                    resetCurrentGame();
                    }, 000);
                  */  
