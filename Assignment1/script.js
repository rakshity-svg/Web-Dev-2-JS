
const eventForm = document.getElementById('eventForm');
const cardsContainer = document.getElementById('cardsContainer');
const demoOutput = document.getElementById('demoOutput');
const textDemo = document.getElementById('textDemo');

function el(tag, opts = {}){
	const e = document.createElement(tag);
	if(opts.class) e.className = opts.class;
	if(opts.text) e.textContent = opts.text;
	if(opts.html) e.innerHTML = opts.html;
	if(opts.attrs) for(const k in opts.attrs) e.setAttribute(k, opts.attrs[k]);
	return e;
}


function createCard(data){
	const card = el('article',{class:'card', attrs:{'data-category':data.category}});
	const badge = el('div',{class:'badge', text:data.category});
	const title = el('h4',{text:data.title});
	const meta = el('p',{class:'meta', text:`${data.date || ''} ${data.time || ''} — ${data.location || ''}`});
	const desc = el('p',{class:'desc', text:data.description || ''});

	const actions = el('div',{class:'card-actions'});
	const viewBtn = el('button',{text:'View'});
	const rsvpBtn = el('button',{text:'RSVP'});
	const delBtn = el('button',{text:'Delete'});

	viewBtn.type = 'button'; rsvpBtn.type='button'; delBtn.type='button';
	actions.append(viewBtn, rsvpBtn, delBtn);

	if(data.image){
		const img = el('img',{attrs:{src:data.image, alt:data.title}});
		img.style.width='100%'; img.style.borderRadius='6px'; img.style.marginBottom='8px';
		card.appendChild(img);
	}

	card.append(badge, title, meta, desc, actions);

	return card;
}

function addEventCard(data){
	const card = createCard(data);
	cardsContainer.prepend(card);
	demoOutput.textContent = `Created event: ${data.title}`;
}

eventForm.addEventListener('submit', function(e){
	e.preventDefault();
	const form = e.target;
	const data = {
		title: form.title.value.trim(),
		date: form.date.value,
		time: form.time.value,
		location: form.location.value.trim(),
		category: form.category.value,
		description: form.description.value.trim(),
		image: form.image.value.trim()
	};
	if(!data.title){
		demoOutput.textContent = 'Title is required';
		return;
	}
	addEventCard(data);
	form.reset();
});


cardsContainer.addEventListener('click', function(e){
	
	const card = e.target.closest('.card');
	if(!card) return; 

	demoOutput.textContent = `Clicked element: ${e.target.tagName} inside card with category ${card.dataset.category}`;

	
	if(e.target.tagName === 'BUTTON'){
		const action = e.target.textContent.trim();
		const title = card.querySelector('h4')?.textContent || 'Untitled';
		if(action === 'View'){
			alert(`Viewing: ${title}\n\n${card.querySelector('.desc')?.textContent || ''}`);
		} else if(action === 'RSVP'){
			e.target.textContent = '✓ Going';
			e.target.disabled = true;
			demoOutput.textContent = `RSVP'd to: ${title}`;
		} else if(action === 'Delete'){
			card.remove();
			demoOutput.textContent = `Deleted: ${title}`;
		}
	}
});


document.getElementById('showInnerHTML').addEventListener('click', ()=>{
	demoOutput.textContent = `innerHTML: ${textDemo.innerHTML}`;
});
document.getElementById('showTextContent').addEventListener('click', ()=>{
	demoOutput.textContent = `textContent: ${textDemo.textContent}`;
});
document.getElementById('showInnerText').addEventListener('click', ()=>{
	demoOutput.textContent = `innerText: ${textDemo.innerText}`;
});


addEventCard({title:'JS Meetup',date:'2026-02-28',time:'18:00',location:'Library',category:'Meetup',description:'A casual meetup to practice DOM.'});
addEventCard({title:'Music Night',date:'2026-03-05',time:'20:00',location:'Cafe',category:'Concert',description:'An evening of live acoustic music.'});

