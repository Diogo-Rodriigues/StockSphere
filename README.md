# StockSphere - Financial Media Platform

StockSphere is a modern web application that provides users with comprehensive financial information, stock market data, and portfolio management capabilities. The platform combines real-time financial data with a user-friendly interface, allowing users to track stocks, manage their portfolios, and access detailed company information.

## Features

- **User Authentication**
  - Secure registration and login system
  - JWT-based authentication
  - Protected routes for authenticated users
![image](https://github.com/user-attachments/assets/bdf1ee0e-02e0-4938-89ab-4f57580c9dc5)
![image](https://github.com/user-attachments/assets/e3afb759-e6e2-4f8e-8670-13051a7e5319)
![image](https://github.com/user-attachments/assets/d11c7829-6355-44d4-ab2a-8930df0bfc11)

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
![image](https://github.com/user-attachments/assets/4287decf-6fb2-495d-8e25-9c58d60dfe37)
![image](https://github.com/user-attachments/assets/9f4a9a4e-fb3e-4963-9b27-7eb806a57af5)
![image](https://github.com/user-attachments/assets/46df9caa-6932-4a23-9bd5-36286efc2415)
![image](https://github.com/user-attachments/assets/a152d8f3-87f9-41be-b005-c99b64b2bde8)



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
- SQL Server (I used postgreSQL)
- JWT Authentication
- RESTful API architecture

## Prerequisites

- Node.js (v14 or higher)
- .NET 6.0 SDK
- SQL Server (I used postgreSQL)
- Git

## Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Diogo-Rodriigues/StockSphere.git
   cd StockSphere
   ```

2. **Environment Configuration**
   - Backend (After creating the SQL database (in my case postgreSQL)):  
   Update `appsettings.json` with your database connection string (this example is for postgreSQL), the financial modeling prep API key and the JWT password:
      ```
       "ConnectionStrings": {
        "DefaultConnection": "Host=_DB_HOST_(localhost);Database=_DB_NAME_;Username=_DB_USERNAME;Password=_DB_PASSWORD_"
        }
       "FMPKey": "_financialmodelingprepapikey_",
       "JWT": {
         "Issuer": "http://localhost:5246",
         "Audience": "http://localhost:5246",
         "SigningKey": "this_key_must_have_more_than_512_bits(64chars)_due_to_the_algorithm_that_JWT_uses"
       }
      ```
   - Frontend: Change the `.env` file with the your financial modeling prep api key:
     ```
     REACT_APP_API_KEY=_financialmodelingprepapikey_
     ```

4. **Backend Setup**
   ```bash
   cd backend
   dotnet ef migrations remove
   dotnet ef migrations add InitialPostgresMigration
   dotnet ef database update
   (if you haven't installed it: dotnet tool install --global dotnet-ef)
   dotnet watch run or dotnet run
   ```

5. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
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
Contributions to improve the Library Management System are welcome. Please follow these steps:

1. Fork the repository:
   ![fork](https://github.com/user-attachments/assets/40a18cf5-031e-4134-bd73-e87cf22b57aa)
2. Clone the fork (`git clone https://github.com/Diogo-Rodriigues/StockSphere.git`)
3. Navigate to the project directory (`cd StockSphere`)
4. Create a new branch (`git checkout -b feature/feature_name`)
5. Make your changes
6. Commit your changes (`git add file_name`) | (`git commit -m "description"`)
7. Push to the branch (`git push origin feature/feature_name`)
8. Open a Pull Request
   ![pr](https://github.com/user-attachments/assets/0fb5947b-2a31-4240-b00d-12c9de24eee7)
9. Add a title and description for your Pull Request:
    ![submmit](https://github.com/user-attachments/assets/a30c6f0a-8752-43c4-965a-279220b01279)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Financial data provided by [Financial Modeling Prep API](https://financialmodelingprep.com/)
- Icons from [Heroicons](https://heroicons.com/)
- UI inspiration from modern financial applications 
