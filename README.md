# ERP-System
# INTRODUCTION
ERP System is a React application designed to manage and display various aspects of product orders and data. It includes components for displaying recent orders, order details, product analysis charts, product information, and a table for managing product data. The project utilizes various React libraries and components for a responsive and interactive user experience.

# FEATURES:
# 1) Dashboard:
Display the essential features of a ERP System such total number of products, total orders placed, total revenue generated, product analysis (via visual representation of product data through charts) and order data through chart.
# 2) Product Page:
  # a) View Product Data: 
      Displays product information including ID, name, category, price, and stock quantity in a tabular format with edit and delete buttons.
  # b) Add Product: 
      Allows users to add new products to the system by providing necessary details through a form.
  # c) Edit Product: 
      Enables users to edit existing product information such as name, category, price, and stock quantity.
  # d) Delete Product: 
      Provides the capability to remove products from the system.
  For the responsiveness, when the screen size reduces below 1000pixels the table rows are displayed in the form of cards.
# 3) Order Page:
     Displays order information including order id, customer name, order date and status of the order in a tabular format.
  # a) View Details:
      Added the functionality of viewing order details on clicking on particular order field in form of card.
  For the responsiveness, when the screen size reduces below 1000pixels the table rows are displayed in the form of cards.

# PROJECT STRUCTURE:
  # node_modules
  # public
    -> index.html -- includes public assets such as HTML file and icons.
  # src
   # components --- containing all react components used in the project.
     -> DashboardStats.js -- Component to render total products, orders, revenues in Dashboard.
     -> DashboardStats.css -- Containing styling for DashboardStats.js.
     -> Modal.js -- Contain the form structure which is opened when we want to add or edit product in Product page.
     -> Modal.css -- Containing styling for Modal.js.
     -> Order_chart.js -- Component to render a line chart representing order data.
     -> Order_data.js -- Component to render order table to display recent orders.
     -> Order_data.css -- Containing styling for Order_data.js
     -> Order_details.js -- Component to display detailed information about a specific order.
     -> Order_status.js -- Display the order status.
     -> Product_chart.js -- Component to visualize product data using a pie chart.
     -> Product_chart.css -- Containing styling for Product_chart.js.
     -> Product_data.js -- Component to display product information in a tabular format.
     -> Product_data.css -- Containing styling for Product_data.js.
     -> Table.js -- Component for rendering a table to display and manage product data.
     -> Table.css -- Containing styling for Table.js.
   # images
     -> order_detail.png -- image used in the project
   # pages
    # shared
      -> Sidebar.js -- Component displaying the sidebar of the page
      -> Sidebar.css -- Containing styling for Sidebar.js.
    -> Dashboard.js -- Component to render the dashboard.
    -> Dashboard.css -- Containing styling for Dasboard.js.
    -> Product.js -- Component to render the product page.
    -> Product.css -- Containing styling for Product.js.
    -> Order.js -- Component to render the order page.
    -> Order.css -- Containing styling for Order.js.
   # App.js -- Main component responsible for rendering the application.
   # index.js -- Entry point of the application.
   # index.css -- Containing tailwind utilities.

# SETUP INSTRUCTIONS:
1) Clone the repository to your local machine using git clone https://github.com/your-username/ERP-System.git.
2) Navigate to the project directory using cd client.
3) Install dependencies by running npm install (Dependencies used -- react-icons, react-router-dom, recharts).
4) Start the development server with npm start.
5) Open your web browser and visit http://localhost:3000 to view the application.

# Additional Notes:
. Ensure that you have Node.js and npm installed on your system before running the application.
. The application has been tested on modern web browser - Google Chrome

# SCREENSHOTS 

# DASHBOARD
<img width="943" alt="Dashboard" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/4aa5f537-0588-46c4-b04b-6086b810a4c1">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="942" alt="DashboardSidebarClosed" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/174d4127-c957-49e5-8266-957bcefad535">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# PRODUCT PAGE
<img width="952" alt="ProductPage" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/73980366-4543-4e32-ab89-367ff03c818c">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="946" alt="ProductModal" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/c2eefbcc-0c95-46ae-9a5b-467bd83947f8">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ORDER PAGE 
<img width ="662" alt="OrderPage" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/10a3b3dc-2bd5-4548-b4f9-0f0148e2ea42">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="934" alt="Orderdetail" src="https://github.com/geetika2409/Erp-sytem/assets/124064719/00b6eaca-c342-4447-89a6-2ba1af69e042">
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

