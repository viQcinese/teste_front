import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  label: string;
  disabled?: boolean;
  containerStyle?: React.CSSProperties;
  iconArray?: JSX.Element[];
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  iconArray,
  disabled,
  label,
  containerStyle,
  ...rest
}) => {
  return (
    <Container style={containerStyle}>
      <label>{label && label}</label>
      <InputContainer disabled={!!disabled}>
        {!disabled && Icon && <Icon size={24} />}
        {!disabled && iconArray && iconArray.map(Icon => Icon)}
        <input {...rest} />
        {disabled && Icon && <Icon size={24} />}
        {disabled && iconArray && iconArray.map(Icon => Icon)}
      </InputContainer>
      <span />
    </Container>
  );
};

export default Input;
