use("SigmaDatabase");

console.log(db);

// create read update
db.getCollection("cources").insertOne({
  _id: "abc",
  name: "javascript1",
  description: "javascript1",
  author: "omkar",
  language: "javascript",
});

db.cources.insertMany([
  {
    _id: "jkl",
    name: "javascript2",
    description: "javascript2",
    author: "omkar",
    language: "javascript",
  },
  {
    _id: "xyz",
    name: "javascript3",
    description: "javascript3",
    author: "omkar",
    language: "javascript",
  },
  {
    _id: "pqr",
    name: "javascript4",
    description: "javascript4",
    author: "omkar",
    language: "javascript",
  },
  {
    _id: "mno",
    name: "javascript5",
    description: "javascript5",
    author: "omkar",
    language: "javascript",
  },
]);

let a = db.cources.find({ author: "omkar" });
let b = db.cources.findOne({ author: "omkar" });
console.log(a.count());
console.log(a.toArray());
console.log(b);

//
//
//
// UPDATE

db.cources.updateOne(
  { author: "omkar" },
  {
    $set: {
      author: "omkar",
      name: "omkar",
      description: "omkar",
      language: "omkar",
    },
  }
);

//
//
//
// DELETE
//

console.log(db.cources.deleteOne({ author: "omkar" }));

console.log("done");
