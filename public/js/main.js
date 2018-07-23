$( document ).ready(()=>{
console.log('this is ready');

$('.emo').click(function(){
	var $value = $(this).attr('alt');
	console.log($value);
})

})// end of jquery