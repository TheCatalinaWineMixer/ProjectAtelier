import React, { useState, useEffect } from 'react';
import sampleStyles from './sampleStyles.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { SelectorContainer, ImageContainer, BadgeStyled } from './styles/StyledStyleSelector.js';
import { ProductInfo } from './styles/ProductInfoStyled.js';
import { SelectSize, SelectQuantity, AddCartButton } from './styles/SelectSizeStyled.js';

function StyleSelector({ styles, product, changeGallery }) {
  const [currentSku, setSku] = useState({});
  const [quantityArr, setQuantity] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  let prodSkus = styles[0].skus;

  useEffect(() => {
    generateOptions(currentSku.quantity)
  }, [currentSku, selectedStyle])

  function click(product) {
    // console.log(styles, product)
  }

  function generateOptions(num) {
    let html = [];
    for(let i = 1; i <= num; i++) {
      html.push(i);
    }
    setQuantity(html);
  }

  return(
    <SelectorContainer>
      <ProductInfo>
        <h2> {styles[0].name} </h2>
        <span> ${styles[0].original_price} </span>
        <br></br>
      </ProductInfo>

      <div>
        <span>STYLE > </span> SELECTED STYLE
      </div> <br></br>
      <ImageContainer>
        {/* <BadgeStyled>
          <FontAwesomeIcon icon={faCheck} />
        </BadgeStyled> */}
        {styles.map((product) => {
          return <img
            className={selectedStyle === product.style_id ? 'selectedSize' : ''}
            key={product.style_id}
            src={product.photos[0].thumbnail_url}
            onClick={() => {
              changeGallery(product);
              setSelectedStyle(product.style_id);
            }
          }/>
        })}
      </ImageContainer>

      <SelectSize>
        {Object.keys(prodSkus).map((sku, id) => {
          return (
            <button className={sku === selectedSize ? 'selected' : ''} key={id} onClick={(e) => {
              setSelectedSize(sku);
              setSku(prodSkus[sku]);
            }
          }> {prodSkus[sku].size} </button>
          )
        })}
      </SelectSize>

      <SelectQuantity>
        <select name="selectQuantity">
        <option value="" disabled selected>Select Quantity</option>
          {quantityArr.map((line, index) => {
            if(line <= 15) {
              return <option key={index} value="">{line}</option>
            }
          })}
          }
        </select>
      </SelectQuantity>

      <AddCartButton>
        <button>ADD TO CART</button>
      </AddCartButton>
    </SelectorContainer>
  )
}

export default StyleSelector;

//when i click a style button
//the goal is to apply a style to that circle

//