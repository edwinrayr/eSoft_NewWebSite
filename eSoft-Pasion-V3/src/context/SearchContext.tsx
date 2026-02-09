import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos qué datos vamos a compartir
type SearchContextType = {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

// 2. Creamos el contexto
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// 3. Creamos el Proveedor (El componente que envuelve a la App)
export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => setIsOpen(false);

  return (
    <SearchContext.Provider value={{ isOpen, openSearch, closeSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

// 4. Creamos un Hook para usarlo fácil en otros lados
export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch debe usarse dentro de un SearchProvider');
  }
  return context;
}