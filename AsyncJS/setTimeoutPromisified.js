function setTimeoutPromisified(ms)
{
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function callback()
{
    console.log("Hello I'm syntactically better than callback.");
}

setTimeoutPromisified(3000).then(callback);