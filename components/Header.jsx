import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { PenBox } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/user-menu";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { checkUser } from "@/lib/checkuser";

// import UserLoading from "@/components/user-loading";

const Header = async () => {
  const user = await checkUser();
  return (
    <div className="w-full relative h-24 bg-black/5">
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundBeams className="!absolute !inset-0" />
      </div>
      <header className="container mx-auto h-full relative z-10">
        <nav className="py-6 px-4 flex justify-between items-center h-full">
          <Link href="/">
            <h1 className="text-3xl font-bold">
              <Image
                src={"/Sprintxsmall.png"}
                alt="SprintX Logo"
                width={200}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/project/create">
              <Button
                variant="destructive"
                className="flex items-center gap-2 !bg-red-700  !hover:bg-red-800  text-white"
              >
                <PenBox size={18} />
                <span className="hidden md:inline">Create Project</span>
              </Button>
            </Link>
            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>
        </nav>
        {/* If user is signed out */}
        <SignedOut>
          <SignInButton />
        </SignedOut>

        {/* If user is signed in */}
        <SignedIn>{/* <UserButton /> */}</SignedIn>
        {/* <UserLoading /> */}
      </header>
    </div>
  );
};

export default Header;
