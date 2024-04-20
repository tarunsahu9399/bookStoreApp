import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 mb-4 p-3">
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.imageLink} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title border-b-2">
              {item.name}
              {item.arrival === "new" && (
                <div className="badge badge-secondary">New</div>
              )}

              {/* <div className="badge badge-secondary">New</div> */}
            </h2>

            <p>{item.title}</p>
            <p className="text-semibold">Category: {item.category}</p>
            <div className="card-actions justify-between">
              <div className=" px-2 py-1 rounded-full border-[2px] border-black dark:border-white">{`$${item.price}`}</div>
              <div className=" hover:bg-teal-500 hover:border-teal-500 hover:text-white duration-200 cursor-pointer px-2 py-1 rounded-full border-[2px] border-black dark:border-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
