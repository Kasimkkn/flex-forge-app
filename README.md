# Car Trading PWA - Development Specifications

## Project Overview
Create a Mobile-First Progressive Web Application (PWA) for car trading operations with a supplier-to-customer workflow. The application should have only 2 core modules: Authentication and Dashboard/Records Management.

## Technical Requirements
- Framework: React/Next.js or Vue.js (mobile-first approach)
- Styling: Tailwind CSS with custom dark theme
- Storage: Browser localStorage (no backend required)
- Responsiveness: Mobile-first with desktop optimization
- PWA Features: Service worker, manifest.json, offline capability

## Design Theme (Strictly Follow)
```css
Background: #000000 (pure black)
Text: #ffffff (white)
Borders: bg-white/10 (10% white opacity)
Accents: bg-white/20 (20% white opacity)
NO SHADOWS anywhere in the design
Clean, modern, minimalist aesthetic
```

## Module 1: Authentication System

### Login Page Specifications
- Route: `/login`
- Design: Clean centered form on black background
- Validation: Email regex + password minimum 8 characters

### User Credentials (Hardcoded)
```
User 1: hammad@cars.com | Password: hammad@123
User 2: kasim@cars.com | Password: kasim@123  
User 3: super_admin@cars.com | Password: super_admin@123
```

### Authentication Logic
- Validate credentials against hardcoded users
- Store authentication state in localStorage
- Auto-login on subsequent visits (check localStorage on app load)
- Redirect authenticated users to `/dashboard`
- Logout functionality to clear localStorage

### Form Validation Rules
- Email: Valid email format regex
- Password: Minimum 8 characters, required field
- Display validation errors below inputs
- Disable submit button until form is valid

## Module 2: Dashboard & Records Management

### Dashboard Layout (`/dashboard`)
- Header: User info + logout button
- Main Content: 4 widget cards + Add Record button + Records listing

### 4 Widget Cards
Desktop Behavior:
- 4 cards in a row (grid-cols-4)
- No horizontal overflow
- Equal width distribution

Mobile Behavior:
- Horizontal scroll (flex with overflow-x-auto)
- Hide scrollbar (`scrollbar-hide` class)
- Cards maintain minimum width

Widget Content:
1. Total Cars in Stock
2. Cars Sold This Month
3. Total Revenue
4. Pending Sales

### Add Record Button & Modal
Desktop Modal:
- Traditional center modal
- Fixed width (max-w-2xl)
- Backdrop blur effect
- Close on backdrop click + X button

Mobile Modal:
- Bottom drawer style
- Slide up animation
- Max height: 90vh
- Scrollable content area
- Drag-to-close handle at top

### Record Form Fields

#### Required Fields (Supplier Side)
```javascript
{
  car_image: "File upload (image validation)",
  car_name: "Text input (3-50 characters)",
  car_buying_price: "Number input (min: 1000)",
  supplier_name: "Text input (2-30 characters)",
  supplier_phone_number: "Text input (regex: phone validation)"
}
```

#### Optional Fields (Customer Side)
```javascript
{
  selling_price: "Number input (optional, min: 1000)",
  customer_name: "Text input (optional, 2-30 characters)",
  customer_phone_number: "Text input (optional, phone regex)",
  isActive: "Boolean toggle (default: true)",
  timestamp: "Auto-generated (Date.now())"
}
```

### Validation Rules
```javascript
const validationRules = {
  car_name: /^.{3,50}$/,
  supplier_name: /^.{2,30}$/,
  customer_name: /^.{2,30}$/,
  phone_numbers: /^[\+]?[1-9][\d]{0,15}$/,
  buying_price: "min: 1000, number only",
  selling_price: "min: 1000, number only",
  car_image: "Accept: .jpg, .jpeg, .png, .webp (max 5MB)"
}
```

### Records Listing UI
Layout: Product card grid
- Desktop: 3-4 cards per row
- Mobile: 1-2 cards per row
- Infinite scroll 


### Data Storage Structure
```javascript
const carRecord = {
  id: "unique_id",
  car_image: "base64_string_or_url",
  car_name: "string",
  car_buying_price: "number",
  supplier_name: "string", 
  supplier_phone_number: "string",
  selling_price: "number|null",
  customer_name: "string|null",
  customer_phone_number: "string|null",
  isActive: "boolean",
  timestamp: "number",
  created_by: "user_email"
}
```

## UI/UX Requirements

### Component Styling Guidelines
- All inputs: Black background, white text, white/10 border
- Buttons: white/20 background on hover, white/10 default
- Cards: white/10 border, black background
- No box-shadows anywhere
- Focus states: white/30 border
- Error states: red-500 text, red-500/20 border

## Progressive Web App Features
- Manifest.json: App name, icons, theme colors
- Service Worker: Basic caching strategy
- Offline Support: Show cached data when offline
- Install Prompt: Add to homescreen functionality

## Additional Features
- Search functionality: Filter records by car name, supplier
- Sort options: By date, price, name
- Export data: JSON download option
- Print functionality: Printable record cards
- Bulk operations: Select multiple records for batch actions
