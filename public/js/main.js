$( document ).ready(()=>{
console.log('this is ready');

$('.emo').click(function(){
	const $value = $(this).attr('alt');
	console.log($value);
	createEmotion($value);
})



///////////// emotion CRUD //////////////////

const createEmotion = (emotion) => {
	const type ={
		type: emotion}

			console.log(typeof type);
	$.ajax({
		// url we pass the info 
		url : '/emo/', 
		type : 'POST', 
		data : type, 
		success : res => {
			window.location.replace(`/user/${res.id}`)
		}, 
		error : err => {
			console.log('error from emotion POST ' , err);
		}
	})
}


})// end of jquery