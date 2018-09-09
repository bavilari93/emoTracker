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

    const remover = (mode) => {
        modeList.forEach(e => {
            let modeRemover = emoMode.querySelectorAll(`.${e}`)[0];
            modeRemover.style.display = "none";
        });
    }
    // mode controller to append content with css 
    const modeSelector = (mode) => {
        modeList.push(mode);
        const $modeSelector = emoMode.querySelectorAll(`.${mode}`)[0];
        remover(modeList);
        if (mode === 'all-emotion') {
            $modeSelector.style.display = 'block'
            console.log('this is all emotion');
            
        } else if (mode === 'most-emotion') {
            $modeSelector.style.display = 'block'
           console.log('fix this one with test route')
           $.ajax({
            url:"http://localhost:9000/emo/all", 
            method: 'GET', 
            success: function(data){
                console.log(data)
                renderAllEmotions(data)
            }, 
            error: function(data){
                console.log(data);
            }

           })
  
        }else if(mode === 'top-emotion'){
        	 $modeSelector.style.display = 'block'
        	          // get info from table emotion
            $.ajax({
                url: "http://localhost:9000/emo/top",
                method: 'GET',
                success: function(data) {
                 dataView(data);
                  },
                error: function(data) {
                    console.log(data);
                }
            })
        } else {
            console.log('test')
        }
    }

const renderAllEmotions = (data)=>{
    console.log(data);
}


const dataView = (data)=>{
	const count=[], 
	type=[]
	console.log("this is the data received", data);
	data.forEach((e)=>{
		count.push(e.count);
		type.push(e.type);
	})

	console.log(count);

    // line chart 
    const ctx = $("#myChart");
    console.log(ctx)

    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: type,
            datasets: [{
                label: "Top emotions",
                fill: false,
                lineTension: 0.1,
                background: 'rgba(75,192,192,0.4',
                borderColor: 'rgba(75,192,192,1)',
                boderCapStyle: 'butt',
                boderDash: [],
                boderDashOffset: 0.0,
                boderJoinStyle: 'miter',
                pointBoderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointerBoderWidth: 1,
                pointHoverRadious: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBoderColor: 'rgba(220,220,220,1)',
                PintHoverBoderWidth: 2,
                pointRadius: 1,
                pointHitRadious: 10,
                data: count,

            }]
        }
    })
 }
}) // end of jquery