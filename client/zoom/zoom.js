Template.zoom.events({
  "click #btn_login": function(event, template){
    Zoom.init("http://www.zoom.us/api/v1");

    Zoom.login({email:"your-email@gmail.com",password:"yourpassword"},function(result){
      $('#btn_login').val("login success");
    });
    return false;
  },
  "click #btn_list": function(event, template){
    Zoom.listMeeting({page_size:10,page_number:1},function(result){
      $('#api_title').html("List Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_create": function(event, template){
    Zoom.createMeeting(JSON.parse($('#meetingInfo').val()), function(result){
      $('#api_title').html("Create Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_get": function(event, template){
    if($('#meeting_number').val().trim().length < 8){
      alert("Please enter meeting number.");
      return ;
    }
    Zoom.getMeeting({meeting_number: $('#meeting_number').val()}, function(result){
      $('#api_title').html("Get Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_end": function(event, template){
    if($('#meeting_number').val().trim().length < 8){
      alert("Please enter meeting number.");
      return ;
    }
    Zoom.endMeeting({meeting_number: $('#meeting_number').val()}, function(result){
      $('#api_title').html("End Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_del": function(event, template){
    if($('#meeting_number').val().trim().length < 8){
      alert("Please enter meeting number.");
      return ;
    }
    Zoom.deleteMeeting({meeting_number: $('#meeting_number').val()}, function(result){
      $('#api_title').html("Delete Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_pmi": function(event, template){
    Zoom.getPMI(function(result){
      $('#api_title').html("GET PMI");
      $('#errMsg').html(JSON.stringify(result));
    });
    return false;
  },
  "click #btn_update": function(event, template){
    if($('#meeting_number').val().trim().length < 8){
      alert("Please enter meeting number.");
      return ;
    }
    var data = JSON.parse($('#meetingInfo').val());
    data.meeting_number = $('#meeting_number').val().trim();
    Zoom.updateMeeting(data, function(result){
      $('#api_title').html("Update Meeting");
      $('#errMsg').html(JSON.stringify(result));
    });

    return false;
  }
});
