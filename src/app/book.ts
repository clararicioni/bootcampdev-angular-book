//esse arquivo vai definir a estrutura de um objeto book.
export interface Book{
    id : number; //obrigatorio
    title : string; 
    author ?: string; //opcional
    price ?: number;
}