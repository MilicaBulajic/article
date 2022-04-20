"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Articles.init(
    {
      name: DataTypes.STRING,
      text: DataTypes.STRING,
      author: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Articles",
    }
  );
  Articles.associate = (models) => {
    Articles.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Articles;
};
