//form

// const productForm = document.querySelector(".product")

//Product texts

const productNameText = document.querySelector('.product__name');
const productQuantityText = document.querySelector('.product__quantity');

//Product inputs
const productNameInput = document.querySelector('#product__name');
const productQuantityInput = document.querySelector('#product__quantity');

//product name btns
const productNameBtn = document.querySelector('.product__name__btn');
const productNameBtnModifier = document.querySelector('.product__name__btn__modifier');

//product quantity btns
const productQuantityBtn = document.querySelector('.product__quantity__btn');
const productQuantityBtnModifier = document.querySelector('.product__quantity__btn__modifier');

//Phases btns
const productPhaseBtns = document.querySelectorAll('.product__btn__phase');

//Oil phase card

const oilPhase = document.querySelector('.phase1');
const waterPhase = document.querySelector('.phase2');
const extraPhase = document.querySelector('.phase3');

//Sum of all phases
let sumOfAllPhases = document.querySelector('.sumOfAllPhases__value');

//glbal list btn

const globalListBtn = document.querySelector('.product__global__list--btn');
const globalListRefreshBtn = document.querySelector('.product__global__list--refresch--btn');

//global list table

let globalListTable = document.querySelector('.table__card__final__table');

//Phase1 card

const phase1AddBtn = document.querySelector('.phases__card__btn--1');
const phase1AddWindow = document.querySelector('.phase1__add__window');
const phase1AddProductBtn = document.querySelector('.phase1__add__window--btn');
const phase1AddedProcuctName = document.querySelector('#additem__name-phase1');
const phase1AddedProcuctQUantity = document.querySelector('#additem__quantity-phase1');
const phase1AddedProcuctResult = document.querySelector('phase1__add__window--result');
const phase1Tabe = document.querySelector('.phase1__table');
const phase1Inputs = document.querySelectorAll('.add__phase1__product');
const phase1ProductResult = document.querySelector('.phase1__add__window--result');
const phase1CalculatedBtn = document.querySelector('.phase1__add__window__calculate--btn');
const phase1CloseBtn = document.querySelector('.phase1__add__window__close--btn');
const phase1DltBtn = document.querySelectorAll('.phase1__del__product');
const phase1GlobalQuantity = document.querySelector('.phase1__global__quantity');
//Phase2 card

const phase2AddBtn = document.querySelector('.phases__card__btn--2');
const phase2AddWindow = document.querySelector('.phase2__add__window');
const phase2AddProductBtn = document.querySelector('.phase2__add__window--btn');
const phase2AddedProcuctName = document.querySelector('#additem__name-phase2');
const phase2AddedProcuctQUantity = document.querySelector('#additem__quantity-phase2');
const phase2AddedProcuctResult = document.querySelector('phase2__add__window--result');
const phase2Tabe = document.querySelector('.phase2__table');
const phase2Inputs = document.querySelectorAll('.add__phase2__product');
const phase2ProductResult = document.querySelector('.phase2__add__window--result');
const phase2CalculatedBtn = document.querySelector('.phase2__add__window__calculate--btn');
const phase2CloseBtn = document.querySelector('.phase2__add__window__close--btn');
const phase2DltBtn = document.querySelectorAll('.phase2__del__product');
const phase2GlobalQuantity = document.querySelector('.phase2__global__quantity');
//Phase3 card

const phase3AddBtn = document.querySelector('.phases__card__btn--3');
const phase3AddWindow = document.querySelector('.phase3__add__window');
const phase3AddProductBtn = document.querySelector('.phase3__add__window--btn');
const phase3AddedProcuctName = document.querySelector('#additem__name-phase3');
const phase3AddedProcuctQUantity = document.querySelector('#additem__quantity-phase3');
const phase3AddedProcuctResult = document.querySelector('phase3__add__window--result');
const phase3Tabe = document.querySelector('.phase3__table');
const phase3Inputs = document.querySelectorAll('.add__phase3__product');
const phase3ProductResult = document.querySelector('.phase3__add__window--result');
const phase3CalculatedBtn = document.querySelector('.phase3__add__window__calculate--btn');
const phase3CloseBtn = document.querySelector('.phase3__add__window__close--btn');
const phase3DltBtn = document.querySelectorAll('.phase3__del__product');
const phase3GlobalQuantity = document.querySelector('.phase3__global__quantity');

const finalCardTable = document.querySelector('#final-table');

//The amout of ptoduct
let globalQuantity = '';
// sum per phase
let sumPhase1 = 0;
let sumPhase2 = 0;
let sumPhase3 = 0;
// All phases sum
let globalProductSum = '';

// all rows with data
let allRows = [];
//name section functions
const nameAdd = e => {
	e.preventDefault();

	if (productNameInput.value !== '') {
		productNameText.textContent = `${productNameInput.value}`;
		productNameInput.style.display = 'none';
		productNameInput.value = '';
		productNameText.style.color = '';
		productNameBtn.style.display = 'none';
	} else {
		productNameText.textContent = 'Prosze wpisac nazwe kremu';
		productNameText.style.color = 'red';
	}
};

const nameModifier = e => {
	e.preventDefault();

	productNameText.textContent = `Nazwa Kremu`;
	productNameInput.style.display = '';
	productNameInput.value = '';
	productNameText.style.color = '';
	productNameBtn.style.display = '';
};

//quantity section functions
const quantityAdd = e => {
	e.preventDefault();

	if (productQuantityInput.value !== '') {
		productQuantityText.textContent = `${productQuantityInput.value} gramow`;
		globalQuantity = productQuantityInput.value;
		productQuantityInput.value = '';
		productQuantityText.style.color = '';
		productQuantityInput.style.display = 'none';
		productQuantityBtn.style.display = 'none';
	} else {
		productQuantityText.textContent = 'Prosze wpisac ilosc kremu';
		productQuantityText.style.color = 'red';
	}
};

const quantityModifier = e => {
	e.preventDefault();

	productQuantityText.textContent = `Ilosc twojego kremu`;
	productQuantityInput.style.display = '';
	productQuantityInput.value = '';
	productQuantityText.style.color = '';
	productQuantityBtn.style.display = '';
};

//name section listeners
productNameBtnModifier.addEventListener('click', nameModifier);
productNameBtn.addEventListener('click', nameAdd);

//quantity section listeners
productQuantityBtnModifier.addEventListener('click', quantityModifier);
productQuantityBtn.addEventListener('click', quantityAdd);

//Phases of product listener
//Open a table depending of phase
productPhaseBtns.forEach(el => {
	el.addEventListener('click', function (e) {
		this.classList.toggle('product__btn__phase--clicked');

		if (this.textContent.includes('Faza Olejowa')) {
			oilPhase.classList.toggle('active-d-none');
		} else if (this.textContent.includes('Faza Wodna')) {
			waterPhase.classList.toggle('active-d-none');
		} else if (this.textContent.includes('Faza Dodatkowa')) {
			extraPhase.classList.toggle('active-d-none');
		}
		e.preventDefault();
	});
});

//Phase 1 add window

phase1AddBtn.addEventListener('click', function showAddWindow(e) {
	phase1AddWindow.style.display = 'flex';
	this.style.display = 'none';
	e.preventDefault();
});

const phase1AddNewProduct = e => {
	const row = document.createElement('tr');

	phase1Inputs.forEach(el => {
		let cell = document.createElement('td');
		cell.textContent = el.value;
		row.append(cell);
	});

	let cellResult = document.createElement('td');
	cellResult.innerText = `${(phase1Inputs[1].value / 100) * globalQuantity} gr`;
	//DLT button for each added element
	let cellTrash = document.createElement('i');
	cellTrash.className = `fa-solid fa-delete-left`;
	cellTrash.classList.add(`phase1__del__product`);
	cellTrash.setAttribute('id', 'phase1__dlt__btn');
	row.append(cellResult);
	row.append(cellTrash);
	phase1Tabe.append(row);

	sumPhase1 += parseFloat(phase1Inputs[1].value);
	globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
	phase1GlobalQuantity.innerText = `${sumPhase1}%`;
	sumOfAllPhases.textContent = `Suma wszystkich faz wynosi ${globalProductSum}%`;

	if (globalProductSum > 100) {
		sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
		sumOfAllPhases.style.color = 'red';
	} else if (globalProductSum === 100) {
		sumOfAllPhases.style.color = 'green';
	} else {
		sumOfAllPhases.style.color = '#fbfafa';
	}
	allRows.push(row);
	phase1Inputs.forEach(el => {
		el.value = '';
	});

	phase1ProductResult.innerText = '';
	phase1AddBtn.style.display = 'block';
	phase1AddWindow.style.display = 'none';
};

document.addEventListener('click', function (e) {
	if (e.target.id === 'phase1__dlt__btn') {
		sumPhase1 -= parseFloat(e.target.closest('tr').children[1].innerText);
		phase1GlobalQuantity.innerText = `${sumPhase1}%`;
		globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
		sumOfAllPhases.textContent = `Suma wszystkich faz wynosi ${globalProductSum}%`;
		if (globalProductSum > 100) {
			sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
			sumOfAllPhases.style.color = 'red';
		} else if (globalProductSum === 100) {
			sumOfAllPhases.style.color = 'green';
		} else {
			sumOfAllPhases.style.color = 'black';
		}
		e.target.closest('tr').remove();
	}
});

phase1CloseBtn.addEventListener('click', function (e) {
	phase1AddWindow.style.display = 'none';
	phase1AddBtn.style.display = 'block';
	e.preventDefault();
});

//Calculate a % en global quality
const phase1CalculateInGr = e => {
	phase1ProductResult.innerText = `${(phase1Inputs[1].value / 100) * globalQuantity}`;
};

phase1AddProductBtn.addEventListener('click', phase1AddNewProduct);
phase1CalculatedBtn.addEventListener('click', phase1CalculateInGr);

//Phase 2 add window

phase2AddBtn.addEventListener('click', function showAddWindow(e) {
	phase2AddWindow.style.display = 'flex';
	this.style.display = 'none';
	e.preventDefault();
});

const phase2AddNewProduct = e => {
	const row = document.createElement('tr');

	phase2Inputs.forEach(el => {
		let cell = document.createElement('td');
		cell.textContent = el.value;
		row.append(cell);
	});

	let cellResult = document.createElement('td');
	cellResult.innerText = `${((phase2Inputs[1].value / 100) * globalQuantity).toFixed(2)} gr`;
	//DLT button for each added element
	let cellTrash = document.createElement('i');
	cellTrash.className = `fa-solid fa-delete-left`;
	cellTrash.classList.add(`phase2__del__product`);
	cellTrash.setAttribute('id', 'phase2__dlt__btn');
	row.append(cellResult);
	row.append(cellTrash);

	phase2Tabe.append(row);

	sumPhase2 += parseFloat(phase2Inputs[1].value);
	globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
	sumOfAllPhases.textContent = `Suma wszystkich faz wynosi ${globalProductSum}%`;
	phase2GlobalQuantity.innerText = `${sumPhase2}%`;
	if (globalProductSum > 100) {
		sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
		sumOfAllPhases.style.color = 'red';
	} else if (globalProductSum === 100) {
		sumOfAllPhases.style.color = 'green';
	} else {
		sumOfAllPhases.style.color = 'black';
	}

	allRows.push(row);
	phase2Inputs.forEach(el => {
		el.value = '';
	});

	phase2ProductResult.innerText = '';
	phase2AddBtn.style.display = 'block';
	phase2AddWindow.style.display = 'none';
};

document.addEventListener('click', function (e) {
	if (e.target.id === 'phase2__dlt__btn') {
		sumPhase2 -= parseFloat(e.target.closest('tr').children[1].innerText);
		phase2GlobalQuantity.innerText = `${sumPhase2}%`;
		globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
		sumOfAllPhases.textContent = `Suma wszystkich faz wynosi ${globalProductSum}%`;
		if (globalProductSum > 100) {
			sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
			sumOfAllPhases.style.color = 'red';
		} else if (globalProductSum === 100) {
			sumOfAllPhases.style.color = 'green';
		} else {
			sumOfAllPhases.style.color = 'black';
		}
		e.target.closest('tr').remove();
	}
});

phase2CloseBtn.addEventListener('click', function (e) {
	phase2AddWindow.style.display = 'none';
	phase2AddBtn.style.display = 'block';
	e.preventDefault();
});

//Calculate a % en global quality
const phase2CalculateInGr = e => {
	phase2ProductResult.innerText = `${((phase2Inputs[1].value / 100) * globalQuantity).toFixed(2)}`;
};

phase2AddProductBtn.addEventListener('click', phase2AddNewProduct);
phase2CalculatedBtn.addEventListener('click', phase2CalculateInGr);

//Phase 3 add window

phase3AddBtn.addEventListener('click', function showAddWindow(e) {
	phase3AddWindow.style.display = 'flex';
	this.style.display = 'none';
	e.preventDefault();
});

const phase3AddNewProduct = e => {
	const row = document.createElement('tr');

	phase3Inputs.forEach(el => {
		let cell = document.createElement('td');
		cell.textContent = el.value;
		row.append(cell);
	});

	let cellResult = document.createElement('td');
	cellResult.innerText = `${((phase3Inputs[1].value / 100) * globalQuantity).toFixed(2)} gr`;
	//DLT button for each added element
	let cellTrash = document.createElement('i');
	cellTrash.className = `fa-solid fa-delete-left`;
	cellTrash.classList.add(`phase3__del__product`);
	cellTrash.setAttribute('id', 'phase3__dlt__btn');
	row.append(cellResult);
	row.append(cellTrash);

	phase3Tabe.append(row);

	sumPhase3 += parseFloat(phase3Inputs[1].value);
	globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
	sumOfAllPhases.textContent = `Suma wszystkich faz wynosi ${globalProductSum}%`;
	phase3GlobalQuantity.innerText = `${sumPhase3}%`;

	if (globalProductSum > 100) {
		sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
		sumOfAllPhases.style.color = 'red';
	} else if (globalProductSum === 100) {
		sumOfAllPhases.style.color = 'green';
	} else {
		sumOfAllPhases.style.color = 'black';
	}

	allRows.push(row);

	phase3Inputs.forEach(el => {
		el.value = '';
	});

	phase3ProductResult.innerText = '';
	phase3AddBtn.style.display = 'block';
	phase3AddWindow.style.display = 'none';
};

document.addEventListener('click', function (e) {
	if (e.target.id === 'phase3__dlt__btn') {
		sumPhase3 -= parseFloat(e.target.closest('tr').children[1].innerText);
		phase3GlobalQuantity.innerText = `${sumPhase3}%`;
		globalProductSum = sumPhase1 + sumPhase2 + sumPhase3;
		sumOfAllPhases.textContent = ` Suma wszystkich faz wynosi ${globalProductSum}%`;
		if (globalProductSum > 100) {
			sumOfAllPhases.textContent = 'Suma wszystkich faz przekroczyla 100%';
			sumOfAllPhases.style.color = 'red';
		} else if (globalProductSum === 100) {
			sumOfAllPhases.style.color = 'green';
		} else {
			sumOfAllPhases.style.color = 'black';
		}
		e.target.closest('tr').remove();
	}
});

phase3CloseBtn.addEventListener('click', function (e) {
	phase3AddWindow.style.display = 'none';
	phase3AddBtn.style.display = 'block';
	e.preventDefault();
});

//Calculate a % en global quality
const phase3CalculateInGr = e => {
	phase3ProductResult.innerText = `${(phase3Inputs[1].value / 100) * globalQuantity}`;
};

phase3AddProductBtn.addEventListener('click', phase3AddNewProduct);
phase3CalculatedBtn.addEventListener('click', phase3CalculateInGr);

//change values with modifier of globalquantity

productQuantityBtn.addEventListener('click', function (e) {
	if (allRows.length >= 1) {
		allRows.forEach(el => {
			el.children[2].innerText = `${((parseFloat(el.children[1].textContent) / 100) * globalQuantity).toFixed(2)} gr`;
		});
	}
});

// add all rows to a global list table from bigget % to lover %

finalCardTable.style.display = 'none';

globalListBtn.addEventListener('click', function (e) {
	allRows.sort(function (row1, row2) {
		const cellA = row1.cells[1].textContent;
		const cellB = row2.cells[1].textContent;
		return cellB - cellA;
	});

	allRows.forEach(el => {
		console.log(el.cells[1].textContent);
	});

	allRows.forEach(el => {
		let globalListeEl = el.cloneNode(true);
		globalListeEl.children[3].remove();
		globalListTable.append(globalListeEl);
	});

	globalListBtn.style.display = 'none';
	finalCardTable.style.display = 'flex';
});

globalListRefreshBtn.addEventListener('click', function (e) {
	globalListTable.forEach(el => {
		globalListTable.removeChild(el);
	});

	allRows.sort(function (row1, row2) {
		const cellA = row1.cells[1].textContent;
		const cellB = row2.cells[1].textContent;
		return cellB - cellA;
	});

	allRows.forEach(el => {
		console.log(el.cells[1].textContent);
	});

	allRows.forEach(el => {
		let globalListeEl = el.cloneNode(true);
		globalListeEl.children[3].remove();
		globalListTable.append(globalListeEl);
	});

	globalListBtn.style.display = 'none';
	finalCardTable.style.display = 'flex';
});
