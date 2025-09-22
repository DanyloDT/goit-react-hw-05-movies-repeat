import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const MovieSearch = ({ setSearchParams }) => {
  const [value, setValue] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(value ? { query: value } : {});
    setValue('');
  };

  return (
    <div className="my-8">
      <form
        onSubmit={handleSearch}
        className="flex w-full overflow-hidden rounded-md shadow-sm"
      >
        <input
          type="text"
          placeholder="Enter the movie title..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3  text-lg bg-background text-foreground placeholder-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!value.trim()}
          className="flex items-center justify-center bg-ring px-4 text-muted hover:bg-secondary/50 hover:text-primary focus:outline-none focus:ring-2 focus:text-primary focus:bg-secondary/50"
        >
          <Search className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
