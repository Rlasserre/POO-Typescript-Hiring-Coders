class User {
	name: String;
	age: Number;

	constructor(name: String, age: Number) {
		this.name = name;
		this.age = age;
	}
}


/* function User(name: string, age: number) {
	this.name = name;
	this.age = age;
} */

/* const pessoa = new User('rafael', 21);
console.log(pessoa); */

class Player extends User {
	game: String;

	constructor(name: String, age: Number, game: String) {
		super(name, age);

		this.game = game;
	}
}

const jogador = new Player('rafael', 38, 'Diablo');
