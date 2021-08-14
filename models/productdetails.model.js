'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const productdetails = sequelize.define('productdetails', {
		productid: {
			field: 'productid',
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		productname: {
			field: 'productname',
			type: DataTypes.STRING
		},
		description: {
			field: 'description',
			type: DataTypes.STRING
        },
        qty: {
			field: 'qty',
			type: DataTypes.INTEGER
        },
        price: {
			field: 'price',
			type: DataTypes.DECIMAL
        },
        catid: {
			field: 'catid',
			type: DataTypes.INTEGER
        },
        createdby: {
			field: 'createdby',
			type: DataTypes.DATE
        },
        createddate: {
			field: 'createddate',
			type: DataTypes.DATE
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
		tableName: 'productdetails',
		schema: 'public'
	});

	return productdetails;
};