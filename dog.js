let Dog = (() => {
    return class Dog {
        constructor(name) {
            this.name = name;
        }

        walk() {
            console.log(this.name + ' is walking!');
        }
    }
})()

