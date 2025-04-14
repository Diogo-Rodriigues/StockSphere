# StockSphere - Financial Media Platform

StockSphere is a modern web application that provides users with comprehensive financial information, stock market data, and portfolio management capabilities. The platform combines real-time financial data with a user-friendly interface, allowing users to track stocks, manage their portfolios, and access detailed company information.

## Features

- **User Authentication**
  - Secure registration and login system
  - JWT-based authentication
  - Protected routes for authenticated users

- **Stock Portfolio Management**
  - Add and remove stocks from your portfolio
  - Track stock metrics and changes

- **Company Information**
  - Detailed company profiles
  - Key financial metrics and ratios
  - Company descriptions and sector information
  - 10-K filings access
  - Competitor analysis

- **Stock Search**
  - Search for companies by symbol or name
  - Real-time search results
  - Quick access to company information

- **Market Commentary (It's not completely finished :) )**
  - User-generated comments and discussions
  - Share insights about stocks
  - Community engagement

- **Modern UI/UX**
  - Responsive design
  - Glass morphism effects
  - Smooth animations
  - Dark theme with purple/blue color scheme
  - Interactive components

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- React Hook Form for form handling
- Yup for form validation
- Axios for API requests
- React Toastify for notifications

### Backend
- ASP.NET Core
- Entity Framework Core
- SQL Server (I used postgresSQL)
- JWT Authentication
- RESTful API architecture

## Prerequisites

- Node.js (v14 or higher)
- .NET 6.0 SDK
- SQL Server (I used postgresSQL)
- Git

## Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/FinMedia.git
   cd StockSphere
   ```

2. **Backend Setup**
   ```bash
   cd backend
   dotnet restore
   dotnet ef database update
   dotnet run
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Environment Configuration**
   - Backend: Update `appsettings.json` with your database connection string
   - Frontend: Create a `.env` file with the following:
     ```
     REACT_APP_API_URL=http://localhost:5167
     ```

## Project Structure

```
/frontend
    ├── public/                    # Static files and assets
    ├── src/
    │   ├── Components/           # Reusable UI components
    │   │   ├── CompanyDashboard/ # Company information dashboard
    │   │   ├── Navbar/          # Navigation bar
    │   │   ├── Sidebar/         # Side navigation
    │   │   ├── StockComment/    # Stock comment components
    │   │   └── Footer/          # Footer component
    │   ├── Context/             # React context providers
    │   │   └── useAuth.tsx      # Authentication context
    │   ├── Helpers/             # Utility functions
    │   ├── Models/              # TypeScript interfaces
    │   ├── Pages/               # Page components
    │   │   ├── CompanyPage/     # Company details page
    │   │   ├── LoginPage/       # Login page
    │   │   ├── RegisterPage/    # Registration page
    │   │   └── SearchPage/      # Stock search page
    │   ├── Routes/              # Route definitions
    │   ├── Services/            # API service functions
    │   └── App.tsx              # Main application component

/backend
    ├── Controllers/             # API endpoints
    ├── Data/                    # Database context and configurations
    ├── Dtos/                    # Data transfer objects
    ├── Extensions/              # Extension methods
    ├── Helpers/                 # Utility functions
    ├── Interfaces/              # Service interfaces
    ├── Mappers/                 # Object mapping configurations
    ├── Migrations/              # Database migrations
    ├── Models/                  # Entity models
    ├── Repository/              # Data access layer
    ├── Service/                 # Business logic layer
    └── Program.cs               # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Financial data provided by [Financial Modeling Prep API](https://financialmodelingprep.com/)
- Icons from [Heroicons](https://heroicons.com/)
- UI inspiration from modern financial applications 
