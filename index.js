import{foodItem} from'./foodItem.js'

console.log(foodItem);

function displayItems(){
    var biryani=document.getElementByid('biryani');
    var cheicken=document.getElementByid('chicken');
    var paneer=document.getElementByid('paneer');
    var vegetable=document.getElementByid('vegetable');
    var chinese=document.getElementByid('chinese');
    var southIndian=document.getElementByid('south-indian');
    var pizza=document.getElementByid('pizza');

    const biryaniData=foodItem.filter(item=> item.
        catagory=='biryani');
    console.log(biryaniData);
    const chickenData=foodItem.filter(item=> item.
        catagory=='chicken');
    console.log(chickenData);
    const paneerData=foodItem.filter(item=> item.
        catagory=='paneer');
    console.log(paneerData);
    const vegetableData=foodItem.filter(item=> item.
        catagory=='vegetable');
    console.log(vegetableData);
    const chinesenData=foodItem.filter(item=> item.
        catagory=='chinese');
    console.log(chineseData);
    const southIndianData=foodItem.filter(item=> item.
        catagory=='south-indian');
    console.log(southIndianData);

    biryaniData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        biryani.appendChild(itemCard);

    })

    chickenData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        chicken.appendChild(itemCard);

    })

    paneerData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard);

    })

    biryaniData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard);

    })

    vegetableData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        vegetable.appendChild(itemCard);

    })

    chineseData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        chinese.appendChild(itemCard);

    })

    southIndianData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        southIndian.appendChild(itemCard);

    })
       
    pizzaData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText=' '+ item.rating;

        var cardTop=document.createElement('i');
        cardTop.setAttribute('class', 'far fa-heart add-to-cart');
        heart.setAttribute('id', 'item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=docuemnt.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;

        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :$ ' + itemPrice.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        pizza.appendChild(itemCard);

    })
}
displayItems();

const catagoryListData=[...new Map(foodItem.map(item=>[item
    ['catagory'],item])).values()];
    console.log(catagoryListData);

    function catagoryLists(){
        var catagoryList=docuement.getElemetById('catagory-list');

        catagoryListData.map(item=>{
            var listCard=document.createElement('div');
            listCard.setAttribute('class','list-card');

            var listImg=document.createElement('img');
            listImg.src=item.img;

            var listName= docuement.createElement('a');
            listName.setAttribute('class','list-name');
            listName.innerText= item.catagory;
            listName.setAttribute('href','#'+item.catagory);

            listCard.appendChild(listImg);
            listCard.appendChild(listName);
            
            var cloneListCard=listCard.cloneNode(true);
            catagoryList.appendChild(listCard);
        })
    }

    catagoryLists();

    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart);
    })

    var cartData=[];

    function addToCart(){
        console.log(this.parentNode.nextSibling.nextSibling);
        var itemToAdd= this.parentNode.nextSibling.
        nextSibling.innerText;
        var itemObj=foodItem.find(element=>element.name==itemToAdd);

        console.log(itemObj);

        var index= cartData.indexOf(itemObj.id.classList.add
            ('toggle-heart'));
            cartData=[...cartData,itemObj];
            console.log(cartData);
        }
     if(index > -1){
        alert("Added to Cart");
    }
    document.getElementById('m-cart-plus').innerText= ' '+cartData.
    length + 'Items';
    // document.getElementById('m-cart-plus').innerText= ' '+cartData.
    // length;
    totalAmount();
    cartItems();

    function cartItems(){
        var tableBody=document.getElementById('table-body');
        tableBody.innerHTML= ' '

        cartData.map(item=>{
            var tableRow= document.createElement('tr');

            var rowData1= Document.createElement('td');
            var img= document.createElement('img');
            img.scr= item.img;
            rowData1.appendChild(img);

            var rowData2= document.createElement('id');
            rowData2.innerText= item.name;

            var rowData3= document.createElement('td');
            var btn1= document.createElement('button');
            btn1.setAttribute('class', 'decrease-item');
            btn1.innerHTML= '-';
            var span= document.createElement('span');
            span.innerText= item.quantity;

            var btn2= document.createElement('button');
            btn2.setAttribute('class', 'increase-item');
            btn1.innerHTML= '+';

            rowData3.appendChild(btn1);
            rowData3.appendChild(span);
            rowData3.appendChild(btn2);

            var rowData4= document.createElement('td');
            rowData4.innerText= item.price;

            tableRow.appendChild(rowData1);
            tableRow.appendChild(rowData2);
            tableRow.appendChild(rowData3);
            tableRow.appendChild(rowData4);

            tableBody.appendChild(tableRow);


        })
        document.querySelectorAll('.increase-item').forEach(item=>{
            item.addEventListener('click', incrementItem);
        })
        document.querySelectorAll('.increase-item').forEach(item=>{
            item.addEventListener('click', decrementItem);
        })

 }
var currPrice= 0;

 function incrementItem(){
    let itemToInc=this.parentNode.previousibling.innerText;
    console.log(itemToInc);
    
    var incObj= cartData.find(element=>element.name=itemToInc);
    incObj.quantity+=1;

    currPrice= (incObj.price*incObj.quantity - incObj.price*
        (incObj.quantity-1))/(incObj.quantity-1);
        incObj.price= currPrice*incObj.quantity;
        totalAmount();
        cartItems();
 }
 var flag= false;
 function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decObj= cardData.find(element=> element.name==itemToDec);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice= (decObj.price*decObj.quantity-decObj*price*
            (decObj.quantity-1))/(decObj.quantity);

    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML=' '+
        cartData.length + 'items';
        document.getElementById('m-cart-plus').innerHTML=' '+
        cartData.length;
        if(cartData.length<1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('catagory-list').classList.toggle('food-items');
            // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            // document.getElementById('catagory-header').classList.toggle('toggle-catagory');
            document.getElementById('food-checkout').classList.toggle('cart-toggle');
            flag=false;
            alert("Currently no item added in cart");
        }
    }
    totalAmount();
    cartItems();
 }
 function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum= item.price;

    })
    document.getElementById('total-item').innerText=
    'Total item : '+cartData.length;
    document.getElementById('total-price').innerText=
    'Total Price : $ '+sum;
    document.getElementById('total-item').innerText=
    'Total item :  '+cartData.length;
 }
document.getElementById('cart-plus').addEventListener('click',cartToggle);
documen.getElementById('m-cat-plus').addEventListener('click',cartToggle);

function cartToggle(){
    if(cartData.length>0){
        document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('catagory-list').classList.toggle('food-items');
            // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            // document.getElementById('catagory-header').classList.toggle('toggle-catagory');
            document.getElementById('food-checkout').classList.toggle('cart-toggle');
                flag= true;
    }else{
        alert("Currently no item added in cart");
    }
}
    