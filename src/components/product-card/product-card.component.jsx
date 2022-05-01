import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  BackgroundImage,
  FooterContainer,
  NameContainer,
  PriceContainer,
  ProductCardCoontainer,
  StyledButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardCoontainer key="id">
      <BackgroundImage imageUrl={imageUrl} alt={`${name}`} />
      <FooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </FooterContainer>
      <StyledButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </StyledButton>
    </ProductCardCoontainer>
  );
};

export default ProductCard;
