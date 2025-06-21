import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class="bg-gray-800 p-4 text-white">
      <nav class="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/second">About</Link>
      </nav>
    </header>
  );
});
