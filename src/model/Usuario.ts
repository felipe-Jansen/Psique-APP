export class Usuario{
    public senha:string;
    public usuario: string; 
    
    constructor(usuario: string, senha:string){
        this.usuario = usuario;
        this.senha = senha;  
    }

    getUsuario(){
        return this.usuario;
    }

    getSenha(){
        return this.senha;
    }
}