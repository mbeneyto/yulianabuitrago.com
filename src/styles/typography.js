const loadFont = url => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const head = document.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(xhr.responseText));
      head.appendChild(style);
    }
  };
  xhr.send();
};

loadFont(
  "https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro:400,900&display=swap"
);
