const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearBtn = document.querySelector('.clearBtn');
const checkBtn = document.querySelector('.checkBtn');
const uncheckBtn = document.querySelector('.uncheckBtn');

function addItem(e) {
	e.preventDefault();
	const text = (this.querySelector('[name=item]')).value;
	const item = {
		text,
		done: false
	};
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(plates = [], platesList) {
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join('');
}

function toggleDone(e) {
	if (!e.target.matches('input')) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function clearList(e) {
	localStorage.clear();
	items.splice(0);
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function checkList(e) {
	items.forEach(function(item, index, array) {
		(items[index].done = true)
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function uncheckList(e) {
	items.forEach(function(item, index, array) {
		(items[index].done = false)
	});
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearBtn.addEventListener('click', clearList);
checkBtn.addEventListener('click', checkList);
uncheckBtn.addEventListener('click', uncheckList);

populateList(items, itemsList);
