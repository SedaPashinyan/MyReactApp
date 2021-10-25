import React from "react";

function CategoriesList() {
  const categories = [
    {
      qr: "9999",
      category: "Meat",
    },

    {
      qr: "8888",
      category: "Bread",
    },
    {
      qr: "7777",
      category: "Sweets",
    },
    {
      qr: "6666",
      category: "Juice",
    },
    {
      qr: "5555",
      category: "Fruits",
    },
  ];

  const categoryToText = (data) => {
    return (
      <div key={data.qr}>
        <p>
          {"qr: " +
            " " +
            data.qr +
            "         " +
            "  category: " +
            " " +
            data.category}
        </p>
        <br />
      </div>
    );
  };

  return <div>{categories.map(categoryToText)}</div>;
}

export default CategoriesList;