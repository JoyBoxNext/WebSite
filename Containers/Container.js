import ContainerWrapper from "./ContainerWrapper";

const Container = ({ children, baraxolkaData }) => {
  return (
    <ContainerWrapper>
      <div>{children}</div>
    </ContainerWrapper>
  );
};

export default Container;
