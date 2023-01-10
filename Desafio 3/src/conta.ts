
    public credito: Credito [] = []
    public debito: Debito[] = []

    
    Constructor{
        private numero: string
    } {}

    public depositar(valor: number): void {

        const credito - new credito(valor, new Data(), this.numero)
        this.credito.push(credito)
    }

    public sacar(valor: Number): void {
        if(this.calcularSaldo() = valor){
            const debito = new debito(valor, new Data(), this.numero)
            this.debito.push(debito)
        } else {
            console.log(‘Não foi possivel efetuar a operação, seu saldo não é suficiente”)
            }
        }
    
    abstract calcularSaldo()= number