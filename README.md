# SoulSpace

SoulSpace is your peaceful sanctuary for mood journaling, inner growth, and daily affirmations. Enjoy features like a mood journal, a Peace Garden that grows with your journey, a Peace Jar of gentle affirmations, and relaxing music—all in a calming, responsive web app.

---

## Features

- **Mood Journal:** Write daily entries or read inspirational quotes. Your entries and reading history are saved locally in your browser.
- **Peace Garden:** Visualize your progress as a growing plant, from seedling to flowering tree, based on your daily visits and journaling activity.
- **Peace Jar:** Receive peaceful quotes and affirmations at any time to boost your mood.
- **Music Player:** Listen to calming music while you use the app.
- **Responsive Design:** Works beautifully on desktop and mobile devices.

---

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd soulspace
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main page by modifying `app/page.js`. The page auto-updates as you edit the file.

---

## Project Structure

- `app/` – Main Next.js app directory (including layout and global styles)
- `components/` – UI components like Header, Footer, MoodJournal, PeaceGarden, PeaceJar, WelcomePage, and MusicPlayer
- `public/` – Static assets (images, icons, etc.)

---

## Technologies Used

- [Next.js](https://nextjs.org) – React framework for server-side rendering and static site generation
- [React](https://react.dev/) – UI library
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) – For optimized font loading ([Geist](https://vercel.com/font))
- LocalStorage – For saving journal entries and reading history

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) – your feedback and contributions are welcome!

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
