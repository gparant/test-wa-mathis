import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

WA.onInit().then(() => {
    console.log('TEST SUCCESS');
    console.log("Indice : ", WA.player.state["cafetHint"]);
    let url_segments =  window.location.href.split('/');

    console.log(url_segments);
    url_segments[url_segments.length - 1] = "map.tmj";

    if (WA.player.state["cafetHint"] == null)
    {
        WA.nav.goToRoom(url_segments.join('/'));
    }
});