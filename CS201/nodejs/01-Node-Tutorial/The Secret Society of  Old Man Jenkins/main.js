const http = require("http");

const hintButton = (hint) => {
  return `<button onclick="alert('${hint}')">Hint</button>`;
};

const urlsWhiteHex = ["/fff", "/ffff", "/ffffff", "/ffffffff"];
const urlsStringOne = ["/1", "/one"];

http
  .createServer()
  .on("request", (req, res) => {
    if (urlsWhiteHex.includes(req.url)) req.url = "/fff";
    if (urlsStringOne.includes(req.url)) req.url = "/1";

    switch (req.url) {
      case "/":
        res.end(
          "<pre>Welcome to the first test to enter the super secret society of secrets that are super." +
            `\nTo begin, what kind of secrets are in this society?</pre>` +
            hintButton(`It\\'s like the \\'_____ hero\\'`)
        );
        break;

      case "/super":
        res.end(
          "<pre>white</pre>" +
            hintButton(`A witch is going to case a \\'hex\\' on you`)
        );
        break;

      case "/fff":
        res.end(
          "<pre>0001</pre>" +
            hintButton(`Linux stores \\'binaries\\' in the /bin directory`)
        );
        break;

      case "/1":
        res.end(
          `<pre id=\"intuition\">The answer to this one is in the source</pre>` +
            hintButton(`Let\\'s see if you pass the \\'inspection\\'`)
        );
        break;

      case "/intuition":
        res.end(
          "<pre>A burnt wood chooses to have them all</pre>" +
            hintButton(`Pikachu, I choose your!`)
        );
        break;

      case "/ash":
        res.end(
          "<pre> The answer is upside down<br><br>" +
            "9999999999<br>" +
            "9966666699<br>" +
            "9966666699<br>" +
            "9966999999<br>" +
            "9966999999<br>" +
            "9966666699<br>" +
            "9966999999<br>" +
            "9966999999<br>" +
            "9966666999<br>" +
            "9966666999<br>" +
            "9999999999</pre>" +
            hintButton(`This is the \\'highlight\\' of your day`)
        );
        break;

      case "/6":
        res.end("<pre>Congratulations, you have reached the end!</pre>");
        break;

      default:
        res.end("<pre>Wrong Answer!<br>Now go back...</pre>");
        break;
    }
  })
  .listen(3000);
