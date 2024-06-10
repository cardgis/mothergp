import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export const cartList = ({ product }) => {
  //const { title, price, category, description, image } = product;
  const [rating] = useState(5);
  return (
    <>
      <div className="flex flex-col p-4 border" key={product.id}>
        <p>
          <Image
            src={product.image}
            height={300}
            width={350}
            objectFit="contain"
            loading="lazy"
            alt="deco"
          />
        </p>
        <h4 className="font-bold">{product.title}</h4>
        <p className="my-2 text-xs line-clamp-2">{product.description}</p>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <div className="mb-5 ">
          <CurrencyFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </div>
      </div>
    </>
  );
};

export default cartList;
