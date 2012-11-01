
build: components index.js confirmation.js
	@component build

confirmation.js: confirmation.html
	@component convert $<

components:
	@component install

clean:
	rm -fr build components

.PHONY: clean