"use strict";
import { Model } from "sequelize";

interface AuthorAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Author extends Model<AuthorAttributes> implements AuthorAttributes {
    id!: number;
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Author.hasMany(models.Book);
      models.Book.belongsTo(Author);
    }
  }
  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
