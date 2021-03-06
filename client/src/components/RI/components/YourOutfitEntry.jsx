/* eslint-disable react/jsx-no-bind */
import React from 'react';
import YourOutfitCard from './YourOutfitCard';

export default function YourOutfitEntry({
  singleLocalOutfit,
  localStorageOutfits,
  setLocalStorageOutfits,
}) {
  function removeProductLocally() {
    const { id } = singleLocalOutfit;
    localStorage.removeItem(id);
    const removeProduct = localStorageOutfits.filter((currentOutfit) => currentOutfit.id !== id);
    setLocalStorageOutfits(removeProduct);
  }

  return (
    <YourOutfitCard
      urlOne={singleLocalOutfit.results[0].photos[0].thumbnail_url}
      urlTwo="https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
      name={singleLocalOutfit.name}
      category={singleLocalOutfit.category}
      price={`$${Math.trunc(singleLocalOutfit.default_price)}`}
      removeProductLocally={removeProductLocally}
      id={singleLocalOutfit.product_id}
    />
  );
}
