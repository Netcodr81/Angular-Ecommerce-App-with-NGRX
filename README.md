# Angular 19 E-commerce App with NgRx & Tailwind CSS

A modern, fully-featured e-commerce application built with Angular 19, NgRx for state management, and Tailwind CSS v4 for styling.

## 🚀 Live Demo
<a href="http://delirious-coast.surge.sh/" style="font-size: 40px">CLICK TO SEE DEMO</a>

## 📸 Screenshots

![Product List](https://github.com/TheCodersDream/Angular-Ecommerce-App-with-NGRX/blob/master/angular_ecommerce_img_1.png)
![Product Details](https://github.com/TheCodersDream/Angular-Ecommerce-App-with-NGRX/blob/master/angular_ecommerce_img_2.png)
![Shopping Cart](https://github.com/TheCodersDream/Angular-Ecommerce-App-with-NGRX/blob/master/angular_ecommerce_img_3.png)
![Filter & Search](https://github.com/TheCodersDream/Angular-Ecommerce-App-with-NGRX/blob/master/angular_ecommerce_img_4.png)
![Responsive Design](https://github.com/TheCodersDream/Angular-Ecommerce-App-with-NGRX/blob/master/angular_ecommerce_img_5.png)

## ✨ Features

- 🛍️ **Product Catalog**: Browse products with filtering and sorting
- 🔍 **Advanced Filtering**: Filter by brand and price
- 📱 **Responsive Design**: Optimized for all device sizes
- 🛒 **Shopping Cart**: Add/remove items with quantity management
- 🎨 **Modern UI**: Built with Tailwind CSS v4
- 📦 **State Management**: NgRx for predictable state updates
- 🧪 **Unit Testing**: Comprehensive Jest test suite
- 🎯 **TypeScript**: Fully typed codebase
- 📐 **Layout Options**: Toggle between 3 and 4 column grid layouts
- 🔄 **Image Gallery**: Interactive product image sliders

## 🛠️ Tech Stack

### Core Framework
- **Angular 19.2.x** - Latest Angular with standalone components
- **TypeScript 5.x** - Strongly typed JavaScript
- **RxJS 7.x** - Reactive programming with Observables

### State Management
- **NgRx 19.x** - Predictable state container
- **NgRx Store DevTools** - Time-travel debugging

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **PrimeNG 19.x** - Rich UI component library
- **PrimeIcons** - Icon library
- **Font Awesome** - Additional icons

### Testing
- **Jest** - JavaScript testing framework
- **Jest Environment JSDOM** - DOM testing environment
- **Jest Preset Angular** - Angular-specific Jest configuration

### Build Tools
- **Angular CLI 19.x** - Development and build tooling
- **PostCSS** - CSS post-processing
- **ESBuild** - Fast JavaScript bundler

## 📋 Prerequisites

- **Node.js 18.x or 20.x**
- **npm 9.x or later**
- **Angular CLI 19.x**

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Netcodr81/Angular-Ecommerce-App-with-NGRX.git
cd Angular-Ecommerce-App-with-NGRX
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you make changes.

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run build:prod` | Build for production (optimized) |
| `npm test` | Run unit tests with Jest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |

## 🧪 Testing

The application uses **Jest** instead of Karma for faster, more reliable testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/                 # Core services, models, and utilities
│   │   ├── data/            # Mock data
│   │   ├── enums/           # TypeScript enums
│   │   ├── footer/          # Footer component
│   │   ├── header/          # Navigation header
│   │   ├── layout-mode/     # Grid layout controls
│   │   ├── models/          # TypeScript interfaces
│   │   ├── not-found/       # 404 page component
│   │   └── pipes/           # Custom pipes
│   ├── filters/             # Product filtering components
│   │   ├── brand-filter/    # Brand filtering
│   │   └── price-filter/    # Price sorting
│   ├── pages/               # Page components
│   │   ├── home/           # Home page
│   │   ├── product-detail-page/  # Product details
│   │   └── shopping-cart-page/   # Shopping cart
│   ├── pagination/          # Pagination components
│   ├── products/            # Product-related components
│   │   ├── product/         # Product card
│   │   ├── product-detail/  # Product details view
│   │   ├── product-list/    # Product grid
│   │   ├── product-slider/  # Image carousel
│   │   └── product-slider-dots/  # Carousel indicators
│   ├── shopping-cart/       # Cart components
│   │   ├── shopping-cart-container/  # Cart layout
│   │   └── shopping-cart-item/       # Cart item
│   ├── store/               # NgRx state management
│   │   ├── app.reducer.ts   # Root reducer
│   │   ├── brand-filter/    # Brand filter state
│   │   ├── price-filter/    # Price filter state
│   │   └── shop/           # Shop state
│   ├── app.component.*      # Root component
│   ├── app.config.ts        # App configuration
│   └── app.routes.ts        # Routing configuration
├── assets/                  # Static assets
├── environments/            # Environment configurations
└── styles.css              # Global styles
```

## 🎨 Styling Architecture

The application uses **Tailwind CSS v4** with:
- Utility-first approach for rapid development
- Custom component styles when needed
- PrimeNG integration for complex components
- Responsive design patterns
- Dark mode support (configurable)

## 📊 State Management

State is managed using **NgRx** with the following structure:
- **Shop State**: Products and shopping cart
- **Brand Filter State**: Selected brand filters
- **Price Filter State**: Price sorting preferences

## 🔄 Recent Migrations & Updates

This project has been extensively modernized:

### Angular Migration
- ✅ Upgraded from Angular 7 to Angular 19
- ✅ Migrated to standalone components
- ✅ Updated to modern Angular CLI configuration

### Testing Migration
- ✅ Migrated from Karma/Jasmine to Jest
- ✅ Updated all test configurations
- ✅ Fixed component and service tests

### Styling Migration
- ✅ Replaced Bootstrap with Tailwind CSS v4
- ✅ Migrated all templates to use Tailwind utilities
- ✅ Integrated PrimeNG for enhanced components
- ✅ Fixed responsive layouts and component styling

### Build System
- ✅ Updated to modern Angular build system
- ✅ Optimized bundle sizes
- ✅ Improved development experience

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original project by [TheCodersDream](https://github.com/TheCodersDream)
- Angular team for the amazing framework
- NgRx team for state management patterns
- Tailwind CSS team for the utility-first CSS framework
