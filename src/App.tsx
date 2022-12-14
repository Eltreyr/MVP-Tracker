import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { GlobalStyle } from './styles/Global';
import { Themes } from './styles/Themes';

import { Main } from './pages/Main';

import { Header } from './components/Header';
import { WarningHeader } from './components/WarningHeader';
import { Footer } from './components/Footer';

import { SettingsContext } from './contexts/SettingsContext';
import { MvpProvider } from './contexts/MvpsContext';
import { LOCALES } from './locales';
import { messages } from './locales/messages';

export default function App() {
  const { theme, language } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={Themes[theme] || Themes.dark}>
      <IntlProvider
        messages={messages[language]}
        locale={language}
        defaultLocale={LOCALES.ENGLISH}
      >
        <WarningHeader text={messages[language]['under_development']} />
        {Notification.permission !== 'granted' && (
          <WarningHeader text={messages[language]['disabled_notifications']} />
        )}

        <Header />

        <MvpProvider>
          <Main />
        </MvpProvider>
        <Footer />
      </IntlProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
