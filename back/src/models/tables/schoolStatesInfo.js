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
    tpEscola: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "TP_ESCOLA"
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
    tableName: "school_states_info",
    comment: "",
    indexes: [{
      name: "ix_school_states_info_index",
      unique: false,
      type: "BTREE",
      fields: ["index"]
    }]
  };
  const SchoolStatesInfoModel = sequelize.define("schoolStatesInfoModel", attributes, options);
  return SchoolStatesInfoModel;
};