installDep :
	bun install

test :
	bun test

dev : installDep
	bun dev --host

build : installDep test
	bun run type-check
	bun run build-only

clean :
	rm -rf ./dist/

fclean : clean
	rm -rf ./node_modules

re : fclean installDep
