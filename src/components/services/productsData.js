const productsData = [
    {
        id: 1,
        name: "Бісмарк",
        category: "Піца",
        ingredients: ["томатний соус", "моцарелла", "шинка", "смажене яйце"],
        price: "130 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 2,
        name: "Фонтану",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "сир горгонзолу", "радиккіо", "пармезан"],
        price: "140 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 3,
        name: "Францисканська",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "porcino грибами", "шинкою", "пармезаном"],
        price: "150 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 4,
        name: "Піца з трюфелями",
        category: "Піца",
        ingredients: ["Моцарелла", "трюфельний крем", "білі гриби"],
        price: "250 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 5,
        name: "Кампаньола",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "кукурудза", "ковбаса"],
        price: "200 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 6,
        name: "Буфаліна",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "орегано"],
        price: "130 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 7,
        name: "Тірольська",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "сир горгонзолу", "цятка"],
        price: "190 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 8,
        name: "Каприччіоза",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "шинка", "артишоки", "гриби", "оливки"],
        price: "180 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 9,
        name: "Сільська",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "сир горгонзолу", "баклажани"],
        price: "220 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 10,
        name: "Середземноморська",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "помідори чері", "перець"],
        price: "150 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 11,
        name: "Фермерська",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "перець", "горошок", "порчетта"],
        price: "250 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    }, {
        id: 12,
        name: "Крудо",
        category: "Піца",
        ingredients: ["Томатний соус", "моцарелла", "пармська шинка"],
        price: "150 грн",
        sizes: ["30", "40"],
        image: "static/images/products/product-1.png"
    },
    {
        id: 13,
        name: "Эспрессо",
        category: "Кава",
        ingredients: ["Кавайные зерна", "вода"],
        price: "40 грн",
        sizes: ["S"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 14,
        name: "Капуччино",
        category: "Кава",
        ingredients: ["эспрессо", "молоко", "молочная пена"],
        price: "50 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 15,
        name: "Латте",
        category: "Кава",
        ingredients: ["эспрессо", "горячее молоко", "молочная пена"],
        price: "30 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 16,
        name: "Моккачино",
        category: "Кава",
        ingredients: ["эспрессо", "горячее молоко", "молочная пена", "шоколадный сироп"],
        price: "50 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 17,
        name: "Американо",
        category: "Кава",
        ingredients: ["эспрессо", "горячая вода"],
        price: "40 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 18,
        name: "Флэт Уайт",
        category: "Кава",
        ingredients: ["эспрессо", "горячее молоко", "молочная пена"],
        price: "40 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 19,
        name: "Раф",
        category: "Кава",
        ingredients: ["эспрессо", "горячее молоко", "молочная пена", "ванильный сироп"],
        price: "30 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 20,
        name: "Капучино с карамелью",
        category: "Кава",
        ingredients: ["эспрессо", "молоко", "молочная пена", "карамельный сироп"],
        price: "40 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 21,
        name: "Гляссе",
        category: "Кава",
        ingredients: ["эспрессо", "молоко", "льд", "шоколадная пудра"],
        price: "30 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
    {
        id: 22,
        name: "Колд брю",
        category: "Кава",
        ingredients: ["молотый Кава", "холодная вода"],
        price: "30 грн",
        sizes: ["S", "M", "L"],
        image: "static/images/products/кава_3.png"
    },
];

export default productsData;