import React from 'react';

const ChipList = ({ chips, maxChipsDisplayed, maxTextLength }) => {
    if (!chips || chips.length === 0) {
      return <></>; // Return an empty Fragment if no chips are provided.
    }
  
    const visibleChips = chips.slice(0, maxChipsDisplayed);
    const exceedingChips = chips.slice(maxChipsDisplayed);
  
    return (
      <>
        {visibleChips.map((chip, index) => (
          <div key={index} data-testid={`chip-${index}`}>
            {chip.label.length > maxTextLength ? (
              <span>{chip.label.slice(0, maxTextLength - 1)}…</span>
            ) : (
              <span>{chip.label}</span>
            )}
          </div>
        ))}
        {exceedingChips.length > 0 && (
          <aside data-testid="exceeding-text">
            {`+${exceedingChips.length} more items`}
          </aside>
        )}
      </>
    );
  };
  
export default ChipList;