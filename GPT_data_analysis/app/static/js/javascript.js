$("#data_submit").click(function () {
  let formData = new FormData();
  let fileObj = document.getElementById('my-file-selector').files[0];
  if (typeof (fileObj) == "undefined" || fileObj.size <= 0) {
    alert("请选择图片");
    return;
  }
  formData.append('file', fileObj);
  formData.append('file_name', fileObj.name);
  $.ajax({
    url: "/uplord_data",
    data: formData,
    type: "post",
    dataType: "json",
    cache: false,//上传文件无需缓存
    processData: false,//用于对data参数进行序列化处理 这里必须false
    contentType: false, //必须
    success: function (data) {
      alert(data.result);
    },
    error: function (jqXHR) {
      // 这里是访问失败时被自动调用的代码
      alert(jqXHR);
    }
  })
});
