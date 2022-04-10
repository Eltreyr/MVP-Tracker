import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@styled-icons/feather';

import { Container, GlobeLang, Chevrons, Picker, LangItem } from './styles';

const languages = {
  en: 'English',
  pt: 'Português BR',
};

export function LanguageSelector() {
  const [isLangSelectorOpen, setIsLangSelectorOpen] = useState(false);

  function handleLanguageSelector() {
    setIsLangSelectorOpen((state) => !state);
  }

  function handleLangClick(id: string) {
    setIsLangSelectorOpen(false);
  }

  return (
    <Container>
      <div onClick={handleLanguageSelector}>
        <GlobeLang />
        EN{' '}
        <Chevrons>
          {isLangSelectorOpen ? <ChevronUp /> : <ChevronDown />}
        </Chevrons>
      </div>

      <Picker isOpen={isLangSelectorOpen}>
        {Object.entries(languages).map(([id, name]) => (
          <LangItem key={id} onClick={() => handleLangClick(id)}>
            {name}
          </LangItem>
        ))}
      </Picker>
    </Container>
  );
}
