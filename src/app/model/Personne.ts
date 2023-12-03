export class Personne{
  private static lastId = 0;
  id:number;
  name:string;
  firstname:string;
  age:number;
  path:string;
  cin:number;
  job:string;
  constructor(name="",firstname="",age=0,path="",cin=1,job="") {
    this.id=++Personne.lastId;
    this.name=name;
    this.firstname=firstname;
    this.age=age;
    this.path=path;
    this.cin=cin;
    this.job=job;
  }
}
