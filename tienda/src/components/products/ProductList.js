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
} from "reactstrap";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Ürünler</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        {this.props.products.map((product) => (
          <Card key={product.id} style={{ width: 500 }}>
            <CardImg
              alt="Card image cap"
              src={product.productImg}
              top
              width="50%"
            />
            <CardBody>
              <CardTitle tag="h5">{product.productName}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {product.productDesc}
              </CardSubtitle>
              <CardText>{product.productPrice}TL</CardText>
              <Button>Sipariş Ver</Button>
            </CardBody>
          </Card>
        ))}
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
