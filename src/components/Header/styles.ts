import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 160px;
  height: 68px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 134px;
  height: 34px;
  top: 11px;
`;

export const SearchWrapper = styled.div`
  width: min(599px, 100%);
  top: 0;
  background: var(--color-primary);
  max-height: 47px;

  box-shadow: 0px 5px 1px -5px #111;

  display: flex;
  align-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  outline-width: 0;
  padding: 0 10px 0 12px;
  background: var(--primary);
`;

export const PromoContainer = styled.img`
  max-width: 340px;
  max-height: 39px;
`;
