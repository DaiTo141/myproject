function Tuong(id){
		var X = id.charAt(0);
		var Y = id.charAt(1);
		var iX = 0, iY = 0;
		switch (isCoDo(X, Y)){
// Co do
			case true:
				// Di len ben phai
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX - 1, iY + 1) && !isCoDo(iX - 1, iY + 1)){
					DoiMau(iX - 1, iY + 1);
					if(isCoDen(iX - 1, iY + 1))
						break;
					iX -= 1;
					iY += 1;
				}
				
				// Di len ben trai
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX - 1, iY - 1) && !isCoDo(iX - 1, iY - 1)){
					DoiMau(iX - 1, iY - 1);
					if(isCoDen(iX - 1, iY - 1))
						break;
					iX -= 1;
					iY -= 1;
				}
				
				// Di xuong ben trai
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX + 1 , iY - 1)  && !isCoDo(iX + 1, iY - 1)){
					DoiMau(iX + 1, iY - 1);
					if(isCoDen(iX + 1, iY - 1))
						break;
					iX += 1;
					iY -= 1;
				}
				
				//Di xuong duoi ben phai
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY + 1) && !isCoDo(iX + 1, iY + 1)){
					DoiMau(iX + 1, iY + 1);
					if(isCoDen(iX + 1, iY + 1))
						break;
					iX += 1;
					iY += 1;
				}
				
			break;
			
// Co den
			case false:
			
				// Di len ben phai
				iX = parseInt(X);
				iY = parseInt(Y);
				while( !isBien(iX - 1, iY + 1) && !isCoDen(iX - 1, iY + 1)){
					DoiMau(iX - 1, iY + 1);
					if(isCoDo(iX -1, iY +1))
						break;
					iX--;
					iY++;
				} 
				
				// Di len ben trai
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX - 1, iY - 1) && !isCoDen(iX - 1, iY -1)){
					DoiMau(iX -1, iY -1);
					if(isCoDo(iX -1, iY -1))
						break;
					iX--;
					iY--;
				}
			
				// Di duoi ben trai
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY - 1) && !isCoDen(iX + 1, iY - 1)){
					DoiMau(iX + 1, iY - 1);
					if(isCoDo(iX + 1, iY - 1))
						break;
					iX++;
					iY--;
				}
				
				//Di duoi ben phai
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY + 1) && !isCoDen(iX + 1, iY + 1)){
					DoiMau(iX + 1, iY + 1);
					if(isCoDo(iX + 1, iY + 1))
						break;
					iX++;
					iY++;
				}			
			break;
		}
		
}