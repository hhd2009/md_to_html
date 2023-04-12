var data
function get_file(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.response)
      const reader = new FileReader()
      reader.onload = function () {
        data = reader.result
      }
      reader.readAsText(this.response);
    }
  };
  xhr.send();
  return `${data}`
}