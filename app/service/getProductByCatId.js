const getProductByCatId = async (a, b) => {
  const re = await fetch(
    `https://v3.nagadhat.com/api/get-product-by-category-id/${a}/${b}`
  );
  return re.json();
};

export default getProductByCatId;
