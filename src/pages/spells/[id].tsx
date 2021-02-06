import SpellItem from "@components/SpellItem";
import { Spell } from "@entities/Spell";
import { PrismaClient } from "@prisma/client";
import { findSpellUseCase } from "@useCases/FindSpell";
import { AnimateSharedLayout } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface IProps {
  spell: Spell;
}

const show: React.FC<IProps> = props => {
  const { spell } = props;
  return (
    <>
      <Head>
        <title>Spells - {spell.name}</title>
      </Head>
      {/* Navbar */}
      <AnimateSharedLayout>
        <SpellItem spell={spell}></SpellItem>
        <SpellItem unique spell={spell}></SpellItem>
      </AnimateSharedLayout>
    </>
  );
};
const getStaticProps: GetStaticProps = async ctx => {
  const spell = await findSpellUseCase.execute({ id: ctx.params.id as string });
  return {
    props: {
      spell,
    },
  };
};
const getStaticPaths: GetStaticPaths = async ctx => {
  const prisma = new PrismaClient();
  const spells = await prisma.spell.findMany();
  const paths = spells.map(spell => {
    return {
      params: {
        id: spell.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
    revalidate: 120,
  };
};

export { getStaticPaths, getStaticProps };
export default show;
