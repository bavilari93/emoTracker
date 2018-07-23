$( document ).ready(()=>{
console.log('this is ready');

$('.emo').click(()=>{
	console.log(this)
	const $value = $(this).attr("title");
	console.log($value);
})

})// end of jquery