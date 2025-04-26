"use client";

import Link from "next/link";
import { ShieldIcon, UploadIcon, DownloadIcon, LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <ShieldIcon className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to SecureShare
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Securely share and receive files with ease. Fast, reliable, and protected with end-to-end encryption.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/upload">
              <Button size="lg" className="gap-2">
                <UploadIcon className="h-5 w-5" />
                Start Uploading
              </Button>
            </Link>
            <Link href="/receive">
              <Button size="lg" variant="outline" className="gap-2">
                <DownloadIcon className="h-5 w-5" />
                Receive Files
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-semibold text-foreground">
            Why Choose SecureShare?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <LockIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-foreground">End-to-End Encryption</h3>
              <p className="mt-2 text-muted-foreground">
                Your files are protected with industry-leading encryption, ensuring only intended recipients can access them.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <UploadIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-foreground">Easy Uploads</h3>
              <p className="mt-2 text-muted-foreground">
                Upload files of any size quickly and securely with our intuitive interface.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <DownloadIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-foreground">Seamless Downloads</h3>
              <p className="mt-2 text-muted-foreground">
                Receive files effortlessly with secure links and fast download speeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container py-16 text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Ready to Share Securely?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join SecureShare today and experience the easiest way to share files safely.
        </p>
        <Link href="/profile">
          <Button size="lg" className="mt-8 gap-2">
            <ShieldIcon className="h-5 w-5" />
            Get Started
          </Button>
        </Link>
      </section>
    </div>
  );
}