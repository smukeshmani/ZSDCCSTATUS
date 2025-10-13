var Ztempid = " ";
var ZnameEn = " ";
var ZnameAr = " ";
var Zmobile = " ";
var Zstreet = " ";
var Zarea = " ";
var Zcity = " ";
var Zsalesoffice = " ";
var Zchannel = " ";
var Zoutlets = " ";
var Zspart = " ";
var Zrep = " ";
var Zerror = " ";
var Zduplicate = " ";
var zmsg = " ";
var Zroute = " ";
var oFileUploader = " ";
var ZmonthlyQty = " ";
var ZmonthlyValue = " ";
var ZyearlyQty = " ";
var ZyearlyValue = " ";
var string = "";
var zvatcontent = "";
var zvatfiletype = "";
var zvatfilename = "";
var zagencyfiletype = "";
var zagencyfilename = "";
var zbankstmtfiletype = "";
var zbankstmtfilename = "";
var zlicensefiletype = "";
var zlicensefilename = "";
var zidfiletype = "";
var zidfilename = "";
var zcrfiletype = "";
var zcrfilename = "";
var zpromissoryfiletype = "";
var zpromissoryfilename = "";
var zbankletterfiletype = "";
var zbankletterfilename = "";
var zcreditaccfilename = "";
var zcreditaccfiletype = "";
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter",
	'sap/m/MessagePopover',
	'sap/m/MessageBox',
	'sap/m/MessagePopoverItem',
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function (Controller, Fragment, Filter, MessagePopover, MessageBox, MessagePopoverItem, FilterOperator, MessageToast) {
	"use strict";


	return Controller.extend("zcontractstatus.sd.controller.contractstatus", {
			onInit: function () {
			debugger;
			
			this._wizard = this.byId("CreateProductWizard");
			//this.byId("CreateProductWizard").setfinishButton(false);                         
			this.getView().byId("idChannel").setEditable(false);
			this.getView().byId("idStatus").setEditable(false);
			this.getView().byId("idContactName").setEditable(false);
			this.getView().byId("idBrandNameAr").setEditable(false);
			this.getView().byId("idTele").setEditable(false);
			this.getView().byId("idMobile").setEditable(false);
			this.getView().byId("idEmail").setEditable(false);
			this.getView().byId("idUser").setEditable(false);
			this.getView().byId("idSapId").setEditable(false);
			this.getView().byId("idNameEn").setEditable(false);
			this.getView().byId("idNameAr").setEditable(false);
			this.getView().byId("idTele").setEditable(false);
			this.getView().byId("idSalesOffice").setEditable(false);
			this.getView().byId("idCity").setEditable(false);
			this.getView().byId("idStreet").setEditable(false);
			this.getView().byId("idArea").setEditable(false);
			this.getView().byId("idArea").setEditable(false);
			this.getView().byId("idDivision").setEditable(false);
			this.getView().byId("idRep").setEditable(false);
			this.getView().byId("idRoute").setEditable(false);
			this.getView().byId("idOutlets").setEditable(false);
		//	this.getView().byId("idMainSave").setVisible(false);
		//	this.getView().byId("idMainSave").setVisible(false);
		//	this.getView().byId("idSaveQtyValue").setVisible(false);
		//	this.getView().byId("idEditQtyValue").setVisible(true);
			this.getView().byId("idCustType").setEditable(false);
			this.getView().byId("idPriceType").setEditable(false);
			this.getView().byId("idEntryFees").setEditable(false);
			this.getView().byId("idCreditLimit").setEditable(false);
			this.getView().byId("idPayTerms").setEditable(false);
			this.getView().byId("idRebate").setEditable(false);
			this.getView().byId("idMonthlyFixed").setEditable(false);
			this.getView().byId("idSaveCredit").setVisible(false);
			this.getView().byId("idMonthlyVolume").setEditable(false);
			this.getView().byId("idMonthlyValue").setEditable(false);
			this.getView().byId("idAnnualVolume").setEditable(false);
			this.getView().byId("idAnnualValue").setEditable(false);
			this.getView().byId("idComments").setEditable(false);
			/*var complete_url = window.location.href;
			//var pieces = complete_url.split("?");
			var pieces = complete_url.split("ccc");
			if (pieces.length === 2) {
				string = pieces[1];
				this.zrecord = string.substr(1, 10);
			}*/
			
			this.getView().byId("idChannel").setEditable(false);
		//	this.getView().byId("idstatus").setEditable(false);
			this.getView().byId("idUser").setEditable(false);
			this.getView().byId("idSapId").setEditable(false);
			this.getView().byId("idNameEn").setEditable(false);
			this.getView().byId("idNameAr").setEditable(false);
			this.getView().byId("idTele").setEditable(false);
			this.getView().byId("idSalesOffice").setEditable(false);
			this.getView().byId("idCity").setEditable(false);
			this.getView().byId("idStreet").setEditable(false);
			this.getView().byId("idArea").setEditable(false);
			this.getView().byId("idArea").setEditable(false);
			this.getView().byId("idDivision").setEditable(false);
			this.getView().byId("idRep").setEditable(false);
			this.getView().byId("idRoute").setEditable(false);
			this.getView().byId("idOutlets").setEditable(false);
			this.getView().byId("idEmpId").setEditable(false);
			
			var that = this;
			var oModel = that.getOwnerComponent().getModel();
			var sPath = "/customerHeaderSet('" + this.zrecord + "')";

			oModel.read(sPath, {
				success: function (oData, response) {
			
				
					
					that.getView().byId("idChannel").setEditable(false);
			//that.getView().byId("idstatus").setEditable(false);
			that.getView().byId("idUser").setEditable(false);
			that.getView().byId("idSapId").setEditable(false);
			that.getView().byId("idNameEn").setEditable(false);
			that.getView().byId("idNameAr").setEditable(false);
			that.getView().byId("idTele").setEditable(false);
			that.getView().byId("idSalesOffice").setEditable(false);
			that.getView().byId("idCity").setEditable(false);
			that.getView().byId("idStreet").setEditable(false);
			that.getView().byId("idArea").setEditable(false);
			that.getView().byId("idArea").setEditable(false);
			that.getView().byId("idDivision").setEditable(false);
			that.getView().byId("idRep").setEditable(false);
			that.getView().byId("idRoute").setEditable(false);
			that.getView().byId("idOutlets").setEditable(false);
					var oModel3 = new sap.ui.model.json.JSONModel(oData);
					var osf = that.getView().byId("idCustomerDetails");
					osf.setModel(oModel3);
					var osfCredit = that.getView().byId("idCreditDetails");
					
					if(oModel3.oData.Zbusinessplan === "Y"){
					that.getView().byId("Switch").setState(true);	
					}else {
						that.getView().byId("Switch").setState(false);
					}		
					
					
					//osfCredit.setModel(oModel3);
					that.getView().byId("idCustType").setSelectedKey(oModel3.oData.ZcustomerType);
					that.onChangeCustType();
					that.getView().byId("idPriceType").setSelectedKey(oModel3.oData.Zpricetype);
					that.onChangePriceType();
					that.getView().byId("idEntryFees").setValue(oModel3.oData.ZentryFees);
					that.getView().byId("idCreditLimit").setValue(oModel3.oData.Zcreditlimit);
					that.getView().byId("idPayTerms").setSelectedKey(oModel3.oData.Zterm);
					that.onChangePayTerm();
					that.getView().byId("idRebate").setValue(oModel3.oData.Zrebate);
					that.getView().byId("idMonthlyFixed").setValue(oModel3.oData.ZmonthlyFixed);
					that.getView().byId("idMonthlyVolume").setValue(oModel3.oData.ZmonthlyQty);
					that.getView().byId("idMonthlyValue").setValue(oModel3.oData.ZmonthlyValue);
					that.getView().byId("idAnnualVolume").setValue(oModel3.oData.ZyearlyQty);
					that.getView().byId("idAnnualValue").setValue(oModel3.oData.ZyearlyValue);
					that.getView().byId("idRoute").setValue(oModel3.oData.Zroute);
					that.getView().byId("idOutlets").setValue(oModel3.oData.Zoutlets);
					
				
					
					//check for vat file
					if (oModel3.oData.Zvat !== "") {
						//that.getView().byId("idfileUploaderVAT").setVisible(false);
						//that.getView().byId("idfileVatBtnUpload").setVisible(false);
						that.getView().byId("idfileVatBtn").setVisible(true);
						that.getView().byId("idfileVatBtn").setText(oModel3.oData.Zvat);
						that.zvatcontent = oModel3.oData.Zvat_content;
						zvatcontent = oModel3.oData.Zvat_content;
						that.zvatfiletype = oModel3.oData.Zvat_type;
						zvatfiletype = oModel3.oData.Zvat_type;
						zvatfilename = oModel3.oData.Zvat;
						that.getView().byId("idfileVatBtn").setType("Accept");
					} else {
						that.getView().byId("idfileVatBtn").setVisible(true);
						that.getView().byId("idfileVatBtn").setText("NO FILE UPLOADED");
						that.getView().byId("idfileVatBtn").setType("Reject");
						//that.getView().byId("idfileVatBtnUpload").setVisible(false);
					}
					//check for agency file
					if (oModel3.oData.ZAGENCY !== "") {
						//that.getView().byId("idfileUploaderAgency").setVisible(false);
						//that.getView().byId("idfileAgencyUpload").setVisible(false);
						that.getView().byId("idfileAgency").setVisible(true);
						that.getView().byId("idfileAgency").setText(oModel3.oData.ZAGENCY);
						zagencyfiletype = oModel3.oData.ZAGENCY_TYPE;
						zagencyfilename = oModel3.oData.ZAGENCY;
						that.getView().byId("idfileAgency").setType("Accept");
					} else {
						that.getView().byId("idfileAgency").setVisible(true);
						that.getView().byId("idfileAgency").setText("NO FILE UPLOADED");
						that.getView().byId("idfileAgency").setType("Reject");
						//that.getView().byId("idfileAgencyUpload").setVisible(true);
					}
					//check for bank statement file
					if (oModel3.oData.ZBANK_STMT !== "") {
						//	that.getView().byId("idfileUploaderBankStmt").setVisible(false);
						that.getView().byId("idfileBankStmt").setVisible(true);
						that.getView().byId("idfileBankStmt").setText(oModel3.oData.ZBANK_STMT);
						zbankstmtfilename = oModel3.oData.ZBANK_STMT;
						zbankstmtfiletype = oModel3.oData.ZBANK_STMT_TYPE;
						that.getView().byId("idfileBankStmt").setType("Accept");
					} else {
						that.getView().byId("idfileBankStmt").setVisible(true);
						that.getView().byId("idfileBankStmt").setText("NO FILE UPLOADED");
						that.getView().byId("idfileBankStmt").setType("Reject");
					}

					//check for shop license file
					if (oModel3.oData.ZLICENSE !== "") {
						//	that.getView().byId("idfileUploaderShopLicense").setVisible(false);
						that.getView().byId("idfileLicense").setVisible(true);
						that.getView().byId("idfileLicense").setText(oModel3.oData.ZLICENSE);
						zlicensefilename = oModel3.oData.ZLICENSE;
						zlicensefiletype = oModel3.oData.ZLICENSE_TYPE;
						that.getView().byId("idfileLicense").setType("Accept");
					} else {
						that.getView().byId("idfileLicense").setVisible(true);
						that.getView().byId("idfileLicense").setText("NO FILE UPLOADED");
						that.getView().byId("idfileLicense").setType("Reject");
					}

					//check for customer id file
					if (oModel3.oData.ZID !== "") {
						//	that.getView().byId("idfileUploaderCustomerId").setVisible(false);
						that.getView().byId("idfileID").setVisible(true);
						that.getView().byId("idfileID").setText(oModel3.oData.ZID);
						zidfilename = oModel3.oData.ZID;
						zidfiletype = oModel3.oData.ZID_TYPE;
						that.getView().byId("idfileID").setType("Accept");
					} else {
						that.getView().byId("idfileID").setVisible(true);
						that.getView().byId("idfileID").setText("NO FILE UPLOADED");
						that.getView().byId("idfileID").setType("Reject");
					}

					//check for customer CR file
					if (oModel3.oData.ZCR !== "") {
						//	that.getView().byId("idfileUploaderCR").setVisible(false);
						that.getView().byId("idfileCR").setVisible(true);
						that.getView().byId("idfileCR").setText(oModel3.oData.ZCR);
						zcrfilename = oModel3.oData.ZCR;
						zcrfiletype = oModel3.oData.ZCR_TYPE;
						that.getView().byId("idfileCR").setType("Accept");
					} else {
						that.getView().byId("idfileCR").setVisible(true);
						that.getView().byId("idfileCR").setText("NO FILE UPLOADED");
						that.getView().byId("idfileCR").setType("Reject");
					}

					//check for customer promissory file
					if (oModel3.oData.ZPROMISSORY !== "") {
						//	that.getView().byId("idfileUploaderPromissory").setVisible(false);
						that.getView().byId("idfilePromissory").setVisible(true);
						that.getView().byId("idfilePromissory").setText(oModel3.oData.ZPROMISSORY);
						zpromissoryfilename = oModel3.oData.ZPROMISSORY;
						zpromissoryfiletype = oModel3.oData.ZPROMISSORY_TYPE;
						that.getView().byId("idfilePromissory").setType("Accept");
					} else {
						that.getView().byId("idfilePromissory").setVisible(true);
						that.getView().byId("idfilePromissory").setText("NO FILE UPLOADED");
						that.getView().byId("idfilePromissory").setType("Reject");
					}

					//check for customer bank letter file
					if (oModel3.oData.ZBANKLETTER !== "") {
						//	that.getView().byId("idfileUploaderGuarantee").setVisible(false);
						that.getView().byId("idfileBankLetter").setVisible(true);
						that.getView().byId("idfileBankLetter").setText(oModel3.oData.ZBANKLETTER);
						zbankletterfiletype = oModel3.oData.ZBANKLETTER;
						zbankletterfilename = oModel3.oData.ZBANKLETTER_TYPE;
						that.getView().byId("idfileBankLetter").setType("Accept");
					} else {
						that.getView().byId("idfileBankLetter").setVisible(true);
						that.getView().byId("idfileBankLetter").setText("NO FILE UPLOADED");
						that.getView().byId("idfileBankLetter").setType("Reject");
					}

					//check for creidt account file
					if (oModel3.oData.ZCREDITACC !== "") {
						//	that.getView().byId("idfileUploaderCreditAccount").setVisible(false);
						that.getView().byId("idfileCreditAcc").setVisible(true);
						that.getView().byId("idfileCreditAcc").setText(oModel3.oData.ZCREDITACC);
						zcreditaccfilename = oModel3.oData.ZCREDITACC;
						zcreditaccfiletype = oModel3.oData.ZCREDITACC_TYPE;
						that.getView().byId("idfileCreditAcc").setType("Accept");
					} else {
						that.getView().byId("idfileCreditAcc").setVisible(true);
						that.getView().byId("idfileCreditAcc").setText("NO FILE UPLOADED");
						that.getView().byId("idfileCreditAcc").setType("Reject");
					}

				},
				error: function () {

					sap.m.MessageToast.show("No Data retreived");
				}

			});
			//get items data
			debugger;
			var sPath2 = "/customerItemSet"; //?$filter=EMPLOYEEID eq '" + Pernr + "'";
			var filter = [];
			//var Pernr = id;
			//Ztempid = "'" + this.zrecord + "'";
			var myFilter = new sap.ui.model.Filter("Ztempid", sap.ui.model.FilterOperator.EQ, (this.zrecord));
			filter.push(myFilter);
			that = this ;
			oModel.read(sPath2, {
				filters: filter,

				success: function (oData, response) {
					debugger;
					var oModel6 = new sap.ui.model.json.JSONModel(oData);
					var osf3 = that.getView().byId("idTable1");
					osf3.setModel(oModel6);
				//	that.getView().byId("idEmpName").setText(oModel6.oData.results[0].empName);
				//	oModel6.refresh();
				},
				error: function (oError) {
					//that.getView().byId("idAssetTable").destroyItems();
					debugger;
					/*msg = 'No data retreived';
					sap.m.MessageBox.error(
											msg, {
												//			styleClass: bCompact ? "sapUiSizeCompact" : ""
												onClose: function (oAction) {
													//	window.print();
													//location.reload();
												}
											}

										);*/

				}

			});

		},
		//get the details of the request
		onSubmit : function (oEvent) {
			debugger;
			this.zrecord = this.getView().byId("idTemp").getValue();
			if	(this.zrecord !== " ") {
				
				var that = this;
			var oModel = that.getOwnerComponent().getModel();
			var sPath = "/customerHeaderSet('" + this.zrecord + "')";

			oModel.read(sPath, {
				success: function (oData, response) {
					that.getView().byId("idChannel").setEditable(false);
			that.getView().byId("idStatus").setEditable(false);
			that.getView().byId("idUser").setEditable(false);
			that.getView().byId("idSapId").setEditable(false);
			that.getView().byId("idNameEn").setEditable(false);
			that.getView().byId("idNameAr").setEditable(false);
			that.getView().byId("idTele").setEditable(false);
			that.getView().byId("idSalesOffice").setEditable(false);
			that.getView().byId("idCity").setEditable(false);
			that.getView().byId("idStreet").setEditable(false);
			that.getView().byId("idArea").setEditable(false);
			that.getView().byId("idArea").setEditable(false);
			that.getView().byId("idDivision").setEditable(false);
			that.getView().byId("idRep").setEditable(false);
			that.getView().byId("idRoute").setEditable(false);
			that.getView().byId("idOutlets").setEditable(false);
			that.getView().byId("idComments").setEditable(false);
					var oModel3 = new sap.ui.model.json.JSONModel(oData);
					var osf = that.getView().byId("idCustomerDetails");
					osf.setModel(oModel3);
					var osfCredit = that.getView().byId("idCreditDetails");
					//osfCredit.setModel(oModel3);
					that.getView().byId("idCustType").setSelectedKey(oModel3.oData.ZcustomerType);
					that.onChangeCustType();
					that.getView().byId("idPriceType").setSelectedKey(oModel3.oData.Zpricetype);
					that.onChangePriceType();
					that.getView().byId("idEntryFees").setValue(oModel3.oData.ZentryFees);
					that.getView().byId("idCreditLimit").setValue(oModel3.oData.Zcreditlimit);
					that.getView().byId("idPayTerms").setSelectedKey(oModel3.oData.Zterm);
					that.onChangePayTerm();
					that.getView().byId("idRebate").setValue(oModel3.oData.Zrebate);
					that.getView().byId("idMonthlyFixed").setValue(oModel3.oData.ZmonthlyFixed);
					that.getView().byId("idMonthlyVolume").setValue(oModel3.oData.ZmonthlyQty);
					that.getView().byId("idMonthlyValue").setValue(oModel3.oData.ZmonthlyValue);
					that.getView().byId("idAnnualVolume").setValue(oModel3.oData.ZyearlyQty);
					that.getView().byId("idAnnualValue").setValue(oModel3.oData.ZyearlyValue);
					that.getView().byId("idRoute").setValue(oModel3.oData.Zroute);
					that.getView().byId("idOutlets").setValue(oModel3.oData.Zoutlets);
					that.getView().byId("idEmpDescr").setText(oModel3.oData.Zempname);
					
					if(oModel3.oData.Zbusinessplan === "Y"){
					that.getView().byId("Switch").setState(true);	
					}else {
						that.getView().byId("Switch").setState(false);
					}		
					
					
					//check for vat file
					if (oModel3.oData.Zvat !== "") {
						//that.getView().byId("idfileUploaderVAT").setVisible(false);
						//that.getView().byId("idfileVatBtnUpload").setVisible(false);
						that.getView().byId("idfileVatBtn").setVisible(true);
						that.getView().byId("idfileVatBtn").setText(oModel3.oData.Zvat);
						that.zvatcontent = oModel3.oData.Zvat_content;
						zvatcontent = oModel3.oData.Zvat_content;
						that.zvatfiletype = oModel3.oData.Zvat_type;
						zvatfiletype = oModel3.oData.Zvat_type;
						zvatfilename = oModel3.oData.Zvat;
						that.getView().byId("idfileVatBtn").setType("Accept");
					} else {
						that.getView().byId("idfileVatBtn").setVisible(true);
						that.getView().byId("idfileVatBtn").setText("NO FILE UPLOADED");
						that.getView().byId("idfileVatBtn").setType("Reject");
						//that.getView().byId("idfileVatBtnUpload").setVisible(false);
					}
					//check for agency file
					if (oModel3.oData.ZAGENCY !== "") {
						//that.getView().byId("idfileUploaderAgency").setVisible(false);
						//that.getView().byId("idfileAgencyUpload").setVisible(false);
						that.getView().byId("idfileAgency").setVisible(true);
						that.getView().byId("idfileAgency").setText(oModel3.oData.ZAGENCY);
						zagencyfiletype = oModel3.oData.ZAGENCY_TYPE;
						zagencyfilename = oModel3.oData.ZAGENCY;
						that.getView().byId("idfileAgency").setType("Accept");
					} else {
						that.getView().byId("idfileAgency").setVisible(true);
						that.getView().byId("idfileAgency").setText("NO FILE UPLOADED");
						that.getView().byId("idfileAgency").setType("Reject");
						//that.getView().byId("idfileAgencyUpload").setVisible(true);
					}
					//check for bank statement file
					if (oModel3.oData.ZBANK_STMT !== "") {
						//	that.getView().byId("idfileUploaderBankStmt").setVisible(false);
						that.getView().byId("idfileBankStmt").setVisible(true);
						that.getView().byId("idfileBankStmt").setText(oModel3.oData.ZBANK_STMT);
						zbankstmtfilename = oModel3.oData.ZBANK_STMT;
						zbankstmtfiletype = oModel3.oData.ZBANK_STMT_TYPE;
						that.getView().byId("idfileBankStmt").setType("Accept");
					} else {
						that.getView().byId("idfileBankStmt").setVisible(true);
						that.getView().byId("idfileBankStmt").setText("NO FILE UPLOADED");
						that.getView().byId("idfileBankStmt").setType("Reject");
					}

					//check for shop license file
					if (oModel3.oData.ZLICENSE !== "") {
						//	that.getView().byId("idfileUploaderShopLicense").setVisible(false);
						that.getView().byId("idfileLicense").setVisible(true);
						that.getView().byId("idfileLicense").setText(oModel3.oData.ZLICENSE);
						zlicensefilename = oModel3.oData.ZLICENSE;
						zlicensefiletype = oModel3.oData.ZLICENSE_TYPE;
						that.getView().byId("idfileLicense").setType("Accept");
					} else {
						that.getView().byId("idfileLicense").setVisible(true);
						that.getView().byId("idfileLicense").setText("NO FILE UPLOADED");
						that.getView().byId("idfileLicense").setType("Reject");
					}

					//check for customer id file
					if (oModel3.oData.ZID !== "") {
						//	that.getView().byId("idfileUploaderCustomerId").setVisible(false);
						that.getView().byId("idfileID").setVisible(true);
						that.getView().byId("idfileID").setText(oModel3.oData.ZID);
						zidfilename = oModel3.oData.ZID;
						zidfiletype = oModel3.oData.ZID_TYPE;
						that.getView().byId("idfileID").setType("Accept");
					} else {
						that.getView().byId("idfileID").setVisible(true);
						that.getView().byId("idfileID").setText("NO FILE UPLOADED");
						that.getView().byId("idfileID").setType("Reject");
					}

					//check for customer CR file
					if (oModel3.oData.ZCR !== "") {
						//	that.getView().byId("idfileUploaderCR").setVisible(false);
						that.getView().byId("idfileCR").setVisible(true);
						that.getView().byId("idfileCR").setText(oModel3.oData.ZCR);
						zcrfilename = oModel3.oData.ZCR;
						zcrfiletype = oModel3.oData.ZCR_TYPE;
						that.getView().byId("idfileCR").setType("Accept");
					} else {
						that.getView().byId("idfileCR").setVisible(true);
						that.getView().byId("idfileCR").setText("NO FILE UPLOADED");
						that.getView().byId("idfileCR").setType("Reject");
					}

					//check for customer promissory file
					if (oModel3.oData.ZPROMISSORY !== "") {
						//	that.getView().byId("idfileUploaderPromissory").setVisible(false);
						that.getView().byId("idfilePromissory").setVisible(true);
						that.getView().byId("idfilePromissory").setText(oModel3.oData.ZPROMISSORY);
						zpromissoryfilename = oModel3.oData.ZPROMISSORY;
						zpromissoryfiletype = oModel3.oData.ZPROMISSORY_TYPE;
						that.getView().byId("idfilePromissory").setType("Accept");
					} else {
						that.getView().byId("idfilePromissory").setVisible(true);
						that.getView().byId("idfilePromissory").setText("NO FILE UPLOADED");
						that.getView().byId("idfilePromissory").setType("Reject");
					}

					//check for customer bank letter file
					if (oModel3.oData.ZBANKLETTER !== "") {
						//	that.getView().byId("idfileUploaderGuarantee").setVisible(false);
						that.getView().byId("idfileBankLetter").setVisible(true);
						that.getView().byId("idfileBankLetter").setText(oModel3.oData.ZBANKLETTER);
						zbankletterfiletype = oModel3.oData.ZBANKLETTER;
						zbankletterfilename = oModel3.oData.ZBANKLETTER_TYPE;
						that.getView().byId("idfileBankLetter").setType("Accept");
					} else {
						that.getView().byId("idfileBankLetter").setVisible(true);
						that.getView().byId("idfileBankLetter").setText("NO FILE UPLOADED");
						that.getView().byId("idfileBankLetter").setType("Reject");
					}

					//check for creidt account file
					if (oModel3.oData.ZCREDITACC !== "") {
						//	that.getView().byId("idfileUploaderCreditAccount").setVisible(false);
						that.getView().byId("idfileCreditAcc").setVisible(true);
						that.getView().byId("idfileCreditAcc").setText(oModel3.oData.ZCREDITACC);
						zcreditaccfilename = oModel3.oData.ZCREDITACC;
						zcreditaccfiletype = oModel3.oData.ZCREDITACC_TYPE;
						that.getView().byId("idfileCreditAcc").setType("Accept");
					} else {
						that.getView().byId("idfileCreditAcc").setVisible(true);
						that.getView().byId("idfileCreditAcc").setText("NO FILE UPLOADED");
						that.getView().byId("idfileCreditAcc").setType("Reject");
					}

				},
				error: function () {

					sap.m.MessageToast.show("No Data retreived");
				}

			});
			//get items data
			debugger;
			var sPath2 = "/customerItemSet"; //?$filter=EMPLOYEEID eq '" + Pernr + "'";
			var filter = [];
			//var Pernr = id;
			//Ztempid = "'" + this.zrecord + "'";
			var myFilter = new sap.ui.model.Filter("Ztempid", sap.ui.model.FilterOperator.EQ, (this.zrecord));
			filter.push(myFilter);
			that = this ;
			oModel.read(sPath2, {
				filters: filter,

				success: function (oData, response) {
					debugger;
					var oModel6 = new sap.ui.model.json.JSONModel(oData);
					var osf3 = that.getView().byId("idTable1");
					osf3.setModel(oModel6);
				//	that.getView().byId("idEmpName").setText(oModel6.oData.results[0].empName);
				//	oModel6.refresh();
				},
				error: function (oError) {
					//that.getView().byId("idAssetTable").destroyItems();
					debugger;
					/*msg = 'No data retreived';
					sap.m.MessageBox.error(
											msg, {
												//			styleClass: bCompact ? "sapUiSizeCompact" : ""
												onClose: function (oAction) {
													//	window.print();
													//location.reload();
												}
											}

										);*/

				}

			});
				
			} else {
				
			}
		},
		// value help request city
		onValueHelpRequest: function (oEvent) {
			debugger;
			var sInputValue = oEvent.getSource().getValue(),
				oView = this.getView();

			this.inputId = oEvent.getSource().getId();

			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment(
					"zcontractstatus.sd.fragments.ValueHelpDialog",
					this
				);
				this.getView().addDependent(this._valueHelpDialog);
			}

			/*	if (!this._pValueHelpDialog) {
					this._pValueHelpDialog = Fragment.load({
						id: oView.getId(),
						name: "contract.zsdcontract.fragments.ValueHelpDialog",
						controller: this
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						return oDialog;
					});
				}*/

			/*this._pValueHelpDialog.then(function (oDialog) {
				// Create a filter for the binding
				oDialog.getBinding("items").filter([new Filter("Zcity", FilterOperator.Contains, sInputValue)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialog.open(sInputValue);
			});*/

			// create a filter for the binding
			this._valueHelpDialog.getBinding("items").filter([new Filter(
				"Zcity",
				sap.ui.model.FilterOperator.EQ, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialog.open(sInputValue);
		},
		onValueHelpSearch: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Zcity", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpClose: function (oEvent) {
			debugger;
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("idCity").setValue(oSelectedItem.getTitle());

			var city = oSelectedItem.getTitle();
			if (city === "") {
				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		//value help request city end
		//value help request sales office start
		onValueHelpRequestSoff: function (oEvent) {
			debugger;
			var sInputValue = oEvent.getSource().getValue(),
				oView1 = this.getView();

			this.inputId1 = oEvent.getSource().getId();

			if (!this._valueHelpDialogSoff) {
				this._valueHelpDialogSoff = sap.ui.xmlfragment(
					"zcontractstatus.sd.fragments.ValueHelpDialogSoff",
					this
				);
				this.getView().addDependent(this._valueHelpDialogSoff);
			}

			/*if (!this._pValueHelpDialogSoff) {
				this._pValueHelpDialogSoff = Fragment.load({
					id: oView1.getId(),
					name: "contract.zsdcontract.view.ValueHelpDialogSoff",
					controller: this
				}).then(function (oDialogSoff) {
					oView1.addDependent(oDialogSoff);
					return oDialogSoff;
				});
			}*/

			/*this._pValueHelpDialogSoff.then(function (oDialogSoff) {
				// Create a filter for the binding
				oDialogSoff.getBinding("items").filter([new Filter("Vkbur", FilterOperator.Contains, sInputValue)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialogSoff.open(sInputValue);
			});*/
			this._valueHelpDialogSoff.getBinding("items").filter([new Filter(
				"Vkbur",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialogSoff.open(sInputValue);
		},
		onValueHelpSearchSoff: function (oEvent) {
			debugger;
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Vkbur", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpCloseSoff: function (oEvent) {
			debugger;
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("idSalesOffice").setValue(oSelectedItem.getTitle());
			this.byId("idSoffDescr").setText(oSelectedItem.getDescription());

			var so = oSelectedItem.getTitle();
			if (so === "") {
				this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		/// sales channel 
		// value help channel city
		onValueHelpRequestChannel: function (oEvent) {
			debugger;
			debugger;
			this.getView().byId("idCreditLimit").setValue('0.000');
			var sInputValue = oEvent.getSource().getValue(),
				oView1 = this.getView();

			this.inputId2 = oEvent.getSource().getId();

			if (!this._valueHelpDialogChannel) {
				this._valueHelpDialogChannel = sap.ui.xmlfragment(
					"zcontractstatus.sd.fragments.ValueHelpDialogChannel",
					this
				);
				this.getView().addDependent(this._valueHelpDialogChannel);
			}

			/*	if (!this._pValueHelpDialogChannel) {
					this._pValueHelpDialogChannel = Fragment.load({
						id: oView.getId(),
						name: "contract.zsdcontract.view.ValueHelpDialogChannel",
						controller: this
					}).then(function (oDialogChannel) {
						oView.addDependent(oDialogChannel);
						return oDialogChannel;
					});
				}*/
			/*this._pValueHelpDialogChannel.then(function (oDialogChannel) {
				// Create a filter for the binding
				oDialogChannel.getBinding("items").filter([new Filter("Vtweg", FilterOperator.Contains, sInputValue)]);
				// Open ValueHelpDialog filtered by the input's value
				oDialogChannel.open(sInputValue);
			});*/

			this._valueHelpDialogChannel.getBinding("items").filter([new Filter(
				"Vtweg",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialogChannel.open(sInputValue);
		},
		onValueHelpSearchChannel: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Vtweg", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpCloseChannel: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("idChannel").setValue(oSelectedItem.getTitle());
			this.byId("idChannelDescr").setText(oSelectedItem.getDescription());

			var channel = oSelectedItem.getTitle();
			if (channel === "") {
				this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		//divison
		onValueHelpRequestDivison: function (oEvent) {
			debugger;

			var sInputValue = oEvent.getSource().getValue(),
				oView1 = this.getView();

			this.inputId2 = oEvent.getSource().getId();

			if (!this._valueHelpDialogDivison) {
				this._valueHelpDialogDivison = sap.ui.xmlfragment(
					"zcontractstatus.sd.fragments.ValueHelpDialogDivison",
					this
				);
				this.getView().addDependent(this._valueHelpDialogDivison);
			}

			/*if (!this._pValueHelpDialogDivison) {
				this._pValueHelpDialogDivison = Fragment.load({
					id: oView.getId(),
					name: "contract.zsdcontract.view.ValueHelpDialogDivison",
					controller: this
				}).then(function (oDialogDivison) {
					oView.addDependent(oDialogDivison);
					return oDialogDivison;
				});
			}*/

			/*this._pValueHelpDialogDivison.then(function (oDialogDivison) {
				debugger;
				// Create a filter for the binding
				oDialogDivison.getBinding("items").filter([new Filter("Vtweg", FilterOperator.Contains, oView.byId("idChannel").getValue())]);
				// Open ValueHelpDialog filtered by the input's value
				oDialogDivison.open(sInputValue);
			});*/

			this._valueHelpDialogDivison.getBinding("items").filter([new Filter(
				"Vtweg",
				sap.ui.model.FilterOperator.Contains, oView1.byId("idChannel").getValue()
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialogDivison.open(sInputValue);
		},
		onValueHelpSearchDivison: function (oEvent) {
			debugger;
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Vtweg", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpCloseDivison: function (oEvent) {
			debugger;
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("idDivision").setValue(oSelectedItem.getTitle());
			this.byId("idDivisonDescr").setText(oSelectedItem.getDescription());

			var division = oSelectedItem.getTitle();
			if (division === "") {
				this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		//rep data
		onValueHelpRequestRep: function (oEvent) {
			debugger;
			var sInputValue = oEvent.getSource().getValue(),
				oView = this.getView();

			this.inputId5 = oEvent.getSource().getId();

			if (!this._valueHelpDialogRep) {
				this._valueHelpDialogRep = sap.ui.xmlfragment(
					"zcontractstatus.sd.fragments.ValueHelpDialogRep",
					this
				);
				this.getView().addDependent(this._valueHelpDialogRep);
			}

			/*	if (!this._pValueHelpDialogRep) {
					this._pValueHelpDialogRep = Fragment.load({
						id: oView.getId(),
						name: "contract.zsdcontract.view.ValueHelpDialogRep",
						controller: this
					}).then(function (oDialogRep) {
						oView.addDependent(oDialogRep);
						return oDialogRep;
					});
				}*/

			/*this._pValueHelpDialogRep.then(function (oDialogRep) {
				debugger;
				// Create a filter for the binding
				oDialogRep.getBinding("items").filter([new Filter("Vkbur", FilterOperator.Contains, oView.byId("idSalesOffice").getValue())]);
				// Open ValueHelpDialog filtered by the input's value
				oDialogRep.open(sInputValue);
			});*/

			this._valueHelpDialogRep.getBinding("items").filter([new Filter(
				"Vkbur",
				sap.ui.model.FilterOperator.Contains, oView.byId("idSalesOffice").getValue()
			)]);

			this._valueHelpDialogRep.open(sInputValue);
		},
		onValueHelpSearchRep: function (oEvent) {
			debugger;
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Vkbur", FilterOperator.Contains, sValue);

			oEvent.getSource().getBinding("items").filter([oFilter]);
		},

		onValueHelpCloseRep: function (oEvent) {
			debugger;
			var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("idRep").setValue(oSelectedItem.getTitle());
			this.byId("idRepDescr").setText(oSelectedItem.getDescription());

			var rep = oSelectedItem.getTitle();
			if (rep === "") {
				this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},
		onSave: function (oEvent) {
			console.log("updated");
			var that = this;
			debugger;
			var oModel = that.getOwnerComponent().getModel();
			Ztempid = this.getView().byId("idTemp").getValue();
			if (Ztempid !== "") {
				//

				//temp id is inital create the temporary customer id
				Zarea = this.getView().byId("idArea").getValue();
				ZnameEn = this.getView().byId("idNameEn").getValue();
				ZnameAr = this.getView().byId("idNameAr").getValue();
				Zmobile = this.getView().byId("idTele").getValue();
				Zstreet = this.getView().byId("idStreet").getValue();
				Zcity = this.getView().byId("idCity").getValue();
				Zsalesoffice = this.getView().byId("idSalesOffice").getValue();
				Zchannel = this.getView().byId("idChannel").getValue();
				Zspart = this.getView().byId("idDivision").getValue();
				Zrep = this.getView().byId("idRep").getValue();
				Zroute = this.getView().byId("idRoute").getValue();
				Zoutlets = this.getView().byId("idOutlets").getValue();
				//check if all mandatry fields are filled
				if (Zarea !== "" && ZnameEn !== "" && ZnameAr !== "" && Zmobile !== "" && Zstreet !== "" && Zcity !== "" && Zsalesoffice !==
					"" &&
					Zchannel !== "" && Zspart !== "" && Zrep !== "" && Zroute !== "") {

					// load create to post
					var CustomerEntry = {
						Ztempid: Ztempid,
						ZnameEn: ZnameEn,
						ZnameAr: ZnameAr,
						Zmobile: Zmobile,
						Zstreet: Zstreet,
						Zarea: Zarea,
						Zcity: Zcity,
						Zsalesoffice: Zsalesoffice,
						Zchannel: Zchannel,
						Zspart: Zspart,
						Zrep: Zrep,
						Zroute: Zroute,
						Zoutlets: Zoutlets

					};

					if (CustomerEntry !== "") {
						//perform posting to sap start
						oModel.create("/customerHeaderSet",
							CustomerEntry, {

								success: function (data) {
									//	debugger;
									if (data.Zduplicate === 'X') {
										sap.m.MessageBox.alert(
											"Duplicate Request Being Submitted !", {
												onClose: function (oAction) {
													//	window.print();

												}
											});

									} else {
										//if the temp customer is created
										Ztempid = data.Ztempid;
										if (Ztempid !== "") {
											that._wizard.validateStep(that.byId("idCustomerDet"));
											that.getView().byId("idArea").setEditable(false);
											that.getView().byId("idNameEn").setEditable(false);
											that.getView().byId("idNameAr").setEditable(false);
											that.getView().byId("idTele").setEditable(false);
											that.getView().byId("idStreet").setEditable(false);
											that.getView().byId("idCity").setEditable(false);
											that.getView().byId("idSalesOffice").setEditable(false);
											that.getView().byId("idChannel").setEditable(false);
											that.getView().byId("idDivision").setEditable(false);
											that.getView().byId("idRep").setEditable(false);
											that.getView().byId("idRoute").setEditable(false);
											that.getView().byId("idOutlets").setEditable(false);
											//that.getView().byId("idMainSave").setVisible(false);
										//	that.getView().byId("idMainEdit").setText("DISPLAY DATA");
										}
										that.getView().byId("idTemp").setValue(Ztempid);
										zmsg = "Temporary customer ID" + " " + Ztempid + " " + "has been created. Please click on STEP 2 to proceed further !";
										MessageToast.show(zmsg, {
											duration: 2500, // default
											width: "30em", // default
											my: "CenterCenter", // default
											at: "CenterCenter", // default
											of: window, // default
											offset: "0 0", // default
											collision: "fit fit", // default
											onClose: null, // default
											autoClose: true, // default
											animationTimingFunction: "ease", // default
											animationDuration: 1000, // default
											closeOnBrowserNavigation: true // default
										});
									}
								},

								error: function (oError) {
									//	debugger;
									MessageToast.show("Error while submitting request. Please Try again.", {
										duration: 9000, // default
										width: "30em", // default
										my: "CenterCenter", // default
										at: "CenterCenter", // default
										of: window, // default
										offset: "0 0", // default
										collision: "fit fit", // default
										onClose: null, // default
										autoClose: true, // default
										animationTimingFunction: "ease", // default
										animationDuration: 1000, // default
										closeOnBrowserNavigation: true // default
									});

								}
							});

					}
					//perform posting to sap end
				} else {
					zmsg = "Please input all the mandatory field details !";
					sap.m.MessageBox.alert(
						zmsg, {
							onClose: function (oAction) {
								//	window.print();

							}
						});
				}
			} else if (Ztempid === " ") {
				//temp id is not initial pass the warning message
				zmsg = "Temporary customer ID not found";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();
							that._wizard.validateStep(that.byId("idCustomerDet"));
						}
					});
			}
		},

		/*handleUploadPressVat: function (oEvent) {
			//check if temp id is created
			debugger;
			console.log('upload press');
			if (this.getView().byId("idTemp").getText() !== "") {

				var oFileUploader = this.getView().byId("idfileUploaderVAT");

				this.event = oEvent;
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, 'VAT');
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},*/

		/*	handleUploadPressAgency: function (oEvent) {
				debugger
				//check if temp id is created
				if (this.getView().byId("idTemp").getText() !== "") {
					var oFileUploader = this.getView().byId("idfileUploaderAgency");
					var domRef = oFileUploader.getFocusDomRef();
					var file = domRef.files[0];
					var that = this;
					this.filename = file.name;
					this.filetype = file.type;

					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "LAGENCY");
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				} else {
					//show message
					zmsg = "Temporary customer ID not created !";
					sap.m.MessageBox.alert(
						zmsg, {
							onClose: function (oAction) {
								//	window.print();

							}
						});
				}
			},*/

		/*handleUploadPressBankStmt: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderBankStmt");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "BANKSTMT");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},
		handleUploadPressShopLicense: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderShopLicense");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},
		handleUploadPressCustomerId: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderCustomerId");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "CUSTOMERID");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},*/

		/*handleUploadPressCustomerId: function (oEvent) {
			debugger;
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderCustomerId");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "CUSTOMERID");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},*/

		/*handleUploadPressCR: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderCR");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "CR");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},

		handleUploadPressPromissory: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderPromissory");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "PROMISSORY");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},

		handleUploadPressGuarantee: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderGuarantee");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},

		handleUploadPressCreditAccount: function (oEvent) {
			debugger
			//check if temp id is created
			if (this.getView().byId("idTemp").getText() !== "") {
				var oFileUploader = this.getView().byId("idfileUploaderCreditAccount");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				var that = this;
				this.filename = file.name;
				this.filetype = file.type;

				var reader = new FileReader();

				reader.onload = function (e) {
					debugger;
					var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
						"");
					that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "CREDITACC");
				};
				//file reader will start reading
				reader.readAsDataURL(file);
			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},*/

		postToSap: function (zrecord, filename, filetype, content, ztype) {
			var oDataModel = this.getView().getModel();
			var payLoad = {
				"Ztempid": zrecord,
				"Ztype": ztype,
				"Content": btoa(encodeURI(content)),
				"Filename": filename,
				"Filetype": filetype

			};
			oDataModel.create("/attachmentsSet", payLoad, {
				success: function (oEvent) {
					sap.m.MessageToast.show("Success");
				},
				error: function (oError) {
					sap.m.MessageToast.show("error");
				}
			});

		},
		onSaveQtyValue: function (oEvent) {
			console.log("updated qty value");
		//	this.getView().byId("idSaveQtyValue").setVisible(false);
		//	this.getView().byId("idEditQtyValue").setVisible(true);  
			this.getView().byId("idMonthlyVolume").setEditable(false);
			this.getView().byId("idMonthlyValue").setEditable(false);
			this.getView().byId("idAnnualVolume").setEditable(false);
			this.getView().byId("idAnnualValue").setEditable(false);
			var that = this;
			debugger;
			var oModel = that.getOwnerComponent().getModel();
			Ztempid = this.getView().byId("idTemp").getValue();
			if (Ztempid !== " ") {
				//

				//temp id is inital create the temporary customer id
				Ztempid = this.getView().byId("idTemp").getValue();
				ZmonthlyQty = this.getView().byId("idMonthlyVolume").getValue();
				ZmonthlyValue = this.getView().byId("idMonthlyValue").getValue();
				ZyearlyQty = this.getView().byId("idAnnualVolume").getValue();
				ZyearlyValue = this.getView().byId("idAnnualVolume").getValue();

				//check if all mandatry fields are filled
				if (Ztempid !== " ") {

					// load create to post
					var qtyentry = {
						Ztempid: Ztempid,
						ZmonthlyQty: ZmonthlyQty,
						ZmonthlyValue: ZmonthlyValue,
						ZyearlyQty: ZyearlyQty,
						ZyearlyValue: ZyearlyValue

					};

					if (qtyentry !== "") {
						//perform posting to sap start
						oModel.create("/loadQtyValueSet",
							qtyentry, {

								success: function (data) {
									//	debugger;
									if (data.Zduplicate === 'X') {
										sap.m.MessageBox.alert(
											"Duplicate Request Being Submitted !", {
												onClose: function (oAction) {
													//	window.print();

												}
											});

									} else {
										//if the temp customer is created
										Ztempid = data.Ztempid;
										that.getView().byId("idTemp").setValue(Ztempid);
										zmsg = "Updated. Please proceed further !";
										MessageToast.show(zmsg, {
											duration: 2500, // default
											width: "30em", // default
											my: "CenterCenter", // default
											at: "CenterCenter", // default
											of: window, // default
											offset: "0 0", // default
											collision: "fit fit", // default
											onClose: null, // default
											autoClose: true, // default
											animationTimingFunction: "ease", // default
											animationDuration: 1000, // default
											closeOnBrowserNavigation: true // default
										});
									}
								},

								error: function (oError) {
									//	debugger;
									MessageToast.show("Error while submitting request. Please Try again.", {
										duration: 9000, // default
										width: "30em", // default
										my: "CenterCenter", // default
										at: "CenterCenter", // default
										of: window, // default
										offset: "0 0", // default
										collision: "fit fit", // default
										onClose: null, // default
										autoClose: true, // default
										animationTimingFunction: "ease", // default
										animationDuration: 1000, // default
										closeOnBrowserNavigation: true // default
									});

								}
							});

					}
					//perform posting to sap end
				} else {
					zmsg = "Please input all the mandatory field details !";
					sap.m.MessageBox.alert(
						zmsg, {
							onClose: function (oAction) {
								//	window.print();

							}
						});
				}
			} else if (Ztempid !== " ") {
				//temp id is not initial pass the warning message
				zmsg = "Temporary customer ID" + " " + Ztempid + " " + "has already been created. Please click on STEP 2 to proceed further !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
			
		},
		onSaveCreditDetails: function (oEvent) {
			console.log("updated Crdit details value");
			var that = this;
			debugger;
			var oModel = that.getOwnerComponent().getModel();
			Ztempid = this.getView().byId("idTemp").getValue();
			if (Ztempid !== "") {
				//

				//temp id is inital create the temporary customer id
				Ztempid = this.getView().byId("idTemp").getValue();
				var ZcustomerType = this.getView().byId("idCustType").getSelectedKey();
				var ZentryFees = this.getView().byId("idEntryFees").getValue();
				var Zcreditlimit = this.getView().byId("idCreditLimit").getValue();
				var Zrebate = this.getView().byId("idRebate").getValue();
				var ZmonthlyFixed = this.getView().byId("idMonthlyFixed").getValue();
				var Zterm = this.getView().byId("idPayTerms").getSelectedKey();
				var ZpriceType = this.getView().byId("idPriceType").getSelectedKey();
				if (ZcustomerType === '1') {
					Zterm = "Z001";
				} else if (ZcustomerType === '3') {
					Zterm = "Z002";
				}
				//check if all mandatry fields are filled
				if ((Ztempid !== " ") && ((ZcustomerType === '2' || ZcustomerType === '3') && (Zcreditlimit != "0.000") && (Zterm !== "")) || (
						ZcustomerType === '1') && (ZpriceType !== "")) {

					// load create to post
					var qtyentry = {
						Ztempid: Ztempid,
						ZcustomerType: ZcustomerType,
						ZentryFees: ZentryFees,
						Zcreditlimit: Zcreditlimit,
						Zrebate: Zrebate,
						ZmonthlyFixed: ZmonthlyFixed,
						Zterm: Zterm,
						Zpricetype: ZpriceType

					};

					if (qtyentry !== "") {
						//perform posting to sap start
						oModel.create("/creditdetailsSet",
							qtyentry, {

								success: function (data) {
									//	debugger;
									if (data.Zerror === 'X') {
										sap.m.MessageBox.alert(
											"Error saving Credit Data !", {
												onClose: function (oAction) {
													//	window.print();

												}
											});

									} else {
										//if the temp customer is created
										Ztempid = data.Ztempid;
										that._wizard.validateStep(that.byId("idCredit"));
										//that.getView().byId("idTemp").setText(Ztempid);
										zmsg = "Updated credit details. Please proceed further !";
										MessageToast.show(zmsg, {
											duration: 2500, // default
											width: "30em", // default
											my: "CenterCenter", // default
											at: "CenterCenter", // default
											of: window, // default
											offset: "0 0", // default
											collision: "fit fit", // default
											onClose: null, // default
											autoClose: true, // default
											animationTimingFunction: "ease", // default
											animationDuration: 1000, // default
											closeOnBrowserNavigation: true // default
										});
									}
								},

								error: function (oError) {
									//	debugger;
									MessageToast.show("Error while submitting request. Please Try again.", {
										duration: 9000, // default
										width: "30em", // default
										my: "CenterCenter", // default
										at: "CenterCenter", // default
										of: window, // default
										offset: "0 0", // default
										collision: "fit fit", // default
										onClose: null, // default
										autoClose: true, // default
										animationTimingFunction: "ease", // default
										animationDuration: 1000, // default
										closeOnBrowserNavigation: true // default
									});

								}
							});

					}
					//perform posting to sap end
				} else {
					zmsg = "Please input all the mandatory field details !";
					sap.m.MessageBox.alert(
						zmsg, {
							onClose: function (oAction) {
								//	window.print();

							}
						});
				}
			} else if (Ztempid !== " ") {
				//temp id is not initial pass the warning message
				zmsg = "Temporary customer ID" + " " + Ztempid + " " + "has already been created. Please click on STEP 2 to proceed further !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
		},

	/*	onSaveTable: function (oEvent) {
			debugger;
			Ztempid = this.getView().byId("idTemp").getText();
			if (Ztempid != "") {
				var oTable = this.getView().byId("idTable1");
				var table = this.getView().byId("idTable1").getItems();
				var i;
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var idx;
				var Matnr;
				var Ztempid;
				var ZspecialPrice;
				var ZfreeMonthly;
				var ZbudgetPrice;
				var tableLength = table.length;
				var z = 0;
				//looping will start here
				for (i = 0; i < table.length; i++) {
					idx = i;
					Matnr = table[i].mAggregations.cells[0].mProperties.text;
					ZspecialPrice = table[i].mAggregations.cells[3].mProperties.value;
					ZfreeMonthly = table[i].mAggregations.cells[4].mProperties.value;
					ZbudgetPrice = table[i].mAggregations.cells[5].mProperties.value;
					var itemEntry = {
						Matnr: Matnr,
						Ztempid: Ztempid,
						ZspecialPrice: ZspecialPrice,
						ZfreeMonthly: ZfreeMonthly,
						ZbudgetPrice: ZbudgetPrice
					};

					oModel.create("/itemsSet",
						itemEntry, {

							success: function (data) {
								debugger;
								z = z + 1;
								if (table.length === z) {
									zmsg = "Updated Successfully";
									sap.m.MessageBox.success(
										zmsg, {
											onClose: function (oAction) {
												//	window.print();

											}
										});
								}
							},
							error: function (oError) {
								debugger;
								sap.m.MessageToast.show("Error while submitting request. Please Try again.", {
									duration: 9000, // default
									width: "30em", // default
									my: "CenterCenter", // default
									at: "CenterCenter", // default
									of: window, // default
									offset: "0 0", // default
									collision: "fit fit", // default
									onClose: null, // default
									autoClose: true, // default
									animationTimingFunction: "ease", // default
									animationDuration: 1000, // default
									closeOnBrowserNavigation: true // default
								});
							}

						});

				} //table end
			} else {
				debugger;
				sap.m.MessageToast.show("Customer ID not created. Please Try again.", {
					duration: 9000, // default
					width: "30em", // default
					my: "CenterCenter", // default
					at: "CenterCenter", // default
					of: window, // default
					offset: "0 0", // default
					collision: "fit fit", // default
					onClose: null, // default
					autoClose: true, // default
					animationTimingFunction: "ease", // default
					animationDuration: 1000, // default
					closeOnBrowserNavigation: true // default
				});
			}
		},*/

		additionalInfoValidation: function () {
			debugger;
			var name = this.getView().byId("idNameEn").getValue();
			if (name === "") {
				this.getView().byId("idNameEn").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idNameEn").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var nameAr = this.getView().byId("idNameAr").getValue();
			if (nameAr === "") {
				this.getView().byId("idNameAr").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idNameAr").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var tele = this.getView().byId("idTele").getValue();
			if (tele === "") {
				this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				if (tele.length < 9) {
					this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.Error);
					this._wizard.invalidateStep(this.byId("idCustomerDet"));
				} else {
					this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.None);
					this.getView().byId("idTele").setPlaceholder(" ");
				}

				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var street = this.getView().byId("idStreet").getValue();
			if (street === "") {
				this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var area = this.getView().byId("idArea").getValue();
			if (area === "") {
				this.getView().byId("idArea").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idArea").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var city = this.getView().byId("idCity").getValue();
			if (city === "") {
				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error);
				//	this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var so = this.getView().byId("idSalesOffice").getValue();
			if (so === "") {
				this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var channel = this.getView().byId("idChannel").getValue();
			if (channel === "") {
				this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var divison = this.getView().byId("idDivision").getValue();
			if (divison === "") {
				this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.None);
				this.getView().byId("idCreditLimit").setValue('0.000');
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var rep = this.getView().byId("idRep").getValue();
			if (rep === "") {
				this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var route = this.getView().byId("idRoute").getValue();
			if (route === "") {
				this.getView().byId("idRoute").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idRoute").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
			
			var outlets = this.getView().byId("idOutlets").getValue();
			if (outlets === "") {
				this.getView().byId("idOutlets").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCustomerDet"));
			} else {
				this.getView().byId("idOutlets").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		creditScreenValidation: function () {
			debugger;
			var custtype = this.getView().byId("idCustType").getSelectedKey();
			if (custtype === "") {
				this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.Error);
				//	this._wizard.invalidateStep(this.byId("idCredit"));
			} else {
				this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			var priceType = this.getView().byId("idPriceType").getSelectedKey();
			if (priceType === "") {
				this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.Error);
				//	this._wizard.invalidateStep(this.byId("idCredit"));
			} else {
				this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}

			if (custtype === "2" || custtype === "3") {
				var creditlimit = this.getView().byId("idCreditLimit").getValue();
				if (creditlimit === "0.000") {
					this.getView().byId("idCreditLimit").setValueState(sap.ui.core.ValueState.Error);
					//	this._wizard.invalidateStep(this.byId("idCredit"));
				} else {
					this.getView().byId("idCreditLimit").setValueState(sap.ui.core.ValueState.None);
					//	this._wizard.validateStep(this.byId("idCustomerDet"));
				}

				var payterm = this.getView().byId("idPayTerms").getValue();
				if (payterm === "") {
					this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.Error);
					//	this._wizard.invalidateStep(this.byId("idCredit"));
				} else {
					this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.None);
					//	this._wizard.validateStep(this.byId("idCustomerDet"));
				}
			}

			if ((creditlimit > 5000) && (custtype === "3")) {
				this.getView().byId("idCreditLimit").setValue('0.000');
				zmsg = "TC credit limit cannot be more than 5000.00 SAR";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
			//idfileUploaderPromissory
			if ((creditlimit >= 20000) && (custtype === "2") && (this.getView().byId("idChannel").getValue() !== "10")) {
				this.getView().byId("idfileUploaderPromissory").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idAttach"));
			} else if ((creditlimit < 20000) && (custtype === "2") && (this.getView().byId("idChannel").getValue() !== "10")) {
				this.getView().byId("idfileUploaderPromissory").setValueState(sap.ui.core.ValueState.None);
				this._wizard.validateStep(this.byId("idAttach"));
			}
		},

		onChangePayTerm: function (oEvent) {
			debugger;
			var payterm = this.getView().byId("idPayTerms").getSelectedKey();
			if (payterm !== "") {
				this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.None);
			} else {
				this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.Error);
				this._wizard.invalidateStep(this.byId("idCredit"));

			}
		},

		onChangeCustType: function (oEvent) {
			debugger;
			/*	this.getView().byId("idCreditLimit").setValue('0.000');
				var custType = this.getView().byId("idCustType").getSelectedKey();
				if (custType !== "") {
					this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.None);
				} else {
					this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.Error);
					//this._wizard.invalidateStep(this.byId("idCredit"));

				}

				var ZcustomerType = this.getView().byId("idCustType").getSelectedKey();
				//activate and deactivate
				if (ZcustomerType === '1') {
					this.getView().byId("idLabelCreditLimit").setVisible(false);
					this.getView().byId("idCreditLimit").setVisible(false);
					this.getView().byId("idLabelPayTerms").setVisible(false);
					this.getView().byId("idPayTerms").setVisible(false);
					//	this.getView().byId("idfileUploaderCreditAccount").setVisible(false);
					//	this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.Error);
					//	this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.Error);
					//	this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.Error);
				//	this.getView().byId("idfileUploaderCustomerId").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
				//	this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.None);
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
				//	this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.None);
					//this._wizard.invalidateStep(this.byId("idAttach"));
				} else if (ZcustomerType === '2') {
					this.getView().byId("idLabelCreditLimit").setVisible(true);
					this.getView().byId("idCreditLimit").setVisible(true);
					this.getView().byId("idLabelPayTerms").setVisible(true);
					this.getView().byId("idPayTerms").setVisible(true);
					this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.Error);
					//if the channel is HORECA or WS, shoplicense is mandatory
					if (this.getView().byId("idChannel").getValue() === '40' || this.getView().byId("idChannel").getValue() === '50') {
						this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.Error);
					}
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idfileUploaderCustomerId").setValueState(sap.ui.core.ValueState.Error);
				//	this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.Error);
					//this._wizard.invalidateStep(this.byId("idAttach"));

				} else if (ZcustomerType === '3') {
					this.getView().byId("idLabelCreditLimit").setVisible(true);
					this.getView().byId("idCreditLimit").setVisible(true);
					this.getView().byId("idLabelPayTerms").setVisible(false);
					this.getView().byId("idPayTerms").setVisible(false);
					this.getView().byId("idfileUploaderCreditAccount").setVisible(false);
					//this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.Error);
					//this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.Error);
					//this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.Error);
				//	this.getView().byId("idfileUploaderCustomerId").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
				//	this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.None);
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
				//	this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.None);
					//this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.Error);
					//this._wizard.invalidateStep(this.byId("idAttach"));
				}
				// make mandatory fields
				if (ZcustomerType === '2' || ZcustomerType === '3') {
					var creditlimit = this.getView().byId("idCreditLimit").getValue();
					if (creditlimit <= 0) {
						this.getView().byId("idCreditLimit").setValueState(sap.ui.core.ValueState.Error);
						//this._wizard.invalidateStep(this.byId("idCredit"));
						this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.Error);
						//	this._wizard.invalidateStep(this.byId("idCredit"));
					}
				}

				/*if (ZcustomerType === '1' || ZcustomerType === '3') {
					this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.None);
					this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.None);
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
					this._wizard.validateStep(this.byId("idAttach"));
				}*/
		},

		onChangePriceType: function (oEvent) {
			debugger
			var type = this.getView().byId("idPriceType").getSelectedKey();
			if (type === '1') {
				this.getView().byId("idTable1").setVisible(false);
			//	this.getView().byId("idBtnSaveTable").setVisible(false);
			} else if (type === '2') {
				this.getView().byId("idTable1").setVisible(true);
			//	this.getView().byId("idBtnSaveTable").setVisible(true);
			}

			if (type === "") {
				this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.Error);
				//	this._wizard.invalidateStep(this.byId("idCredit"));
			} else {
				this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.None);
				//	this._wizard.validateStep(this.byId("idCustomerDet"));
			}
		},

		/*handleUploadFiles: function (oEvent) {
			debugger;
			var oFileUploader = " ";
			if (this.getView().byId("idTemp").getText() !== "") {
				//shop licesnse
				oFileUploader = this.getView().byId("idfileUploaderShopLicense");
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameLicense = file.name;
					this.filetypeLicense = file.type;
					this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "SHOPLICENSE",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameLicense,
							"Filetype": that.filetypeLicense

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//Guarantee
				oFileUploader = this.getView().byId("idfileUploaderGuarantee");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameGuarantee = file.name;
					this.filetypeGuarantee = file.type;
					this.getView().byId("idfileUploaderGuarantee").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "GUARANTEE",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameGuarantee,
							"Filetype": that.filetypeGuarantee

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//VAT
				//oFileUploader = this.getView().byId("idfileUploaderVAT");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameVAT = file.name;
					this.filetypeVAT = file.type;
				//	this.getView().byId("idfileUploaderVAT").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "VAT",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameVAT,
							"Filetype": that.filetypeVAT

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//Agency
				//oFileUploader = this.getView().byId("idfileUploaderAgency");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameAgency = file.name;
					this.filetypeAgency = file.type;
					//this.getView().byId("idfileUploaderAgency").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "AGENCY",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameAgency,
							"Filetype": that.filetypeAgency

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//Bank stmt
			//	oFileUploader = this.getView().byId("idfileUploaderBankStmt");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameBankStmt = file.name;
					this.filetypeBankStmt = file.type;
					//this.getView().byId("idfileUploaderBankStmt").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "BANKSTMT",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameBankStmt,
							"Filetype": that.filetypeBankStmt

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//customer ID
			//	oFileUploader = this.getView().byId("idfileUploaderCustomerId");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameID = file.name;
					this.filetypeID = file.type;
				//	this.getView().byId("idfileUploaderCustomerId").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "ID",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameID,
							"Filetype": that.filetypeID

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//CR
			//	oFileUploader = this.getView().byId("idfileUploaderCR");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameCR = file.name;
					this.filetypeCR = file.type;
				//	this.getView().byId("idfileUploaderCR").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "CR",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameCR,
							"Filetype": that.filetypeCR

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//Promissory
				oFileUploader = this.getView().byId("idfileUploaderPromissory");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenamePromissory = file.name;
					this.filetypePromissory = file.type;
					this.getView().byId("idfileUploaderPromissory").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "PROMISSORY",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenamePromissory,
							"Filetype": that.filetypePromissory

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//credit account
			//	oFileUploader = this.getView().byId("idfileUploaderCreditAccount");
				//if (oFileUploader !== "") {
				var domRef = oFileUploader.getFocusDomRef();
				var file = domRef.files[0];
				if (domRef.files.length !== 0) {
					var that = this;
					this.filenameCreditAcc = file.name;
					this.filetypeCreditAcc = file.type;
					this.getView().byId("idfileUploaderCreditAccount").setValueState(sap.ui.core.ValueState.None);
					var reader = new FileReader();

					reader.onload = function (e) {
						debugger;
						var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
							"");
						//	that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "GUARANTEE");
						var oDataModel = that.getView().getModel();
						var payLoad = {
							"Ztempid": that.getView().byId("idTemp").getText(),
							"Ztype": "CREDITACC",
							"Content": btoa(encodeURI(vContent)),
							"Filename": that.filenameCreditAcc,
							"Filetype": that.filetypeCreditAcc

						};
						oDataModel.create("/attachmentsSet", payLoad, {
							success: function (oEvent) {
								sap.m.MessageToast.show("Success");
							},
							error: function (oError) {
								sap.m.MessageToast.show("error");
							}
						});
					};
					//file reader will start reading
					reader.readAsDataURL(file);
				}

				//at last
				var valueGuarantee = this.getView().byId("idfileUploaderGuarantee").getValueState();
				//var valueVat = this.getView().byId("idfileUploaderVAT").getValueState();
			//	var Agency = this.getView().byId("idfileUploaderAgency").getValueState();
				//var bankstmt = this.getView().byId("idfileUploaderBankStmt").getValueState();
				//var license = this.getView().byId("idfileUploaderShopLicense").getValueState();
				//var custId = this.getView().byId("idfileUploaderCustomerId").getValueState();
				//var cr = this.getView().byId("idfileUploaderCR").getValueState();
				//var promissory = this.getView().byId("idfileUploaderPromissory").getValueState();
				//var guarantee = this.getView().byId("idfileUploaderGuarantee").getValueState();
				//var credit = this.getView().byId("idfileUploaderCreditAccount").getValueState();

				if (valueGuarantee !== "Error" && valueVat !== "Error" && Agency !== "Error" && bankstmt !== "Error" && license !== "Error" &&
					custId !== "Error" && cr !== "Error" && promissory !== "Error" && guarantee !== "Error" && credit !== "Error"
				) {
					this._wizard.validateStep(this.byId("idAttach"));
				} else {
					zmsg = "Please upload all highlighted documents !";
					sap.m.MessageBox.alert(
						zmsg, {
							onClose: function (oAction) {
								//	window.print();

							}
						});
				}

			} else {
				//show message
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}

		},*/
		wizardCompletedHandler: function () {
			debugger;
			console.log("complete");
			/*var that = this;
			var oModel = that.getOwnerComponent().getModel();
			Ztempid = this.getView().byId("idTemp").getValue();
			
			var signEntry = {
						Ztempid: Ztempid
			};
			
			oModel.create("/signatureSet", signEntry, {
							success: function (oEvent) {
								//sap.m.MessageToast.show("Success");
								zmsg = "Verification for" + " " + that.zrecord + " " + " Captured Successfully. Thank you ! Please proceed further for approval process.";
								MessageToast.show(zmsg, {
									duration: 2500, // default
									width: "30em", // default
									my: "CenterCenter", // default
									at: "CenterCenter", // default
									of: window, // default
									offset: "0 0", // default
									collision: "fit fit", // default
									onClose: null, // default
									autoClose: true, // default
									animationTimingFunction: "ease", // default
									animationDuration: 1000, // default
									closeOnBrowserNavigation: true // default
								});
							},
							error: function (oError) {
								sap.m.MessageToast.show("error. Please try again");
							}
						});
			
			
			
			var oModel = that.getOwnerComponent().getModel();
			var Ztempid = this.getView().byId("idTemp").getText();
			if (Ztempid !== "") {
				var submit = {
					Ztempid: Ztempid,
					status: ""

				};

				//perform posting to sap start
				oModel.create("/submitSet",
					submit, {

						success: function (data) {
							//	debugger;
							if (data.status === 'E') {
								sap.m.MessageBox.alert(
									"Error submitting request. Try again !", {
										onClose: function (oAction) {
											//	window.print();

										}
									});

							} else {
								//if the temp customer is created
								Ztempid = data.Ztempid;

								zmsg = "Submitted Requst with ID" + Ztempid + " for approval. Thank you !";
								MessageToast.show(zmsg, {
									duration: 2500, // default
									width: "30em", // default
									my: "CenterCenter", // default
									at: "CenterCenter", // default
									of: window, // default
									offset: "0 0", // default
									collision: "fit fit", // default
									onClose: null, // default
									autoClose: true, // default
									animationTimingFunction: "ease", // default
									animationDuration: 1000, // default
									closeOnBrowserNavigation: true // default
								});
							}
						},

						error: function (oError) {
							//	debugger;
							MessageToast.show("Error while submitting request. Please Try again.", {
								duration: 9000, // default
								width: "30em", // default
								my: "CenterCenter", // default
								at: "CenterCenter", // default
								of: window, // default
								offset: "0 0", // default
								collision: "fit fit", // default
								onClose: null, // default
								autoClose: true, // default
								animationTimingFunction: "ease", // default
								animationDuration: 1000, // default
								closeOnBrowserNavigation: true // default
							});

						}
					});

			} else {
				zmsg = "Temporary customer ID not created !";
				sap.m.MessageBox.alert(
					zmsg, {
						onClose: function (oAction) {
							//	window.print();

						}
					});
			}
*/
		},

		handleWizardCancel: function () {
			debugger;
			location.reload();
		},

		/*onEdit: function () {
			//	this.getView().byId("idChannel").setEditable(false);
			//var buttontext = this.getView().byId("idMainEdit").getText();
			if (buttontext === "EDIT DATA") {
				this.getView().byId("idNameEn").setEditable(true);
				this.getView().byId("idNameAr").setEditable(true);
				this.getView().byId("idTele").setEditable(true);
				this.getView().byId("idSalesOffice").setEditable(true);
				this.getView().byId("idCity").setEditable(true);
				this.getView().byId("idStreet").setEditable(true);
				this.getView().byId("idArea").setEditable(true);
				this.getView().byId("idArea").setEditable(true);
				this.getView().byId("idDivision").setEditable(true);
				this.getView().byId("idRep").setEditable(true);
				this.getView().byId("idRoute").setEditable(true);
				this.getView().byId("idMainEdit").setText("DISPLAY DATA");
				this.getView().byId("idMainSave").setVisible(true);

			} else if (buttontext = "DISPLAY DATA") {
				this.getView().byId("idChannel").setEditable(false);
				this.getView().byId("idNameEn").setEditable(false);
				this.getView().byId("idNameAr").setEditable(false);
				this.getView().byId("idTele").setEditable(false);
				this.getView().byId("idSalesOffice").setEditable(false);
				this.getView().byId("idCity").setEditable(false);
				this.getView().byId("idStreet").setEditable(false);
				this.getView().byId("idArea").setEditable(false);
				this.getView().byId("idArea").setEditable(false);
				this.getView().byId("idDivision").setEditable(false);
				this.getView().byId("idRep").setEditable(false);
				this.getView().byId("idRoute").setEditable(false);
				this.getView().byId("idMainEdit").setText("EDIT DATA");
				this.getView().byId("idMainSave").setVisible(false);
			}

		},*/

		onEditCredit: function () {
			//	this.getView().byId("idChannel").setEditable(false);
			debugger;
			var buttontext = this.getView().byId("idEditCredit").getText();
			if (buttontext === "EDIT CREDIT DATA") {
				//this.getView().byId("idCustType").setEditable(true);
				//this.getView().byId("idPriceType").setEditable(true);
				this.getView().byId("idEntryFees").setEditable(true);
				this.getView().byId("idCreditLimit").setEditable(true);
				this.getView().byId("idPayTerms").setEditable(true);
				this.getView().byId("idRebate").setEditable(true);
				this.getView().byId("idMonthlyFixed").setEditable(true);
				this.getView().byId("idSaveCredit").setVisible(true);
				this.getView().byId("idEditCredit").setText("DISPLAY CREDIT DATA");
				this.getView().byId("idSaveCredit").setVisible(true);

			} else if (buttontext = "DISPLAY CREDIT DATA") {
				this.getView().byId("idCustType").setEditable(false);
				this.getView().byId("idPriceType").setEditable(false);
				this.getView().byId("idEntryFees").setEditable(false);
				this.getView().byId("idCreditLimit").setEditable(false);
				this.getView().byId("idPayTerms").setEditable(false);
				this.getView().byId("idRebate").setEditable(false);
				this.getView().byId("idMonthlyFixed").setEditable(false);
				this.getView().byId("idSaveCredit").setVisible(false);
				this.getView().byId("idEditCredit").setText("EDIT CREDIT DATA");
				this.getView().byId("idSaveCredit").setVisible(false);
			}

		},

		openVATFile: function (oEvent) {

			debugger;

			var Zftype = 'VAT';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;
						//osfCredit.setModel(oModel3);

						// actual logic for handling file loader start
						//	var fMres = zvatcontent;
						//	var fType = zvatfiletype;
						//	var fName = zvatfilename;
						/*	if	(fType === "text/plain") {
								sap.ui.core.util.File.save(fMres, fName.replace(".txt", ""), "txt", fType, "utf-8", true);
							} else {
							var byteNumbers = new Array(fMres.length);
							for(var i = 0; i < fMres.length; i++){
								byteNumbers[i] = fMres.charCodeAt(i);
							}
							var byteArray = new Uint8Array(byteNumbers);
							var blob = new Blob([byteArray], {
								type : fType
							});
							var url = URL.createObjectURL(blob);
							window.open(url, '_blank');

							}*/

						//var currentObject = oEvent.getSource().getModel("uploadCollectionITab").getProperty(sPath);

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open agnecy file
		openAgencyFile: function (oEvent) {

			debugger;

			var Zftype = 'AGENCY';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open bank statement file
		openBankStmtFile: function (oEvent) {

			debugger;

			var Zftype = 'BANKSTMT';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open shop license  file
		openLicenseFile: function (oEvent) {

			debugger;

			var Zftype = 'SHOPLICENSE';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open customer ID  file
		openIDFile: function (oEvent) {

			debugger;

			var Zftype = 'ID';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open customer CR  file
		openCRFile: function (oEvent) {

			debugger;

			var Zftype = 'CR';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open customer promoissory  file
		openPromissoryFile: function (oEvent) {

			debugger;

			var Zftype = 'PROMISSORY';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open bank letter  file
		openBankLetterFile: function (oEvent) {

			debugger;

			var Zftype = 'GUARANTEE';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		//open credit account  file
		openCreditAccountFile: function (oEvent) {

			debugger;

			var Zftype = 'CREDITACC';

			Ztempid = this.getView().byId("idTemp").getValue();

			if (Zftype !== "") {
				//call SAP and get file data
				var that = this;
				var oModel = that.getOwnerComponent().getModel();
				var sPath = "/attachmentsSet(Ztempid=" + "'" + Ztempid + "'" + ",Ztype=" + "'" + Zftype + "'" + ")"; // sap.ui.model.FilterOperator.EQ, Ztempid )";

				oModel.read(sPath, {
					success: function (oData, response) {
						//var oModel3 = new sap.ui.model.json.JSONModel(oData);
						var fMres = oData.Content;
						var fType = oData.Filetype;
						var fName = oData.Filename;

						fMres = "data:" + fType + ";base64," + fMres;

						if (!that.displayContent) {
							that.displayContent = sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview", that);
							that.getView().addDependent(that.displayContent);
						}

						var splitTest = fType.split("/");
						var mimType = splitTest[0];
						var fType = fName.split(".");
						var fileType = fType[1];

						switch (mimType) {
						case 'image':
							sap.ui.getCore().byId("idPdfViewer").setVisible(false);
							sap.ui.getCore().byId("image").setVisible(true);
							sap.ui.getCore().byId("image").setSrc(fMres);
							break;
						default:
							sap.ui.getCore().byId("idPdfViewer").setVisible(true);
							sap.ui.getCore().byId("image").setVisible(false);
							var html = sap.ui.getCore().byId("idPdfViewer");
							html.setContent('<iframe src="' + fMres +
								'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');
							break;
						}
						debugger;
						if (fileType !== "docx" && fileType !== "pub" && fileType !== "xls" && fileType !== "ppt" && fileType !== "doc" && fileType !==
							"xlsx") {
							that.displayContent.open();
							that.fragOpen = true;
						}
						if (that.fragOpen === undefined) {
							window.open(fMres, "_self");
							fMres = fMres.replace("data:APPLICATION/WWI;base64,", "");
						}

						//	this.displayContent.open();

					},
					error: function () {

						sap.m.MessageToast.show("No Data retreived");
					}

				})
			}

		},

		onPressBarCloseBtn: function (oEvent) {
			this.displayContent.close();
			this.fragOpen = undefined;
		},

		onEditQtyValue: function (oEvent) {
			this.getView().byId("idMonthlyVolume").setEditable(true);
			this.getView().byId("idMonthlyValue").setEditable(true);
			this.getView().byId("idAnnualVolume").setEditable(true);
			this.getView().byId("idAnnualValue").setEditable(true);
		//	this.getView().byId("idSaveQtyValue").setVisible(true);
		//	this.getView().byId("idEditQtyValue").setVisible(false);                        
		}
		/*	uploadVATFile : function (oEvent) {
			
			debugger;
				var oFileUploader = " ";
				if (this.getView().byId("idTemp").getText() !== "") {
					//shop licesnse
					oFileUploader = this.getView().byId("idfileUploaderVAT");
					var domRef = oFileUploader.getFocusDomRef();
					var file = domRef.files[0];
					if (domRef.files.length !== 0) {
						var that = this;
						this.filenameLicense = file.name;
						this.filetypeLicense = file.type;
						this.getView().byId("idfileUploaderShopLicense").setValueState(sap.ui.core.ValueState.None);
						var reader = new FileReader();

						reader.onload = function (e) {
							debugger;
							var vContent = e.currentTarget.result.replace("application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,",
								"");
							//that.postToSap(that.getView().byId("idTemp").getText(), that.filename, that.filetype, vContent, "SHOPLICENSE");
							var oDataModel = that.getView().getModel();
							var payLoad = {
								"Ztempid": that.getView().byId("idTemp").getText(),
								"Ztype": "SHOPLICENSE",
								"Content": btoa(encodeURI(vContent)),
								"Filename": that.filenameLicense,
								"Filetype": that.filetypeLicense

							};
							oDataModel.create("/attachmentsSet", payLoad, {
								success: function (oEvent) {
									sap.m.MessageToast.show("Success");
								},
								error: function (oError) {
									sap.m.MessageToast.show("error");
								}
							});
						};
						//file reader will start reading
						reader.readAsDataURL(file);
					}	
				}	
			}*/

		/*	addRow: function (oEvent) {
		var columnListItemNewLine = new sap.m.ColumnListItem( {
   cells: [
     // add created controls to item
     new sap.m.Input({ type: "Text" }),
     new sap.m.Text(),
     new sap.m.Input({ type: "Number", value: "0.00"}),
     new sap.m.Input({ type: "Number", value: "0.00"}),
     new sap.m.Input({ type: "Number", value: "0.00"})
     ]
  });
  this.getView().byId("idTable").addItem(columnListItemNewLine);	
		} */

	});
});