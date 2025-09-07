# Ayurvedic Diet Management App - MVP Implementation Plan

## Core Files to Create/Modify

### 1. Authentication & Routing
- `src/contexts/AuthContext.tsx` - Authentication context for user management
- `src/pages/Login.tsx` - Unified login page with role selection
- `src/pages/DoctorDashboard.tsx` - Doctor dashboard with patient management
- `src/pages/PatientDashboard.tsx` - Patient dashboard with diet charts
- `src/components/ProtectedRoute.tsx` - Route protection component

### 2. Core Components
- `src/components/Navbar.tsx` - Navigation with multilingual support
- `src/components/PatientManagement.tsx` - Patient CRUD operations for doctors
- `src/components/DietGenerator.tsx` - Diet chart generation using API
- `src/components/FoodDatabase.tsx` - Food search and selection component
- `src/components/LanguageSelector.tsx` - Language switching component

### 3. Utility Files
- `src/lib/api.ts` - API integration for diet generation
- `src/lib/foodDatabase.ts` - Mock food database with Ayurvedic properties
- `src/lib/translations.ts` - Multilingual support
- `src/types/index.ts` - TypeScript type definitions

## Key Features Implementation

### Authentication System
- Role-based login (Doctor/Patient)
- Local storage for session management
- Protected routes based on user role

### Doctor Features
- Patient management (add, edit, view patients)
- Diet chart generation for patients
- Patient health parameter tracking
- Recipe-based diet planning

### Patient Features
- View assigned diet charts
- Download diet charts as PDF
- Track personal health metrics
- Access to Ayurvedic food information

### Shared Features
- Multilingual support (English, Hindi, Sanskrit terms)
- Contact us page with creator information
- Responsive mobile design
- Food database with Ayurvedic properties

## Technical Architecture
- Frontend: React + TypeScript + Tailwind CSS + Shadcn/UI
- State Management: React Context + Local Storage
- API Integration: Google API for diet generation
- File Structure: Separated for team collaboration
- Mobile-first responsive design

## Implementation Priority
1. Basic authentication and routing
2. Dashboard layouts for both roles
3. Food database and search functionality
4. Diet generation with API integration
5. Patient management system
6. Multilingual support
7. PDF generation for diet charts
8. Contact page and additional features