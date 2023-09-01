// enum - numeric, string, hetarozenus

// numeric enum
enum numValue {
    one = 1,
    two = 2,
    three = 3,
}

// string enum
enum strValue {
    a = 'AAA',
    b = 'BBB',
    c = 'CCC',
}

// hetarozenus enum
enum hetaroValue {
    id = 324651,
    title = 'Ecommerce Product',
    price = 650,
}

// console.log(numValue);
// console.log(strValue);
// console.log(hetaroValue);

//! Any file type
let userName: any;
userName = 'shuvo';
userName = 1234;
userName = true;
userName = [23, 34, 'sh'];

// console.log(userName)

//! Object type

let newUser1: {
    userName: string;
    userId: number;
};
