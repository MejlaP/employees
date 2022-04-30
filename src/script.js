const employees = [
  {
    id: 1,
    name: 'zuzana svobodová',
    job: 'ceo',
    img:
      'src/person1.jpg',
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Praesent dapibus. Aliquam in lorem sit amet leo accumsan lacinia."
  },
  {
    id: 2,
    name: 'jan novotný',
    job: 'web developer',
    img:
      'src/person2.jpg',
    text:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
  },
  {
    id: 3,
    name: 'petra dvořáková',
    job: 'manager',
    img:
      'src/person3.jpg',
    text:
      'Donec quis nibh at felis congue commodo. Integer pellentesque quam vel velit. In convallis. Sed ac dolor sit amet purus malesuada congue. Maecenas libero quam nihil molestiae consequatur.'
  },
  {
    id: 4,
    name: 'aleš černý',
    job: 'web designer',
    img:
      'src/person4.jpg',
    text:
      'Aliquam ornare wisi eu metus. Aenean fermentum risus id tortor. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. In dapibus augue non sapien. Nullam dapibus fermentum ipsum.'
  }
];

//odchyceni elementu
const image = document.getElementById('person-image');
const employee = document.getElementById('employee-name');
const job = document.getElementById('job');
const information = document.getElementById('information');

const previousButton = document.querySelector(
  '.previous-btn'
);
const nextButton = document.querySelector('.next-btn');

const randomButton = document.querySelector('.random-btn');

// nastaveni startovaciho itemu
let currentPerson = 0;

// nahrani defaultniho itemu
window.addEventListener('DOMContentLoaded', () => {
  showEmployee(currentPerson)
});

// zobraz osoby podle itemu
function showEmployee() {
  const person = employees[currentPerson];
  image.src = person.img;
  employee.textContent = person.name;
  job.textContent = person.job;
  information.textContent = person.text;
}

// zobrazeni predchoziho zamestnance
previousButton.addEventListener('click', () => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = employees.length - 1;
  }
  showEmployee()
})

// zobrazeni dalsiho zamestnance
nextButton.addEventListener('click', () => {
  currentPerson++;
  if (currentPerson > employees.length - 1) {
    currentPerson = 0;
  }
  showEmployee()
})

// zobrazeni nahodneho zamestnance
randomButton.addEventListener('click', () => {
  currentPerson = Math.floor(Math.random() * employees.length)
  showEmployee()
})



