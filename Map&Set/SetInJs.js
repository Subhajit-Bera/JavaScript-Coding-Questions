let set=new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
//Add also retun true or fasle : if added successfully : true else false;


console.log(set);

//has also retun true or fasle : if present : true else false;
console.log(set.has(3));
console.log(set.has(5));

//Delete also retun true or fasle : if deleted successfully : true else false;
set.delete(4);
console.log(set);

//Size of set
console.log(set.size);
