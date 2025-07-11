import React from "react";

const Title = ({ children, idHref }) => {
  return (
    <section id={idHref} class="flex justify-center my-5 py-20  font-mono">
      <div class="flex  items-center">
        <h2 class=" w-fit text-darkText font-semibold p-2 px-5 text-xl rounded-md">
          {children}
        </h2>
      </div>
    </section>
  );
};

export default Title;
