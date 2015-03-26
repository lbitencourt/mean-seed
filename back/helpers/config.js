'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var values = {
	environment: process.env.NODE_ENV
};

module.exports = values;
