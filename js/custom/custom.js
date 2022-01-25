  var fileobj;
  function upload_file(e) {
    e.preventDefault();
    fileobj = e.dataTransfer.files[0];

    var reader =  new FileReader();
    reader.readAsDataURL(fileobj);
    reader.onload = function () {
       let image = reader.result;
      document.getElementById("myImg").src = image;
      ajax_file_upload(image,1,);
    }

  }

  function ajax_file_upload(file_obj,comp_id) {
    if(file_obj != undefined) {
      let fileType = file_obj.split(':')[1];
          fileType = fileType.split('/')[1];
          fileType = fileType.split(';')[0];

      let filename =`${comp_id}_${Date.now()}.${fileType}`;

      let json_data = JSON.stringify({image:file_obj});
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "ajax.php", true);
      xhttp.onload = function(event) {
            if (xhttp.status == 200) {
                   $("#drop_file_zone").css("background-image", "url(" + this.responseText + ")");
              } else {
                  var error = "Error " + xhttp.status + " occurred when trying to upload your file.";
                    $.notify(error, "info");
                }
            }

            xhttp.send(json_data);

          }
        }

    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);

      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, {type:mime});
    }
