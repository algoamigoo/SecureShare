"use client";

import Link from "next/link";
import { LogoutButton } from "../auth/LogoutButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ShieldIcon, UploadIcon, DownloadIcon, UserIcon, LogOutIcon, SunIcon, MoonIcon, HouseIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const Header = () => {
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left Section - Logo */}
        <Link href="/home" className="flex items-center gap-2 font-semibold">
          <ShieldIcon className="h-5 w-5 text-primary" />
          <span className="text-lg">SecureShare</span>
        </Link>

        {/* Center Section - Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/home"
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              pathName === "/home" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <HouseIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/upload"
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              pathName === "/upload" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <UploadIcon className="h-4 w-4" />
            Upload
          </Link>
          <Link
            href="/receive"
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              pathName === "/receive" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <DownloadIcon className="h-4 w-4" />
            Receive
          </Link>
        </nav>

        {/* Right Section - Theme Toggle, Profile, and Logout */}
        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="gap-1"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Link href="/profile">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full p-2",
                pathName === "/profile" ? "text-primary border-primary" : "text-muted-foreground"
              )}
              aria-label="Profile"
            >
              <UserIcon className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
          <LogoutButton>
            <Button variant="outline" size="sm" className="gap-1">
              <LogOutIcon className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </LogoutButton>
        </div>
      </div>
    </header>
  );
};