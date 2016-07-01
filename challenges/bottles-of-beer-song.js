/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

var bottles = 3;

while(bottles--){
  console.log(bottles + " bottles of beer on the wall," );
  console.log(bottles + " bottles of beer!");
  console.log("Take one down and pass it around,");
if(bottles){
  console.log(bottles - 1 + " bottles of beer on the wall.");
  //if(bottles - 1 === 1);
  //console.log(" a bottle of beer on the wall.");
}else
  console.log("No more bottles of beer on the wall!");
}
