

        class pessoa extend cliente { 
        cpf : string;
        nome: string;
        telefone: string;
        Vip : boolean; 
        cep : string;
        logradouro : string;
        numero : string;
        complemento : string;
        cidade : string;
        uf: string;  
        constructor(public cpf, public nome, public telefone, public vip, public cep, public logradouro, public numero, public complemento, public cidade, public uf) { 
        this.cpf = nome;
        this.nome = nome;
        this.telefone = telefone;
        this.vip = nome;
        this.cep = numero;
        this.logradouro = nome;
        this.numero =  numero;
        this.complemento = numero;
        this.cidade =  nome;
        this.uf= nome;
        } 
        } 

        let cliente = new PessoaFisica("Edson", "Dionisio");
    