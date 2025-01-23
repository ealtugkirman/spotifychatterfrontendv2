"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AirplayIcon } from "lucide-react";
import Link from "next/link";

export default function WelcomeAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-[#191414] text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-[#1DB954]">
          Welcome to PlaylistChatter
        </CardTitle>
        <CardDescription className="text-center text-gray-300">
          Connect with Spotify to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Login with Spotify
        </button>
      </CardContent>
    </Card>
  );
}
