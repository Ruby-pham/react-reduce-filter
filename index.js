//1.Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
let colors = ['blue', 'green', 'orange'];
console.log('firstColor:', colors[0] + '\n' + 'secondColor:', colors[1] + '\n' + 'thirdColor:', colors[2]);

//2.Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
let person = {
    name: 'Lisa',
    age: 25,
}
console.log('Name:', person.name + '\n' + 'Age:', person.age);

//3.Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
let arr1 = ['apple', 'pear', 'grape'];
let arr2 = [1, 2, 3];
// let arr=arr1+','+arr2;
arr1 = [...arr2, ...arr1];
console.log('Merged array: ' + arr1);

// Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
let originalArray = ['red', 'black', 'white', 'blue'];
let newArray = [...originalArray];
console.log('Copy array:' + newArray);

// Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
let addOriginalArray = [...originalArray, 4];
console.log('Add array: ' + addOriginalArray);

// Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
let obj1 = {name: "Jisoo", age: 29};
let obj2 = {gender: "female", born: 'South Korea'};

let mergedObj = {...obj1, ...obj2, career: 'singer'};
console.log('Merged objects', mergedObj);

// Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let persons = {
    name: 'Nam Phuong Empress',
    age: 49,
};
let addObject = {...persons, gender: 'female'};
console.log('addObject: ', addObject);

// Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenFilterArray = filterArray.filter(item => item % 2 === 0);
console.log('evenFilterArray: ', evenFilterArray);

// Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
let filterArray1 = ['banana', 'strawberry', 'apple', 'pear', 'lemon'];
let lengthFilterArray = filterArray1.filter(item => item.length > 5);
console.log('lengthFilterArray:', lengthFilterArray);

// Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
let singers = [
    {
    name: 'Lisa',
    age: 25,
    country:'South Korea'
    },
    {
        name:'Taylor Swift',
        age:34,
        country: 'United States',
    },
    {
        name:'Jisoo',
        age:29,
        country:'South Korea',
    }
];
let filterSingerFromKorea=singers.filter((item,index)=>{
    if('south korea' === item.country.toLowerCase()){
        return item;
    }
})
console.log('filterSingerFromKorea',filterSingerFromKorea);
// Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
let array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(number){
    for (let i = 2; i <number ; i++) {
        if(number%i===0){
            return false
        }
    }
    return number>1
}
let primeArrayFilter=array.filter(isPrime);
console.log('primeArrayFilter: ',primeArrayFilter)


// Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
let array1=['apple123','grape456','pineapple'];
let justString=array1.filter((item)=>{
    return !/\d/.test(item);
});
console.log('justString: ',justString);

// Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
let reduceArray=[1,2,3,4];
let sumReduceArray=reduceArray.reduce((sum,index)=>sum+index,0);
console.log('sumReduceArray: ',sumReduceArray);

// Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
let multiplyReduceArray=reduceArray.reduce((multiply,index)=>multiply*index,1);
console.log('sumReduceArray: ',multiplyReduceArray);

// Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
let getMax=(a,b)=>Math.max(a,b);
let maxReduceArray = reduceArray.reduce(getMax);
console.log('maxNumber: ',maxReduceArray);

// Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let countSameNames=names.reduce((item,index)=>{
    if(item[index]){ //  Nếu phần tử đã tồn tại trong đối tượng đếm, tăng số lần xuất hiện lên 1
        item[index]++
    }else {
        item[index]=1; //Nếu phần tử chưa có trong đối tượng đếm, khởi tạo số lần xuất hiện là 1
    }
    return item
},{});
//{}: giá trị khởi tạo ban đầu là rỗng.
console.log('countSameNames',countSameNames);
// Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
let studentA=[
    {
        subject:'Math',
        score:8,
    },
    {
        subject:'science',
        score:6,
    },
    {
        subject:'history',
        score:5,
    }
];
let sumScore=studentA.reduce((acc,currentValue)=>acc+currentValue.score,0);
console.log('sumScore:',sumScore);