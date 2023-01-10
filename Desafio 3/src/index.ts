import cliente
import funcionario

    interface IUsuario { 
        Valido(s: Boolean) {
            return true; 
        } 
    }  
    
    export { ValidacaoUsuario };
    
        class cliente implements Icliente { 
        Vip : boolean; 
        cep : string;
        logradouro : string;
        numero : string;
        complemento : string;
        cidade : string;
        uf: string;  
        constructor(public vip, public cep, public logradouro, public numero, public complemento, p
        this.vip = nome;
        this.cep = numero;
        this.logradouro = nome;
        this.numero =  numero;
        this.complemento = numero;
        this.cidade =  nome;
        this.uf= nome;
        } 
        } 
        
        class funcionario { 
            salario : number;
            constructor (public salario)
            this.salario =  numero;

        } 
        } 
        let cliente = new PessoaFisica("Edson", "Dionisio"); 
        let funcionario = new funcionario(); (salario);
        
    