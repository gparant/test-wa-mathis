// Chargement de la lib JS de WA
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";




WA.onInit().then(() => {
});

WA.ui.modal.openModal({
    title: "Tutorial",
    src: "https://workadventure.github.io/scripting-api-extra/tutorialv1.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: !0,
    position: "right"
});
var triggerMessage;

WA.room.onEnterLayer("pnj1").subscribe(() => {
    triggerMessage = WA.ui.displayActionMessage({
        message: "Appuyez sur espace pour discuter avec Yumi !",
        callback: () => {
            WA.ui.modal.openModal({
                title: "Yumi",
                src: "https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts",
                allow: "fullscreen; clipboard-read; clipboard-write",
                allowApi: !0,
                position: "left"
            });
        }
    })
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("pnj1").subscribe(() => {
    if (triggerMessage !== undefined)
    triggerMessage.remove();
});

// ///////////////////////////////////////////////

// WA.room.onEnterLayer("pnj2").subscribe(() => {
//     msgStud1 = WA.ui.openPopup("pnj2text", " Bonjour je suis étudiant 1", [{
//         label: "Génial, je veux en savoir plus !",
//         className: "primary",
//         callback: (popup) => {
//             WA.nav.openTab("https://heroes.brainsonic.com/");
//         }
//     }]);

// });

// // Close the popup when we leave the zone.
// WA.room.onLeaveLayer("pnj2").subscribe(() => {
//     msgStud1.close();
// })

// ///////////////////////////////////////////////

// WA.room.onEnterLayer("pnj3").subscribe(() => {
//     msgStud2 = WA.ui.openPopup("pnj3text", " Bonjour je suis étudiant 2", [{
//         label: "Bonjour !",
//         className: "primary",
//         callback: (popup) => {
//             WA.nav.openTab("https://heroes.brainsonic.com/");
//         }
//     }]);

// });

// // Close the popup when we leave the zone.
// WA.room.onLeaveLayer("pnj3").subscribe(() => {
//     msgStud2.close();
// })

// ///////////////////////////////////////////////

// WA.room.onEnterLayer("pnj4").subscribe(() => {
//     msgStud3 = WA.ui.openPopup("pnj4text", " Bonjour je suis étudiant 3", [{
//         label: "Bonjour !",
//         className: "primary",
//         callback: (popup) => {
//             WA.nav.openTab("https://heroes.brainsonic.com/");
//         }
//     }]);

// });

// // Close the popup when we leave the zone.
// WA.room.onLeaveLayer("pnj4").subscribe(() => {
//     msgStud3.close();
// })

// ///////////////////////////////////////////////


class Popup {

    close() {};
}