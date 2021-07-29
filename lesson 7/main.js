// Зробити свій розпорядок дня.
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// І так далі


    function my_schedule(time) {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
            console.log(" my day");
            if (time > 15){
                console.log('you got a lot of time at home ');
                reject ('you late for courses');
            }else {
                console.log('you are not late for courses ');
                resolve ('you did greyt in the morning, your actions were as follows')
            }
                        }, 1000)// setTimeout(()
                    });// return new Promise((resolve, reject)
                }// function my_schedule(time)

    function shower() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('take a shower');
                resolve('wonderfully i tapped')
            }, 500)
        });
    }// function shower()

    function breakfast() {
        return new Promise(resolve => {
               setTimeout(() => {
                console.log('have breakfast');
                resolve('you had a wonderful breakfast')
            }, 300)
        });
    }// function breakfast()

    function reading() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('read a book');
                resolve('learned a lot of new information')
            }, 500)
        });
    }// function reading()
    function english() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('I am learning English');
                resolve('learned new words and rules in English')
            }, 200)
        });
    }// function english()
    function goToCar() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("go to car")
                resolve('I go to car')
            }, 160)
        });
    }// function goToCar()
    function goToShop() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('go to shop');
                resolve('I go to shop')
            }, 150)
        });
    }// function goToShop()
    function goToParking() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('go to parking');
                resolve('I go to parking')
            }, 110)
        });
    }// function goToParking()
    function goToStudy() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('go to study');
                resolve('I go to study')
            }, 240)
        });
    }// function goToStudy()
    function great_shedule() {
        return new Promise(resolve => {
            setTimeout(() => {
            console.log('great job');
            resolve ('you are handsome)))')
            },800)// setTimeout(() => {})
        });// return new Promise(resolve
    } // function great_shedule()

    my_schedule(14)
        .then((value)=>{
        console.log('wonderful');
        console.log(value);
        return shower ()
        })
        .then((eat)=>{
            console.log(eat);
            return breakfast()
        })
        .then((read) =>{
            console.log(read);
            return reading()
        })
        .then((study)=>{
            console.log(study);
            return english()
        })
        .then((car)=>{
            console.log(car);
            return goToCar()
        })
        .then((shop)=>{
            console.log(shop);
            return goToShop()
        })
        .then((parkingCar)=>{
            console.log(parkingCar);
            return goToParking()
        })
        .then((study)=>{
            console.log(study);
            return goToStudy()
        })
        .then((courses) =>{
            console.log(courses);
            return great_shedule()
        })
        .then((finish)=>{
            console.log(finish)
        })
    .catch(reason => {
        console.log('**********')
        console.log(reason);
        console.log(('**********'))
    })
// ********************************************************************************

    // async function myDay() {
    //     const owu = await my_schedule(16);
    //     console.log(owu);
    //     await shower();
    //     await breakfast();
    //     await reading();
    //     await english();
    //     await goToCar();
    //     await goToShop();
    //     await goToParking();
    //     await goToStudy();
    //     await great_shedule();
    // }
    // myDay()