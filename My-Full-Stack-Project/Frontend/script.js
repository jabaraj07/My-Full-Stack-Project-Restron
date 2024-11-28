const meals = {
    breakfast: [
        {
            name: 'Pancakes',
            description: 'Fluffy pancakes with syrup.',
            price: '$5.99',
            img: 'https://eskipaper.com/images/pancakes-1.jpg',
            ingredients: 'Flour, eggs, milk, sugar, baking powder, salt',
            rating: 4.5,
            stock: 'In Stock',
            healthBenefits: 'Rich in carbohydrates for energy.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Omelette',
            description: 'Delicious omelette with cheese.',
            price: '$6.49',
            img: 'https://tse1.mm.bing.net/th?id=OIP.nUguj3WG4rGcSPu3rqMUGgHaE8&pid=Api&P=0&h=180',
            ingredients: 'Eggs, cheese, onions, bell peppers, salt, pepper',
            rating: 4.7,
            stock: 'Limited Stock',
            healthBenefits: 'High in protein and vitamins.',
            nutritionLevel: 'High'
        },
        {
            name: 'Fruit Salad',
            description: 'Fresh seasonal fruits.',
            price: '$4.99',
            img: 'https://tse1.mm.bing.net/th?id=OIP.1Hb7dyT8ZGsYkpKn_m1GDQHaFJ&pid=Api&P=0&h=180',
            ingredients: 'Apples, bananas, grapes, oranges, strawberries',
            rating: 4.8,
            stock: 'In Stock',
            healthBenefits: 'Rich in vitamins and antioxidants.',
            nutritionLevel: 'Very High'
        },
        {
            name: 'Coffee',
            description: 'Hot brewed coffee.',
            price: '$2.99',
            img: 'https://tse1.mm.bing.net/th?id=OIP.mFWlBFRAB7wyU3gIpeF-5QHaE8&pid=Api&P=0&h=180',
            ingredients: 'Coffee beans, water',
            rating: 4.2,
            stock: 'In Stock',
            healthBenefits: 'Boosts energy and metabolism.',
            nutritionLevel: 'Low'
        },
        {
            name: 'Bagel with Cream Cheese',
            description: 'Fresh bagel with cream cheese.',
            price: '$3.99',
            img: 'https://i0.wp.com/accessiblechef.com/wp-content/uploads/2020/04/bagel-with-cream-cheese.jpg?zoom=2&resize=1200%2C675&ssl=1',
            ingredients: 'Bagel, cream cheese',
            rating: 4.3,
            stock: 'In Stock',
            healthBenefits: 'Good source of carbohydrates and protein.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Smoothie Bowl',
            description: 'Mixed fruit smoothie bowl with toppings.',
            price: '$6.99',
            img: 'https://slaylebrity.com/wp-content/uploads/2021/01/7D2F4263-53D7-43E7-8DFA-AA5D8F9F5855-scaled.jpeg',
            ingredients: 'Mixed fruits, granola, honey, chia seeds',
            rating: 4.9,
            stock: 'In Stock',
            healthBenefits: 'High in vitamins and antioxidants.',
            nutritionLevel: 'High'
        },
        {
            name: 'Avocado Toast',
            description: 'Smashed avocado on toasted sourdough.',
            price: '$7.49',
            img: 'https://fortuitousfoodies.com/wp-content/uploads/2017/06/Avocado-Toast-12-1200x1035.jpg',
            ingredients: 'Avocado, sourdough, olive oil, salt',
            rating: 4.7,
            stock: 'In Stock',
            healthBenefits: 'Rich in healthy fats and fiber.',
            nutritionLevel: 'High'
        },
        {
            name: 'Yogurt Parfait',
            description: 'Layers of yogurt, granola, and fruit.',
            price: '$5.49',
            img: 'https://swirlsofflavor.com/wp-content/uploads/2022/01/Fruit-Yogurt-Parfait-Horizontal-1-scaled.jpg',
            ingredients: 'Yogurt, granola, mixed berries, honey',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'High in probiotics and vitamins.',
            nutritionLevel: 'High'
        },
        {
            name: 'Cereal with Milk',
            description: 'A bowl of your favorite cereal with milk.',
            price: '$3.49',
            img: 'https://www.tasteofhome.com/wp-content/uploads/2018/03/shutterstock_578723482.jpg',
            ingredients: 'Cereal, milk',
            rating: 4.1,
            stock: 'In Stock',
            healthBenefits: 'Good source of calcium and fiber.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Toast with Peanut Butter',
            description: 'Whole grain toast with peanut butter.',
            price: '$4.29',
            img: 'https://avirtualvegan.com/wp-content/uploads/2018/02/Vegan-French-Toast-pin-2-copy.jpg',
            ingredients: 'Whole grain bread, peanut butter',
            rating: 4.5,
            stock: 'In Stock',
            healthBenefits: 'Rich in protein and healthy fats.',
            nutritionLevel: 'High'
        }
    ],
    lunch: [
        {
            name: 'Sandwich',
            description: 'Grilled chicken sandwich.',
            price: '$8.99',
            img: 'https://i.pinimg.com/originals/13/6c/9b/136c9b65661036c007a2d006b69a6615.jpg',
            ingredients: 'Chicken, bread, lettuce, tomato, mayonnaise',
            rating: 4.5,
            stock: 'In Stock',
            healthBenefits: 'High in protein and fiber.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Caesar Salad',
            description: 'Caesar salad with dressing.',
            price: '$7.49',
            img: 'https://www.thespruceeats.com/thmb/Z6IWF7c9zywuU9maSIimGLbHoI4=/3000x2000/filters:fill(auto,1)/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg',
            ingredients: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'Low in calories, high in nutrients.',
            nutritionLevel: 'High'
        },
        {
            name: 'Pasta',
            description: 'Pasta with marinara sauce.',
            price: '$9.49',
            img: 'https://www.thecountrycook.net/wp-content/uploads/2023/02/thumbnail-Penne-Pasta-with-Tomato-Sauce-scaled.jpg',
            ingredients: 'Pasta, tomatoes, garlic, basil, olive oil',
            rating: 4.3,
            stock: 'In Stock',
            healthBenefits: 'Good source of energy and vitamins.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Burrito',
            description: 'A large burrito filled with beef and beans.',
            price: '$10.99',
            img: 'https://www.isleofwightmeat.co.uk/wp-content/uploads/2020/03/shutterstock_1349138753-scaled.jpg',
            ingredients: 'Beef, beans, rice, cheese, salsa, tortilla',
            rating: 4.4,
            stock: 'In Stock',
            healthBenefits: 'High in protein and fiber.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Sushi Roll',
            description: 'Assorted sushi rolls with soy sauce.',
            price: '$12.99',
            img: 'https://fthmb.tqn.com/LJLRfoSPI_56ihVGr15EBH18yFk=/5096x3418/filters:fill(auto,1)/GettyImages-126553802-56a541cb3df78cf772875a68.jpg',
            ingredients: 'Rice, fish, seaweed, soy sauce',
            rating: 4.9,
            stock: 'In Stock',
            healthBenefits: 'Rich in omega-3 and low in calories.',
            nutritionLevel: 'High'
        },
        {
            name: 'Veggie Wrap',
            description: 'A healthy wrap filled with fresh vegetables.',
            price: '$7.99',
            img: 'https://www.goya.com/media/3677/grilled-vegetable-wrap1.jpg?quality=80',
            ingredients: 'Lettuce, tomatoes, cucumbers, avocado, hummus, tortilla',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'Low in calories, high in vitamins.',
            nutritionLevel: 'Very High'
        },
        {
            name: 'Chicken Caesar Wrap',
            description: 'Chicken Caesar wrap with fresh greens.',
            price: '$8.99',
            img: 'https://life-in-the-lofthouse.com/wp-content/uploads/2014/06/Chicken_Caesar_Wraps.jpg',
            ingredients: 'Chicken, Caesar dressing, lettuce, tortilla',
            rating: 4.8,
            stock: 'In Stock',
            healthBenefits: 'High in protein and fiber.',
            nutritionLevel: 'High'
        },
        {
            name: 'Grilled Cheese',
            description: 'Classic grilled cheese sandwich.',
            price: '$5.49',
            img: 'https://www.thespruceeats.com/thmb/HFhwRkYlizNSPj98HKQmsHN478c=/2400x1600/filters:fill(auto,1)/grilled-cheese-sandwich-4783471-last-a2b5beafbf3b4b308d0eb1ef4a359953.jpg',
            ingredients: 'Bread, cheese, butter',
            rating: 4.3,
            stock: 'In Stock',
            healthBenefits: 'Good source of calcium and protein.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Chicken Salad',
            description: 'Fresh chicken salad with vinaigrette.',
            price: '$9.49',
            img: 'https://cdn.lifehack.org/wp-content/uploads/2016/12/08182248/FNM_040110-W-N-Dinners-015_s4x3.jpg.rend_.sniipadlarge.jpeg',
            ingredients: 'Chicken, lettuce, tomatoes, vinaigrette',
            rating: 4.7,
            stock: 'In Stock',
            healthBenefits: 'Low in calories, high in protein.',
            nutritionLevel: 'High'
        },
        {
            name: 'Tomato Soup',
            description: 'Warm tomato soup with herbs.',
            price: '$4.99',
            img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Tomato-Soup_EXPS_CF219_3984_B12_18_1b.jpg',
            ingredients: 'Tomatoes, garlic, basil, cream',
            rating: 4.4,
            stock: 'In Stock',
            healthBenefits: 'Rich in antioxidants and vitamins.',
            nutritionLevel: 'High'
        }
    ],
    dinner: [
        {
            name: 'Steak',
            description: 'Grilled steak with herbs.',
            price: '$14.99',
            img: 'https://tse2.mm.bing.net/th?id=OIP.zkt5FDVpa5sFzaYTelDRvwHaE8&pid=Api&P=0&h=180',
            ingredients: 'Beef, herbs, spices, salt',
            rating: 4.9,
            stock: 'In Stock',
            healthBenefits: 'High in protein and iron.',
            nutritionLevel: 'High'
        },
        {
            name: 'Grilled Chicken',
            description: 'Chicken breast with vegetables.',
            price: '$12.99',
            img: 'https://tse4.mm.bing.net/th?id=OIP.jLfi9Oh-nxmjcUFl2MpD4AHaE8&pid=Api&P=0&h=180',
            ingredients: 'Chicken, assorted vegetables, olive oil',
            rating: 4.8,
            stock: 'In Stock',
            healthBenefits: 'Low in fat, high in protein.',
            nutritionLevel: 'Very High'
        },
        {
            name: 'Vegetable Stir Fry',
            description: 'Stir-fried vegetables with sauce.',
            price: '$10.99',
            img: 'https://supperinthesuburbs.com/wp-content/uploads/2021/03/20210313131024_IMG_8345-01.jpeg',
            ingredients: 'Mixed vegetables, soy sauce, sesame oil',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'High in fiber and vitamins.',
            nutritionLevel: 'High'
        },
        {
            name: 'Rice',
            description: 'Steamed rice as a side.',
            price: '$2.49',
            img: 'https://1.bp.blogspot.com/-6xYK9cVTbnE/X1kUr3LZ5JI/AAAAAAAATnA/oYnX2Z1z2yUCsFuv_uHY2lHSGmX-odY7ACLcBGAsYHQ/s0/3646321542_8e59abb769_z.jpg',
            ingredients: 'Rice, water',
            rating: 4.4,
            stock: 'In Stock',
            healthBenefits: 'Good source of carbohydrates.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Salmon Fillet',
            description: 'Grilled salmon with lemon.',
            price: '$13.99',
            img: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Glazed-Salmon-Fillet_exps12329_TOHCSC2423109D07_19_6b_RMS-1.jpg',
            ingredients: 'Salmon, lemon, herbs, olive oil',
            rating: 4.9,
            stock: 'In Stock',
            healthBenefits: 'Rich in omega-3 fatty acids.',
            nutritionLevel: 'High'
        },
        {
            name: 'Lasagna',
            description: 'Classic beef lasagna.',
            price: '$11.99',
            img: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-4272x2848.jpg',
            ingredients: 'Beef, pasta, cheese, tomatoes, garlic',
            rating: 4.7,
            stock: 'In Stock',
            healthBenefits: 'High in protein and carbohydrates.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Mushroom Risotto',
            description: 'Creamy risotto with mushrooms.',
            price: '$9.99',
            img: 'https://realfood.tesco.com/media/images/Risotto-HERO-e01a72c1-a4af-427c-9909-6333de581bda-0-472x310.jpg',
            ingredients: 'Rice, mushrooms, parmesan, garlic, cream',
            rating: 4.8,
            stock: 'In Stock',
            healthBenefits: 'Rich in fiber and vitamins.',
            nutritionLevel: 'High'
        },
        {
            name: 'Roast Vegetables',
            description: 'Oven-roasted vegetables with herbs.',
            price: '$8.49',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Roasted-vegetables-9d0e31b.png?quality=90&resize=556,505',
            ingredients: 'Carrots, potatoes, onions, bell peppers, olive oil, rosemary',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'High in fiber and vitamins.',
            nutritionLevel: 'Very High'
        },
        {
            name: 'Chicken Alfredo',
            description: 'Pasta with creamy Alfredo sauce and chicken.',
            price: '$11.49',
            img: 'https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/Chicken-Alfredo_exps10359_PRC1753658D5A_RMS.jpg',
            ingredients: 'Pasta, chicken, cream, garlic, parmesan',
            rating: 4.5,
            stock: 'In Stock',
            healthBenefits: 'Rich in protein and calcium.',
            nutritionLevel: 'Moderate'
        },
        {
            name: 'Tacos',
            description: 'Beef tacos with salsa.',
            price: '$9.49',
            img: 'https://tse1.mm.bing.net/th?id=OIP.pelK9k5ccm6GNDcM6fEozQHaE8&pid=Api&P=0&h=180',
            ingredients: 'Beef, tortillas, salsa, cheese, lettuce',
            rating: 4.6,
            stock: 'In Stock',
            healthBenefits: 'High in protein and fiber.',
            nutritionLevel: 'Moderate'
        }
    ]
};




function displayitems(mealtype){
    const itemlist = document.getElementById('itemlist');
    itemlist.innerHTML = '';
    meals[mealtype].forEach(item=>{
        const mealitemdiv = document.createElement('div');
        mealitemdiv.className = 'meal-item';
        mealitemdiv.innerHTML =
        `
                    <img src="${item.img}" alt="${item.name}">
                    <div>
                        <h5 class="mb-1">${item.name}</h5>
                        <p class="mb-1">${item.description}</p>
                        <p><strong>${item.price}</strong></p>
                    </div>
        `;
        itemlist.appendChild(mealitemdiv)
        mealitemdiv.addEventListener('click',()=>showproduct(item))
    })
}

document.getElementById('book-table-btn').addEventListener("click",function(){
    document.getElementById('book-form-sec').scrollIntoView({behavior:"smooth"})
 })

 document.getElementById('book-table-btn1').addEventListener("click",function(){
    document.getElementById('book-form-sec').scrollIntoView({behavior:"smooth"})
 })

function showproduct(item){
    document.getElementById('modalproductimage').src = item.img;
    document.getElementById('modalproductname').innerText = item.name;
    document.getElementById('modalproductdiscp').innerText = item.description;
    document.getElementById('modalProductPrice').innerText = item.price;
    document.getElementById('modalProductIngredients').innerText = item.ingredients;
    document.getElementById('modalProductRating').innerText = item.rating+"/5";
    document.getElementById('modalProductStock').innerText = item.stock;
    document.getElementById('modalProductHealth').innerText = item.healthBenefits;
    document.getElementById('modalProductNutrition').innerText = item.nutritionLevel;



    const modal = document.getElementById('productmodal')
    modal.style.display="flex";
}

document.getElementById('modalclosebtn').addEventListener('click',function(){
    document.getElementById('productmodal').style.display='none';
})
document.getElementById('breakfastbtn').addEventListener('click',function(){
    setactivebutton(this);
    displayitems('breakfast')
})

document.getElementById('lunchbtn').addEventListener('click',function(){
    setactivebutton(this);
    displayitems('lunch')
})

document.getElementById('dinnerbtn').addEventListener('click',function(){
    setactivebutton(this);
    displayitems('dinner')
})

function setactivebutton(activebutton){
    const buttons = document.querySelectorAll('.btn-group button')
    buttons.forEach(button=>{
        button.classList.remove('active')
    })
    activebutton.classList.add('active')
}
displayitems('breakfast')

const tableform = document.getElementById('table-form')

tableform.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const date = document.getElementById('datetime').value
    const people = document.getElementById('people').value
    const message = document.getElementById('message')

    const data = {
        username : name,
        useremail: email,
        userdate : date,
        usercount : people
    }

    try{
        const respone = await fetch('http://localhost:8080/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        });
        if(respone.ok){
            console.log("user registered")
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('datetime').value="";
            document.getElementById('people').value="";

            const messagediv = document.createElement('div')
            messagediv.innerHTML=
            `
            <h1>User Registered Successfully</h1>
            `
            message.appendChild(messagediv)
            // message.innerHTML = "user registered"
            setTimeout(()=>{
                messagediv.innerHTML=""
            },5000)
        }
        else{
            const errordata = await respone.json();
            console.log(errordata.message);  
        }
    }catch(err){
        console.log(err);
    }
})



{/* <form id="reservationForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="date">Reservation Date:</label>
    <input type="date" id="date" name="date" required><br>

    <label for="time">Reservation Time:</label>
    <input type="time" id="time" name="time" required><br>

    <label for="count">Number of Persons:</label>
    <input type="number" id="count" name="count" required><br>

    <button type="submit">Submit</button>
</form>

<p id="errorMessage" style="color:red; display:none;">This time slot is already taken. Please choose another time.</p>

<script>
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        count: document.getElementById('count').value
    };

    // Send form data to the backend
    fetch('/api/reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').textContent = data.error;
        } else {
            alert("Reservation successful!");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });
});
</script> */}
