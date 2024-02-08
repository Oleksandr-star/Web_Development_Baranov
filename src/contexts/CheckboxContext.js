import React, { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleCheckbox }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }
  return context;
};
