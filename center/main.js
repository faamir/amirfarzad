
var ultimatum = function() {
	$('#main').hide();
	$('#main').load('ultimatum.html', function() {
		$('#reponseOui,#reponseNon,#both').children().hide();
		$('#ouinon a').click(function() {
			//$('#reponseOui,#reponseNon').children().hide();
			$('#ouinon').hide();
			$('#reponse'+$(this).html()).children().slideDown();
			$('#both').children().slideDown();
		});
	});
	$('#main').fadeIn('slow');
	
};

function apply(area, hoverimg, text) {
	if (document.images) {
		preload = new Image();
		preload.src = hoverimg;
	}
	$('#link' + area).attr('title', text);
	$('#area' + area).mouseover(function() {
		$('#brainimg').attr('src', hoverimg);
		$('#brainarea p').html(text);
		$('#link' + area).addClass('empha');
	}).mouseout(function() {
		$('#brainimg').attr('src', "images/brain.jpg");
		$('#brainarea p').html('<br />');
		$('#link' + area).removeClass('empha');
	}).click(function(e) {
		e.preventDefault();
		$.colorbox({onComplete: compl, width: "80%", height: "80%", close: "retour", href: $('#link'+area).attr('href')})
	});
}

function compl() {
	$('#cboxLoadedContent').append('<p><a id="prec" href="">précédent</a> <a id="suiv" style="float:right" href="">suivant</a></p>');
	var q = $('#cboxLoadedContent').children().filter(':gt(0)');
	q.hide().last().show();
	$('#prec').hide();
	$('#cboxLoadedContent').children().first().nextUntil('h2').show();
	var titles = $('#cboxLoadedContent').children().filter('h2');
	var size = titles.length;
	var section = -1;
	
	var suiv = function(e) {
		e.preventDefault();
		q.hide().last().show();
		section++;
		titles.eq(section).show().nextUntil('h2').show();
		$('#prec').show();
		if (section >= size-1) $('#suiv').hide();
	};
	var prec = function(e) {
		e.preventDefault();
		q.hide().last().show();
		section--;
		if (section == -1) {
			$('#cboxLoadedContent').children().first().nextUntil('h2').show();
			$('#prec').hide();
		} else {
			titles.eq(section).show().nextUntil('h2').show();
		}
		$('#suiv').show();
	};
	$('#suiv').click(suiv);
	$('#prec').click(prec);
}

var controverse = function() {
	$('#main').hide();
	$('#main').load('controverse.html', function() {
		$('.nav').colorbox({onComplete: compl, width: "80%", height: "100%", close: "retour"});
		$('.boxed ').colorbox({width: "80%", height: "100%", close: "retour"});
		$('#cerveau').hide();
		$('#introlink').click(function(e) {
			e.preventDefault();
			$('#cerveau').slideUp();
			$('#intro').slideDown();
		})
		$('#suivre, #navcerveau').click(function(e) {
			e.preventDefault();
			$('#intro').slideUp(); //function() {
				$('#cerveau').slideDown(function() {
					apply(1, 'images/brain_1.jpg', 'La neuroéconomie : simple label ou véritable discipline ?');
					apply(2, 'images/brain_2.jpg', 'Neuroéconomie : une nouvelle discipline en réponse à la crise financière ? Pas vraiment...');
					apply(3, 'images/brain_3.jpg', 'Nouveaux domaines de recherche donc nouveaux protocoles, expériences controversées ?');
					apply(4, 'images/brain_4.jpg', "La neuroéconomie fait-elle de l'homme une machine cérébrale ?");
					apply(5, 'images/brain_5.jpg', 'Economie ou neurosciences : qui bénéficie vraiment de la neuroéconomie ?');
					$('#link6').attr('title', 'Neuromarketing : une application concrète ou une dérive de la neuroéconomie ?');
					$('#dollar').hover(function() {
						$('#brainarea p').html('Neuromarketing : une application concrète ou une dérive de la neuroéconomie ?');
						$('#link6').addClass('empha');
					}, function() {
						$('#brainarea p').html('<br />');
						$('#link6').removeClass('empha');
					});
				});
			//});
		});
	});
	$('#main').fadeIn('slow');

};


$(function() {
	ultimatum();
});
