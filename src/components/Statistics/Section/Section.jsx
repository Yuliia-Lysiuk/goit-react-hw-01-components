import propTypes from 'prop-types';
import { Sections, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      {children}
    </Sections>
  );
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};