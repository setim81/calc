//--------------- Обычный калькулятор ----------------------------------------
	function countCalc(){
		
		var firstNum = + document.getElementById("first").value; // "+" перобразует значение value в число
		var secondNum = + document.getElementById("second").value;
	
		var oper = document.getElementById("select").selectedIndex; // забираем индекс элемента массива option (0 = + ,1 = -,2 = *,3 = /, 4 = %, 5 = Степень n, 6 = Корень степени n) тега select

		if (oper === 0){
			var res = firstNum + secondNum;
		}else if (oper === 1){
			res = firstNum - secondNum;
		}else if (oper === 2) {
			res = firstNum * secondNum;
		}else if (oper === 3) {
			res = firstNum / secondNum;
		}else if (oper === 4) {
			res = (firstNum*secondNum)*0.01;
		}else if (oper === 5) {
			res = Math.pow(firstNum, secondNum); // функция возведения числа в степень 
		}else if (oper === 6) {
			res = Math.pow(firstNum, 1/secondNum); // функция возведения числа в обратную степень 1/n , т.е извлечение корня
		};
				
		document.getElementById("result").innerHTML = res // выводим res в выбранный div c id = 'result' 
	};

	function resetResCalc(){ // функция сброса значения блоков 
		res = ' ';
		document.getElementById("result").innerHTML = res;
		document.getElementById("first").value = res;
		document.getElementById("second").value = res;
	};

//--------------- Ипотечный калькулятор ----------------------------------------

	 var rng_price=document.getElementById('rng_price'); //rng - это ползунок
  	 var i_price=document.getElementById('i_price'); // i - input
  	 var rng_init=document.getElementById('rng_init');
	 var i_init=document.getElementById('i_init');
	 var rng_perc=document.getElementById('rng_perc');
	 var i_perc=document.getElementById('i_perc');
	 var rng_period=document.getElementById('rng_period');
	 var i_period=document.getElementById('i_period');


	function rngPrice() {
      i_price.value=rng_price.value;
	}
	function rngPriceChange() {
      rng_price.value=i_price.value;
	}
	
	function rngInit() {
      i_init.value=rng_init.value;
	}
	function rngInitChange() {
      rng_init.value=i_init.value;
	}

	function rngPerc() {
      i_perc.value=rng_perc.value;
	}
	function rngPercChange() {
      rng_perc.value=i_perc.value;
	}
	function rngPeriod() {
      i_period.value=rng_period.value;
	}
	function rngPeriodChange() {
      rng_period.value=i_period.value;
	}

			// Общая стоимость жилья - i_price
			// Первоначальный взнос - i_init
			// Процентная ставка - i_perc
			// Срок кредита (лет) - i_period

	function countIpoCalc(){
		
		var ipo_diff = i_price.value - i_init.value; //остаток, на который берется кредит

			if(ipo_diff <= 0){ 	//проверка, если остаток меньше или равен нулю
				document.getElementById("ipo_credit").innerHTML = 'не требуется'; //выводим надпись и	
				return resetResIpoCalc(); //  вызываем функцию сброса значений и завершаем выполнение функции countIpoCalc()
			}else{
				document.getElementById("ipo_credit").innerHTML = ipo_diff.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			};
		var percent = (i_perc.value/12)/100; //ставка в месяц
		
		// формула рассчета ежемес.платежа
		var ipo_month = ipo_diff*(percent * (Math.pow(1 + percent, i_period.value * 12))) / (Math.pow(1 + percent, i_period.value * 12) - 1);
		document.getElementById("ipo_month").innerHTML = ipo_month.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); //шаблон метода replace в данном случае ставит пробелы между разрядами чисел, например .toFixed(2) оставляет два знака после запятой
		
		var ipo_total = ipo_month*12*(+i_period.value) - ipo_diff; //полные затраты по кредиту

		document.getElementById("ipo_total").innerHTML = ipo_total.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			
		var ipo_overpay = ipo_total + (+i_price.value);    //величина переплаты
		document.getElementById("ipo_overpay").innerHTML = ipo_overpay.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); 
	};
	
	function resetResIpoCalc(){ // сбрасываем результаты расчета
		document.getElementById("ipo_month").innerHTML = null;
		document.getElementById("ipo_total").innerHTML = null;
		document.getElementById("ipo_overpay").innerHTML = null;
	};