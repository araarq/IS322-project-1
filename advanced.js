var foo = 'foo'; // Variables declared outside of any function are considered global variables.
				 // These variables can be found on the window object.
(function () {
	// Any kind of function, will create a new variable scope. Variables declared in this 
	// function will only be accesible inside this function, unless passed by reference through
	// a function call. 

	// Lower level scope will always overwrite a higher level scope.  
	var foo = 'bar';
	console.log(foo); // 'bar'
	// Global Variables can still be accessed through window object 
	console.log(window.foo); // 'foo'

	// An array of Objects, similar to database records we will eventually be dealing with.
	var mockDatabase = [
		{ _id: '123', name: 'Blue Shirt', In_Stock: true , img_src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscPxCGQvlDvWbel-Rvn4FSqkTYobI0kS0lQ4kKre9dQxTw3-H'},
		{ _id: '583', name: 'Blue Pants', In_Stock: true, img_src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUVFRgWGBUWGBgXFhcXGB0dGxYYFRgaHSggGh0lHRgVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAPFzIdHR0rLS0tLTAtLi0tLS0tLS0tLS0rKzU3MDU3LS0rLS0tLS0tNy0tLS0rLSstLS0rKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGCAH/xABJEAACAQIDAgkHCAcHBQEAAAAAAQIDEQQhMRJBBQciUWFxgcHwBhMykaGx0RQkQnOisrPhIyViZHKSwjNDUmOCo/EVNFR00jX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB8RAQADAAMBAQEBAQAAAAAAAAABAjEDETJBIXEiEv/aAAwDAQACEQMRAD8AmUAFOAAAAAAAANR5Xztgq+bV4bKayacmorPdqQzKtWjbYq17O2lWa1yWkkSpxj4lRwihKUIKrWhBynfYSV53lbNK8FdrTUhnz123DZaTauq9V6OyspKSz1WejNOOYReJZOK4Tx8M1Xr5Z28/Ls+lpoWX5T8IpNLEV1tNK/n5Nq7WnK6Uu0pjTqSklsJ7XPWTvZXeUqdtE95YwuMg7ydNSV1Sim4wjGXJl5zaSXo2WTy/SdCZ2ZhyIlta3lBjvlFWMMVXjFbPJ887Jvrlv6zK/wCu4+LpXxuI5dSELedWd5JW1euaOZxVfaxNWcdJSur2eW7S6e/Rl3EzqPzXKlnWpJZvXbjZq3aVER/zjkzPetpwl5SYqnToypY/Eeelfz1Pzs3sytHe+SuU5Rsr3STVtDHq+VvCezb5XWTatfzjWdrrM1NfBpzTUrSac2m27pzaTzvbf6inGUpKym/pbktLdBMVV3262XD+N87lia7g6NOVo1Z32mntNcrO+W8+VcTi5Xbr4h2trWnvta1p9KzNOsfBU1KNOM6lOhC8lOXpRT85StF205W58hLK7KcLjMRNXVFu+VtvEWz6FUsmI/jk/wBVcJYqbVvOTbTSv5ybd3fNN9Tz3E8+SXCHn8Fh617udGDbeu0opSv07SZAOJpTUHKcIRb3SnKTXZKb9xLfE5i3Pg6MZNN0qtSDtayu/OpZdFVE3hVHcgAhQAAAAAAAAAAAAAAAAAAAAA4Hjep7VGhFqTgp1JyULKTtG0YxcnZNubzzyvkyJqinm/NbEd0eZJZJydru2d97kSpxvTaWGzaX6a/T/Z637SLqlKNrttZrRJJ5c68ZG3HWeu2dpjvpiXd83GC0bVpSuty2cubVouzaajFJxpxVlFu8nfNuWWrbedlzJWSLcYR2uSnfW+/PmbeXOX6kIpLX19hUV/e5T38hcezBx2Y5WtdvXJGQ53lRvayr0XksspopxtlGLUV23bLGOxL83u5OzKyyV0/yKnEwqx0EnZJLkRWXQ5fl6y1wpB5fxO/tKK+M253XMve+5lWPmrf6m/ayVdLFOc4bLin6V+t5F3D4aktppJKWfm3k4v8AYbyceuzWmerpv6OmvTzmRN9Ptl39g6/e4O1jEUrr6Vs8rw9+0STxIVUliqS024VErp2bi4y0/giRpiZdTXX46TueJSr85rx56CfRlUX/ANEcnfSqpkABk0AAAAAAAAAAAAAAAAAAAAAEa8dFVx+R2a1rXTi5J281uRG+zCWkp55pSuorn2Ws7dftJO44W1HCtJPlVVmuim8ubRkdxirX2eY9HH5ZX1h0aTTsox169DIxNKemfYl8C5hqCzatv6S5dueuWXYsugr4hTjtpRWTt0o13CX9nK+ttyNxik8s95r+H5NUZN2eSOTOuw0WGyV3vSXTfRp9qNhjm72ute4t4ag3UhG11BX0yut+fYbDhCm1LTdpkTH5Cpn9Ycb7Ke0smjKcd+1fJadJajTez6L11Mmcbq1paLJJe+x2HJa/ERf7WmV/yudhxMX+X1csvksvxKRy8qCV2o6Lf4sdlxNK+Mr3tycPFZZ61E+45yY7TUyAAwagAAAAAAAAAAAAAAAAAAAADhONtLzOH+ul9xvuI7cbRb6iR+NmDeHoNJZV+q16c+9IjuDbi7rmub08sb6ppRsnn4sY9JcpZvXm6ekz4NaW1uYtKN3fL1dBUJXnBZ5N585rPKhJYd5bu/M3MUrZ56+znLdXgqOLrUsI5OCrTUNtJNxtGUrpN5+i9+85OS7GtHTyqS5L1+OhmcIR5WfMWK1LYrzhnyZyjdaPZbV7dhk4l3a35CcGPOnl6XvRfoXta91b4n2dNW9RXhqeXb6hAVqO/LTVo6fiZh86xb5qVFeuU33GgmvHVY6ridh+lxj+pX4jJviqalIAGLUAAAAAAAAAAAAAAAAAAAAAcjxoQvgk+atB+yVyKqMs2l0Eu8Ysb4KWuVSGiu82136kSUFm1Z/kb8fllfWVDNFEYZXzfj4ldP8ALx0F1R5J1LGc7ZGb5KS2uE8LvtUm/VQqmurL2s2vkBG/CVLLSFWX2HH+uwt5krrT8N09nG11zYiut6/vJGJWlmu78jaeWdJw4QxOX99J/wA1pbv4kamo1k0Pjv1mqN4+Nxcw8O4qoLLr8K5XS0fYccUuWTvzfA67idXKxb/bpL7M/ijh5VMubJnd8S+cMU/8+C9VNPvJ5MVTUlAAyagAAAAAAAAAAAAAAAAAAAADneMGPzCrplKk8/rILvIfwurtzEyeXS+Y1dNaWv1sCIMJlfq6szbj8sr6zMPBe4vNLZXWvHrRbw0PHVzlyWnaEtfWWvXc23FvnwmujC1X9uku81eIdn2m64qabePqy/w4Zr+apTf9LO38u01rOMKNuEsRuvKDvz3pw3rqNMoX6VddP5nR8aNO3CE3a94Un9m2v+lnOUnq7+sRP+SdbTDrKxXsWXqFDT1ePcXK0Mu8lxqcQrLTczv+JOPzfEvnxT9lKn8TgsarR59SRuJunbB1H/ixFR/YpruHJP4umu+ABk0AAAAAAAAAAAAAAAAAAAAAGl8s/wDsq/RGL9U4vuIboavJ82bu+0mbyx/7HE/Uyfqz7iG8Pe/Mul2NePJZ31n0noXZxsimitPHj8i5XWXOENZiZ+O1nRcUCbxWLluVOjFdbdRv7qOZrnYcTlnLGNf46S7Nmb7xfyqmtZxqr5/ll+govr5Vb4I5SlLJ3WenwOv42qa+Wwlz4an7J1fijjaMukqPMOW1u8LovG7IuYhFvBvKHWXa6vlz/Ej6NXj3k/iSbxRxXyCLW+rWf27f0kX8INpW6H/x45yVuKqP6uovnlWf+9UXcL4qmuvABm0AAAAAAAAAAAAAAAAAAAAAGq8rV8xxX1FR+qLZC+Ghyu3V78uYmzyljfB4pfu9b7kiEsO+Vfp1bvl4saceSzvrcU2tF45j7iH48dhjxl0+Ln3ES1zOpazGSsmdrxLJbGLe/wA/Ff7afeziMa8stb6LuzO74lo/oMQ+fEteqnT+IviqawON+NsTh3z0JL+Wa3b/AEjg6G7s7CQuONtVcN006qvzWcNLdZH9L2bjtfLltbrCS06vfkZFV7v+OnqMSjNWXV4XuK6s0cca3HvXt95MHFrC3B2H6Yzf81Sb7yGuEql9paZsmzyBjbg/C/UQfrz7ybro6AAELAAAAAAAAAAAAAAAAAAAAAGFw6r4XEL/ACKv3JEE4eWazvzbtej1+onrhSN6NVc9Kovss88Yepp1LU04/rO7dqtn2irVV2YUam/p3eOs+edL6Q+Y6pl2N+PYSDxLX+S1m9+Jl+HSIzxVS6fb4RJ/EzC2EqPnxE39imu4m+LprF45Yq+Ef7OJXXlTdvYRxSle/jmJL45o8jCvmlWXPrCPwIuhLP2dop5ctrbwldeNxTXn41LNGfJT5z5VqX9Z1xi8ITyfWTz5GQtgcMubD0vuI8/415PPnPRPk9T2cNQjzUaS9UIkXXRsQAQsAAAAAAAAAAAAAAAAAAAAAWsYr05r9if3Web4zyWvbloeksQuRP8Agl7meaKei6lbO+414vrO7LUsvG4+bb8dBSpZCea7DRmpxEuS9+tu0lnicXzC/PWqf0ruIkxC5JLvE4v1dH62t9+3cZ8jSjF46LrD4dq39rNZ8zg/gRMn7yXeOaVsLQb/APItpfWnMiHvFMLazaE+T41KZvTrR8ov1/kU7Xv8dxaGLwk+Rdc3Wel+DoWpQXNCK9SSPNeIp7TUV9JqPry7z0zRWRlyNaKwAQoAAAAAAAAAAAAAAAAAAAAAU1vRl/DL3M8ywjZLRZLR33HpuayfU/ceZXkuq3uRrxfUXXlvPm0fVp46ShadveasytLL2+wmHieX6tp/WVvxJEPVbbL5vaTJxQ//AJlL+Ov+NMy5F0Y3HHb5JRvp8o3/AFcyH47iZON+F8HT1yxEdM/ozIbpbhx4X1lQWr8ZlicveXtrJ9RYrbzSUK8DnXornr0l9tZHpaGh5s4IV8Xhl+9UPxInpOnoY31rVUACFAAAAAAAAAAAAAAAAAAAAABY8z4hcqS5pNb9x6ahqus8y41PztRc1Wa+0zTj+ou+3KVp2lVQovkjVmYh5E08Ui/VlDrr/j1CF8T6PNl47ibeK2NuDMP1VX661Qy5F0Y3G5F/IYtJO2Ip5PqkQtSd2vFya+NyltcHtf59H3shSlu6jvHhfWS2WKsrl9adpiylmXKIZ3k5C+Owi/e6PsqRZ6Qhojzr5Iq/COEWvzmD/ld+49FQ0RjfWtX0AEqAAAAAAAAAAAAAAAAAAAAAH2Op5p4UiliK6d8q9VPnym13HpZHm3h+NsXi1+9V/wASRfHqLseWYTPkc7n22RqgxT5JOXFov1Zhfqr+ucn3kGYlcknfi6VuDcIv8iHtu+8zuujC42It8HSta6rUNdP7RLvIRgyc+NKN+Da1tVOg1nb++gQZT+B3jxy+r9vezGqrNmS5Ze0xZ7y5TDceQavwnhfrZP1U5s9ER0PPfF1G/CeGf7VT8KZ6FRjfWlQAEqAAAAAAAAAAAAAAAAAAAAAA87+VdK2Nxa/eKj9cm+89EEDeXmG2cfitpwheptracleMlFqXo2tna/Q+oumpvjnovN9pWnmUVKbjdqdPLay2rZq+WaXNLfuZhTry3OHbOHVzmncI6ZmPTjC7VlfXO3r0J64vl+rsJ/61L2xT7zzlicTKOaqw0085Fp9Djo18T0r5G0XDA4aLVmsPRVrWtyI5W3GV5XWOmu40E/8ApleyTs6Lz0sqsG/cQZT3E+cYNCU+DsTGF77CfJTk7KUXLkpXasndWeVzz/Vqy+lFReS+lBc/ozirFUmIctC9V0LUiqrZWfnKdns/TX01ePrsyhpt+lBZteld3yWiWty5mE9Og4s434TodVV/7Uz0CiDeKvg+Sx9Opsz2Y0qt5ebmoJtbKTk1a7u8tcicjG2tK4AA46AAAAAAAAAAAAAAAAAAAAABznlTqv4P6gA5LhOEPRn43M1WB9Ltl94A7KYdRwD6cPHMSPQ07QCZ1cLqNbwhvAA5XHek+ruZmcBa9r97AOpdPLWPjmMgA4oAB0AAAAAAAAAAB//Z' },
		{ _id: '954', name: 'Blue Shoes', In_Stock: false , img_src:'data:image/jpeg;base64,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'},
		{ _id: '384', name: 'Red Shirt', In_Stock: false , img_src : 'https://www.athleticscholarships.net/wp-content/uploads/2012/07/red-shirt-304x300.jpg'},
		{ _id: '183', name: 'Red Pants', In_Stock: true , img_src :'https://s7d4.scene7.com/is/image/JCPenney/DP0817201811044250M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'},
		{ _id: '007', name: 'Red Shoes', In_Stock: false , img_src :'https://s7d4.scene7.com/is/image/JCPenney/DP0207201418465336C.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2'},
		{ _id: '304', name: 'Black Shirt', In_Stock: true , img_src :'https://images-na.ssl-images-amazon.com/images/I/41J5JlB0HQL._SX342_QL70_.jpg'},
		{ _id: '729', name: 'Black Pants', In_Stock: false, img_src :'https://images.express.com/is/image/expressfashion/0092_07249424_0058?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon' },
		{ _id: '734', name: 'Black Shoes', In_Stock: true , img_src :'https://dks.scene7.com/is/image/dkscdn/17NIKMMMBRGXXXXXXPRF_Black_Gold_is/?$DSG_ProductCard$'},
	];

	function renderList (results) {
		var tableBody = document.querySelector('#results-table2');

		// clear out inner HTML to get rid of any older results
		tableBody.innerHTML = '';
		// Map each database record to a string containing the HTML for it's row
		var tableRows = results.map(function (result, index) {
			return '<div class="card">'+ '<div class="card__body">'+ index + result.name +  
					result._id  + result.In_Stock + '<img src=' + result.img_src + '>' + '</div>'+ '</div>';
		});
		// Set the contents of the table body to the new set of rendered HTML rows
		
		tableRows.forEach(function (row) {
			tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
		});

		// Lower level scope once again overwrites what's above it.
		var foo = 'renderList';
		console.log(foo); // 'renderList'
	}

	renderList(mockDatabase);



	// Function to Order results list 
	function orderBy(sortValue) {
		// Sort method varies based on what type of value we're sorting 
		var sortedResults = (sortValue === 'name') ? 
			mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				// Sorts alphabetically.  -1 puts it before. 1 puts it after
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) : 
			mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler. 
												// Just need postive or negative number 
				// Object properties can be accessed through a string representing their name
				return a[sortValue] - b[sortValue];
			});
		renderList(sortedResults);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#orderBy').addEventListener('change', function(event){
		// Event is the JavaScript event that transpired, in our change a CHANGE event.
		// Target is the element it was performed on, useful for when the event targets 
		// multiple elements.
		// Value has the name implies is the current value of the input element, if there is one
		orderBy(event.target.value);
	});

	// Function to filter out unIn_Stock results
	function toggleIn_Stock(In_Stock) {
		// If showIn_Stock is TRUE, only display In_Stock results
		// Filter will only inclue objects that return TRUE from it's query
		var filteredResults = mockDatabase.filter(function (result) {
			// If showIn_Stock is TRUE, always show.
			// Otherweise only show if In_Stock is TRUE
			return showIn_Stock || result.In_Stock;
		});
		renderList(filteredResults);
	}
	// Change events trigger after the value of a form input changes
	document.querySelector('#In_Stock').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean 
		var value = event.target.value === 'true';
		toggleIn_Stock(value);
	});



})(); // Wrap entire file in self executing function. 
      // Keeping all variables declared in this file inside a local scope.
