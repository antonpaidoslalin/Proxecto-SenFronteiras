import {Persona} from './persona.js';
export class Programador extends Persona{
    linguaxePrincipal = 'Sen linguaxe principal';   
    constructor(){
        super(nombre,apellidos,edad);
        this.linguaxePrincipal=linguaxePrincipal;
    }
 
    imprimirProgramador(prog){
        console.log('Linguaxe Principal: ', prog.linguaxePrincipal);
    }
    mjml01=new Programador ("María José", "Mendoza Lamela", 46, "Javascript");
}

//Revisar tema módulos