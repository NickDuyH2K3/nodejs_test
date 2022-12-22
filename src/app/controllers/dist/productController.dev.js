"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collection = require('../models/collection');

var Product = require('../models/product');

var _require = require('../../utils/mongoose'),
    multipleMongooseToObject = _require.multipleMongooseToObject;

var productController =
/*#__PURE__*/
function () {
  function productController() {
    _classCallCheck(this, productController);
  }

  _createClass(productController, [{
    key: "index",
    value: function index(req, res, next) {
      Product.find({}) // Collection.find({})
      .then(function (products) {
        res.render('layouts/product/product-index', {
          products: multipleMongooseToObject(products),
          style: "product",
          title: "Product | CLOVER ®"
        });
      })["catch"](next);
    }
  }]);

  return productController;
}();

module.exports = new productController();