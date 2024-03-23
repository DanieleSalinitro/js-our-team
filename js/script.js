[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa-solid',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa-solid',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa-solid',
		color: 'blue'
	}
];

/* 

todo oggetto di esempio
{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
		id: 11
 }

?template
`
<div class="col-12 col-md-2 col-lg-4">
	<div class="card">
		<img src="images/angela-caroll-chief-editor.jpg" class="card-img-top" alt="Angela Carrol">
		<div class="card-body text-center">
		<h5 class="card-title">Angela Carrol</h5>
		<p class="card-text">Chief Editor</p>
		<a href="#" class="btn btn-outline-danger">X Elimina</a>
		</div>
	</div>
</div>
`;
*/

const team = [
	{
	  name: 'Wayne Barnett',
	  role: 'Founder & CEO',
	  image: 'wayne-barnett-founder-ceo.jpg'
	},
	{
	  name: 'Angela Caroll',
	  role: 'Chief Editor',
	  image: 'angela-caroll-chief-editor.jpg'
	},
	{
	  name: 'Walter Gordon',	  
	  role: 'Office Manager',
	  image: 'walter-gordon-office-manager.jpg'
	},
	{
	  name: 'Angela Lopez',	
	  role: 'Social Media Manager',
	  image: 'angela-lopez-social-media-manager.jpg'
	},
	{
	  name: 'Scott Estrada',	 
	  role: 'Developer',
	  image: 'scott-estrada-developer.jpg'
	},
	{
	  name: 'Barbara Ramos',	
	  role: 'Graphic Designer',
	  image: 'barbara-ramos-graphic-designer.jpg'
	}
  ];
  
function printCard(member,index){
	const col = document.createElement('div');
	col.className='col-12 col-md-6 col-lg-4';
	//console.log(col);
	let tpl = `
		<div class="card">
			<img src="images/${member.image} " class="card-img-top" alt="${member.name} ">
			<div class="card-body text-center">
			<h5 class="card-title">${member.name}</h5>
			<p class="card-text">${member.role}</p>
			<a href="#" class="btn btn-outline-danger">X Elimina</a>
			</div>
		</div>
	`;
	col.innerHTML = tpl;
	const btnRemove  = col.querySelector('a');
	btnRemove.addEventListener('click', (e)=>{
		e.preventDefault();
		team.splice(index,1);
		printTeam();
	})
	return col;
}


function printTeam(){
	const rowEl = document.querySelector('.row');
	//console.log(rowEl);
	rowEl.innerHTML = '';
	for(let i = 0; i < team.length; i++){
		let member = team[i];
		let col = printCard(member, i);
		rowEl.appendChild(col);
	}
}
printTeam();

//prendiamo il bottone del form
const btnSubmit = document.querySelector('.btn.btn-primary');

btnSubmit.addEventListener('click',(e)=>{
	e.preventDefault();
	const name = document.getElementById('name').value;
	const role = document.getElementById('role').value;
	const image = document.getElementById('photo').value;
	let newMember = {
		name: name,
		role: role,
		image: image
	}
	//console.log(newMember);
    team.push(newMember);
	printTeam();
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}