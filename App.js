import React, { useState, useEffect } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import theme from './theme/theme';
import themeContext from './theme/themeContext';
import AppNavigationContainer from './components/navigation/Navigation';
import alertsData from './data/alerts.json';
import { LanguageProvider } from './contexts/LanguageContext'; // Updated import path

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    setAlerts(alertsData.alerts);
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
          <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
            <AppNavigationContainer alerts={alerts} />
          </NavigationContainer>
        </themeContext.Provider>
      </I18nextProvider>
    </LanguageProvider>
  );
};

export default App;
