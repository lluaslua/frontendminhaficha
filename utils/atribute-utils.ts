export  function modifierFormatter(modifier: number): string {
    if(modifier > 0){
        return "+" + modifier;
    } else{
        return modifier.toString();
    }
    
}