import React from 'react';
import LsButton from './components/Ls-Button/Ls-Button';

function App() {
  return (
    <div className="App">
        <LsButton>DefaultButton</LsButton>
        <LsButton btnType='primary' size='lg'>PrimaryLarge</LsButton>
        <LsButton btnType='danger' size='sm'>DangerSmall</LsButton>
        <LsButton btnType='warning'>WarningNormal</LsButton>
        <LsButton btnType='primary' disabled>Disabled</LsButton>
        <LsButton btnType='link' href='http://www.baidu.com'>Link</LsButton>
        <LsButton btnType='link' href='http://www.baidu.com' disabled>DisabledLink</LsButton>
    </div>
  );
}

export default App;
