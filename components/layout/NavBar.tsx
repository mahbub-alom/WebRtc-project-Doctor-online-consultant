"use client";
import React from "react";
import Container from "./Container";
import { Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <div className="sticky top-0 border border-b-primary/10">
      <Container>
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Video />
            <div className="font-bold text-xl">doctor consultation</div>
          </div>
          <div className="flex gap-3 items-center">
            <UserButton />
            {!userId && (
              <>
                <Button
                  onClick={() => router.push("/sign-in")}
                  className="btn-sm"
                  variant="outline"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => router.push("sign-up")}
                  className="btn-sm"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
