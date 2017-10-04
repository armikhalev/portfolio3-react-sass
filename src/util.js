export function isMobile() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

export function getPageScroll(_window, _document) {
	var yScroll;

	if (_window.pageYOffset) {
		yScroll = _window.pageYOffset;
	} else if (_document.documentElement && _document.documentElement.scrollTop) {
		yScroll = _document.documentElement.scrollTop;
	} else if (_document.body) {
		yScroll = _document.body.scrollTop;
	}

	return yScroll;
}

