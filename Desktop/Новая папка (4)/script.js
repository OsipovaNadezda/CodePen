const calculator = {
    res: document.querySelector('#res'),
    sum: function () {
        let a = document.querySelector('#a');
        let b = document.querySelector('#b');

        this.show(+a.value + +b.value);
    },
    mult: function () {
        let a = document.querySelector('#a');
        let b = document.querySelector('#b');

        this.show(+a.value * +b.value);
    },
    show: function (result) {
        this.res.value = result;
    },
    init: function () {
        document.querySelector('#sum').addEventListener('click', () => this.sum());
        document.querySelector('#mult').addEventListener('click',() => this.mult());

        this.sum();
        this.mult();
    }
}

calculator.init();