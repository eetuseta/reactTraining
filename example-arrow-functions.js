// var names = ['eetu', 'matti', 'liisa'];
// //
// // names.forEach(function(name){
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Eetu'));
//
// var person = {
//   name: 'Eetu',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a, b){
  return a+ b;
}

var addStatement = (a, b) => {
  return a +b;

}

var addExspression = (a, b) => a + b;
console.log(addStatement(4, 7));
console.log(addExspression(3, -2));
// console.log(add(1, 3));
// console.log(add(3, 3));
