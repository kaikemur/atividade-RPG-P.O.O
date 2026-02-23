class Personagem {
    nome;
    poderDeAtaque;
    #vida;

    constructor(nome, poderDeAtaque, vida) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#vida = vida;
    }

    receberDano(valor) {
        this.#vida -= valor;
        if (this.#vida < 0) {
            this.#vida = 0;
        }
        return ` ${this.nome} recebeu ${valor} de dano. vida restante e : ${this.#vida}`;
    }

    exibirStatus() {
        if (this.#vida <= 0) {
            return `${this.nome} - Derrotado! vida: ${this.#vida};`;
        }
        return `${this.nome} - vivo! vida: ${this.#vida}`;
    }
}

class Guerreiro extends Personagem{
    constructor(nome, poderDeAtaque, vida, forca) {
        super(nome, poderDeAtaque, vida);
        this.forca = forca;
    }

    atacar(alvo) {
        let dano = this.poderDeAtaque + this.forca;
        alvo.receberDano(dano);
        return `${this.nome} deu golpe de espada de ${dano} em ${alvo.nome}! `
    }
}
class Mago extends Personagem {
    constructor(nome, poderDeAtaque, vida, magia) {
        super(nome, poderDeAtaque, vida);
        this.magia = magia;
    }

    atacar(alvo) {
        let dano = this.poderDeAtaque + this.magia;
        alvo.receberDano(dano);
        return `${this.nome} uma magia de ${dano} em ${alvo.nome}! `;
    }
}

const guerreiro = new Guerreiro('alcides', 25, 100, 10);
const mago = new Mago('samina', 5, 90, 24);

//pre round
console.log('inicio');
console.log(guerreiro.exibirStatus());
console.log(mago.exibirStatus());
console.log('');
//parte 1
console.log("1 round");
console.log(guerreiro.atacar(mago));
console.log(mago.atacar(guerreiro));
console.log("");

//parte 2
console.log('2 round');
console.log(guerreiro.atacar(mago));
console.log(mago.atacar(guerreiro));
console.log('');
//parte 3
console.log('3 round');
console.log(guerreiro.atacar(mago));
console.log(mago.atacar(guerreiro));
console.log('');
//parte 4
console.log('last round');
console.log(guerreiro.exibirStatus());
console.log(mago.exibirStatus());
