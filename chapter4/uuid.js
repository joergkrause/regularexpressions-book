var patt = /^(\}?[A-F0-9]{32}|[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}|\{[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}\})$/i;
var uuid = "936DA01F-9ABD-4D9D-80C7-02AF85C822A8";
console.log(patt.test(uuid));