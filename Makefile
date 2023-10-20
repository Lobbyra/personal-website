installDep :
	yarn

dev :
	yarn run dev

build :
	yarn run build

clean :
	rm -rf ./dist/

fclean : clean
	rm -rf ./node_modules

re : fclean installDep
