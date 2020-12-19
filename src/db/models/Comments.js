const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  Comments.init({
    text: DataTypes.STRING,
    audioFile: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
