'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Hobby.associate = function(models) {
  };
  return Hobby;
};
