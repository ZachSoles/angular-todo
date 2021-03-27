export class Todo {
    public id: number;
    public name: string;
    public completed: boolean;

    public constructor(id: number, name: string, completed: boolean){
        this.id = id;
        this.name = name;
        this.completed = completed;
    }

}
