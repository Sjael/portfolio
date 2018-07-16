$(document).ready(function(){
// Handles expanding an image
	$('#work').find($('img')).click(function(){
	  console.log(this);
	  if ($(this).hasClass("vid")){
	  	//$('#vidModal').find($('#ytplayer'))[0].src = "https://www.youtube.com/embed/" + $(this).attr("data-id") + "";
		$('#vidModal').modal('show');	  	
	  }
	  else{
	  	$('#imgModal').find($('img'))[0].src = this.src;
	  	$('#imgModal').find($('#title'))[0].innerHTML = this.alt;
		$('#imgModal').modal('show');	  	
	  };

                        
	});

	$("#vidModal").on('hide.bs.modal', function(){
        $("#ytplayer").attr('src', '');
        $("#ytplayer").attr('src', 'https://www.youtube.com/embed/bFeMC1E_nmA');        
    });

	$('#chat').click(function(){
		$('#contactModal').modal('show');
	});
});
