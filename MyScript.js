$(document).ready(function(){
    var field_Id=0;
    var table_Id=0;
    $("#addField").click(function(){
        $("#pId_1").append("<div class=\"c_"+field_Id+"\"><br><h5>Enter Field name :  </h5><input type='text'><br></div>");
        field_Id+=1;
    });

    $("#delField").click(function(){
        $(".c_"+field_Id).remove();
        field_Id-=1;
    });

    $("#addTable").click(function(){
       if(table_Id==0){
        $("#pId_2").append("<div class=\"t_"+table_Id+"\"><br><h5>Enter number of rows : </h5><input type='text' id=\"row_data\"><br><h5>Enter number of columns :  </h5><input type='text'id=\"col_data\"><br><br><button id=\"tHeaders\"  type=\"button\" class=\"btn btn-secondary\">Edit Table Headers</button></div>");
        table_Id+=1;
       }
    });

    
    $("#delTable").click(function(){
        $(".t_0,.col_header").remove();
        //$("#col_header").remove();
        table_Id=0;
    });
   

    
    buttonId=0;
    $("#addButton").click(function(){
        if(buttonId==0){        
            txt="<div><button id=\"addButton1\"  type=\"button\" class=\"btn btn-info btn-lg\">Drop-Down Button</button></div><div><button id=\"addButton1\"  type=\"button\" class=\"btn btn-info btn-lg\">Submit Button</button></div>"
         $("#pId_4").append("<div id=\"bId\"><div class=\"t_"+buttonId+"\"><button id=\"addButton1\"  type=\"button\" class=\"btn btn-info btn-lg\">Radio Button</button></div>"+txt);
         buttonId+=1;
        }
     });
     $("#delButton").click(function(){
        $("#bId").remove();
        //$("#col_header").remove();
        buttonId=0;
    });

    Fcount=0;
    $("#Fhide").click(function(){
        if(Fcount%2==0){
            $("#divId_1").slideUp("slow");
            Fcount+=1;
        }else{
            $("#divId_1").slideDown("slow");
            Fcount+=1;
        }
    });
    Tcount=0;
    $("#Thide").click(function(){
        if(Tcount%2==0){
            $("#divId_2,#divId_3").slideUp("slow");
            Tcount+=1;
        }else{
            $("#divId_2,#divId_3").slideDown("slow");
            Tcount+=1;
        }
    });

    Bcount=0;
    $("#Bhide").click(function(){
        if(Bcount%2==0){
            $("#bId").slideUp("slow");
            Bcount+=1;
        }else{
            $("#bId").slideDown("slow");
            Bcount+=1;
        }
    });
   
 
    $("#btnGen").click(function(){

        //     window.location.href="http://www.google.com";
        //     // var x=document.getElementById("name").value;
            form_name=document.getElementById("form_name").value;
            $(window).attr('location',"form.html?fname="+form_name);
        });
});


$(document).on('click','#tHeaders',function(){
    var col_size=document.getElementById("col_data").value;

    for(i=0;i<col_size;i++){
        $("#pId_3").append("<div class=\"col_header\"><h5>Heading "+(i+1)+" :</h5><input type='text' placeholder='Enter for column - "+(i+1)+"'></div>  ");
    }

    
});


// $("#tHeaders").click(function(){
//     // $("#pId_3").append("<p>HELLO</p>");
//     alert("HELLO");
// });  


    