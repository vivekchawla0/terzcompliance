# Terz Compliance — Regulatory Consulting Platform

Official website and digital compliance platform for **Terz Compliance** — premier regulatory compliance advisory in India for Medical Devices, IVDs, Cosmetics, Legal Metrology (LMPC), Import/Export (IEC), EPR, and NPPA Pricing Regulations.

🌐 **Website**: [https://www.terzcompliance.com](https://www.terzcompliance.com)

---

## 📋 Overview

Terz Compliance provides end-to-end regulatory strategy, CDSCO licensing, regulatory approvals, post-market surveillance, and price-monitoring compliance for domestic medical device manufacturers and international importers.

### Core Services
- **NPPA Registration & DPCO Compliance**: Comprehensive IPDMS 2.0 company & device registration, Form II / Form V submissions, price monitoring (scheduled ceiling price & non-scheduled 10% annual cap compliance), and audit readiness.
- **Medical Device Licensing**: CDSCO Form MD-14/15 import licenses, manufacturing licenses (MD-3, MD-5, MD-7, MD-9), classification, and dossier preparation.
- **IVD (In-Vitro Diagnostics)**: Diagnostic kit and analyzer regulatory pathways and performance evaluation.
- **LMPC (Legal Metrology Packaged Commodities)**: Labeling, pre-packaged commodity registrations, and standard compliance.
- **IEC (Import Export Code)**: DGFT liaison and trade documentation.
- **EPR (Extended Producer Responsibility)**: Plastic and electronic waste management authorizations under CPCB.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism System
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + Radix UI primitives
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Backend / Database**: [Supabase](https://supabase.com/) integration

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vivekchawla0/terzcompliance.git
   cd terzcompliance
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:8080`.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
terzcompliance/
├── public/                 # Static public assets, favicon, robots.txt
├── src/
│   ├── assets/             # Regulatory illustrations, device imagery, logos
│   ├── components/         # Reusable UI components & layouts
│   │   ├── nppa/           # Dedicated NPPA compliance & applicability components
│   │   └── ui/             # shadcn/ui primitives
│   ├── hooks/              # Custom React hooks (scroll animation, theme, etc.)
│   ├── lib/                # Utility helpers
│   ├── pages/              # Website route pages (Home, Services, NPPA, About, Contact, etc.)
│   ├── App.tsx             # Main routing & application wrapper
│   └── main.tsx            # Application entry point
├── .env.example            # Sample environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS theme configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📄 License

Proprietary © Terz Compliance. All rights reserved.
