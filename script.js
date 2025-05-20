const products = [
  //shirts 1-20
  {
    id: 1,
    title: "Men Full Sleeve Shirt",
    type: "shirt",
    image: "./pictures/shirts/1.jpg",
    price: 400,
    description: "Classic full sleeve shirt with a modern pattern."
  },
  {
    id: 2,
    title: "Slim Fit Cotton Shirt",
    type: "shirt",
    image: "./pictures/shirts/2.jpg",
    price: "$48",
    description: "Slim fit shirt made with breathable cotton."
  },
  {
    id: 3,
    title: "Checked Casual Shirt",
    type: "shirt",
    image: "./pictures/shirts/3.jpg",
    price: "$45",
    description: "Stylish checked shirt for casual wear."
  },
  {
    id: 4,
    title: "Formal Office Shirt",
    type: "shirt",
    image: "./pictures/shirts/4.jpg",
    price:  400,
    description: "Perfect formal shirt for office and meetings."
  },
  {
    id: 5,
    title: "Linen Summer Shirt",
    type: "shirt",
    image: "./pictures/shirts/5.jpg",
    price:  400,
    description: "Lightweight linen shirt ideal for summer."
  },
  {
    id: 6,
    title: "Striped Long Sleeve Shirt",
    type: "shirt",
    image: "./pictures/shirts/6.jpg",
    price: "$52",
    description: "Elegant striped design with long sleeves."
  },
  {
    id: 7,
    title: "Casual Button-Down Shirt",
    type: "shirt",
    image: "./pictures/shirts/7.jpg",
    price:  400,
    description: "Comfortable button-down for everyday wear."
  },
  {
    id: 8,
    title: "Denim Shirt",
    type: "shirt",
    image: "./pictures/shirts/8.jpg",
    price: "$58",
    description: "Trendy denim shirt for a rugged look."
  },
  {
    id: 9,
    title: "Oxford Classic Shirt",
    type: "shirt",
    image: "./pictures/shirts/9.jpg",
    price:  400,
    description: "Timeless Oxford style with premium feel."
  },
  {
    id: 10,
    title: "Printed Casual Shirt",
    type: "shirt",
    image: "./pictures/shirts/10.jpg",
    price: "$47",
    description: "Fun printed shirt perfect for outings."
  },
  {
    id: 11,
    title: "Mandarin Collar Shirt",
    type: "shirt",
    image: "./pictures/shirts/11.jpg",
    price:  400,
    description: "Modern mandarin collar design."
  },
  {
    id: 12,
    title: "Half Sleeve Plaid Shirt",
    type: "shirt",
    image: "./pictures/shirts/12.jpg",
    price: "$44",
    description: "Plaid pattern in a comfortable half sleeve cut."
  },
  {
    id: 13,
    title: "Stretch Fit Shirt",
    type: "shirt",
    image: "./pictures/shirts/13.jpg",
    price:  400,
    description: "Flexible fit for all-day comfort."
  },
  {
    id: 14,
    title: "Flannel Checked Shirt",
    type: "shirt",
    image: "./pictures/shirts/14.jpg",
    price: "$54",
    description: "Warm flannel material with a checked design."
  },
  {
    id: 15,
    title: "Minimalist White Shirt",
    type: "shirt",
    image: "./pictures/shirts/15.jpg",
    price: "$56",
    description: "Crisp and clean minimalist style."
  },
  {
    id: 16,
    title: "Navy Blue Casual Shirt",
    type: "shirt",
    image: "./pictures/shirts/16.jpg",
    price: "$50",
    description: "Relaxed fit navy blue shirt."
  },
  {
    id: 17,
    title: "Short Sleeve Casual Shirt",
    type: "shirt",
    image: "./pictures/shirts/17.jpg",
    price: "$43",
    description: "Perfect for warm days and weekend wear."
  },
  {
    id: 18,
    title: "Double Pocket Shirt",
    type: "shirt",
    image: "./pictures/shirts/18.jpg",
    price: "$57",
    description: "Functional design with two front pockets."
  },
  {
    id: 19,
    title: "Wrinkle-Free Shirt",
    type: "shirt",
    image: "./pictures/shirts/19.jpg",
    price: "$59",
    description: "Stay crisp all day with wrinkle-free fabric."
  },
  {
    id: 20,
    title: "Light Blue Formal Shirt",
    type: "shirt",
    image: "./pictures/shirts/20.jpg",
    price: "$55",
    description: "Subtle color and formal styling for business settings."
  },
  
  //pants 21-40
  {
    id: 21,
    title: "Men Slim Fit Chino Pant",
    type: "pant",
    image: "./pictures/pants/21.jpg",
    price: "$55",
    description: "Stylish slim fit chino perfect for casual or semi-formal looks."
  },
  {
    id: 22,
    title: "Classic Formal Pant",
    type: "pant",
    image: "./pictures/pants/22.jpg",
    price: "$60",
    description: "Timeless formal pant with a tailored fit."
  },
  {
    id: 23,
    title: "Stretchable Jogger Pant",
    type: "pant",
    image: "./pictures/pants/23.jpg",
    price: "$48",
    description: "Comfortable jogger pant with a stretch waist."
  },
  {
    id: 24,
    title: "Tapered Fit Cotton Pant",
    type: "pant",
    image: "./pictures/pants/24.jpg",
    price: "$52",
    description: "Tapered fit made from soft cotton fabric."
  },
  {
    id: 25,
    title: "Cargo Pant with Pockets",
    type: "pant",
    image: "./pictures/pants/25.jpg",
    price: "$58",
    description: "Multi-pocket cargo pant ideal for casual outings."
  },
  {
    id: 26,
    title: "Denim Jeans Pant",
    type: "pant",
    image: "./pictures/pants/26.jpg",
    price: "$65",
    description: "Classic denim jeans with a modern fit."
  },
  {
    id: 27,
    title: "Drawstring Lounge Pant",
    type: "pant",
    image: "./pictures/pants/27.jpg",
    price: "$44",
    description: "Relaxed lounge pant with drawstring waistband."
  },
  {
    id: 28,
    title: "Skinny Fit Pant",
    type: "pant",
    image: "./pictures/pants/28.jpg",
    price: "$50",
    description: "Trendy skinny fit pant for a sleek look."
  },
  {
    id: 29,
    title: "Wrinkle-Resistant Formal Pant",
    type: "pant",
    image: "./pictures/pants/29.jpg",
    price: "$63",
    description: "Perfect for workwear with wrinkle-resistant fabric."
  },
  {
    id: 30,
    title: "Casual Linen Pant",
    type: "pant",
    image: "./pictures/pants/30.jpg",
    price: "$54",
    description: "Lightweight linen pant ideal for summer comfort."
  },
  {
    id: 31,
    title: "Relaxed Fit Cargo Pant",
    type: "pant",
    image: "./pictures/pants/31.jpg",
    price: "$56",
    description: "Relaxed fit cargo pant with plenty of storage."
  },
  {
    id: 32,
    title: "Tech Fabric Athletic Pant",
    type: "pant",
    image: "./pictures/pants/32.jpg",
    price: "$59",
    description: "High-performance pant designed for athletic use."
  },
  {
    id: 33,
    title: "Classic Straight Leg Pant",
    type: "pant",
    image: "./pictures/pants/33.jpg",
    price: "$57",
    description: "Straight leg pant with classic styling."
  },
  {
    id: 34,
    title: "Lightweight Travel Pant",
    type: "pant",
    image: "./pictures/pants/34.jpg",
    price: "$53",
    description: "Comfortable pant perfect for travel."
  },
  {
    id: 35,
    title: "Winter Wool Blend Pant",
    type: "pant",
    image: "./pictures/pants/35.jpg",
    price: "$70",
    description: "Warm wool blend pant for cold weather."
  },
  {
    id: 36,
    title: "Slim Fit Dress Pant",
    type: "pant",
    image: "./pictures/pants/36.jpg",
    price: "$62",
    description: "Elegant slim fit pant for formal occasions."
  },
  {
    id: 37,
    title: "Casual Drawstring Pant",
    type: "pant",
    image: "./pictures/pants/37.jpg",
    price: "$45",
    description: "Easy-going pant with a comfortable drawstring."
  },
  {
    id: 38,
    title: "Water-Resistant Outdoor Pant",
    type: "pant",
    image: "./pictures/pants/38.jpg",
    price: "$68",
    description: "Durable pant with water-resistant fabric."
  },
  {
    id: 39,
    title: "Classic Khaki Pant",
    type: "pant",
    image: "./pictures/pants/39.jpg",
    price: "$55",
    description: "Versatile khaki pant for everyday wear."
  },
  {
    id: 40,
    title: "Elastic Waist Cargo Pant",
    type: "pant",
    image: "./pictures/pants/40.jpg",
    price: "$60",
    description: "Comfortable cargo pant with elastic waist."
  },

  //tShirts 41-60
  {
    id: 41,
    title: "Men Classic Crew Neck T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/41.jpg",
    price: "$25",
    description: "Soft cotton crew neck t-shirt for everyday comfort."
  },
  {
    id: 42,
    title: "Slim Fit V-Neck T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/42.jpg",
    price: "$28",
    description: "Stylish slim fit t-shirt with a V-neck design."
  },
  {
    id: 43,
    title: "Graphic Print T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/43.jpg",
    price: "$30",
    description: "Trendy graphic print to add a pop to your outfit."
  },
  {
    id: 44,
    title: "Basic White T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/44.jpg",
    price: "$22",
    description: "Essential white t-shirt, versatile and breathable."
  },
  {
    id: 45,
    title: "Striped Casual T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/45.jpg",
    price: "$27",
    description: "Casual striped t-shirt perfect for relaxed days."
  },
  {
    id: 46,
    title: "Long Sleeve T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/46.jpg",
    price: "$32",
    description: "Comfortable long sleeve option for cooler weather."
  },
  {
    id: 47,
    title: "Pocket Detail T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/47.jpg",
    price: "$26",
    description: "Simple t-shirt with a stylish chest pocket."
  },
  {
    id: 48,
    title: "Henley Neck T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/48.jpg",
    price: "$29",
    description: "Henley neckline for a casual yet polished look."
  },
  {
    id: 49,
    title: "Performance Athletic T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/49.jpg",
    price: "$35",
    description: "Moisture-wicking fabric ideal for sports and workouts."
  },
  {
    id: 50,
    title: "Vintage Washed T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/50.jpg",
    price: "$33",
    description: "Soft, vintage-washed t-shirt with a retro feel."
  },
  {
    id: 51,
    title: "Bold Print T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/51.jpg",
    price: "$31",
    description: "Stand out with bold, eye-catching prints."
  },
  {
    id: 52,
    title: "Relaxed Fit T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/52.jpg",
    price: "$24",
    description: "Relaxed fit for ultimate comfort and casual style."
  },
  {
    id: 53,
    title: "Raglan Sleeve T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/53.jpg",
    price: "$28",
    description: "Sporty raglan sleeve design with contrast colors."
  },
  {
    id: 54,
    title: "Cotton-Blend T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/54.jpg",
    price: "$26",
    description: "Soft cotton-blend fabric with durability."
  },
  {
    id: 55,
    title: "Vibrant Color T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/55.jpg",
    price: "$27",
    description: "Bright colors to add life to your wardrobe."
  },
  {
    id: 56,
    title: "Eco-Friendly Organic T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/56.jpg",
    price: "$34",
    description: "Made from organic cotton for sustainability."
  },
  {
    id: 57,
    title: "Classic Polo T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/57.jpg",
    price: "$38",
    description: "Polished look with a traditional polo collar."
  },
  {
    id: 58,
    title: "Pocketless Minimalist T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/58.jpg",
    price: "$23",
    description: "Clean and simple design without any pockets."
  },
  {
    id: 59,
    title: "Heather Grey T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/59.jpg",
    price: "$25",
    description: "Soft heathered fabric for a laid-back vibe."
  },
  {
    id: 60,
    title: "Athletic Mesh T-Shirt",
    type: "t-shirt",
    image: "./pictures/tshirts/60.jpg",
    price: "$36",
    description: "Breathable mesh panels for enhanced airflow."
  },


  // men Shorts 61-80

  {
    id: 61,
    title: "Casual Cotton Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/61.jpg",
    price: "$35",
    description: "Comfortable cotton shorts perfect for casual wear."
  },
  {
    id: 62,
    title: "Slim Fit Chino Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/62.jpg",
    price: "$40",
    description: "Stylish slim fit chino shorts for summer outings."
  },
  {
    id: 63,
    title: "Athletic Performance Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/63.jpg",
    price: "$38",
    description: "Lightweight shorts designed for active performance."
  },
  {
    id: 64,
    title: "Cargo Utility Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/64.jpg",
    price: "$42",
    description: "Durable cargo shorts with multiple pockets."
  },
  {
    id: 65,
    title: "Denim Cut-Off Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/65.jpg",
    price: "$45",
    description: "Trendy denim cut-off shorts with raw edges."
  },
  {
    id: 66,
    title: "Drawstring Lounge Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/66.jpg",
    price: "$33",
    description: "Relaxed fit shorts with an adjustable drawstring."
  },
  {
    id: 67,
    title: "Quick-Dry Swim Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/67.jpg",
    price: "$48",
    description: "Perfect for swimming with fast-drying fabric."
  },
  {
    id: 68,
    title: "Plaid Casual Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/68.jpg",
    price: "$37",
    description: "Casual plaid pattern shorts for everyday style."
  },
  {
    id: 69,
    title: "Elastic Waist Gym Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/69.jpg",
    price: "$36",
    description: "Comfortable gym shorts with elastic waistband."
  },
  {
    id: 70,
    title: "Classic Twill Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/70.jpg",
    price: "$39",
    description: "Durable twill shorts with a classic cut."
  },
  {
    id: 71,
    title: "Cargo Knee-Length Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/71.jpg",
    price: "$44",
    description: "Functional cargo shorts extending to the knees."
  },
  {
    id: 72,
    title: "Stretch Fit Active Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/72.jpg",
    price: "$41",
    description: "Flexible shorts designed for active movement."
  },
  {
    id: 73,
    title: "Lightweight Hiking Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/73.jpg",
    price: "$46",
    description: "Durable, breathable shorts for outdoor hiking."
  },
  {
    id: 74,
    title: "Casual Drawstring Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/74.jpg",
    price: "$34",
    description: "Easy-wear shorts with adjustable drawstring."
  },
  {
    id: 75,
    title: "Denim Relaxed Fit Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/75.jpg",
    price: "$47",
    description: "Relaxed fit denim shorts for everyday comfort."
  },
  {
    id: 76,
    title: "Beach Quick-Dry Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/76.jpg",
    price: "$50",
    description: "Perfect shorts for the beach with quick-dry fabric."
  },
  {
    id: 77,
    title: "Slim Fit Twill Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/77.jpg",
    price: "$42",
    description: "Smart slim fit shorts made of twill fabric."
  },
  {
    id: 78,
    title: "Patterned Casual Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/78.jpg",
    price: "$38",
    description: "Casual shorts with trendy patterns."
  },
  {
    id: 79,
    title: "Mesh Lined Sports Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/79.jpg",
    price: "$39",
    description: "Breathable mesh lining for sports activities."
  },
  {
    id: 80,
    title: "Utility Multi-Pocket Shorts",
    type: "menShorts",
    image: "./pictures/menShorts/80.jpg",
    price: "$45",
    description: "Multi-pocket shorts designed for utility and comfort."
  }
];

const newProduct =[
  // blazer
  {
    id: 1,
    title: "Classic Navy Blue Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/1.jpg",
    price: "$120",
    description: "Timeless navy blazer with a tailored fit."
  },
  {
    id: 2,
    title: "Slim Fit Black Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/2.jpg",
    price: "$130",
    description: "Sharp slim fit black blazer perfect for formal events."
  },
  {
    id: 3,
    title: "Grey Wool Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/3.jpg",
    price: "$140",
    description: "Warm wool blazer with a classic cut."
  },
  {
    id: 4,
    title: "Checkered Pattern Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/4.jpg",
    price: "$135",
    description: "Stylish checkered blazer for a bold statement."
  },
  {
    id: 5,
    title: "Double-Breasted Navy Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/5.jpg",
    price: "$150",
    description: "Elegant double-breasted blazer in navy blue."
  },
  {
    id: 6,
    title: "Light Grey Casual Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/6.jpg",
    price: "$125",
    description: "Versatile light grey blazer for casual occasions."
  },
  {
    id: 7,
    title: "Textured Fabric Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/7.jpg",
    price: "$145",
    description: "Blazer with unique textured fabric for extra style."
  },
  {
    id: 8,
    title: "Classic Black Velvet Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/8.jpg",
    price: "$160",
    description: "Luxurious velvet blazer ideal for evening wear."
  },
  {
    id: 9,
    title: "Brown Tweed Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/9.jpg",
    price: "$135",
    description: "Rustic tweed blazer with classic styling."
  },
  {
    id: 10,
    title: "Light Blue Linen Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/10.jpg",
    price: "$130",
    description: "Breathable linen blazer perfect for warm weather."
  },
  {
    id: 11,
    title: "Single Button Grey Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/11.jpg",
    price: "$128",
    description: "Modern single button blazer in medium grey."
  },
  {
    id: 12,
    title: "Dark Green Wool Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/12.jpg",
    price: "$140",
    description: "Deep green wool blazer with sharp tailoring."
  },
  {
    id: 13,
    title: "Pinstripe Business Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/13.jpg",
    price: "$155",
    description: "Sophisticated pinstripe blazer for business settings."
  },
  {
    id: 14,
    title: "Charcoal Grey Formal Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/14.jpg",
    price: "$145",
    description: "Classic charcoal blazer suitable for formal occasions."
  },
  {
    id: 15,
    title: "Casual Cotton Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/15.jpg",
    price: "$120",
    description: "Lightweight cotton blazer for casual styling."
  },
  {
    id: 16,
    title: "Velvet Collar Blazer",
    type: "menBlazer",
    image: "./pictures/menBlazers/16.jpg",
    price: "$165",
    description: "Elegant blazer with velvet collar detailing."
  }
];


//changing the price to inr
let price = [100,200,400,500,300,540,650,340,230,430,230]
for(let t of products){
  t.price = price[Math.floor(Math.random()*price.length)]
}


//script

//header script for buttons ---- start

let header_btns = document.querySelectorAll('.header_element a')
// console.log(header_btns)
header_btns.forEach((btn)=>{
  
  btn.addEventListener('click',(e)=>{
    e.preventDefault()
    header_btns.forEach((item)=>item.classList.remove("active"))
    btn.classList.add("active")
  })
})

//header script for buttons ---- end


// show default product on home page---- start

const productContainer = document.querySelector(".product");

display_card(products) //calling function to display the default product(shirt)

function display_card(products,type="shirt"){

  productContainer.innerHTML = ''

  products.forEach((item) => {
    //creating divs for products
    if ((item.type.toLowerCase()).includes(type.toLowerCase()) || (item.type.toLowerCase()).includes(type.toLowerCase())) {
      const productCard = document.createElement("div");
      const productImage = document.createElement("div");
      const productDetail = document.createElement("div");

      //giving class name for css
      productCard.className = "product_card";
      productImage.className = "product_image";
      productDetail.className = "product_detail";

      // creating html of card
      productImage.innerHTML = `  
        <img src="${item.image}" alt="${item.title}" />
      `;

      //product details html
      productDetail.innerHTML = `
          <h2>${item.title}</h2>
          <p><strong>Price:</strong> ${item.price}</p>
          <p>${item.description}</p>
          <div class='product_btn'>
            <button class='buy_btn'>Buy</button>
            <button class='add_to_cart_btn'>Add to cart</button>
          </div>
      `;

      productCard.append(productImage, productDetail);
      productContainer.appendChild(productCard);
    }
  });
}

// show default product on home page---- end

// Search by input---- start

const search = document.querySelector("#search_input")
search.addEventListener("input", (e)=>{
  e.preventDefault()
  let search_type = e.target.value
  // console.log(search_type)
  display_card(products,search_type)
  
})

// Search by input---- end


//display product by buttons ---- start

const btns = document.querySelectorAll(".clothes_category button ")
let btn_style_flag = false
btns.forEach((btn_item)=>{
  btn_item.addEventListener("click",(e)=>{
    e.preventDefault()
    btns.forEach(btn => btn.classList.remove("active"));
    btn_item.classList.add('active');
    if(e.target.innerText == "NEW") display_card(newProduct,'menBlazer')
    else display_card(products,e.target.innerText)
  })
})

//display product by buttons ---- end


// contact form ---- Start

const contact_form = document.querySelector(".contact_form")
const contact_btn = document.querySelector("#contact_form_button")



contact_btn.addEventListener('click', (e)=>{
  e.preventDefault()
  contact_form.style.display = contact_form.classList.toggle('active') ? 'flex' : 'none';
})

const close_btn = document.querySelector(".contact_close_btn")
close_btn.addEventListener('click', (e)=>{
  e.preventDefault()
  contact_form.style.display = 'none'
})

const thankyou = document.querySelector('.contact_thankyou')
const userName = document.querySelector('#userName')
const form = document.getElementById('user_contact')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  userName.innerText = e.target[0].value.toUpperCase() + ' ' + e.target[1].value.toUpperCase()
  thankyou.style.display = 'flex'
  contact_form.style.display = 'none'
  document.body.style.overflow = "hidden"
  contact_btn.classList.remove('active')
})

thankyou.addEventListener('click',()=>{
  thankyou.style.display = 'none'
  document.body.style.overflow = "auto"
})

// contact form ---- End


// cart form ---- start

const cart_icon = document.getElementById('cart')
const cart_btn = document.querySelectorAll('.add_to_cart_btn')
const container = document.querySelector('.cart_container')

const close_add_to_cart = document.querySelector('.close_add_to_cart')

close_add_to_cart.addEventListener('click',()=>{  //applying event on close btn to close the container when clicked
  container.style.display = 'none'
})


cart_icon.addEventListener('click',()=>{  //applying event on cart icon to proceed

  container.style.display = container.classList.toggle('active') ? 'inline' : 'none';

  
  let item_list = document.querySelectorAll('.cart_item')
  if(item_list.length == 1){        //checking if cart if empty then showing message
    if (!container.querySelector('.empty_cart')){
      const empty_cart = document.createElement('div')
      empty_cart.className = 'empty_cart'
      empty_cart.innerHTML = `
        <h2> Cart is Empty... </h2>
        <a href = '#collection'>Continue Shopping</a>
      `
      container.append(empty_cart)
    }
  }
})

cart_btn.forEach((product)=>{
  product.addEventListener('click',(e)=>{

    const empty_msg = document.querySelector('.empty_cart')  // removing empty message if it is avail
    if (empty_msg) {
      empty_msg.remove()
    }


    product.style.backgroundColor ='rgb(133, 123, 116)'
    e.preventDefault()
    const productDiv = e.target.closest('.product_card')
    const product_img = productDiv.querySelector("img")  //clicked product image
    const product_title = productDiv.querySelector("h2") //clicked product title
    const product_price = productDiv.querySelector("p")  //clicked product price
    const product_description = productDiv.querySelectorAll("p")[1]  //clicked product description

    const cart_list = document.querySelector('.cart_item') //ul to listing all the products in cart
    const create_cart_item = document.createElement('li') //create li for each item

    create_cart_item.classList = 'cart_item' //giving class for each item of cart
    create_cart_item.innerHTML = `
      <div class='item'>
        <img src=${product_img.src} alt = 'Product Image'/>
        <h2>${product_title.innerText}</h2>
        <p>${product_description.innerText}</p>
        <p><b>${product_price.innerText}</b></p>
        <button class='remove_cart_item_btn'>Remove</button>
      </div>
    `

    cart_list.append(create_cart_item)


    
    const remove_btn = document.querySelectorAll('.remove_cart_item_btn')    // functionality of remove button in cart items

    remove_btn.forEach((item)=>{
      item.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target.closest('.cart_item').remove()
        console.log('remove',document.querySelectorAll('.cart_item').length)
        if (document.querySelectorAll('.cart_item').length === 1) {    //if the cart id empty then we are creatig a new empty cart to show empty msg
          const empty_cart = document.createElement('div')
          empty_cart.className = 'empty_cart'
          empty_cart.innerHTML = `
            <h2> Cart is Empty... </h2>
            <a href = '#collection'>Continue Shopping</a>
          `
          
          const empty_msg = document.querySelector('.empty_cart')  // append empty cart after removing the items also if the empty msg is already there then it's not to be append 
          if (!empty_msg) {
            container.append(empty_cart)
          }
        }
      })
    })

  })
})


//but button ---- start

const buy_btn = document.querySelectorAll('.buy_btn')
const buy_thankyou_container = document.querySelector('.buy_thankyou')

buy_btn.forEach((product)=>{

  product.addEventListener('click',()=>{
    alert('Thank You for your Order, Our team will deliver your product within 3-4 days!!')
  })

})

//but button ---- end




// cart form ---- End
