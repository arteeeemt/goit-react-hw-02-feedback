import React from 'react';
import { SectionTitle , SectionContain,} from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContain>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContain>
  );
};
