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
            override: {
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