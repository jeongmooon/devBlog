import React, { useState } from 'react';
import NavBarCompoent from '../../components/common/NavBarCompoent';

function NavBarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMEnu = () =>{
    setIsOpen(isOpen => !isOpen);
  }
  console.log(isOpen)

  return <NavBarCompoent toggleMEnu={toggleMEnu} isOpen={isOpen} />;
}

export default NavBarContainer;
