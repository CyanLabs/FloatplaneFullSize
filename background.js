const debounce = (wait, immediate, func) => {
  let timeout;
	return (...args) => {
    const context = this;
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$('floatplane-app').on('DOMNodeInserted', debounce(500, true, () => {
// check for control bar div without cinema mode button
const controlBarFound = $('div.vjs-control-bar').length;
const cinemaModeButtonFound = $('.cyanlabs-expand-button').length;
if (controlBarFound && !cinemaModeButtonFound) {
  
  // add cinema mode button
  $('div.vjs-control-bar').append('<button class="vjs-control vjs-button cyanlabs-expand-button " type="button" title="Fullsize"><svg class="fullsizevideo" width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="svg-container"><path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z" style="fill: white;"></path></svg><svg class="windowedvideo" width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" class="svg-container"><path d="M883 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zm781-864v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z" style="fill: white;"></path></svg><span class="vjs-control-text">Fullsize</span></button>');

  $('.cyanlabs-expand-button').click(() => {
	$('.player-container').toggleClass('cyanlabs-player-container');
	$('.page-wrapper').toggleClass('cyanlabs-page-wrapper');
	$('leftnav').toggleClass('cyanlabs-leftnav');
	$('body,html').toggleClass('cyanlabs-body');
	$('.video-js').toggleClass('cyanlabs-vjs');
	$('[aria-label="video player"]').toggleClass('vjs-fluid');
	
	if ($('.player-container').hasClass('cyanlabs-player-container')){
        $('.fullsizevideo').show();
		$('.windowedvideo').hide();
    } else {
        $('.windowedvideo').show();
		$('.fullsizevideo').hide();
      }
  });
}
}));