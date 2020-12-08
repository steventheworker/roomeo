import styled from "styled-components/";

export const isMobile = styled.div && styled.div`` ? false : true;
export const px = (a: number | string) => {
  a = parseFloat(a + "");
  return (isMobile ? a + 18 : a) + "px";
};
