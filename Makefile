
build: components index.js confirmation.html
	@component build

components:
	@component install

clean:
	rm -fr build components

.PHONY: clean