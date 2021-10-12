'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const usermaster = sequelize.define('usermaster', {
		userid: {
			field: 'catid',
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			field: 'category',
			type: DataTypes.STRING
		},
		phoneno: {
			field: 'description',
			type: DataTypes.STRING
        },
        userroleid: {
			field: 'userroleid',
			type: DataTypes.INTEGER
        },
        isactive: {
			field: 'isactive',
			type: DataTypes.BOOLEAN
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
		tableName: 'usermaster',
		schema: 'public'
	});

	return usermaster;
};