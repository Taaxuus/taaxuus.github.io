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

//The amout of ptoduct
let globalQuantity = '';

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

//name section functions
const nameAdd = e => {
	e.preventDefault();

	if (productNameInput.value !== '') {
		productNameText.textContent = `Nazwa twojego kremu to "${productNameInput.value}"`;
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
		productQuantityText.textContent = `Ilosc twojego kremu (100%) wynosi : "${productQuantityInput.value} gramow"`;
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
		} else if (this.textContent.includes('Faza Dodatkowa')) extraPhase.classList.toggle('active-d-none');
		e.preventDefault();
	});
});

//Phase 1 add window

phase1AddBtn.addEventListener('click', function showAddWindow(e) {
	phase1AddWindow.style.display = 'flex';
	this.style.display = 'none';
	e.preventDefault();
});

const addNewProduct = e => {
	const row = document.createElement('tr');

	phase1Inputs.forEach(el => {
		let cell = document.createElement('td');
		cell.textContent = el.value;
		row.appendChild(cell);
	});

	let cellResult = document.createElement('td');
	cellResult.innerText = `${(phase1Inputs[1].value / 100) * globalQuantity} gr`;

	// let cellTrash = document.createElement('i');
	// cellTrash.classList.add(`fa-regular fa-trash`);
	// cellTrash.classList.add(`fa-trash`);
	// cellResult.appendChild(cellTrash);

	row.appendChild(cellResult);
	phase1Tabe.appendChild(row);

	phase1Inputs.forEach(el => {
		el.value = '';
	});

	phase1ProductResult.innerText = '';
	phase1AddBtn.style.display = 'block';
	phase1AddWindow.style.display = 'none';
};

const calculateInGr = e => {
	phase1ProductResult.innerText = `${(phase1Inputs[1].value / 100) * globalQuantity}`;
};

phase1CloseBtn.addEventListener('click', function (e) {
	phase1AddWindow.style.display = 'none';
	phase1AddBtn.style.display = 'block';
	e.preventDefault();
});

phase1AddProductBtn.addEventListener('click', addNewProduct);
phase1CalculatedBtn.addEventListener('click', calculateInGr);
