"use strict";
import { Model } from "sequelize";

interface BookAttributes {
  id: number;
  title: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Book extends Model<BookAttributes> implements BookAttributes {
    id!: number;
    title!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Book.belongsToMany(models.Tags, {
        through: "Book_Tags"
      })

    }
  }
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(128),
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
