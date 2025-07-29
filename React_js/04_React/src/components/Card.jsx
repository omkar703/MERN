import React from "react";

const Card = (props) => {
  console.log(props);
  //   return (
  //     <div className="bg-blue-500 p-5 rounded-lg">
  //       <h1 className="text-white">City {props.city}</h1>
  //       <p className="text-white">Age {props.age}</p>
  //       <h1 className="text-white">UserName is {props.username}</h1>
  //       <input type="text" className="text-white bg-gray-500 rounded-lg" />
  //       <button className="bg-green-500 text-white rounded-lg">Submit</button>
  //     </div>
  //   );

  return (
    <div>
      <div className="p-10">
        {props.users.map((elum) => {
          return <h1>{elum.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default Card;
