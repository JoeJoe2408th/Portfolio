# Portfolio Website

Một website portfolio cá nhân hiện đại được xây dựng với React và Vite, có giao diện đẹp mắt, responsive và nhiều hiệu ứng tương tác.

## 🌟 Tính năng

- **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient effects và animations mượt mà
- **Dark/Light Mode**: Chuyển đổi giữa chế độ sáng và tối
- **Responsive Design**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Animations**: Hiệu ứng fade-in, gradient text, và các animations tương tác
- **Star Background**: Nền sao động với hiệu ứng parallax
- **Splash Cursor**: Hiệu ứng cursor tùy chỉnh khi di chuột
- **Smooth Scrolling**: Cuộn mượt mà giữa các phần
- **Toast Notifications**: Thông báo đẹp mắt với Sonner

## 📦 Công nghệ sử dụng

### Deploy
- Dự án của tôi được deploy trên nền tảng Netlify với đường dẫn : https://duy-blogs-portfolio.netlify.app/

### Core
- **React 19** - Thư viện UI framework
- **Vite 6** - Build tool và dev server nhanh chóng
- **React Router DOM** - Routing cho SPA

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **CSS Animations** - Custom animations và transitions

### UI Components
- **Radix UI Toast** - Toast notification components
- **Sonner** - Toast notification library
- **Class Variance Authority** - Component variants management
- **clsx & tailwind-merge** - Utility functions cho className

## 🚀 Bắt đầu

### Yêu cầu
- Node.js (phiên bản 18 hoặc cao hơn)
- npm hoặc yarn

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/JoeJoe2408th/Portfolio.git
cd Portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập `http://localhost:5173`

## 📜 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build project cho production
- `npm run preview` - Preview build production
- `npm run lint` - Chạy ESLint để kiểm tra code
- `npm run deploy` - Deploy lên GitHub Pages (tự động build trước khi deploy)

## 📁 Cấu trúc thư mục

```
Portfolio/
├── public/                 # Static files
│   └── projects/          # Project images
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # UI components (gradientText, splashCursor, toast, etc.)
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Các phần chính

### Hero Section
Phần giới thiệu với avatar, tên và mô tả ngắn, có gradient text animation.

### About Section
Giới thiệu về bản thân, kinh nghiệm và mục tiêu nghề nghiệp.

### Skills Section
Hiển thị các kỹ năng và công nghệ đã sử dụng.

### Projects Section
Showcase các dự án đã thực hiện với:
- Hình ảnh dự án
- Mô tả chi tiết
- Tags công nghệ sử dụng
- Links đến demo và source code

### Contact Section
Form liên hệ hoặc thông tin liên hệ.

### Footer
Footer với thông tin bổ sung và links mạng xã hội.

## 🌐 Deployment

Website được deploy trên GitHub Pages tại: [https://JoeJoe2408th.github.io/Portfolio](https://JoeJoe2408th.github.io/Portfolio)

Để deploy:
```bash
npm run deploy
```

Script này sẽ tự động:
1. Build project (`npm run build`)
2. Deploy folder `dist` lên nhánh `gh-pages`

## 👤 Tác giả

**Vũ Duy (Joe)**
- GitHub: [@JoeJoe2408th](https://github.com/JoeJoe2408th)
- Portfolio: [https://JoeJoe2408th.github.io/Portfolio](https://JoeJoe2408th.github.io/Portfolio)

## 🙏 Lời cảm ơn

Cảm ơn bạn đã ghé thăm portfolio của tôi! Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, đừng ngần ngại liên hệ.
