import productData from "./productData";

const getProductData = () => {
  return Promise.resolve(productData);
};

export default getProductData;
