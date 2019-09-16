function(instance, properties, context) {
	var element = instance.data.element;
    var text = new Array(Math.round(properties.number + 1)).join(properties.icon);
    element.text(text);
}