export class Personne{
  id?:number;
  name:string;
  firstname:string;
  age:number;
  path:string;
  cin:number;
  job:string;
  constructor(name="",firstname="",age=0,path="",cin=1,job="") {
    this.name=name;
    this.firstname=firstname;
    this.age=age;
    this.path=path;
    this.cin=cin;
    this.job=job;
  }
}
