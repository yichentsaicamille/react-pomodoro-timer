import { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingContext from '../components/SettingContext';
import BackButton from '../components/BackButton';
import '../styles/slider.css';

function Settings() {
  const settingsInfo = useContext(SettingContext);
  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <BackButton
          onClick={() => {
            settingsInfo.setShowSettings(false);
          }}
        />
      </div>
    </div>
  );
}

export default Settings;
