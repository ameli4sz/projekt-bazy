const mongoose = require("mongoose");
//importuję model
const Product = require("../models/product");

exports.products_get_all = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json({
        wiadomość: "lista wszystkich produktów",
        lista: products,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: err,
      });
    });
};

exports.products_add_new = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  //zapis do bazy!!!!
  product
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomość: "utworzenie nowego produktu",
        dane: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        wiadomość: err,
      });
    });
  /*res.status(201).json({
        wiadomość: "utworzenie nowego produktu",
        dane: product
    })*/
};

exports.products_get_by_id = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id).then((result) => {
    res.status(200).json({
      wiadomość: "Szczegóły produktu o numerze " + id,
      dane: result,
    });
  });
};

exports.products_update = (req, res, next) => {
  const id = req.params.productId;
  Product.findByIdAndUpdate(id, {
    name: req.body.name,
    price: req.body.price,
  }).then(() => {
    res
      .status(200)
      .json({ wiadomość: "Zmiana danych produktu o numerze " + id });
  });
};

exports.products_delete = (req, res, next) => {
  const id = req.params.productId;
  Product.findOneAndDelete(id).then((result) => {
    res.status(200).json({ wiadomość: "Usunięcie produktu o numerze " + id });
  });
};
