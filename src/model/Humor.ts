export class Humor{
    
    public id:number;
    public icone:String;
    public descricao:String;

    constructor(id:number, icone:String, descricao:String){
        this.icone = icone;
        this.descricao = descricao;
    }

    getId(){
        return this.id;
    }
}