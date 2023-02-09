var cl = console.log;


function getAngularDev(skillSets) {
    // api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (skillSets.toLowerCase().includes("angular")) {
                resolve(`Candidate is shortlisted for Angular Profile...`);
            } else {
                reject(`Candidate is not shortlisted yet...`)
            }
        }, 3000);
    })
}

function firstTecInterview() {
    // api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is shortlisted for 2nd round`)
            } else {
                reject(`Candidate is rejected, He/She not having Basic skillsets`)
            }
        }, 1000);
    })
}

function secTecInterview() {
    // api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is shortlisted for ML round`)
            } else {
                reject(`Candidate is good in basics, But not able to exicute the code`)
            }
        }, 500);
    })
}

function mlRound() {
    return new Promise((resolve, reject) => {
        let result = Math.random() >= .4 ? true : false;
        setTimeout(() => {
                if (result) {
                    resolve(`Candidate is selected for given profile!`)
                } else {
                    reject(`Candidate is not able to explain about his/her previous project.`)
                }
        }, 500)
    })
}

let skillName = Math.random() >= .5 ? "Angular 15" : "React 18";
cl(skillName);

async function init(){
    try{
        await getAngularDev();
        await firstTecInterview();
        await secTecInterview();
        let result = await mlRound();
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 15000
        })
    }catch(err){
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 15000
        })
    }
}
init();