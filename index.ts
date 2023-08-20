console.clear();
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinct

const obj1 = { id: 3, name: 'name 1' };
const obj2 = { id: 4, name: 'name 2' };
const obj3 = { id: 3, name: 'name 3' };
const arrOfObject = [obj1, obj2, obj3];

// filtering on id
from(arrOfObject)
  .pipe(distinct((e) => e.id))
  .subscribe(console.log);

/*
OUTPUT:
{id: 3, name: "name 1"}
{id: 4, name: "name 2"}
 */
