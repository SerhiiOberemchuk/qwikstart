import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class={styles.container}>
      <h1 class="mb-2 text-3xl font-bold">Welcome to our Web Agency</h1>
      <p class="mb-4 text-center">
        We craft fast and modern websites using cutting-edge technology.
      </p>
      <nav>
        <ul class="flex gap-4">
          <li>
            <Link href="/services" class="cursor-pointer text-blue-600 hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/second" class="cursor-pointer text-blue-600 hover:underline">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Web Agency",
  meta: [
    {
      name: "description",
      content: "Professional web development services",
    },
  ],
};
