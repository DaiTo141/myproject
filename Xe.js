function Xe(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	switch(isCoDo(X, Y))
	{
// Co do
		case true:
		
			// Di len tren
			var X_Top = parseInt(X);
			while(!isBien(X_Top - 1, Y) && !isCoDo(X_Top - 1, Y)){
				DoiMau(X_Top - 1, Y);
				if(isCoDen(X_Top - 1, Y))
						break;
				X_Top -= 1; 
			}
			
			// Di xuong duoi
			var X_Bottom = parseInt(X);
			while(!isBien(X_Bottom +1, Y) && !isCoDo(X_Bottom + 1, Y)){
				DoiMau(X_Bottom + 1, Y);
				if(isCoDen(X_Bottom + 1, Y))
						break;
				X_Bottom += 1; 
			}
			
			// Di qua trai
			var Y_Left = parseInt(Y);
			while(!isBien(X, Y_Left - 1) && !isCoDo(X, Y_Left - 1)){
				DoiMau(X, Y_Left - 1);
				if(isCoDen(X, Y_Left - 1))
						break;
				Y_Left -= 1; 
			}
			
			// Di qua phai
			var Y_Right = parseInt(Y);
			while(!isBien(X, Y_Right + 1) &&!isCoDo(X, Y_Right + 1)){
				DoiMau(X, Y_Right + 1);
				if(isCoDen(X, Y_Right + 1))
						break;
				Y_Right += 1; 
			}
		break;
		
		
// Co Den	
		case false:
			// Di len tren
			var X_Top = parseInt(X);
			while(!isBien(X_Top - 1, Y) && !isCoDen(X_Top - 1, Y)){
				DoiMau(X_Top - 1, Y);
				if(isCoDo(X_Top - 1, Y))
						break;
				X_Top -= 1; 
			}
			
			// Di xuong duoi
			var X_Bottom = parseInt(X);
			while(!isBien(X_Bottom + 1, Y) && !isCoDen(X_Bottom + 1, Y)){
				DoiMau(X_Bottom + 1, Y);
				if(isCoDo(X_Bottom + 1, Y))
						break;
				X_Bottom += 1; 
			}
			
			// Di qua trai
			var Y_Left = parseInt(Y);
			while(!isBien(X, Y_Left - 1) && !isCoDen(X, Y_Left - 1)){
				DoiMau(X, Y_Left - 1);
				if(isCoDo(X, Y_Left - 1))
						break;
				Y_Left -= 1; 
			}
			
			// Di qua phai
			var Y_Right = parseInt(Y);
			while(!isBien(X, Y_Right + 1) && !isCoDen(X, Y_Right + 1)){
				DoiMau(X, Y_Right + 1);
				if(isCoDo(X, Y_Right + 1))
						break;
				Y_Right += 1; 
			}
		break;
		default:
	}
	
}