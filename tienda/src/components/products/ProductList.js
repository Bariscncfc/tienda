import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + "sepete eklendi");
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Ürünler</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.products.map((product) => (
            <Card key={product.id} style={{ width: 400 }}>
              <CardImg
                alt="Card image cap"
                src={product.productImg}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">{product.productName}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.productDesc}
                </CardSubtitle>
                <CardText>{product.productPrice}TL</CardText>
                <Button color="success" onClick={() => this.addToCart(product)}>
                  Sipariş Ver
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
