import { Container } from "./WrapperStyles";

const Wrapper = ({ pathName, children }) => {
  return (
    <Container className={pathName !== "/" && "wrapper-container"}>
      {children}
    </Container>
  );
};

export default Wrapper;
