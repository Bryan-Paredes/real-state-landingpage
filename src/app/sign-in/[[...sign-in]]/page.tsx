import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}
