export class Medico{
    public email:string;
    public horario:string;

    constructor(email:string, horario:string){
        this.email = email;
        this.horario = horario;
    }

    getEmail(){
        return this.email;
    }
    getHorario(){
        return this.horario;
    }
}
