import React from "react";
import FreeShiping from "./FreeShiping";
import CollectionTop from "./CollectionTop";
import CollectionItem from "./CollectionItem";

const Collection = () => {
  return (
    <>
      <FreeShiping></FreeShiping>
      <section className="collection">
        <CollectionTop
          url="#"
          title="Collection"
          urlSeeMore="#"
          textSeeMore="See more"
        ></CollectionTop>
        <div className="collection-items">
          <CollectionItem
            url="https://picsum.photos/id/1019/600/750"
            alt="Photo 01"
            title="Title 01"
            urlCategory="#test"
            titleCategory="explore"
          ></CollectionItem>
          <CollectionItem
            url="https://picsum.photos/id/1032/600/750"
            alt="Photo 02"
            title="Title 02"
            urlCategory="#test"
            titleCategory="explore"
          ></CollectionItem>
          <CollectionItem
            url="https://picsum.photos/id/1035/600/750"
            alt="Photo 03"
            title="Title 03"
            urlCategory="#test"
            titleCategory="explore"
          ></CollectionItem>
          <CollectionItem
            url="https://picsum.photos/id/1037/600/750"
            alt="Photo 04"
            title="Title 04"
            urlCategory="#test"
            titleCategory="explore"
          ></CollectionItem>
          <CollectionItem
            url="https://picsum.photos/id/1039/600/750"
            alt="Photo 05"
            title="Title 05"
            urlCategory="#test"
            titleCategory="explore"
          ></CollectionItem>
        </div>
      </section>
    </>
  );
};

export default Collection;
