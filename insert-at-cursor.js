insertAtCursor : function (textarea, textValue) {
    //IE
    if (document.selection) {
        textarea.focus();
        var sel = document.selection.createRange();
        sel.text = textValue;
    }
    //Firefox, chrome, mozilla
    else if (textarea.selectionStart || textarea.selectionStart == '0') {
        var startPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        var scrollTop = textarea.scrollTop;
        textarea.value = textarea.value.substring(0, startPos) + textValue + textarea.value.substring(endPos, textarea.value.length);
        textarea.focus();
        textarea.selectionStart = startPos + textValue.length;
        textarea.selectionEnd = startPos + textValue.length;
    }
    return self;
}