
function lightsAPI(entid, action, args){
  var base_url = 'https://hass.octs.tech:8123/api/services/light/';
  $.ajaxSetup({
      type: "POST",
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4N2EyNGJiZmM0YmI0Njg0YWFjZTljZWUwZTEwNjJjMiIsImlhdCI6MTU5MzYyNjc0NCwiZXhwIjoxOTA4OTg2NzQ0fQ.lABtjFuSKFj4oSShj4qvMpPv0HbzRJw-4-r3vLUX4Ag', 'Content-Type': 'application/json'},
      dataType: 'json'
  });

switch (action) {
  case 'toggle':
    $.ajax({
        url: base_url + 'toggle',
        data: "{\"entity_id\": \"" + entid + "\"}"
    });
  break;
  case 'dim':
    $.ajax({
        url: base_url + 'turn_on',
        data: "{\"entity_id\": \"" + entid + "\", \"brightness_step_pct\": \"" + args + "\"}"
    });
  break;
  case 'temp':
    $.ajax({
        url: base_url + 'turn_on',
        data: "{\"entity_id\": \"" + entid + "\", \"kelvin\": \"" + args + "\"}"
    });
  break;
}
}
function scriptsAPI(entid){
  $.ajaxSetup({
      type: "POST",
      headers: { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI4N2EyNGJiZmM0YmI0Njg0YWFjZTljZWUwZTEwNjJjMiIsImlhdCI6MTU5MzYyNjc0NCwiZXhwIjoxOTA4OTg2NzQ0fQ.lABtjFuSKFj4oSShj4qvMpPv0HbzRJw-4-r3vLUX4Ag', 'Content-Type': 'application/json'},
      dataType: 'json'
  });

  var base_url = 'https://hass.octs.tech:8123/api/services/script/turn_on';
  $.ajax({
      url: base_url,
      data: "{\"entity_id\": \"" + entid + "\"}"
  });
}
