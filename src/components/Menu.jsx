import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Bhel",
      description: "Life is like Bhel-puri with bitter gourd.",
      price: 12,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/bhel.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 2,
      name: "Dabeli",
      description: "What happens after eating Dabeli? It goes to Da-beli.",
      price: 10,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/dabeli.jpg?raw=true",
      cuisine: "Italian",
      isVegan: true,
      isGlutenFree: false,
    },
    {
      id: 3,
      name: "Dhokla",
      description: "Dhoka nahi Dhokla khao.",
      price: 9,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/dhokla.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 4,
      name: "Masala Dosa",
      description: "What is masala dosa? It's potato wrapped in love.",
      price: 8,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/dosa.jpg?raw=true",
      cuisine: "American",
      isVegan: false,
      isGlutenFree: true,
    },
    {
      id: 5,
      name: "Idli",
      description: "Delicious buttery garlic bread",
      price: 5,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/idli.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 6,
      name: "Jalebi",
      description: "Uljhane bhi meethi ho sakti hai.",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/jalebi.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 7,
      name: "Kachori",
      description: "Creamy Alfredo pasta",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/kachori.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 8,
      name: "Misal Pav",
      description: "Bad day? Misal Pav, Good day? Misal Pav.",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/misal.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 9,
      name: "Pani Puri",
      description:
        "Life Is Like PaniPuri Everybody Have There Own Way To Enjoy It.",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/panipuri2.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 10,
      name: "Pav Bhaji",
      description: "Keep Calm And Eat Pav Bhaji",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/pavbhaji.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 11,
      name: "Pohe",
      description:
        "When life gives you lemon, Get your poha plate & squeeze over it!",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/poha.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 12,
      name: "Ragda Patties",
      description: "Bhaiya ragda kaisa diya?",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/ragda.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 13,
      name: "Samosa",
      description: "The best triangle for taste angle.",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/samosa.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
    {
      id: 14,
      name: "Vada Pav",
      description: "Burger is nothing but, Vada pav's NRI cousin",
      price: 11,
      image:
        "https://github.com/Kolivk3/StreetFood/blob/main/vpav.jpg?raw=true",
      cuisine: "Italian",
      isVegan: false,
      isGlutenFree: false,
    },
  ]);

  const [itemCounts, setItemCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 20]);
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  useEffect(() => {
    // Initialize counts for each item
    const initialCounts = {};
    menuItems.forEach((item) => {
      initialCounts[item.id] = 0;
    });
    setItemCounts(initialCounts);
  }, [menuItems]);

  const handleAddToCart = (item) => {
    // Update individual item count
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: prevCounts[item.id] + 1,
    }));

    // Add item to localStorage cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine
      ? item.cuisine === selectedCuisine
      : true;
    const matchesPrice =
      item.price >= selectedPriceRange[0] &&
      item.price <= selectedPriceRange[1];
    const matchesVegan = isVegan ? item.isVegan : true;
    const matchesGlutenFree = isGlutenFree ? item.isGlutenFree : true;

    return (
      matchesSearch &&
      matchesCuisine &&
      matchesPrice &&
      matchesVegan &&
      matchesGlutenFree
    );
  });

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>

      {/* Search and Filters */}
      <div className="menu-filters">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
        </select>

        <select
          value={selectedPriceRange.join("-")}
          onChange={(e) => {
            const [min, max] = e.target.value.split("-").map(Number);
            setSelectedPriceRange([min, max]);
          }}
        >
          <option value="0-20">All Prices</option>
          <option value="0-10">Under $10</option>
          <option value="10-20">$10 - $20</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={isVegan}
            onChange={() => setIsVegan(!isVegan)}
          />
          Vegan Only
        </label>

        <label>
          <input
            type="checkbox"
            checked={isGlutenFree}
            onChange={() => setIsGlutenFree(!isGlutenFree)}
          />
          Gluten-Free Only
        </label>
      </div>

      {/* Display Filtered Items */}
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-btn"
              >
                Add to Cart ({itemCounts[item.id] || 0})
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/cart">
        <button className="view-cart-btn">View Cart</button>
      </Link>
    </div>
  );
};

export default Menu;
