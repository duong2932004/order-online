import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Our Restaurant
        </h1>
        <p className="text-center mb-4">
          Scan the QR code to view our menu and place your order
        </p>
      </div>
    </main>
  );
}
