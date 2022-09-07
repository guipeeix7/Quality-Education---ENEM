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
    tpEstadoCivil: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TP_ESTADO_CIVIL"
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
    nuGeralEstadoCivil: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NU_GERAL_ESTADO_CIVIL"
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
    tableName: "marital_info",
    comment: "",
    indexes: [{
      name: "ix_marital_info_index",
      unique: false,
      type: "BTREE",
      fields: ["index"]
    }]
  };
  const MaritalInfoModel = sequelize.define("maritalInfoModel", attributes, options);
  return MaritalInfoModel;
};