
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Associations will be added later
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false
      },

      stock: {
        type: DataTypes.STRING,
        allowNull: false
      },

      productImage: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      timestamps: true
    }
  );

  return Product;
};
