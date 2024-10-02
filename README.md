# RupeeMantra Frontend

## Project Overview

**RupeeMantra** is a financial platform designed to provide users with easy access to loans, loan calculators, and financial advice. The frontend of this project is built using **React.js**, **Tailwind CSS**, and **React Router** for routing. This project offers an intuitive user experience with a clean design that makes it easy for users to apply for loans, explore loan offers, and calculate their eligibility.

## Features

1. **Homepage**: Contains an overview of the platform, showcasing loan services with a professional, responsive layout.
2. **Loan Calculators**: Includes EMI calculators and eligibility calculators for various loan types.
3. **Loan Offers**: Displays loan offers from multiple banks with details such as interest rates, loan amounts, and EMI.
4. **Business Loan**: A comprehensive page providing information on different business loans, their types, and benefits.
5. **About Page**: Details about the RupeeMantra platform and its mission.
6. **Contact Page**: Provides an easy way for users to get in touch with RupeeMantra for inquiries.
7. **Responsive Design**: The layout is fully responsive, ensuring the best experience on both desktop and mobile devices.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework used for styling the components.
- **React Router**: For seamless navigation and routing between different pages.
- **JavaScript (ES6+)**: Used throughout the project for building dynamic functionality.
- **Chart.js**: For creating interactive charts and graphs.
  
## Getting Started

### Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v12+)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/subrat29/RupeeMantra.git
```

2. Navigate to the project directory:

```bash
cd RupeeMantra
```

3. Install dependencies:

```bash
npm install
```

or, if you prefer Yarn:

```bash
yarn install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

or, with Yarn:

```bash
yarn run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:3000) to view the application.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

or, with Yarn:

```bash
yarn build
```

This will generate a `build` folder with the production-ready files.

## Folder Structure

```bash
RupeeMantra/
│
├── public/          # Static files
├── src/
│   ├── assets/      # Images, icons, and other assets
│   ├── components/  # Reusable components (Loan Table, Loan Calculators, etc.)
│   ├── pages/       # Page components (Home, Business Loan, About, Contact)
│   ├── styles/      # Global styles or Tailwind configuration
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point for React app
│   └── ...          # Other necessary files
│
└── package.json     # Project configuration and dependencies
```

## Project Pages

1. **Home Page**: A welcoming page with information about the platform and loan options.
2. **Loan Offers**: Displays a table of various loan offers with a modal for detailed information.
3. **Business Loan**: Describes the business loan options and types available.
4. **About**: Information about the company and its mission.
5. **Contact**: Contact form for users to submit inquiries.

## Contributing

We welcome contributions to RupeeMantra! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

