

const boldBtn = document.querySelector(".b-text"),
    superscriptBtn = document.querySelector(".sup-text"),
    subscriptBtn = document.querySelector(".sub-text"),
    listNumberBtn = document.querySelector(".list-number"),
    listCircleBtn = document.querySelector(".list-circle"),
    undoBtn = document.querySelector(".undo-btn"),
    redoBtn = document.querySelector(".redo-btn"),
    linkBtn = document.querySelector(".link-btn"),
    unlinkBtn = document.querySelector(".unlink-btn"),
    ltrTextBtn = document.querySelector(".ltr-text-btn"),
    centerTextBtn = document.querySelector(".center-text-btn"),
    rtlTextBtn = document.querySelector(".rtl-text-btn"),
    fullTextBtn = document.querySelector(".full-text-btn"),
    shiftLtrBtn = document.querySelector(".shift-ltr"),
    shiftRtlBtn = document.querySelector(".shift-rtl"),
    tagBtn = document.querySelector("#tag"),
    fontFaceBtn = document.querySelector("#font-face"),
    numberBtn = document.querySelector("#number"),
    fontColorBtn = document.querySelector("#control-font-btn"),
    highlightBtn = document.querySelector("#control-highlight-btn");




boldBtn.addEventListener("click",() => {
    document.execCommand("bold")
});

superscriptBtn.addEventListener("click",() => {
    document.execCommand("superscript")
});

subscriptBtn.addEventListener("click",() => {
    document.execCommand("subscript")
});

listNumberBtn.addEventListener("click",() => {
    document.execCommand("insertOrderedList")
});

listCircleBtn.addEventListener("click",() => {
    document.execCommand("insertUnorderedList")
});

undoBtn.addEventListener("click",() => {
    document.execCommand("undo")
});

redoBtn.addEventListener("click",() => {
    document.execCommand("redo")
});

linkBtn.addEventListener("click",() => {
    const linkURL = prompt("Enter a URL" , "http://")
    const newLink = document.execCommand("createLink" , false , linkURL)
    newLink.target = "-blank"
});

unlinkBtn.addEventListener("click",() => {
    document.execCommand("unlink")
});

ltrTextBtn.addEventListener("click",() => {
    document.execCommand("justifyLeft")
});

centerTextBtn.addEventListener("click",() => {
    document.execCommand("justifyCenter")
});

rtlTextBtn.addEventListener("click",() => {
    document.execCommand("justifyRight")
});

fullTextBtn.addEventListener("click",() => {
    document.execCommand("justifyFull")
});

shiftLtrBtn.addEventListener("click",() => {
    document.execCommand("indent")
});

shiftRtlBtn.addEventListener("click",() => {
    document.execCommand("outdent")
});

tagBtn.addEventListener("click",() => {
    document.execCommand("formatBlock" , false , tagBtn.value)
});

fontFaceBtn.addEventListener("click",() => {
    document.execCommand("fontName" , false , fontFaceBtn.value)
});

numberBtn.addEventListener("click",() => {
    document.execCommand("fontSize" , false , numberBtn.value)
});

fontColorBtn.addEventListener("click",() => {
    document.execCommand("foreColor" , false , fontColorBtn.value)
});

highlightBtn.addEventListener("input",() => {
    document.execCommand("hiliteColor" , false , highlightBtn.value)
});

