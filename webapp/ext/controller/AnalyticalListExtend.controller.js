sap.ui.define(
    [
        "sap/ui/core/mvc/ControllerExtension",
        "../../model/formatter"
    ],
    function (
        ControllerExtension,
        formatter
    ) {
        "use strict";
        return ControllerExtension.extend("com.avv.ingerop.emx.emspreport.ext.controller.AnalyticalListExtend", {
            
            formatter: formatter,
            // Override or add custom methods here

            // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
            override:    
            {
                  onListNavigationExtension(oEvent, oBindingContext, bReplaceInHistory) {
                    // oEvent, oBindingContext, bReplaceInHistory
                    try {
                        const { BusinessNo } = oBindingContext.getObject();
                        const periodId = "com.avv.ingerop.emx.emspreport::sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage::ZC_EMSP_REPORTResults--template::SmartFilterBar-filterItemControlA_-_Parameter.p_period";
                        const p_period = this.getView().byId(periodId).getValue();
                        const oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");

                        const sHash = oCrossAppNavigator.hrefForExternal({
                            target: {
                                semanticObject: "ZFGA",
                                action: "manage"
                            },
                            params: {
                                p_period,
                                BusinessNo
                            }

                        });

                        window.open(sHash, "_blank", "noopener,noreferrer");

                    } catch (err) {
                        console.error("Error during navigation:", err);
                    }
                }
                // onInit: function (oEvent) {
                //     console.log("onInit called");
                //     // this.getInterface().getView().getController().extensionAPI.attachPageDataLoaded(this._onObjectExtMatched.bind(this));
                // },

                // onBeforeRebindTableExtension: function (oEvent) {
                //     const oBindingParams = oEvent.getParameter("bindingParams");

                //     // Séparer ou créer le select
                //     let sSelect = oBindingParams.parameters.select || "";

                //     const aRequiredFields = [
                //         "caCumulN_1_F",
                //         "caPCumulN_1_F",
                //         "caSPCumulN_1_F",
                //         "caCumulN_1",
                //         "caPCumulN_1",
                //         "caSPCumulN_1"
                //     ];

                //     aRequiredFields.forEach(field => {
                //         if (!sSelect.split(",").includes(field)) {
                //             sSelect += (sSelect ? "," : "") + field;
                //         }
                //     });

                //     oBindingParams.parameters.select = sSelect;
                // },
                // formatCustomColumn: function(affaire, projet, superProjet){
                //     if(affaire){
                //         return affaire;
                //     } else if (projet) {
                //         return projet;
                //     } else {
                //         return superProjet;
                //     }
                // }
            },

            // _onObjectExtMatched: async function (context) {
            //     console.log("ObjectExt Match");
            // },

            // formatCustomColumn: function(affaire, projet, superProjet){
            //     if(affaire){
            //         return affaire;
            //     } else if (projet) {
            //         return projet;
            //     } else {
            //         return superProjet;
            //     }
            // }

        //     "sap.ui.viewExtensions": {
        //   "sap.suite.ui.generic.template.AnalyticalListPage.view.AnalyticalListPage": {
        //     "AnalyticalTableColumnsExtension|ZC_EMSP_REPORTResults": {
        //       "type": "XML",
        //       "fragmentName": "com.avv.ingerop.emx.emspreport.ext.fragment.CustomColumns",
        //       "className": "sap.ui.core.Fragment"
        //     }
        //   }
        // },

        })
    })