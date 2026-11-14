import moment from "moment";

/* ---------------- HELPERS ---------------- */
function getProductById(id,products) {
  return products.find((p) => p.id === id);
}
 
// function getProductsByCategory(category) {
//   return products.filter((p) => p.category === category);
// }
 
/* Card click par detail page kholna */
function openProduct(id) {
  window.location.href = "product-detail.html?id=" + encodeURIComponent(id);
}
 
/* Detail page par URL se product nikalna */
function getCurrentProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  return getProductById(id);
}

 const generateProductOptions = (categories = []) => {
  return categories
    .filter((item) => item.isActive)
    .map((item) => ({
      value: item._id,
      label: item.slug,
    }));
};

const dateFormate =(date)=>{
 return moment(date).format('DD-MM-YYYY');

}

export{generateProductOptions,dateFormate}