import './App.css';
import Settings from './pages/Settings';
import Timer from './pages/Timer';
import { useState } from 'react';
import SettingContext from './components/SettingContext';
import MyTodoList from './pages/MyTodoList';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <MyTodoList />
      <SettingContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingContext.Provider>
    </main>
  );
}

export default App;
