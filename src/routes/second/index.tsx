import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./second.css?inline";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <section class="containercss flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-96 flex-col items-center justify-center bg-amber-200">
        <h1 class="text-xl font-bold">About Our Agency</h1>
        <p class="mb-2 text-center">We are passionate about building amazing websites.</p>
        <Link href="/" class="cursor-pointer text-blue-500 hover:text-blue-700">
          Home page
        </Link>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "Learn more about our web agency and team.",
    },
  ],
};
