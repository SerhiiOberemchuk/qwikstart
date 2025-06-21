import { component$, type DocumentHead } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="flex flex-col items-center gap-4 p-4">
      <h1 class="text-2xl font-bold">Our Services</h1>
      <p>We build modern websites and web applications for businesses.</p>
      <Link href="/" class="text-blue-600 hover:underline">
        Back to home
      </Link>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Services",
  meta: [
    {
      name: "description",
      content: "Services offered by our web agency",
    },
  ],
};
