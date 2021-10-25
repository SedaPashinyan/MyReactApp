import React from "react";

function UserList(){
    const people = [
        {
          id: 111111,
          firstName: "Seda",
          lastName: "Pashinyan",
          phoneNumber: 123456,
        },
    
        {
          id: 222222,
          firstName: "Arman",
          lastName: "Nazaryan",
          phoneNumber: 234561,
        },
        {
          id: 333333,
          firstName: "Karen",
          lastName: "Sahakyan",
          phoneNumber: 345612,
        },
      ];
    
      const userToText = (data) => {
        return (
          <div key={data.id}>
            <p>
              {"id: " +
                "   " +
                data.id +
                "         " +
                "firstName: " +
                "  " +
                data.firstName +
                "        " +
                "lastName: " +
                "  " +
                data.lastName +
                "        " +
                "phone: " +
                "  " +
                data.phoneNumber}
            </p>
            <br />
          </div>
        );
      };

    return(
        <div>
            {people.map(userToText)}
        </div>
    );
}

export default UserList;