var Ztempid=" ";var ZnameEn=" ";var ZnameAr=" ";var Zmobile=" ";var Zstreet=" ";var Zarea=" ";var Zcity=" ";var Zsalesoffice=" ";var Zchannel=" ";var Zoutlets=" ";var Zspart=" ";var Zrep=" ";var Zerror=" ";var Zduplicate=" ";var zmsg=" ";var Zroute=" ";var oFileUploader=" ";var ZmonthlyQty=" ";var ZmonthlyValue=" ";var ZyearlyQty=" ";var ZyearlyValue=" ";var string="";var zvatcontent="";var zvatfiletype="";var zvatfilename="";var zagencyfiletype="";var zagencyfilename="";var zbankstmtfiletype="";var zbankstmtfilename="";var zlicensefiletype="";var zlicensefilename="";var zidfiletype="";var zidfilename="";var zcrfiletype="";var zcrfilename="";var zpromissoryfiletype="";var zpromissoryfilename="";var zbankletterfiletype="";var zbankletterfilename="";var zcreditaccfilename="";var zcreditaccfiletype="";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/Fragment","sap/ui/model/Filter","sap/m/MessagePopover","sap/m/MessageBox","sap/m/MessagePopoverItem","sap/ui/model/FilterOperator","sap/m/MessageToast"],function(e,t,i,a,s,d,l,r){"use strict";return e.extend("zcontractstatus.sd.controller.contractstatus",{onInit:function(){debugger;this._wizard=this.byId("CreateProductWizard");this.getView().byId("idChannel").setEditable(false);this.getView().byId("idStatus").setEditable(false);this.getView().byId("idContactName").setEditable(false);this.getView().byId("idBrandNameAr").setEditable(false);this.getView().byId("idTele").setEditable(false);this.getView().byId("idMobile").setEditable(false);this.getView().byId("idEmail").setEditable(false);this.getView().byId("idUser").setEditable(false);this.getView().byId("idSapId").setEditable(false);this.getView().byId("idNameEn").setEditable(false);this.getView().byId("idNameAr").setEditable(false);this.getView().byId("idTele").setEditable(false);this.getView().byId("idSalesOffice").setEditable(false);this.getView().byId("idCity").setEditable(false);this.getView().byId("idStreet").setEditable(false);this.getView().byId("idArea").setEditable(false);this.getView().byId("idArea").setEditable(false);this.getView().byId("idDivision").setEditable(false);this.getView().byId("idRep").setEditable(false);this.getView().byId("idRoute").setEditable(false);this.getView().byId("idOutlets").setEditable(false);this.getView().byId("idCustType").setEditable(false);this.getView().byId("idPriceType").setEditable(false);this.getView().byId("idEntryFees").setEditable(false);this.getView().byId("idCreditLimit").setEditable(false);this.getView().byId("idPayTerms").setEditable(false);this.getView().byId("idRebate").setEditable(false);this.getView().byId("idMonthlyFixed").setEditable(false);this.getView().byId("idSaveCredit").setVisible(false);this.getView().byId("idMonthlyVolume").setEditable(false);this.getView().byId("idMonthlyValue").setEditable(false);this.getView().byId("idAnnualVolume").setEditable(false);this.getView().byId("idAnnualValue").setEditable(false);this.getView().byId("idComments").setEditable(false);this.getView().byId("idChannel").setEditable(false);this.getView().byId("idUser").setEditable(false);this.getView().byId("idSapId").setEditable(false);this.getView().byId("idNameEn").setEditable(false);this.getView().byId("idNameAr").setEditable(false);this.getView().byId("idTele").setEditable(false);this.getView().byId("idSalesOffice").setEditable(false);this.getView().byId("idCity").setEditable(false);this.getView().byId("idStreet").setEditable(false);this.getView().byId("idArea").setEditable(false);this.getView().byId("idArea").setEditable(false);this.getView().byId("idDivision").setEditable(false);this.getView().byId("idRep").setEditable(false);this.getView().byId("idRoute").setEditable(false);this.getView().byId("idOutlets").setEditable(false);this.getView().byId("idEmpId").setEditable(false);var e=this;var t=e.getOwnerComponent().getModel();var i="/customerHeaderSet('"+this.zrecord+"')";t.read(i,{success:function(t,i){e.getView().byId("idChannel").setEditable(false);e.getView().byId("idUser").setEditable(false);e.getView().byId("idSapId").setEditable(false);e.getView().byId("idNameEn").setEditable(false);e.getView().byId("idNameAr").setEditable(false);e.getView().byId("idTele").setEditable(false);e.getView().byId("idSalesOffice").setEditable(false);e.getView().byId("idCity").setEditable(false);e.getView().byId("idStreet").setEditable(false);e.getView().byId("idArea").setEditable(false);e.getView().byId("idArea").setEditable(false);e.getView().byId("idDivision").setEditable(false);e.getView().byId("idRep").setEditable(false);e.getView().byId("idRoute").setEditable(false);e.getView().byId("idOutlets").setEditable(false);var a=new sap.ui.model.json.JSONModel(t);var s=e.getView().byId("idCustomerDetails");s.setModel(a);var d=e.getView().byId("idCreditDetails");if(a.oData.Zbusinessplan==="Y"){e.getView().byId("Switch").setState(true)}else{e.getView().byId("Switch").setState(false)}e.getView().byId("idCustType").setSelectedKey(a.oData.ZcustomerType);e.onChangeCustType();e.getView().byId("idPriceType").setSelectedKey(a.oData.Zpricetype);e.onChangePriceType();e.getView().byId("idEntryFees").setValue(a.oData.ZentryFees);e.getView().byId("idCreditLimit").setValue(a.oData.Zcreditlimit);e.getView().byId("idPayTerms").setSelectedKey(a.oData.Zterm);e.onChangePayTerm();e.getView().byId("idRebate").setValue(a.oData.Zrebate);e.getView().byId("idMonthlyFixed").setValue(a.oData.ZmonthlyFixed);e.getView().byId("idMonthlyVolume").setValue(a.oData.ZmonthlyQty);e.getView().byId("idMonthlyValue").setValue(a.oData.ZmonthlyValue);e.getView().byId("idAnnualVolume").setValue(a.oData.ZyearlyQty);e.getView().byId("idAnnualValue").setValue(a.oData.ZyearlyValue);e.getView().byId("idRoute").setValue(a.oData.Zroute);e.getView().byId("idOutlets").setValue(a.oData.Zoutlets);if(a.oData.Zvat!==""){e.getView().byId("idfileVatBtn").setVisible(true);e.getView().byId("idfileVatBtn").setText(a.oData.Zvat);e.zvatcontent=a.oData.Zvat_content;zvatcontent=a.oData.Zvat_content;e.zvatfiletype=a.oData.Zvat_type;zvatfiletype=a.oData.Zvat_type;zvatfilename=a.oData.Zvat;e.getView().byId("idfileVatBtn").setType("Accept")}else{e.getView().byId("idfileVatBtn").setVisible(true);e.getView().byId("idfileVatBtn").setText("NO FILE UPLOADED");e.getView().byId("idfileVatBtn").setType("Reject")}if(a.oData.ZAGENCY!==""){e.getView().byId("idfileAgency").setVisible(true);e.getView().byId("idfileAgency").setText(a.oData.ZAGENCY);zagencyfiletype=a.oData.ZAGENCY_TYPE;zagencyfilename=a.oData.ZAGENCY;e.getView().byId("idfileAgency").setType("Accept")}else{e.getView().byId("idfileAgency").setVisible(true);e.getView().byId("idfileAgency").setText("NO FILE UPLOADED");e.getView().byId("idfileAgency").setType("Reject")}if(a.oData.ZBANK_STMT!==""){e.getView().byId("idfileBankStmt").setVisible(true);e.getView().byId("idfileBankStmt").setText(a.oData.ZBANK_STMT);zbankstmtfilename=a.oData.ZBANK_STMT;zbankstmtfiletype=a.oData.ZBANK_STMT_TYPE;e.getView().byId("idfileBankStmt").setType("Accept")}else{e.getView().byId("idfileBankStmt").setVisible(true);e.getView().byId("idfileBankStmt").setText("NO FILE UPLOADED");e.getView().byId("idfileBankStmt").setType("Reject")}
//check for shop license file
if(a.oData.ZLICENSE!==""){
//	that.getView().byId("idfileUploaderShopLicense").setVisible(false);
e.getView().byId("idfileLicense").setVisible(true);e.getView().byId("idfileLicense").setText(a.oData.ZLICENSE);zlicensefilename=a.oData.ZLICENSE;zlicensefiletype=a.oData.ZLICENSE_TYPE;e.getView().byId("idfileLicense").setType("Accept")}else{e.getView().byId("idfileLicense").setVisible(true);e.getView().byId("idfileLicense").setText("NO FILE UPLOADED");e.getView().byId("idfileLicense").setType("Reject")}if(a.oData.ZID!==""){e.getView().byId("idfileID").setVisible(true);e.getView().byId("idfileID").setText(a.oData.ZID);zidfilename=a.oData.ZID;zidfiletype=a.oData.ZID_TYPE;e.getView().byId("idfileID").setType("Accept")}else{e.getView().byId("idfileID").setVisible(true);e.getView().byId("idfileID").setText("NO FILE UPLOADED");e.getView().byId("idfileID").setType("Reject")}if(a.oData.ZCR!==""){e.getView().byId("idfileCR").setVisible(true);e.getView().byId("idfileCR").setText(a.oData.ZCR);zcrfilename=a.oData.ZCR;zcrfiletype=a.oData.ZCR_TYPE;e.getView().byId("idfileCR").setType("Accept")}else{e.getView().byId("idfileCR").setVisible(true);e.getView().byId("idfileCR").setText("NO FILE UPLOADED");e.getView().byId("idfileCR").setType("Reject")}if(a.oData.ZPROMISSORY!==""){e.getView().byId("idfilePromissory").setVisible(true);e.getView().byId("idfilePromissory").setText(a.oData.ZPROMISSORY);zpromissoryfilename=a.oData.ZPROMISSORY;zpromissoryfiletype=a.oData.ZPROMISSORY_TYPE;e.getView().byId("idfilePromissory").setType("Accept")}else{e.getView().byId("idfilePromissory").setVisible(true);e.getView().byId("idfilePromissory").setText("NO FILE UPLOADED");e.getView().byId("idfilePromissory").setType("Reject")}if(a.oData.ZBANKLETTER!==""){e.getView().byId("idfileBankLetter").setVisible(true);e.getView().byId("idfileBankLetter").setText(a.oData.ZBANKLETTER);zbankletterfiletype=a.oData.ZBANKLETTER;zbankletterfilename=a.oData.ZBANKLETTER_TYPE;e.getView().byId("idfileBankLetter").setType("Accept")}else{e.getView().byId("idfileBankLetter").setVisible(true);e.getView().byId("idfileBankLetter").setText("NO FILE UPLOADED");e.getView().byId("idfileBankLetter").setType("Reject")}if(a.oData.ZCREDITACC!==""){e.getView().byId("idfileCreditAcc").setVisible(true);e.getView().byId("idfileCreditAcc").setText(a.oData.ZCREDITACC);zcreditaccfilename=a.oData.ZCREDITACC;zcreditaccfiletype=a.oData.ZCREDITACC_TYPE;e.getView().byId("idfileCreditAcc").setType("Accept")}else{e.getView().byId("idfileCreditAcc").setVisible(true);e.getView().byId("idfileCreditAcc").setText("NO FILE UPLOADED");e.getView().byId("idfileCreditAcc").setType("Reject")}},error:function(){sap.m.MessageToast.show("No Data retreived")}});debugger;var a="/customerItemSet";var s=[];var d=new sap.ui.model.Filter("Ztempid",sap.ui.model.FilterOperator.EQ,this.zrecord);s.push(d);e=this;t.read(a,{filters:s,success:function(t,i){debugger;var a=new sap.ui.model.json.JSONModel(t);var s=e.getView().byId("idTable1");s.setModel(a)},error:function(e){debugger}})},onSubmit:function(e){debugger;this.zrecord=this.getView().byId("idTemp").getValue();if(this.zrecord!==" "){var t=this;var i=t.getOwnerComponent().getModel();var a="/customerHeaderSet('"+this.zrecord+"')";i.read(a,{success:function(e,i){t.getView().byId("idChannel").setEditable(false);t.getView().byId("idStatus").setEditable(false);t.getView().byId("idUser").setEditable(false);t.getView().byId("idSapId").setEditable(false);t.getView().byId("idNameEn").setEditable(false);t.getView().byId("idNameAr").setEditable(false);t.getView().byId("idTele").setEditable(false);t.getView().byId("idSalesOffice").setEditable(false);t.getView().byId("idCity").setEditable(false);t.getView().byId("idStreet").setEditable(false);t.getView().byId("idArea").setEditable(false);t.getView().byId("idArea").setEditable(false);t.getView().byId("idDivision").setEditable(false);t.getView().byId("idRep").setEditable(false);t.getView().byId("idRoute").setEditable(false);t.getView().byId("idOutlets").setEditable(false);t.getView().byId("idComments").setEditable(false);var a=new sap.ui.model.json.JSONModel(e);var s=t.getView().byId("idCustomerDetails");s.setModel(a);var d=t.getView().byId("idCreditDetails");t.getView().byId("idCustType").setSelectedKey(a.oData.ZcustomerType);t.onChangeCustType();t.getView().byId("idPriceType").setSelectedKey(a.oData.Zpricetype);t.onChangePriceType();t.getView().byId("idEntryFees").setValue(a.oData.ZentryFees);t.getView().byId("idCreditLimit").setValue(a.oData.Zcreditlimit);t.getView().byId("idPayTerms").setSelectedKey(a.oData.Zterm);t.onChangePayTerm();t.getView().byId("idRebate").setValue(a.oData.Zrebate);t.getView().byId("idMonthlyFixed").setValue(a.oData.ZmonthlyFixed);t.getView().byId("idMonthlyVolume").setValue(a.oData.ZmonthlyQty);t.getView().byId("idMonthlyValue").setValue(a.oData.ZmonthlyValue);t.getView().byId("idAnnualVolume").setValue(a.oData.ZyearlyQty);t.getView().byId("idAnnualValue").setValue(a.oData.ZyearlyValue);t.getView().byId("idRoute").setValue(a.oData.Zroute);t.getView().byId("idOutlets").setValue(a.oData.Zoutlets);t.getView().byId("idEmpDescr").setText(a.oData.Zempname);if(a.oData.Zbusinessplan==="Y"){t.getView().byId("Switch").setState(true)}else{t.getView().byId("Switch").setState(false)}if(a.oData.Zvat!==""){t.getView().byId("idfileVatBtn").setVisible(true);t.getView().byId("idfileVatBtn").setText(a.oData.Zvat);t.zvatcontent=a.oData.Zvat_content;zvatcontent=a.oData.Zvat_content;t.zvatfiletype=a.oData.Zvat_type;zvatfiletype=a.oData.Zvat_type;zvatfilename=a.oData.Zvat;t.getView().byId("idfileVatBtn").setType("Accept")}else{t.getView().byId("idfileVatBtn").setVisible(true);t.getView().byId("idfileVatBtn").setText("NO FILE UPLOADED");t.getView().byId("idfileVatBtn").setType("Reject")}if(a.oData.ZAGENCY!==""){t.getView().byId("idfileAgency").setVisible(true);t.getView().byId("idfileAgency").setText(a.oData.ZAGENCY);zagencyfiletype=a.oData.ZAGENCY_TYPE;zagencyfilename=a.oData.ZAGENCY;t.getView().byId("idfileAgency").setType("Accept")}else{t.getView().byId("idfileAgency").setVisible(true);t.getView().byId("idfileAgency").setText("NO FILE UPLOADED");t.getView().byId("idfileAgency").setType("Reject")}if(a.oData.ZBANK_STMT!==""){t.getView().byId("idfileBankStmt").setVisible(true);t.getView().byId("idfileBankStmt").setText(a.oData.ZBANK_STMT);zbankstmtfilename=a.oData.ZBANK_STMT;zbankstmtfiletype=a.oData.ZBANK_STMT_TYPE;t.getView().byId("idfileBankStmt").setType("Accept")}else{t.getView().byId("idfileBankStmt").setVisible(true);t.getView().byId("idfileBankStmt").setText("NO FILE UPLOADED");t.getView().byId("idfileBankStmt").setType("Reject")}
//check for shop license file
if(a.oData.ZLICENSE!==""){
//	that.getView().byId("idfileUploaderShopLicense").setVisible(false);
t.getView().byId("idfileLicense").setVisible(true);t.getView().byId("idfileLicense").setText(a.oData.ZLICENSE);zlicensefilename=a.oData.ZLICENSE;zlicensefiletype=a.oData.ZLICENSE_TYPE;t.getView().byId("idfileLicense").setType("Accept")}else{t.getView().byId("idfileLicense").setVisible(true);t.getView().byId("idfileLicense").setText("NO FILE UPLOADED");t.getView().byId("idfileLicense").setType("Reject")}if(a.oData.ZID!==""){t.getView().byId("idfileID").setVisible(true);t.getView().byId("idfileID").setText(a.oData.ZID);zidfilename=a.oData.ZID;zidfiletype=a.oData.ZID_TYPE;t.getView().byId("idfileID").setType("Accept")}else{t.getView().byId("idfileID").setVisible(true);t.getView().byId("idfileID").setText("NO FILE UPLOADED");t.getView().byId("idfileID").setType("Reject")}if(a.oData.ZCR!==""){t.getView().byId("idfileCR").setVisible(true);t.getView().byId("idfileCR").setText(a.oData.ZCR);zcrfilename=a.oData.ZCR;zcrfiletype=a.oData.ZCR_TYPE;t.getView().byId("idfileCR").setType("Accept")}else{t.getView().byId("idfileCR").setVisible(true);t.getView().byId("idfileCR").setText("NO FILE UPLOADED");t.getView().byId("idfileCR").setType("Reject")}if(a.oData.ZPROMISSORY!==""){t.getView().byId("idfilePromissory").setVisible(true);t.getView().byId("idfilePromissory").setText(a.oData.ZPROMISSORY);zpromissoryfilename=a.oData.ZPROMISSORY;zpromissoryfiletype=a.oData.ZPROMISSORY_TYPE;t.getView().byId("idfilePromissory").setType("Accept")}else{t.getView().byId("idfilePromissory").setVisible(true);t.getView().byId("idfilePromissory").setText("NO FILE UPLOADED");t.getView().byId("idfilePromissory").setType("Reject")}if(a.oData.ZBANKLETTER!==""){t.getView().byId("idfileBankLetter").setVisible(true);t.getView().byId("idfileBankLetter").setText(a.oData.ZBANKLETTER);zbankletterfiletype=a.oData.ZBANKLETTER;zbankletterfilename=a.oData.ZBANKLETTER_TYPE;t.getView().byId("idfileBankLetter").setType("Accept")}else{t.getView().byId("idfileBankLetter").setVisible(true);t.getView().byId("idfileBankLetter").setText("NO FILE UPLOADED");t.getView().byId("idfileBankLetter").setType("Reject")}if(a.oData.ZCREDITACC!==""){t.getView().byId("idfileCreditAcc").setVisible(true);t.getView().byId("idfileCreditAcc").setText(a.oData.ZCREDITACC);zcreditaccfilename=a.oData.ZCREDITACC;zcreditaccfiletype=a.oData.ZCREDITACC_TYPE;t.getView().byId("idfileCreditAcc").setType("Accept")}else{t.getView().byId("idfileCreditAcc").setVisible(true);t.getView().byId("idfileCreditAcc").setText("NO FILE UPLOADED");t.getView().byId("idfileCreditAcc").setType("Reject")}},error:function(){sap.m.MessageToast.show("No Data retreived")}});debugger;var s="/customerItemSet";var d=[];var l=new sap.ui.model.Filter("Ztempid",sap.ui.model.FilterOperator.EQ,this.zrecord);d.push(l);t=this;i.read(s,{filters:d,success:function(e,i){debugger;var a=new sap.ui.model.json.JSONModel(e);var s=t.getView().byId("idTable1");s.setModel(a)},error:function(e){debugger}})}else{}},onValueHelpRequest:function(e){debugger;var t=e.getSource().getValue(),a=this.getView();this.inputId=e.getSource().getId();if(!this._valueHelpDialog){this._valueHelpDialog=sap.ui.xmlfragment("zcontractstatus.sd.fragments.ValueHelpDialog",this);this.getView().addDependent(this._valueHelpDialog)}this._valueHelpDialog.getBinding("items").filter([new i("Zcity",sap.ui.model.FilterOperator.EQ,t)]);this._valueHelpDialog.open(t)},onValueHelpSearch:function(e){var t=e.getParameter("value");var a=new i("Zcity",l.Contains,t);e.getSource().getBinding("items").filter([a])},onValueHelpClose:function(e){debugger;var t=e.getParameter("selectedItem");e.getSource().getBinding("items").filter([]);if(!t){return}this.byId("idCity").setValue(t.getTitle());var i=t.getTitle();if(i===""){this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None)}},onValueHelpRequestSoff:function(e){debugger;var t=e.getSource().getValue(),a=this.getView();this.inputId1=e.getSource().getId();if(!this._valueHelpDialogSoff){this._valueHelpDialogSoff=sap.ui.xmlfragment("zcontractstatus.sd.fragments.ValueHelpDialogSoff",this);this.getView().addDependent(this._valueHelpDialogSoff)}this._valueHelpDialogSoff.getBinding("items").filter([new i("Vkbur",sap.ui.model.FilterOperator.Contains,t)]);this._valueHelpDialogSoff.open(t)},onValueHelpSearchSoff:function(e){debugger;var t=e.getParameter("value");var a=new i("Vkbur",l.Contains,t);e.getSource().getBinding("items").filter([a])},onValueHelpCloseSoff:function(e){debugger;var t=e.getParameter("selectedItem");e.getSource().getBinding("items").filter([]);if(!t){return}this.byId("idSalesOffice").setValue(t.getTitle());this.byId("idSoffDescr").setText(t.getDescription());var i=t.getTitle();if(i===""){this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.None)}},onValueHelpRequestChannel:function(e){debugger;debugger;this.getView().byId("idCreditLimit").setValue("0.000");var t=e.getSource().getValue(),a=this.getView();this.inputId2=e.getSource().getId();if(!this._valueHelpDialogChannel){this._valueHelpDialogChannel=sap.ui.xmlfragment("zcontractstatus.sd.fragments.ValueHelpDialogChannel",this);this.getView().addDependent(this._valueHelpDialogChannel)}this._valueHelpDialogChannel.getBinding("items").filter([new i("Vtweg",sap.ui.model.FilterOperator.Contains,t)]);this._valueHelpDialogChannel.open(t)},onValueHelpSearchChannel:function(e){var t=e.getParameter("value");var a=new i("Vtweg",l.Contains,t);e.getSource().getBinding("items").filter([a])},onValueHelpCloseChannel:function(e){var t=e.getParameter("selectedItem");e.getSource().getBinding("items").filter([]);if(!t){return}this.byId("idChannel").setValue(t.getTitle());this.byId("idChannelDescr").setText(t.getDescription());var i=t.getTitle();if(i===""){this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.None)}},onValueHelpRequestDivison:function(e){debugger;var t=e.getSource().getValue(),a=this.getView();this.inputId2=e.getSource().getId();if(!this._valueHelpDialogDivison){this._valueHelpDialogDivison=sap.ui.xmlfragment("zcontractstatus.sd.fragments.ValueHelpDialogDivison",this);this.getView().addDependent(this._valueHelpDialogDivison)}this._valueHelpDialogDivison.getBinding("items").filter([new i("Vtweg",sap.ui.model.FilterOperator.Contains,a.byId("idChannel").getValue())]);this._valueHelpDialogDivison.open(t)},onValueHelpSearchDivison:function(e){debugger;var t=e.getParameter("value");var a=new i("Vtweg",l.Contains,t);e.getSource().getBinding("items").filter([a])},onValueHelpCloseDivison:function(e){debugger;var t=e.getParameter("selectedItem");e.getSource().getBinding("items").filter([]);if(!t){return}this.byId("idDivision").setValue(t.getTitle());this.byId("idDivisonDescr").setText(t.getDescription());var i=t.getTitle();if(i===""){this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.None)}},onValueHelpRequestRep:function(e){debugger;var t=e.getSource().getValue(),a=this.getView();this.inputId5=e.getSource().getId();if(!this._valueHelpDialogRep){this._valueHelpDialogRep=sap.ui.xmlfragment("zcontractstatus.sd.fragments.ValueHelpDialogRep",this);this.getView().addDependent(this._valueHelpDialogRep)}this._valueHelpDialogRep.getBinding("items").filter([new i("Vkbur",sap.ui.model.FilterOperator.Contains,a.byId("idSalesOffice").getValue())]);this._valueHelpDialogRep.open(t)},onValueHelpSearchRep:function(e){debugger;var t=e.getParameter("value");var a=new i("Vkbur",l.Contains,t);e.getSource().getBinding("items").filter([a])},onValueHelpCloseRep:function(e){debugger;var t=e.getParameter("selectedItem");e.getSource().getBinding("items").filter([]);if(!t){return}this.byId("idRep").setValue(t.getTitle());this.byId("idRepDescr").setText(t.getDescription());var i=t.getTitle();if(i===""){this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.None)}},onSave:function(e){console.log("updated");var t=this;debugger;var i=t.getOwnerComponent().getModel();Ztempid=this.getView().byId("idTemp").getValue();if(Ztempid!==""){Zarea=this.getView().byId("idArea").getValue();ZnameEn=this.getView().byId("idNameEn").getValue();ZnameAr=this.getView().byId("idNameAr").getValue();Zmobile=this.getView().byId("idTele").getValue();Zstreet=this.getView().byId("idStreet").getValue();Zcity=this.getView().byId("idCity").getValue();Zsalesoffice=this.getView().byId("idSalesOffice").getValue();Zchannel=this.getView().byId("idChannel").getValue();Zspart=this.getView().byId("idDivision").getValue();Zrep=this.getView().byId("idRep").getValue();Zroute=this.getView().byId("idRoute").getValue();Zoutlets=this.getView().byId("idOutlets").getValue();if(Zarea!==""&&ZnameEn!==""&&ZnameAr!==""&&Zmobile!==""&&Zstreet!==""&&Zcity!==""&&Zsalesoffice!==""&&Zchannel!==""&&Zspart!==""&&Zrep!==""&&Zroute!==""){var a={Ztempid:Ztempid,ZnameEn:ZnameEn,ZnameAr:ZnameAr,Zmobile:Zmobile,Zstreet:Zstreet,Zarea:Zarea,Zcity:Zcity,Zsalesoffice:Zsalesoffice,Zchannel:Zchannel,Zspart:Zspart,Zrep:Zrep,Zroute:Zroute,Zoutlets:Zoutlets};if(a!==""){i.create("/customerHeaderSet",a,{success:function(e){if(e.Zduplicate==="X"){sap.m.MessageBox.alert("Duplicate Request Being Submitted !",{onClose:function(e){}})}else{Ztempid=e.Ztempid;if(Ztempid!==""){t._wizard.validateStep(t.byId("idCustomerDet"));t.getView().byId("idArea").setEditable(false);t.getView().byId("idNameEn").setEditable(false);t.getView().byId("idNameAr").setEditable(false);t.getView().byId("idTele").setEditable(false);t.getView().byId("idStreet").setEditable(false);t.getView().byId("idCity").setEditable(false);t.getView().byId("idSalesOffice").setEditable(false);t.getView().byId("idChannel").setEditable(false);t.getView().byId("idDivision").setEditable(false);t.getView().byId("idRep").setEditable(false);t.getView().byId("idRoute").setEditable(false);t.getView().byId("idOutlets").setEditable(false)}t.getView().byId("idTemp").setValue(Ztempid);zmsg="Temporary customer ID"+" "+Ztempid+" "+"has been created. Please click on STEP 2 to proceed further !";r.show(zmsg,{duration:2500,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}},error:function(e){r.show("Error while submitting request. Please Try again.",{duration:9e3,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}})}}else{zmsg="Please input all the mandatory field details !";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}}else if(Ztempid===" "){zmsg="Temporary customer ID not found";sap.m.MessageBox.alert(zmsg,{onClose:function(e){t._wizard.validateStep(t.byId("idCustomerDet"))}})}},
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
postToSap:function(e,t,i,a,s){var d=this.getView().getModel();var l={Ztempid:e,Ztype:s,Content:btoa(encodeURI(a)),Filename:t,Filetype:i};d.create("/attachmentsSet",l,{success:function(e){sap.m.MessageToast.show("Success")},error:function(e){sap.m.MessageToast.show("error")}})},onSaveQtyValue:function(e){console.log("updated qty value");this.getView().byId("idMonthlyVolume").setEditable(false);this.getView().byId("idMonthlyValue").setEditable(false);this.getView().byId("idAnnualVolume").setEditable(false);this.getView().byId("idAnnualValue").setEditable(false);var t=this;debugger;var i=t.getOwnerComponent().getModel();Ztempid=this.getView().byId("idTemp").getValue();if(Ztempid!==" "){Ztempid=this.getView().byId("idTemp").getValue();ZmonthlyQty=this.getView().byId("idMonthlyVolume").getValue();ZmonthlyValue=this.getView().byId("idMonthlyValue").getValue();ZyearlyQty=this.getView().byId("idAnnualVolume").getValue();ZyearlyValue=this.getView().byId("idAnnualVolume").getValue();if(Ztempid!==" "){var a={Ztempid:Ztempid,ZmonthlyQty:ZmonthlyQty,ZmonthlyValue:ZmonthlyValue,ZyearlyQty:ZyearlyQty,ZyearlyValue:ZyearlyValue};if(a!==""){i.create("/loadQtyValueSet",a,{success:function(e){if(e.Zduplicate==="X"){sap.m.MessageBox.alert("Duplicate Request Being Submitted !",{onClose:function(e){}})}else{Ztempid=e.Ztempid;t.getView().byId("idTemp").setValue(Ztempid);zmsg="Updated. Please proceed further !";r.show(zmsg,{duration:2500,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}},error:function(e){r.show("Error while submitting request. Please Try again.",{duration:9e3,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}})}}else{zmsg="Please input all the mandatory field details !";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}}else if(Ztempid!==" "){zmsg="Temporary customer ID"+" "+Ztempid+" "+"has already been created. Please click on STEP 2 to proceed further !";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}},onSaveCreditDetails:function(e){console.log("updated Crdit details value");var t=this;debugger;var i=t.getOwnerComponent().getModel();Ztempid=this.getView().byId("idTemp").getValue();if(Ztempid!==""){Ztempid=this.getView().byId("idTemp").getValue();var a=this.getView().byId("idCustType").getSelectedKey();var s=this.getView().byId("idEntryFees").getValue();var d=this.getView().byId("idCreditLimit").getValue();var l=this.getView().byId("idRebate").getValue();var n=this.getView().byId("idMonthlyFixed").getValue();var o=this.getView().byId("idPayTerms").getSelectedKey();var g=this.getView().byId("idPriceType").getSelectedKey();if(a==="1"){o="Z001"}else if(a==="3"){o="Z002"}if(Ztempid!==" "&&((a==="2"||a==="3")&&d!="0.000"&&o!=="")||a==="1"&&g!==""){var u={Ztempid:Ztempid,ZcustomerType:a,ZentryFees:s,Zcreditlimit:d,Zrebate:l,ZmonthlyFixed:n,Zterm:o,Zpricetype:g};if(u!==""){i.create("/creditdetailsSet",u,{success:function(e){if(e.Zerror==="X"){sap.m.MessageBox.alert("Error saving Credit Data !",{onClose:function(e){}})}else{Ztempid=e.Ztempid;t._wizard.validateStep(t.byId("idCredit"));zmsg="Updated credit details. Please proceed further !";r.show(zmsg,{duration:2500,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}},error:function(e){r.show("Error while submitting request. Please Try again.",{duration:9e3,width:"30em",my:"CenterCenter",at:"CenterCenter",of:window,offset:"0 0",collision:"fit fit",onClose:null,autoClose:true,animationTimingFunction:"ease",animationDuration:1e3,closeOnBrowserNavigation:true})}})}}else{zmsg="Please input all the mandatory field details !";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}}else if(Ztempid!==" "){zmsg="Temporary customer ID"+" "+Ztempid+" "+"has already been created. Please click on STEP 2 to proceed further !";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}},additionalInfoValidation:function(){debugger;var e=this.getView().byId("idNameEn").getValue();if(e===""){this.getView().byId("idNameEn").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idNameEn").setValueState(sap.ui.core.ValueState.None)}var t=this.getView().byId("idNameAr").getValue();if(t===""){this.getView().byId("idNameAr").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idNameAr").setValueState(sap.ui.core.ValueState.None)}var i=this.getView().byId("idTele").getValue();if(i===""){this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{if(i.length<9){this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idTele").setValueState(sap.ui.core.ValueState.None);this.getView().byId("idTele").setPlaceholder(" ")}}var a=this.getView().byId("idStreet").getValue();if(a===""){this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.None)}var s=this.getView().byId("idArea").getValue();if(s===""){this.getView().byId("idArea").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idArea").setValueState(sap.ui.core.ValueState.None)}var d=this.getView().byId("idCity").getValue();if(d===""){this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None)}var l=this.getView().byId("idSalesOffice").getValue();if(l===""){this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idSalesOffice").setValueState(sap.ui.core.ValueState.None)}var r=this.getView().byId("idChannel").getValue();if(r===""){this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idChannel").setValueState(sap.ui.core.ValueState.None)}var n=this.getView().byId("idDivision").getValue();if(n===""){this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idDivision").setValueState(sap.ui.core.ValueState.None);this.getView().byId("idCreditLimit").setValue("0.000")}var o=this.getView().byId("idRep").getValue();if(o===""){this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idRep").setValueState(sap.ui.core.ValueState.None)}var g=this.getView().byId("idRoute").getValue();if(g===""){this.getView().byId("idRoute").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idRoute").setValueState(sap.ui.core.ValueState.None)}var u=this.getView().byId("idOutlets").getValue();if(u===""){this.getView().byId("idOutlets").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCustomerDet"))}else{this.getView().byId("idOutlets").setValueState(sap.ui.core.ValueState.None)}},creditScreenValidation:function(){debugger;var e=this.getView().byId("idCustType").getSelectedKey();if(e===""){this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idCustType").setValueState(sap.ui.core.ValueState.None)}var t=this.getView().byId("idPriceType").getSelectedKey();if(t===""){this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.None)}if(e==="2"||e==="3"){var i=this.getView().byId("idCreditLimit").getValue();if(i==="0.000"){this.getView().byId("idCreditLimit").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idCreditLimit").setValueState(sap.ui.core.ValueState.None)}var a=this.getView().byId("idPayTerms").getValue();if(a===""){this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.None)}}if(i>5e3&&e==="3"){this.getView().byId("idCreditLimit").setValue("0.000");zmsg="TC credit limit cannot be more than 5000.00 SAR";sap.m.MessageBox.alert(zmsg,{onClose:function(e){}})}if(i>=2e4&&e==="2"&&this.getView().byId("idChannel").getValue()!=="10"){this.getView().byId("idfileUploaderPromissory").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idAttach"))}else if(i<2e4&&e==="2"&&this.getView().byId("idChannel").getValue()!=="10"){this.getView().byId("idfileUploaderPromissory").setValueState(sap.ui.core.ValueState.None);this._wizard.validateStep(this.byId("idAttach"))}},onChangePayTerm:function(e){debugger;var t=this.getView().byId("idPayTerms").getSelectedKey();if(t!==""){this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.None)}else{this.getView().byId("idPayTerms").setValueState(sap.ui.core.ValueState.Error);this._wizard.invalidateStep(this.byId("idCredit"))}},onChangeCustType:function(e){debugger;
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
				}*/},onChangePriceType:function(e){debugger;var t=this.getView().byId("idPriceType").getSelectedKey();if(t==="1"){this.getView().byId("idTable1").setVisible(false)}else if(t==="2"){this.getView().byId("idTable1").setVisible(true)}if(t===""){this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.Error)}else{this.getView().byId("idPriceType").setValueState(sap.ui.core.ValueState.None)}},
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
wizardCompletedHandler:function(){debugger;console.log("complete")},handleWizardCancel:function(){debugger;location.reload()},onEditCredit:function(){debugger;var e=this.getView().byId("idEditCredit").getText();if(e==="EDIT CREDIT DATA"){this.getView().byId("idEntryFees").setEditable(true);this.getView().byId("idCreditLimit").setEditable(true);this.getView().byId("idPayTerms").setEditable(true);this.getView().byId("idRebate").setEditable(true);this.getView().byId("idMonthlyFixed").setEditable(true);this.getView().byId("idSaveCredit").setVisible(true);this.getView().byId("idEditCredit").setText("DISPLAY CREDIT DATA");this.getView().byId("idSaveCredit").setVisible(true)}else if(e="DISPLAY CREDIT DATA"){this.getView().byId("idCustType").setEditable(false);this.getView().byId("idPriceType").setEditable(false);this.getView().byId("idEntryFees").setEditable(false);this.getView().byId("idCreditLimit").setEditable(false);this.getView().byId("idPayTerms").setEditable(false);this.getView().byId("idRebate").setEditable(false);this.getView().byId("idMonthlyFixed").setEditable(false);this.getView().byId("idSaveCredit").setVisible(false);this.getView().byId("idEditCredit").setText("EDIT CREDIT DATA");this.getView().byId("idSaveCredit").setVisible(false)}},openVATFile:function(e){debugger;var t="VAT";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openAgencyFile:function(e){debugger;var t="AGENCY";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openBankStmtFile:function(e){debugger;var t="BANKSTMT";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},
//open shop license  file
openLicenseFile:function(e){debugger;var t="SHOPLICENSE";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openIDFile:function(e){debugger;var t="ID";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openCRFile:function(e){debugger;var t="CR";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openPromissoryFile:function(e){debugger;var t="PROMISSORY";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openBankLetterFile:function(e){debugger;var t="GUARANTEE";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},openCreditAccountFile:function(e){debugger;var t="CREDITACC";Ztempid=this.getView().byId("idTemp").getValue();if(t!==""){var i=this;var a=i.getOwnerComponent().getModel();var s="/attachmentsSet(Ztempid="+"'"+Ztempid+"'"+",Ztype="+"'"+t+"'"+")";a.read(s,{success:function(e,t){var a=e.Content;var s=e.Filetype;var d=e.Filename;a="data:"+s+";base64,"+a;if(!i.displayContent){i.displayContent=sap.ui.xmlfragment("zcontractstatus.sd.fragments.filepreview",i);i.getView().addDependent(i.displayContent)}var l=s.split("/");var r=l[0];var s=d.split(".");var n=s[1];switch(r){case"image":sap.ui.getCore().byId("idPdfViewer").setVisible(false);sap.ui.getCore().byId("image").setVisible(true);sap.ui.getCore().byId("image").setSrc(a);break;default:sap.ui.getCore().byId("idPdfViewer").setVisible(true);sap.ui.getCore().byId("image").setVisible(false);var o=sap.ui.getCore().byId("idPdfViewer");o.setContent('<iframe src="'+a+'" embedded="true" frameborder="0" target="_top" width="2000px" height="2000px"></iframe>');break}debugger;if(n!=="docx"&&n!=="pub"&&n!=="xls"&&n!=="ppt"&&n!=="doc"&&n!=="xlsx"){i.displayContent.open();i.fragOpen=true}if(i.fragOpen===undefined){window.open(a,"_self");a=a.replace("data:APPLICATION/WWI;base64,","")}},error:function(){sap.m.MessageToast.show("No Data retreived")}})}},onPressBarCloseBtn:function(e){this.displayContent.close();this.fragOpen=undefined},onEditQtyValue:function(e){this.getView().byId("idMonthlyVolume").setEditable(true);this.getView().byId("idMonthlyValue").setEditable(true);this.getView().byId("idAnnualVolume").setEditable(true);this.getView().byId("idAnnualValue").setEditable(true)}
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
			}*/})});