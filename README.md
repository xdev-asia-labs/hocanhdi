# Học Anh Đi 🇬🇧

Website học tiếng Anh miễn phí từ **cơ bản đến nâng cao**, build bằng **Next.js 14 (App Router) + Tailwind CSS + Firebase Auth**.

- ✅ **Static export** → deploy free trên Vercel / Netlify / GitHub Pages / Cloudflare Pages.
- ✅ **Đăng nhập Google** qua Firebase Auth (gói Spark - **miễn phí**).
- ✅ **Đồng bộ tiến độ** qua Firestore (hoặc dùng `localStorage` nếu chưa cấu hình Firebase).
- ✅ **PWA** với manifest.
- ✅ **SEO**: metadata mỗi trang, sitemap.xml tự sinh, robots.txt, OpenGraph.
- ✅ **TTS** phát âm chuẩn qua Web Speech API.

## Nội dung học

| Module | Mô tả |
|---|---|
| `/alphabet` | 26 chữ cái + IPA + ví dụ + phát âm |
| `/vocabulary` | Flashcards 5 chủ đề (gia đình, đồ ăn, du lịch, công việc, nâng cao) |
| `/grammar` | 12 bài ngữ pháp A1 → C2 |
| `/quiz` | 10 câu trắc nghiệm có giải thích |
| `/listening` | 5 bài nghe A1-C1 + dictation |
| `/blog` | Bài viết mẹo học tiếng Anh |
| `/dashboard` | Theo dõi tiến độ học |

## Cài đặt

```bash
npm install
npm run dev      # dev tại http://localhost:3000
npm run build    # static export → ./out
```

Sau khi `npm run build`, thư mục `out/` chứa toàn bộ HTML tĩnh - upload đâu cũng chạy.

## Cấu hình Firebase (để lưu tiến độ)

> **Bỏ qua bước này** nếu bạn chỉ muốn lưu tiến độ trên trình duyệt — app vẫn hoạt động.

1. Vào https://console.firebase.google.com/ → **Add project** (tạo mới, free).
2. **Build → Authentication → Sign-in method → Google → Enable**.
3. **Build → Firestore Database → Create database** (production mode, region tùy chọn).
4. Vào **Project settings → Your apps → Web (`</>`)** → copy config.
5. Tạo file `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-app
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc
```

6. Vào **Firestore → Rules**, dán:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

7. Vào **Authentication → Settings → Authorized domains**, thêm domain bạn deploy (vd: `your-site.vercel.app`).

### Hạn mức free (gói Spark) — đủ cho dự án cá nhân

- **Auth**: không giới hạn user.
- **Firestore**: 1 GiB lưu trữ, 50K reads/day, 20K writes/day, 20K deletes/day.
- **Hosting** (nếu dùng Firebase Hosting): 10 GiB storage, 360 MB/day transfer.

## Deploy free

| Nền tảng | Cách |
|---|---|
| **GitHub Pages** | **Đã có workflow tự động** — xem dưới |
| **Vercel** | `vercel --prod` (auto detect Next.js, free hobby) |
| **Netlify** | `netlify deploy --prod --dir=out` |
| **Cloudflare Pages** | Build command: `npm run build`, Output: `out` |

### Deploy lên GitHub Pages với domain `hocanhdi.xdev.asia`

Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) tự động build và deploy mỗi khi push vào `main`.

**Bước thiết lập 1 lần:**

1. **Repo Settings → Pages → Source:** chọn **GitHub Actions**.
2. **Repo Settings → Secrets and variables → Actions → New repository secret**, thêm các secret Firebase (nếu dùng Auth):
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
3. **Cấu hình DNS** ở nhà cung cấp domain `xdev.asia`, thêm record CNAME:
   ```
   hocanhdi  CNAME  <username>.github.io.
   ```
   (Thay `<username>` bằng GitHub username/org sở hữu repo.)
4. **Repo Settings → Pages → Custom domain:** điền `hocanhdi.xdev.asia` và bật **Enforce HTTPS** (đợi vài phút sau khi DNS active).
5. Trong **Firebase Console → Authentication → Settings → Authorized domains**, thêm `hocanhdi.xdev.asia`.
6. Push code lên `main` → workflow tự chạy. Theo dõi tại tab **Actions**.

File `public/CNAME` đã có sẵn nội dung `hocanhdi.xdev.asia` để GitHub Pages giữ custom domain qua mỗi lần deploy.

## Cấu trúc thư mục

```
src/
  app/                # App Router pages
    alphabet/
    vocabulary/
    grammar/
    quiz/
    listening/
    blog/[slug]/
    dashboard/
    layout.tsx
    page.tsx
    sitemap.ts
  components/         # Navbar, Footer
  lib/                # firebase, AuthProvider, ProgressProvider, speech
  data/content.ts     # Toàn bộ nội dung học (alphabet, vocab, grammar, quiz, blog)
public/               # icon, manifest, robots
```

## License

MIT — dùng tự do, ghi nguồn nếu được.
