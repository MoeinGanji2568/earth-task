# 🌍 Earth Task - Interactive Trading Platform

A modern, interactive web application showcasing a trading platform with 3D globe visualization, live trading data, and dynamic market opportunities. Built with Next.js 15, React 19, and cutting-edge web technologies.

## ✨ Features

### 🌐 Core Functionality

- **Interactive 3D Globe**: Real-time 3D globe visualization with dynamic markers and smooth animations
- **Live Trading Dashboard**: Real-time trade statistics with animated counters
- **Market Opportunities**: Dynamic market cards showing crypto trading pairs with live data
- **Trust & Testimonials**: User testimonials section with smooth transitions
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### 🎨 Visual Elements

- **Smooth Animations**: Powered by Motion (Framer Motion) for fluid user interactions
- **3D Graphics**: Three.js integration for immersive globe experience
- **Dynamic Typography**: Animated text components with various animation modes
- **Interactive Components**: Hover effects, scroll-triggered animations, and gesture controls

### 📊 Data Visualization

- **Real-time Market Data**: Mock market data with realistic crypto trading information
- **Live Trade Statistics**: Animated counters showing platform usage metrics
- **Geographic Markers**: Random location markers on the 3D globe
- **Market Cards**: Detailed crypto trading pair information with price changes

## 🛠️ Technology Stack

### Frontend Framework

- **Next.js 15.3.3** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **React Icons** - Icon library
- **React Spring** - Physics-based animations

### 3D & Graphics

- **Three.js 0.177.0** - 3D graphics library
- **Cobe 0.6.4** - Globe visualization library

### State Management

- **Zustand 5.0.5** - Lightweight state management
- **Custom Hooks** - Reusable logic for globe interactions

### Utilities

- **Lodash** - JavaScript utility library
- **UUID** - Unique identifier generation
- **React CountUp** - Animated number counters
- **usehooks-ts** - TypeScript hooks utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd earth-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
├── assets/                 # Static assets (images, fonts)
├── components/             # Reusable UI components
│   ├── CombinedGlobe/     # 3D Globe components
│   └── SlideShow/         # Carousel/slideshow components
├── core/                   # Core business logic
│   ├── constants/         # Application constants
│   ├── lib/               # Utility libraries
│   └── utils/             # Helper functions
├── hooks/                  # Custom React hooks
│   └── globe/             # Globe-specific hooks
├── store/                  # Zustand state management
├── styles/                 # Global styles
├── ui/                     # UI component library
│   ├── motion/            # Animated components
│   ├── SectionBadge/      # Section badges
│   └── Typography/        # Typography components
└── view/                   # Page components
    └── home/              # Home page components
        ├── components/    # Home-specific components
        │   ├── live-trades/    # Live trading section
        │   ├── Opportunities/  # Market opportunities
        │   ├── questions/      # FAQ section
        │   └── trusted/        # Testimonials section
```

## 🎮 Key Components

### 3D Globe System

- **GlobeCanvas**: Main 3D canvas with Three.js integration
- **GlobeRing**: Animated ring around the globe
- **GlobeTest**: Main globe component with interaction handlers
- **Custom Hooks**: Specialized hooks for globe configuration, events, and motion

### Market Opportunities

- **MarketList**: Displays crypto trading pairs
- **MarketCard**: Individual market card with price data
- **Responsive Layout**: Desktop grid vs mobile slideshow

### Live Trading Section

- **TradeDynamicList**: Real-time trade feed
- **TradeStatisticsList**: Platform statistics
- **Animated Counters**: CountUp integration for live numbers

### Trust Section

- **TrustCommentsSection**: User testimonials carousel
- **TrustCommentSlider**: Smooth testimonial transitions

## 🎨 Design Features

### Animations

- **Scroll-triggered animations** using Motion's `useScroll`
- **Spring animations** for natural motion
- **Text animations** with word-by-word reveal
- **Hover effects** and micro-interactions

### Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint-specific layouts** for different screen sizes
- **Touch-friendly interactions** for mobile devices

### Performance

- **Turbopack** for faster development builds
- **Optimized 3D rendering** with Three.js
- **Efficient state management** with Zustand
- **Lazy loading** and code splitting

## ⚙️ Configuration

### Next.js Configuration

- **Image optimization** with remote patterns
- **TypeScript** strict mode enabled
- **ESLint** configuration for code quality

### Tailwind CSS

- **Custom color palette** with brand colors
- **Responsive utilities** for all components
- **Custom animations** and transitions

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

No environment variables required for this demo project.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created as a technical test task.

---

**Built with ❤️ using Next.js, React, and modern web technologies**
