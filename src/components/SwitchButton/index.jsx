import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import '../../App.scss';

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const choice = (theme.currentTheme === 'light') ? 'dark' : 'light';
  return (
    <button onClick={theme.switchTheme}>{choice} mode</button>
  );
};

export default SwitchButton;
