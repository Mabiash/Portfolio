//querySelector
function allQueryData(queryF, queryS, queryT){
    let qf = document.querySelector(queryF)
    let qs = document.querySelector(queryS)
    let qt = document.querySelector(queryT)

    //eventHandler open
    qf.addEventListener('click', () => {
            qs.style.width = '32rem';
            qs.style.height = '90vh';
        
    });
    
    //evenHandler close
    qt.addEventListener('click', () => {
        qs.style.width = '0';
        qs.style.height = '0';
    });
}

//testimonial
allQueryData('.testimonial', '.tesmon', '.teclose')
allQueryData('.tescon', '.tesmon', '.teclose')
// resume/cv
allQueryData('.resume','.recv', '.reclose')
allQueryData('.resu','.recv', '.reclose')
//project
allQueryData('.Projects', '.projs', '.projsclose')
allQueryData('.proje',' .projs', '.projsclose')
//about
allQueryData('.boutcon','.bout','.boutclose')
allQueryData('.boutcons','.bout','.boutclose')
