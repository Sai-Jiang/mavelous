
$(function(){ 

  var vfrHudModel       = new VfrHudModel;
  var gpsRawIntModel    = new GpsRawIntModel;
  var heartbeatModel    = new HeartbeatModel;
  var attitudeModel     = new AttitudeModel;
  var metaWaypointModel = new MetaWaypointModel;


  var mavlinkAPI = new MavlinkAPI(
        { 'HEARTBEAT':     sendNewMavlinkMessageToModel( heartbeatModel )
        , 'GPS_RAW_INT':   sendNewMavlinkMessageToModel( gpsRawIntModel )
        , 'VFR_HUD':       sendNewMavlinkMessageToModel( vfrHudModel )
        , 'ATTITUDE':      sendNewMavlinkMessageToModel( attitudeModel )
        , 'META_WAYPOINT': sendNewMavlinkMessageToModel( metaWaypointModel )
        }
      , function () { console.log('mavlink api fail'); });

  var vfrtextview  = new VfrHudTextView({ model: vfrHudModel });
  var gpstextview  = new GpsTextView({ model: gpsRawIntModel });
  var modetextview = new ModeTextView({ model: heartbeatModel });

  console.log('appview initialized');
  
  setInterval(function() {
    mavlinkAPI.update();
  }, 1000); 

});