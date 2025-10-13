/*global QUnit*/

sap.ui.define([
	"zcontractstatus/sd/controller/contractstatus.controller"
], function (Controller) {
	"use strict";

	QUnit.module("contractstatus Controller");

	QUnit.test("I should test the contractstatus controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});