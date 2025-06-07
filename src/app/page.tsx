import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ArrowUpRight } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();
  return (
    <main className="w-full min-h-screen px-16 bg-white">
      <header className="w-full h-full flex flex-col container mx-auto py-28">
        <nav></nav>
        <div className="w-full flex flex-col justify-center items-center gap-y-4 px-6">
          <Badge>Beta 1.0</Badge>
          <div className="w-full text-center">
            <SparklesText text="Twinkle" />
          </div>
          <section className="flex flex-col items-center gap-y-1">
            <p className="mb-6">
              Meet the Collaborative Workspace, which makes your work much sharp
            </p>
            {!userId ? (
              <a href={"/white-boards"}>
                <Button className="w-fit">
                  Try for Free <ArrowUpRight />
                </Button>
              </a>
            ) : (
              <SignedIn>
                <a href={"/white-boards"}>
                  <Button className="w-fit">Go to whiteboards</Button>
                </a>
              </SignedIn>
            )}
          </section>
        </div>
      </header>
    </main>
  );
}
