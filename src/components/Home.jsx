import React from "react";
import styled from "styled-components";
import Header from "./Header";
export default function Home() {
  return (
    <>
      <Container className="flex justify-center items-center flex-col h-[300px] w-[80%] mx-auto">
        <HeadingTitle className="text-7xl font-bold">
          Hey, it's <span className="capitalize">akib</span>.
        </HeadingTitle>
        <HeadingSubTitle className="mt-8">
          As a <span className="px-2 rounded-sm bgSec">Frontend</span> Developer, I love crafting seamless
          experiences &amp; delightful interfaces.
        </HeadingSubTitle>
      </Container>
    </>
  );
}
const Container = styled.div``;
const HeadingTitle = styled.h1``;
const HeadingSubTitle = styled.p``