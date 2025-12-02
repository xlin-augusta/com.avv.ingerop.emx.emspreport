sap.ui.define([], function () {
    "use strict";

    return {
        formatCustomColumn: function (affaire, projet, superProjet) {
            if (affaire) {
                return affaire;
            } else if (projet) {
                return projet;
            } else {
                return superProjet;
            }
        }
    }
}) 