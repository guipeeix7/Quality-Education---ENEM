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
    nSamples: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "N_SAMPLES"
    },
    nuNotaMt: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_NOTA_MT"
    },
    nuNotaLc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_NOTA_LC"
    },
    nuNotaCn: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_NOTA_CN"
    },
    nuNotaCh: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_NOTA_CH"
    },
    nuNotaRedacao: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_NOTA_REDACAO"
    },
    nuGeralByColor: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_GERAL_BY_COLOR"
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
    tableName: "color_info",
    comment: "",
    indexes: [{
      name: "ix_color_info_index",
      unique: false,
      type: "BTREE",
      fields: ["index"]
    }]
  };
  const ColorInfoModel = sequelize.define("colorInfoModel", attributes, options);
  return ColorInfoModel;
};