import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./second.css?inline";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <section class="containercss flex h-full w-full flex-col items-center justify-center">
      <div class="flex w-96 flex-col items-center justify-center bg-amber-200">
        <h1>second page</h1>
        <Link href="/" class="cursor-pointer text-blue-500 hover:text-blue-700">
          Home page
        </Link>
      </div>
      Second page
    </section>
  );
});

export const head: DocumentHead = {
  title: "Second Page",
  meta: [
    {
      name: "description",
      content: "This is the second page of the Qwik application.",
    },
  ],
};
