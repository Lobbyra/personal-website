installDep :
	bun install

test :
	bun test

dev :
	bun dev

build : installDep test
	bun run type-check
	bun run build-only

clean :
	rm -rf ./dist/

fclean : clean
	rm -rf ./node_modules

re : fclean installDep
