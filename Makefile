
test/out.js: index.js confirmation.css
	component build package.json test/out

clean:
	rm -f test/out.{js,css}

.PHONY: clean