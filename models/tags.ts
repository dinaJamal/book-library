"use strict";
import { Model } from "sequelize";
interface TagsAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Tags extends Model<TagsAttributes> implements TagsAttributes {
    id!: number;
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Tags.belongsToMany(models.Book, {
        through: "Book_Tags"
      })
    }
  }
  Tags.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(128),
      },
    },
    {
      sequelize,
      modelName: "Tags",
    }
  );
  return Tags;
};
