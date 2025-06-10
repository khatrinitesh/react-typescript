import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAutocompleteStore } from "../store/autocompleteStore";
import { SUGGESTIONS } from "../constants/constants";
import type { SuggestionItem } from "../interface";

const AutocompleteComp: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const setSelected = useAutocompleteStore((state) => state.setSelected);

  const filtered = SUGGESTIONS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: SuggestionItem) => {
    setSelected(item);
    setQuery(item.label);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full px-4 py-2 border rounded shadow"
        placeholder="Search fruits..."
      />

      <AnimatePresence>
        {isOpen && filtered.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-10 mt-2 w-full bg-white border rounded shadow"
          >
            {filtered.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutocompleteComp;
