function start() {
  // 获取输入文本框中的内容
  var inputField = document.getElementById("input");
  var input = inputField.value.trim();

  // 判断输入是否为空
  if (input.length == 0) {
    alert("请输入URL！");
    return;
  }

  // 将输入按行分割
  var lines = input.split(/\s+/);

  // 去重处理
  var urls = new Set(lines);

  // 统计信息
  var totalCount = lines.length;
  var uniqueCount = urls.size;
  var duplicateCount = totalCount - uniqueCount;

  // 显示去重后的URL和统计信息
  var output = Array.from(urls).join("\n");
  var outputField = document.getElementById("output");
  outputField.value = output.trim();
  var info = document.getElementById("info");
  info.innerHTML = "本次处理了 " + totalCount + " 条文本，去重了 " + duplicateCount +
    " 条，剩余 " + uniqueCount + " 条。";
}

function clearFields() {
  // 清除文本框内容和统计信息
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
  document.getElementById("info").innerHTML = "";
}

function copyToClipboard() {
  // 将输出文本框中的内容复制到剪贴板
  var outputField = document.getElementById("output");
  outputField.select();
  document.execCommand("copy");
  alert("已复制到剪贴板！");
}
