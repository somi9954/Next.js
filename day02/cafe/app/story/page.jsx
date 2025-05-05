//leading-snug :자간, stagger : 순서대로 글자 올라가게 만들기 
"use client";
import { motion } from "motion/react";

const page = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[url('/story1.jpg')] bg-cover bg-center">
        <motion.section className="flex flex-col text-5xl text-center text-white font-bold leading-snug">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            브라질 이파네마 농장의 언덕에는
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            지난 10년간 같은 자리에 줄곧
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            카페베네 팻말이 꽂혀있었습니다
          </motion.span>
        </motion.section>
      </div>
    </>
  );
};

export default page;
