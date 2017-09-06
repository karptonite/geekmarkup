# geekmarkup
Rendering Angular markup client side--not a complete package

This is a small piece--one module--from a much larger application that will be the new BoardGameGeek front end.

The purpose of this module is to render our forum text. For example, on our old site, here is a post with a lot of stuff embedded: https://boardgamegeek.com/image/459123?commentid=2794029#comment2794029

The API sends these posts to the server in a custom format XML document. That is passed to the markup component as a string, and the markup component parses the XML (using the build in DOM parser) and builds up the forum view based on the content in the XML by walking through the nodes of the XML.

While it would have been simpler to pass something like save HTML from the server, and just "trust" it, we would not have been able to embed custom angular components from other parts of our app, such as microbadges, polls, etc. 


