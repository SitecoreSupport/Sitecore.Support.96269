function submit() {
	try {
		//Sitecore.Support.438853 IE11 is detected as firefox
		if (scForm.browser.isFirefox && (typeof ffSubmitForm) !== 'undefined') {
			/* strange unwillingness of Firefox to submit form */
			ffSubmitForm.click();
		} else {
			document.forms[0].submit();
		}
	} catch (e) {
		scForm.invoke("ShowError");
	}
}