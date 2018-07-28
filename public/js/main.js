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

    // line chart 
    const ctx = $("#myChart");
    console.log(ctx)

    let chart = new Chart(ctx , {
    	type: 'line', 
    	data: {
    		labels : ["january" , "February", "March", "April", "May", "June","july"], 
    		datasets: [
    		{
    			label: "My first dataset",
    			fill: false, 
    			lineTension:  0.1,
    			background:'rgba(75,192,192,0.4', 
    			borderColor:'rgba(75,192,192,1)', 
    			boderCapStyle:'butt',
    			boderDash:[], 
    			boderDashOffset:0.0, 
    			boderJoinStyle: 'miter', 
    			pointBoderColor:'rgba(75,192,192,1)', 
    			pointBackgroundColor: '#fff', 
    			pointerBoderWidth: 1, 
    			pointHoverRadious: 5,
    			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    			pointHoverBoderColor: 'rgba(220,220,220,1)', 
    			PintHoverBoderWidth: 2, 
    			pointRadius: 1, 
    			pointHitRadious: 10, 
    			data: [65, 59 ,80, 81 , 56 , 56 , 55, 40],

    		}
    		]
    	}
    })

     }) // end of jquery

