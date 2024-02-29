import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Complaint() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background p-4 rounded ">
      <div className="grid w-full gap-4 p-4 md:gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Client Portal</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome to the client portal. Here you can file a complaint, check
            the status of your previous complaints, and check your subscription
            expiry.
          </p>
        </div>
        <div className="grid gap-4 p-4 border rounded-lg md:gap-6 md:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">File a complaint</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {"We'll get back to you as soon as possible."}
            </p>
          </div>
          <form>
            <div className="grid gap-4 space-y-0 sm:grid-cols-2 sm:gap-8">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="complaint">Complaint</Label>
              <Textarea
                id="complaint"
                placeholder="Enter your complaint"
                required
              />
            </div>
            <Button className="w-full">Submit complaint</Button>
          </form>
        </div>

        <div className="grid gap-4 p-4 border rounded-lg md:gap-6 md:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Check complaint status</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your previous complaints and their status.
            </p>
          </div>
          <div className="grid gap-4 p-4 border rounded-lg md:gap-6 md:p-8">
            <div className="grid items-center gap-4 sm:grid-cols-2">
              <div>Complaint #12345</div>
              <div>Status: In progress</div>
              <div>Contact Agent: John Doe</div>
              <div>Date: February 29, 2024</div>
            </div>
            <div className="grid items-center gap-4 sm:grid-cols-2">
              <div>Complaint #54321</div>
              <div>Status: Resolved</div>
              <div>Contact Agent: Jane Smith</div>
              <div>Date: February 28, 2024</div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4 border rounded-lg md:gap-6 md:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Subscription Expiry</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Time left until your current subscription expires.
            </p>
          </div>
          <div className="grid gap-4 p-4 border rounded-lg md:gap-6 md:p-8">
            <div className="grid items-center gap-4 sm:grid-cols-2">
              <div>Subscription Expires In:</div>
              <div>30 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
