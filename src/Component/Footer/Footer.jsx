import React from "react";

export const Footer = () => {
  return (
    <div className="footer bg-slate-300 p-5">
      <div className="footer-heading">
        <h1 className="text-center text-4xl ">Ecom</h1>
      </div>
      <div className="footer_panel grid grid-cols-3 p-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem accusantium tempore quis! Fuga nam quos necessitatibus iste
          dolores? Autem. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quia, inventore nesciunt. Molestias, suscipit odit maxime dolor
          quam voluptatibus illum laboriosam Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Minus, provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem accusantium tempore quis! Fuga nam quos necessitatibus iste
          dolores? Autem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reprehenderit, facilis similique! Ad totam voluptate deserunt!
          Vero voluptate corrupti optio provident, eveniet nemo iure sequi unde
          modi adipisci aliquid similique quidem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem accusantium tempore quis! Fuga nam quos necessitatibus iste
          dolores? Autem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto odio repellat optio alias ea recusandae, voluptatibus
          quae incidunt suscipit aspernatur repudiandae voluptate ratione
          aliquam doloribus, est aliquid illum aut nemo.
        </p>
      </div>
      <div className="copyright text-center border-t-2 p-5">
        Copyright @{new Date().getFullYear()}
      </div>
    </div>
  );
};
