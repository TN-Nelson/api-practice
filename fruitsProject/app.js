//jshint esversion:6
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Green are the best"
// });
const fruit = new Fruit({
  rating: 10,
  review: "Peaches are really good."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit."
// });

// pineapple.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 10,
  review: "Can't get enough of them.",
});

strawberry.save();

// const person = new Person({
//   name: "Jason",
//   age: 26
// });

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "Pretty good",
// });
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Better as just juice",
// });
// const banana = new Fruit({
//   name: "Banana",
//   rating: 10,
//   review: "The best ever",
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB.");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({ _id: "5ec3f32ac4f2321ed4d8fdd7" }, { name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// Person.updateOne(
//   {name: "Jason" },
//   { favoriteFruit: strawberry },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated the document.");
//     }
//   }
// );

// Fruit.deleteOne({ name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted document.");
//   }
// });

// Person.deleteMany({ name: "Jason" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted Jason.")
//   }
// });