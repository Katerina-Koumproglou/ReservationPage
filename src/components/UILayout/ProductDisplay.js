import coffeeCup from "../../assets/images/coffee-cup.jpg";
import brownie from "../../assets/images/brownie.jpg";
import cocktail from "../../assets/images/cocktail.jpg";
import clubSandwich from "../../assets/images/club-sandwich.jpg";
import wine from "../../assets/images/wine.jpg";
import menu from "../../assets/images/menu.jpg";
import interiorSpace from "../../assets/images/interior-space.jpg";
import smoothie from "../../assets/images/smoothie.jpg";
import riceBowl from "../../assets/images/rice-bowl.jpg";
import { ProductDisplayWrapper, ProductGridItem } from "../../styles/Wrappers";
import { OverlayText } from "../../styles/Titles";

const ProductDisplay = () => {
  return (
    <ProductDisplayWrapper>
      <ProductGridItem $bgImg={coffeeCup}>
        <OverlayText>Coffee</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={clubSandwich}>
        <OverlayText>Sandwiches</OverlayText>
      </ProductGridItem>

      <ProductGridItem $bgImg={brownie}>
        <OverlayText>Sweet Delights</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={wine}>
        <OverlayText>Wine</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={menu}>
        <OverlayText>Menu</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={interiorSpace}>
        <OverlayText>Interior Space</OverlayText>
      </ProductGridItem>

      <ProductGridItem $bgImg={cocktail}>
        <OverlayText>Cocktails</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={smoothie}>
        <OverlayText>Smoothie</OverlayText>
      </ProductGridItem>
      <ProductGridItem $bgImg={riceBowl}>
        <OverlayText>Rice Bowls</OverlayText>
      </ProductGridItem>
    </ProductDisplayWrapper>
  );
};

export default ProductDisplay;
