class pessoa extend funcionario{
    funcionario: => Array<DadosFuncionario>;
    cpf : string;
    nome : string;
    telefone : string;
    cargo : string;
    salário : double;
    constructor(public cpf, public nome, public telefone, public cargo, public salario)
    this.cpf =  nome;
    this.nome = nome;
    this.telefone = number;
    this.cargo = nome;
    this.salario = number;
}
    addFuncionario(f:Funcionario) : void {
        this.funcionario.push(f);
    }
} 
