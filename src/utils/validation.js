import ErrorResponse from "./errorResponse";

export class Validation {
    constructor(validator) {
        if (typeof (validator) == `object` && validator) {
            this.validator = { ...validator };
            //convert every element of the object to value class which contain all the validator methods
            for (let prop in this.validator) {
                this.validator[prop] = new Value(this.validator[prop]);
            }
        } else {
            throw new Error(`func validation is meant only for object`);
        }
    }

    required(...arr) {
        // check the existance of properties
        arr.forEach(element => {
            let isFound = false;
            for (let prop in this.validator) {
                if (property === element) {
                    isFound = true
                    break;
                }
            }

            if (!isFound) {
                throw new ErrorResponse(400, `please add a/an ${element}`);
            }
        })
    }
}

export class Value {
    constructor(value) {
        this.value = value
    }
    required(name) {
        if (!this.value) {
            throw new ErrorResponse(400, `please add a/an ${name}`);
        }
    }

    minLength(num = 0) {
        if (typeof (thi.value) !== `string`) {
            throw new ErrorResponse(400, `the value must be a String`);
        }
        if (this.value.length < num) {
            throw new ErrorResponse(400, `the minimum accepted length is ${num}`)
        }
    }
    isEmail() {
        if (typeof (this.value) !== 'string') {
            throw new ErrorResponse(400, `the value must be a String`)
        }

        const emailMatch = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (!emailMatch.test(this.value)) {
            throw new ErrorResponse(400, `please enter valid email`);
        }
    }
}