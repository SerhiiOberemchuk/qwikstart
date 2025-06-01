import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/ui/Footer";
import { Header } from "~/components/ui/Header";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
