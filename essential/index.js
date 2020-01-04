var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        link: 'https://vuejs.org/v2/guide/index.html',
        finishedLink: '<a href="https://vuejs.org/v2/guide/index.html">vue documentation</a>',
        counter: 0,
        firstName: 'max',
        lastName: 'xxx',
        color: 'black',
        attachRed: false,
        show: true,
        names: [
            {
                name: 'max',
                lastName: 'xxx'
            },
            {
                name: 'dima',
                lastName: 'xxx'
            },
            {
                name: 'petr',
                lastName: 'xxx'
            }
        ]
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },
        divClasses: function () {
            return {
                'red': this.attachRed,
                'yellow': !this.attachRed
            }
        }
    },
    methods: {
        changeName: function () {
            if (this.firstName === 'max') {
                this.firstName = 'xxx';
                this.lastName = ' max';
            } else {
                this.firstName = 'max';
                this.lastName = ' xxx';
            }
        },
        add: function (number) {
            this.counter += number;
        },
        addToArray: function () {
            this.names.push(            {
                name: 'xrenovich',
                lastName: 'xxx'
            })
        }
    }
});