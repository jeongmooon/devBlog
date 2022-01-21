import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarCompoent from '../../components/common/NavBarCompoent';

function NavBarContainer() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMEnu = () =>{
    setIsOpen(isOpen => !isOpen);
  }

  const onClickMain = () =>{
    navigate('/')
  }

  const onClickHtml = () =>{
    navigate('/html')
  }

  return <NavBarCompoent
    onClickMain={onClickMain}
    onClickHtml={onClickHtml}
    toggleMEnu={toggleMEnu}
    isOpen={isOpen} />;
}

export default NavBarContainer;
