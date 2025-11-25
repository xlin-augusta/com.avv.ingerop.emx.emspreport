sap.ui.define(
    [
        "sap/ui/core/mvc/ControllerExtension",
    ],
    function (
        ControllerExtension
    ) {
        "use strict";
        return ControllerExtension.extend("com.avv.ingerop.emx.emspreport.ext.controller.AnalyticalListExtend", {
            // Override or add custom methods here

            // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
            override: {
                onBeforeRebindTableExtension: function (oEvent) {
                    const oBindingParams = oEvent.getParameter("bindingParams");

                    // Séparer ou créer le select
                    let sSelect = oBindingParams.parameters.select || "";

                    const aRequiredFields = [
                        "caBudgetN_1",
                        "caBudgetN_1_P",
                        "caBudgetN_1_SP",
                    ];

                    aRequiredFields.forEach(field => {
                        if (!sSelect.split(",").includes(field)) {
                            sSelect += (sSelect ? "," : "") + field;
                        }
                    });

                    oBindingParams.parameters.select = sSelect;
                }
            }

        })
    })