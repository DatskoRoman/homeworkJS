function my_schedule(time, cb) {
        setTimeout(()=>{
            console.log(" my day");
            if (time > 15){
                console.log('you got a lot of time at home');
                cb ('you late for courses', null)
            }else {
                console.log('you are not late for courses');
                cb (null, 'you did grey in the morning, your actions were as follows')
                // resolve ('you did grey in the morning, your actions were as follows')
            }
        }, 1000)// setTimeout(()
}// function my_schedule(time)

function shower(cb) {
        setTimeout(() => {
            console.log('I take a shower');
            cb('wonderfully i tapped')
        }, 500)
}// function shower()

function breakfast(cb) {
        setTimeout(() => {
            console.log('i have a breakfast');
            cb('you had a wonderful breakfast')
        }, 300)
}// function breakfast()

function reading(cb) {
        setTimeout(() => {
            console.log('I read a book');
            cb ('learned a lot of new information')
        }, 500)
}// function reading()
function english(cb) {
        setTimeout(() => {
            console.log('I am learning English');
            cb('learned new words and rules in English')
        }, 200)
}// function english()
function goToCar(cb) {
        setTimeout(() => {
            cb('I go to car')
        }, 160)
}// function goToCar()
function goToShop(cb) {
        setTimeout(() => {
            cb('I go to shop')
        }, 150)
}// function goToShop()
function goToParking(cb) {
        setTimeout(() => {
            cb('I go to parking')
        }, 110)
}// function goToParking()
function goToStudy(cb) {
        setTimeout(() => {
            cb('I go to study')
        }, 240)
}// function goToStudy()
function great_shedule(cb) {
        setTimeout(() => {
            console.log('great job');
            cb('you are handsome)))')
        },800)// setTimeout(() => {})
} // function great_shedule()
my_schedule(13, (err)=>{
    if (err) {
        console.error(err);
    }else {
        shower ((data)=>{
            console.log(data)
            breakfast ((data)=>{
                console.log(data)
                reading ((data)=>{
                    console.log(data)
                    english((data)=>{
                        console.log(data)
                        goToCar((data)=>{
                            console.log(data)
                            goToShop((data)=>{
                                console.log(data)
                                goToParking((data)=>{
                                    console.log(data)
                                    goToStudy((data)=>{
                                        console.log(data);
                                        great_shedule((data)=>{
                                            console.log(data);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});
