import React from 'react';
import LsButton from './components/Ls-Button/Ls-Button';
import LsAlert from './components/Ls-Alert/Ls-Alert';

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

        <LsAlert title='Default Alert'></LsAlert>
        <LsAlert title='Danger Alert' type='danger'></LsAlert>
        <LsAlert title='Success Alert' type='success'></LsAlert>
        <LsAlert title='Warning Alert' type='warning'></LsAlert>
        <LsAlert title='Desc Alert' type='success' message='这是一段描述文字'></LsAlert>
    </div>
  );
}

export default App;
