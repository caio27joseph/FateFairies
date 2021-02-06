import SkillItem from "@components/SkillItem";
import { Skill } from "@entities/Skill";
import { PrismaClient } from "@prisma/client";
import { findSkillUseCase } from "@useCases/FindSkill";
import { AnimateSharedLayout } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface IProps {
  skill: Skill;
}

const show: React.FC<IProps> = props => {
  const { skill } = props;
  return (
    <>
      <Head>
        <title>Skills - {skill.name}</title>
      </Head>
      {/* Navbar */}
      <AnimateSharedLayout>
        <SkillItem skill={skill}></SkillItem>
        <SkillItem unique skill={skill}></SkillItem>
      </AnimateSharedLayout>
    </>
  );
};
const getStaticProps: GetStaticProps = async ctx => {
  const skill = await findSkillUseCase.execute({ id: ctx.params.id as string });
  return {
    props: {
      skill,
    },
    revalidate: 120,
  };
};
const getStaticPaths: GetStaticPaths = async ctx => {
  const prisma = new PrismaClient();
  const skills = await prisma.skill.findMany();
  const paths = skills.map(skill => {
    return {
      params: {
        id: skill.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export { getStaticPaths, getStaticProps };
export default show;
