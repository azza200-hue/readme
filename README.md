# e-plantShopping (Paradise Nursery Shopping Application)
A dynamic React-based e-commerce web application for an online plant shop called **e-plantShopping** (also known as **Paradise Nursery**).

## Project Overview

Paradise Nursery is a fully functional shopping cart application built with React and Redux Toolkit. Users can browse a curated collection of houseplants, view plant details, add items to their cart, and manage their orders.

## Features

- **Landing Page** – Company introduction with a "Get Started" button
- **Product Listing Page** – Browse 18 unique houseplants grouped into 3 categories
- **Shopping Cart Page** – Full cart management with quantity controls and totals
- **Redux State Management** – Centralized cart state using Redux Toolkit

## Technologies Used

- React 18
- Redux Toolkit
- React Redux
- CSS3
- Vite (build tool)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx           - Main app with landing page and routing
├── App.css           - Global styles including background image
├── AboutUs.jsx       - About the company page
├── ProductList.jsx   - Plant listing page with categories
├── CartItem.jsx      - Shopping cart page
└── store/
    └── CartSlice.jsx - Redux slice for cart state
```

## Categories

1. **Tropical Plants** – Monstera, Bird of Paradise, Fiddle Leaf Fig, and more
2. **Succulents** – Aloe Vera, Jade Plant, Echeveria, and more
3. **Air Purifying Plants** – Spider Plant, Snake Plant, Golden Pothos, and more
