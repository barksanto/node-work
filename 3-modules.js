// CommonJS, every file is a module by default
// Modules- Encapsulated Code (Only share minimum)



const john = 'john';
const peter = 'peter';

const sayHi = (name) =>{
  console.log(`Hello there, ${name}`)
}

sayHi('barkley');
sayHi(peter);
sayHi(john);