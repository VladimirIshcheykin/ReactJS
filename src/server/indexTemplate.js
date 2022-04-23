export const indexTemplate = function(content) {
    return (
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reddit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body class="body">
    <div id="react_root">${content}</div>
</body>
</html>
`
    );
}