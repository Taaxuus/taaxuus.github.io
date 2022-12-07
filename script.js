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

//The amout of ptoduct
let globalQuantity = '';

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

productPhaseBtns.forEach(el => {
	el.addEventListener('click', function (e) {
		this.classList.toggle('product__btn__phase--clicked');
		e.preventDefault();

		if (this.classList.contains('product__btn__phase--clicked') && this.textContent.includes('Faza Olejowa')) {
			oilPhase.style.display = 'block';
		} else {
			oilPhase.style.display = 'none';
		}
	});
});

//Oil phase
