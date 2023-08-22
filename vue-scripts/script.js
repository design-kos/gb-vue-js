let app = new Vue({
    el: "#app",
    data: {
        btnText: "Перевенуть",
        elements: ["Элемент 1", "Элемент 2", "Элемент 3"],
        newElement: "Новый элемент списка",
    },
    methods: {
        reverseButtonText() {
            this.btnText = this.btnText.split("").reverse().join("");
        },
        addElementToList() {
            this.elements.push(this.newElement);
        },
        removeElementFromList(element) {
            element.target.remove();
        },
    },
});