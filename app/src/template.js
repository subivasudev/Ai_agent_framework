// html skeleton provider
export default function template(title, initialState = {}, content = "") {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossorigin="anonymous"
                />
              </head>
              <body>
              <div >
              <center>
    <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
      <tbody>
        <tr>
          <td bgcolor="#ff6600">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
              <tbody>
                <tr>
                  <td style="width:18px;padding-right:4px"><a href="https://news.ycombinator.com/"><img
                        src="./assets/y18.gif" width="18" height="18" style="border:1px white solid;"></a>
                  </td>
                  <td style="line-height:12pt; height:10px;"><span class="pagetop"><b class="hnname"><a
                          href="https://news.ycombinator.com/news">Hacker News</a></b>
                      <a href="https://news.ycombinator.com/newest">new</a> | <a
                        href="https://news.ycombinator.com/front">past</a> | <a
                        href="https://news.ycombinator.com/newcomments">comments</a> | <a
                        href="https://news.ycombinator.com/ask">ask</a> | <a
                        href="https://news.ycombinator.com/show">show</a> | <a
                        href="https://news.ycombinator.com/jobs">jobs</a> | <a
                        href="https://news.ycombinator.com/submit">submit</a> </span></td>
                  <td style="text-align:right;padding-right:4px;"><span class="pagetop">
                      <a href="https://news.ycombinator.com/login?goto=news">login</a>
                    </span></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr id="pagespace" title="" style="height:10px"></tr>
        <tr>
          <td>
            <table class="table table-striped">
              <tbody>
                ${content}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td><img src="./Hacker News_files/s.gif" height="10" width="0">
            <table width="100%" cellspacing="0" cellpadding="1">
              <tbody>
                <tr>
                  <td bgcolor="#ff6600"></td>
                </tr>
              </tbody>
            </table><br>
            <center><span class="yclinks"><a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
                | <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
                | <a href="mailto:hn@ycombinator.com">Support</a>
                | <a href="https://github.com/HackerNews/API">API</a>
                | <a href="https://news.ycombinator.com/security.html">Security</a>
                | <a href="https://news.ycombinator.com/lists">Lists</a>
                | <a href="https://news.ycombinator.com/bookmarklet.html" rel="nofollow">Bookmarklet</a>
                | <a href="http://www.ycombinator.com/legal/">Legal</a>
                | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                | <a href="mailto:hn@ycombinator.com">Contact</a></span><br><br>
              <form method="get" action="https://hn.algolia.com/">Search:
                <input type="text" name="q" value="" size="17" autocorrect="off" spellcheck="false" autocapitalize="off"
                  autocomplete="false"></form>
            </center>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </center>
                

                  ${scripts}
              </body>
              `;

  return page;
}
