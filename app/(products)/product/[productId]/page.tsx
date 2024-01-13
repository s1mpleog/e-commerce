import React from "react";
import SingleProduct from "../../_components/SingleProduct";
import RelatedProduct from "../../_components/RelatedProduct";
import ProductBanner from "../../_components/ProductBanner";

export default function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  return (
    <div>
      <SingleProduct id={productId} />
      <ProductBanner />
      <div>
        <h3 className="text-3xl font-bold lg:mx-0 mx-5">You may also like</h3>
      </div>
      <RelatedProduct id={productId} />
    </div>
  );
}
