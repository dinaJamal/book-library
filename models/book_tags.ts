"use strict";
import { Model } from "sequelize";

interface BookTagsAttributes {
  BookId: number;
  TagId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Book_Tags extends Model<BookTagsAttributes> implements BookTagsAttributes {
    BookId!: number;
    TagId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Book_Tags.init(
    {
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Book',
          key: 'id'
        }
      },
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Tags',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: "Book_Tags",
    }
  );
  return Book_Tags;
};
