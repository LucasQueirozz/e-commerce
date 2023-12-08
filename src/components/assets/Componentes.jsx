import styled from 'styled-components';

export const BaseButton = styled.button`
  color: ${(props) => {
    if (props.type === 'sucesso') return "#333d29";
    else if (props.type === 'alerta') return "#333d29";
    else return "#1f2421";
  }};
  background-color: ${(props) => {
    if (props.type === 'sucesso') return "#38b000";
    else if (props.type === 'alerta') return "#fb6107";
    else return "#ced4da";
  }};
  padding: 5px 10px 5px 12px;
  border: none;
  box-shadow: 5px 9px 50px -15px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  cursor: pointer;
`;

export const BaseInput = styled.input`
`;
