function pessoa() {
    this.idade = 0

    const self = this // self = pessoa
    setInterval(function () {
        self.idade++ 
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa