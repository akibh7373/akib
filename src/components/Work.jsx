import React from "react";
import styled from "styled-components";
import { Data } from "../data/data";
export default function Work() {
  return (
    <>
      <Container className="w-[40%] mx-auto pb-5">
        <HeadingTitle className="mb-4 uppercase text-left">Featured work</HeadingTitle>
        <CardGroup className="grid grid-cols-2 gap-4">
          {
            Data.map(({dribbbleLink, imgURL, title, subTitle, techTitle}) => {
              return (
                <Card className="p-4 border border-1 border-black">
                  <CardImg
                    href={dribbbleLink}
                    className="inline-block border border-1 border-black">
                    <img src={imgURL} alt="" />
                  </CardImg>
                  <CardTitle className="my-3 font-bold">{title}</CardTitle>
                  {/* <CardSubTitle>{subTitle}</CardSubTitle> */}
                  {/* <Tech>
                    <TechTitle className="px-2 rounded-sm bgSec inline-block">
                      {techTitle}
                    </TechTitle>
                  </Tech> */}
                </Card>
              );
            })
          }
        </CardGroup>
      </Container>
    </>
  );
}
const Container = styled.div``;
const HeadingTitle = styled.h2``;
const CardGroup = styled.div``;
const Card = styled.div``;
const CardImg = styled.a``;
const CardTitle = styled.div``;
const CardSubTitle = styled.div``;
const Tech = styled.div``;
const TechTitle = styled.div``;
