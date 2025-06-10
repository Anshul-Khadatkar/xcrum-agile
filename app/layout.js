import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SprintX",
  description: "Agile Project Management Tool",
  icons: {
    icon: "/SprintXlarge.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} animated-dotted-background`}
        suppressHydrationWarning
      >
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            baseTheme: shadesOfPurple,
            variables: {
              colorPrimary: "#6366f1",
              colorBackground: "#0f172a",
              colorInputBackground: "#1e293b",
              colorInputText: "#e2e8f0",
            },
            elements: {
              formButtonPrimary:
                "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md rounded-lg",
              card: "bg-slate-800 shadow-lg rounded-xl border border-slate-700",
              headerTitle: "text-indigo-400 text-xl font-semibold",
              headerSubtitle: "text-slate-400",
              input:
                "rounded-md bg-slate-700 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-indigo-500",
              footerActionText:
                "text-slate-300 hover:text-indigo-400 transition",
            },
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="text-center text-gray-300 py-8 bg-gray-900">
              Made with
              <span
                className="inline-block mx-1 text-red-500 hover:-translate-y-1 transition-transform duration-300 cursor-pointer hover:animate-pulse"
                title="Love"
              >
                ❤️
              </span>
              by Anshul Khadatkar
            </footer>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
