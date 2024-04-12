import React from "react";
import Image from "next/image";
import { useAllProduct } from "@/hooks/query-hook";

const ProductList = () => {
  const { data: productData } = useAllProduct();
  //   console.log("🚀 ~ ProductList ~ productData:", productData);
  const data = productData;
  console.log(data?.data?.products);
  return (
    <div>
      <>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {productData?.data?.products.map((item) => {
              return (
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full">
                      <img
                        alt="Placeholder"
                        className=" object-contain block  w-full"
                        src={item?.thumbnail}
                      />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-md">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          {item?.title}
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">{item.price}$</p>
                    </header>

                    {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        <p className="ml-2 text-sm">Brand : {item?.brand}</p>
                      </a>
                    </footer> */}
                    <p className="p-2 md:p-4 text-md">Brand : {item?.brand}</p>
                    <p className="p-2 md:p-4 text-md"> {item?.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </div> */}
      </>
    </div>
  );
};

export default ProductList;
