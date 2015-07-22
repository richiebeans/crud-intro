$(document).ready(function(){

  //GETS LIST
  var getRequest = function() {
    $.ajax({
      type:'Get',
      url:'https://ga-wdi-api.meteor.com/api/posts/',
      dataType:'json',
        success:function(response){
          console.log(response);
      
          for(var i=0; i<=response.length-1; i++) {
            console.log(response[i]);
            $("tbody").append("<tr><td>" + response[i]["_id"] + "</td><td>" + response[i]["user"] + "</td><td>" + response[i]["title"] + "</td><td>" + response[i]["text"] + "</td>")
          }
        }
    })
  }

  //CREATE (POST)
  function postRequest(user,title,text){
    $.ajax({
        type:'Post',
        url:'https://ga-wdi-api.meteor.com/api/posts/',
        data:{user:user,
              title:title,
              text:text},
        dataType:'json',
        success:function(response){
        console.log(response);
        }
    })
  }

  //UPDATE (PUT)
  function putRequest(user, title,text){
      $.ajax({
      type:'Put',
      url:'https://ga-wdi-api.meteor.com/api/posts/'+$(".id-put").val(),
       data:{ user:user,
              title:title,
              text:text},
      dataType:'json',
      success:function(response){
        console.log(response)
      }
    })
  }

  //DELETE
  function deleteRequest(){
    $.ajax({
      type:'delete',
      url:'https://ga-wdi-api.meteor.com/api/posts/'+$(".id-delete").val(),
      success:function(response){
        console.log(response);
      }
    })
  }

//===================== BUTTON JQUERY ======================//


  //SUBMITE DELETE BUTTON
  $(".submit-delete").on("click", function(){
    deleteRequest();
    $(".id-delete").val("");
  })

  //SUBMIT PUT BUTTON
  $(".submit-put").on("click",function(){
    var user =$(".user-put").val();
    var title=$(".title-put").val();
    var text=$(".text-put").val();
    putRequest(user, title,text);
    $(".user-put .id-put, .title-put, .text-put").val("");
  })

  //SUBMIT POST BUTTON
  $('.submit-post').on("click",function(){
    var user=$(".user-post").val();
    var title=$(".title-post").val();
    var text=$(".text-post").val();
    postRequest(user,title,text)
    $(".user-post, .title-post, .text-post").val("");
  });


  //REFRESH BUTTON
  $(".refresh-button").on("click", function(){
    getRequest();
  })
  //CLEAR BUTTON
  $(".clear-button").on("click",function(){
    $("tbody").children().remove()
  });

  //TABS
  $(".post, .put, .delete").hide();

  $(".get-tab").on("click",function(){
    $(".post, .delete, .put").hide();
    $(".get").show()
  });

  $(".post-tab").on("click",function(){
    $(".put, .get, .delete").hide();
    $(".post").show()
  });
  

  $(".put-tab").on("click",function(){
    $(".post, .get, .delete").hide();
    $(".put").show()
  });

  $(".delete-tab").on("click",function(){
    $(".post, .get, .put").hide();
    $(".delete").show()
  });

  //EASTER EGG!
  $('.happy').click(function() {
    console.log("hi");
    document.getElementById('myAudio').play();
    $("body").css({
       'background-image':'url(assets/minions.jpg)',
       'background-size':'cover'
      });
  });
})
