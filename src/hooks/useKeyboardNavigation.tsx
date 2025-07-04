
import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onHomeClick: () => void;
  onSearchClick: () => void;
  onCartClick: () => void;
  onContactClick: () => void;
}

export const useKeyboardNavigation = ({
  onHomeClick,
  onSearchClick,
  onCartClick,
  onContactClick
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger if Alt key is pressed with number keys
      if (event.altKey) {
        switch (event.key) {
          case '1':
            event.preventDefault();
            onHomeClick();
            break;
          case '2':
            event.preventDefault();
            onSearchClick();
            break;
          case '3':
            event.preventDefault();
            onCartClick();
            break;
          case '4':
            event.preventDefault();
            onContactClick();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onHomeClick, onSearchClick, onCartClick, onContactClick]);
};
