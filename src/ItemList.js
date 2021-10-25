import React from "react";

function ItemList() {
    const items = [
        {
            code: "1111",
            name: "apple"
        },

        {
            code: "2222",
            name: "milk"
        },
        {
            code: "3333",
            name: "bread"
        },
        {
            code: "4444",
            name: "candy"
        }
    ];

    const itemToText = (data) => {
        return (
            <div key={data.code}>
                <p>
                    {"code: " +
                        " " +
                        data.code +
                        "         " +
                        "  name: " +
                        " " +
                        data.name}
                </p>
                <br />
            </div>
        );
    };

    return <div>{
        items.map(itemToText)}
            </div>;
}

export default ItemList;