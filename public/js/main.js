$(document).ready(() => {
    console.log('this is ready');

    $('.emo').click(function() {
        const $value = $(this).attr('alt');
        console.log($value);
        createEmotion($value);
    })
    // mode changer for user profile 
    $('.emo-selector').click(function() {
        const $modeValue = $(this).val()
        modeSelector($modeValue);
    })



    ///////////// emotion CRUD //////////////////

    const createEmotion = (emotion) => {
        const type = {
            type: emotion
        }

        console.log(typeof type);
        $.ajax({
            // url we pass the info 
            url: '/emo/',
            type: 'POST',
            data: type,
            success: res => {
                window.location.replace(`/emo/user`)
            },
            error: err => {
                console.log('error from emotion POST ', err);
            }
        })
    }

// gobal for dom mode 
    const emoMode = document.getElementById('emotion-mode');
    const modeList = []

    const remover = (mode) =>{
    	modeList.forEach( e => {
    		let modeRemover = emoMode.querySelectorAll(`.${e}`)[0];
    		modeRemover.style.display ="none";
    	});
    }
    // mode controller to append content with css 
    const modeSelector = (mode) => {
    	modeList.push(mode);
        const $modeSelector = emoMode.querySelectorAll(`.${mode}`)[0];
        remover(modeList);
        if (mode === 'all-emotion') {
            $modeSelector.style.display = 'block'
        } else if( mode === 'most-emotion'){
            $modeSelector.style.display = 'block'
        }else{
        	console.log('test')
        	}
    }

}) // end of jquery