function(instance, context) {
    var elementId = `repeating-symbol-${Math.floor(Math.random() * 1e5 + 1)}`;
    var created = $(`<span id=${elementId}></span>`)
	instance.canvas.append(created);
    created.text(elementId);
	instance.data.element = created;
}