import React, { createContext, useContext, useCallback, useState } from 'react';

interface ModalContextType {
  modals: {
    view: boolean;
    viewDoc: boolean;
    decline: boolean;
    response: boolean;
    add: boolean;
  };
  handleOpenModal: (modalType: string) => void;
  handleCloseModal: (modalType?: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  // Initialize state with an object to track modals
  const [modals, setModals] = useState({
    view: false,
    viewDoc: false,
    decline: false,
    response: false,
    add: false,
  });

  // to open modal
  const handleOpenModal = useCallback((modalType: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalType]: true,
    }));
  }, []);

  // handleClose to close all modals when called without an argument
  const handleCloseModal = useCallback((modalType?: string) => {
    if (modalType) {
      setModals((prevModals) => ({
        ...prevModals,
        [modalType]: false,
      }));
    } else {
      // Close all modals
      setModals({
        view: false,
        viewDoc: false,
        decline: false,
        response: false,
        add: false,
      });
    }
  }, []);

  return (
    <ModalContext.Provider value={{ modals, handleOpenModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// Custom hook to use the modal context
export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}