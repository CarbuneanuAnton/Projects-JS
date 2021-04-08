class Validator {

    static isEmail(email) {
        const emailTemplate = /\S+@\S+\.\S+/;

        return emailTemplate.test(email)
    }

    static isDomain(domain) {
        const domainTemplate = /\S+\.\S+/;

        return domainTemplate.test(domain);
    }

    static isDate(date) {
        const dateTemplate = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/;

        return dateTemplate.test(date);
    }
}

console.log(Validator.isEmail('test.email@gmail.com'));
console.log(Validator.isDomain('sitecom.com'));
console.log(Validator.isDate('02.02.2020'));

