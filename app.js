function itemSelect(increasing,price,product){
    let itemText=document.getElementById( product+'-input')
   let itemQuantity=itemText.value;
// only giving increasing inside if condition it take as true we can also write as if(increasing==true)
    if(increasing){
   itemQuantity=parseInt(itemQuantity)+1}
    else if(itemQuantity>0){
    itemQuantity=parseInt(itemQuantity)-1
   }
   itemText.value=itemQuantity
   const itemPrice= document.getElementById(product+'-price')
   
  itemPrice.innerText=price*itemQuantity
  ultimateAmount()
}
// calculating total price
function totalPrice(product,price)
{
    const productText=document.getElementById(product+'-input')
    const productNumber=productText.value
    const totalProductAmount=productNumber*price
    return totalProductAmount;
}

console.log(totalPrice('phone',1219))
function ultimateAmount(){
    
   const subTotal=document.getElementById('sub-total')
   subTotal.innerText=totalPrice("phone",1219)+totalPrice('cover',59)
   const Tax=document.getElementById('tax')
   Tax.innerText=parseFloat(subTotal.innerText)/10;
   const totalAmount=document.getElementById('total-amount')
   totalAmount.innerText=parseFloat(Tax.innerText)+parseFloat(subTotal.innerText)}

// cover selecting
document.getElementById('cover-plus').addEventListener('click',function(){

  itemSelect(true,59,'cover')
})
document.getElementById('cover-minus').addEventListener('click',function(){
    itemSelect(false,59,'cover')
})
document.ger
// phone selecting
document.getElementById('phone-plus').addEventListener('click',function(){
    itemSelect(true,1219,'phone')
})
document.getElementById('phone-minus').addEventListener('click',function(){
    itemSelect(false,1219,'phone')
})