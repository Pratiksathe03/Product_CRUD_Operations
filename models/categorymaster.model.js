'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const categorymaster = sequelize.define('categorymaster', {
		catid: {
			field: 'catid',
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		category: {
			field: 'category',
			type: DataTypes.STRING
		},
		description: {
			field: 'description',
			type: DataTypes.STRING
        },
        createddate: {
			field: 'createddate',
			type: DataTypes.DATE
        },
        createdby: {
			field: 'createdby',
			type: DataTypes.STRING
        },
        lastmodifiedby: {
			field: 'lastmodifiedby',
			type: DataTypes.STRING
        },
        lastmodifieddate: {
			field: 'lastmodifieddate',
			type: DataTypes.DATE
		}
	}, {
		timestamps: false,
		tableName: 'categorymaster',
		schema: 'public'
	});

	return categorymaster;
};