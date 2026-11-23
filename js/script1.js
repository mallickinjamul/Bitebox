document.getElementById("heading").textContent="welcome";

let heading=document.getElementById("title");
console.log(heading);

let result=document.querySelector(".message");
console.log(result);

let result=document.querySelectorall(".message");
console.log(result);

document.getElementById("box").innerHTML="<b>welcome student<b>";

let name=document.getElementById(username).ariaValueMax;
console.log(name);
document.getElementById("username").value="css";

function showMessage()
{
    alart("welcome to html");
}
document.getElementById("mybutton").addEventListener("click",function()
{
    alert("button clicked");
});

let name1=["rahul","priya","amit"]
name1.forEach(function(i)
{
    console.log(i)
});


let str="welcome to js";
console.log(str.length);
console.log(str.replace("JS","CSS"));
console.log(str.toLowerCase());
console.log(str.toUpperCase);
console.log(str.charAt(6));

console.log(result2+2);
let price="246,05";
//let res=parseFloat(price);
console.log(price+10);


let fooditem=["pizza","burger","pasta"];
fooditem.push("fries")
fooditem.splies(0,1);//splies add ->(index,0,item_name)  //splies remove >(index,1)
console.log(fooditem[3]);


let cart=
[
    {
        name:"pizza",
        price:249,
        quantity:1
    }
    {
        name:"burger",
        price:149,
        quantity:1
    }
];
let r=cart.find(function(item)
{
    return item.name==="burger";
})
console.log(r);


let cart1=["pizza","burger","pasta"];
let cartlist=document.getElementById("cart-list");
cart1.forEach(function(item)
{
    let li=document.createElement("li");
    li.textContent=item;
    cartlist,appendChild(li);
})





function changeMode()
{
    document.body.classList.toggle("dark");
}




//task

let a=["ash","john","paul","max","sam"];
console.log(a);


let b=["1","2","3","4"];
b.push("5","6");
console.log(b);


let student=
{
    name:"peter",
    age:20,
    course:"FSB"
};
console.log(student);



let product=
{
    name:"cooler",
    price:1000,
    quantity:2
};
console.log(product);



function change()
{
    document.getElementById("click").textContent="its changed"
}

function color(){
    document.getElementById("zxc").style.color="red"


   
}

 function alertt()
    {
        alert("Attention pls")
    }

document.getElementById("hi").addEventListener("click",function()
{
    //alert("welcome bro")
    document.getElementById("welcome").textContent="Welcome to learn javascript"
});