function _load() {

	// egy ToDo felület létrehozása, legyen 10 sor benne, minden sorban egy checkbox, mellette egy szöveges mező, legyen egy törlés gomb minden sorban. 10 elemből álljon a lista, de bővíthető legyen egy új feladat hozzáadása gombbal.

	// létrehozunk három változót: 
	// 0) egy változóban eltároljuk a "root" elemet;
	
	let theRoot = document.getElementById("root");
	
	// 1) egy változóba `` között egy soros html kódot, amiben van egy checkbox, a text és egy delete class;

	let aRow = `
		<div class="row">
			<input type="checkbox">
			<input type="text">
			<button class="delete">Delete</button>
		</div>
	`;

	// 2) egy változóba eltároljuk a 10-est;

	let aNumber = 10;

	//  egy for ciklusban elszámolunk 10-ig, adjencInnerHtml , beforeEnd-del (insertAdjacentHTML("beforeend", és a HTML változó);

	for ( let index = 0; index < aNumber; index++) {
		theRoot.insertAdjacentHTML("beforeend", aRow);
	}

	// az add domb hozzáadása a root elemen kívülre insertAjacentHtml afterend-del;

	theRoot.insertAdjacentHTML("afterend", `
		<button id="addItem">Add item</button>
	`);

	// legyen egy ID-ja a gombnak, rátenni a clikk eseményt, létre kell hozni egy függvényt, ami a clikk eseményt kezeli (figyeli?... lemaradtam);

	function addNewItem() {
		theRoot.insertAdjacentHTML("beforeend", aRow);
	}
	document.getElementById("addItem").addEventListener("click", addNewItem);

	// jelöljük ki az öszes törlés gombot;

	// mentsük el egy változóba az összes sort;
	let deleteButtons = theRoot.querySelectorAll(".delete");

	function deleteItem(e) {

		e.target.parentElement.remove();

	}
	//  for ciklussal menjünk végig a html tömbön, a tömb hosszúságát vesszük alapul és mindegyikre rakjunk egy clikk eseményfigyelőt, amihez készítünk egy függvényt;
	
	// az elkészített függvényben a törlés befoglaló sorát kitöröljük;

	for (let index = 0; index < deleteButtons.length; index++) {
		deleteButtons[index].addEventListener("click", deleteItem);
		
	}









};

window.addEventListener("load", _load);