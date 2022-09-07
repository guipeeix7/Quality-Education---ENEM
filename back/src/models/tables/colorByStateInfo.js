const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    index: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "index"
    },
    tpCorRaca: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TP_COR_RACA"
    },
    stateSigla: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "stateSigla"
    },
    nSamples: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "N_SAMPLES"
    },
    createdAt: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "color_by_state_info",
    comment: "",
    indexes: [{
      name: "ix_color_by_state_info_index",
      unique: false,
      type: "BTREE",
      fields: ["index"]
    }]
  };
  const ColorByStateInfoModel = sequelize.define("colorByStateInfoModel", attributes, options);
  return ColorByStateInfoModel;
};