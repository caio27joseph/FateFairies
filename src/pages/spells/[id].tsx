import SpellItem from "@components/SpellItem";
import { Spell } from "@entities/Spell";
import { AnimateSharedLayout } from "framer-motion";
import Head from "next/head";

const show: React.FC = () => {
  const spell: Spell = {
    id: null,
    name: "Avada Kedavra",
    description: "Lorem ipsum",
    published: true,
  };
  return (
    <>
      <Head>
        <title>Spells - Show</title>
      </Head>
      {/* Navbar */}
      <AnimateSharedLayout>
        <SpellItem spell={spell}></SpellItem>
        <SpellItem unique spell={spell}></SpellItem>
      </AnimateSharedLayout>
    </>
  );
};
export default show;
