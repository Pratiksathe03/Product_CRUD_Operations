'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const userrolemaster = sequelize.define('userrolemaster', {
		roleid: {
			field: 'roleid',
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		rolename: {
			field: 'rolename',
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
		tableName: 'userrolemaster',
		schema: 'public'
	});

	return userrolemaster;
};