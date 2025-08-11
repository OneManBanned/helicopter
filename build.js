import esbuild from 'esbuild';
import pkg from '@jgoz/esbuild-plugin-livereload';

const {livereloadPlugin} = pkg;

async function start() {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'public/js/bundle.js',
    format: 'esm',
    target: 'es6',
    sourcemap: true,
    logLevel: 'silent', 
    plugins: [livereloadPlugin()],
  });

  // Start watch mode
  await ctx.watch();
  console.log('Watching for changes...');

  // Start the development server
  await ctx.serve({
    servedir: 'public',
    port: 8080,
  });
  console.log('Server running at http://localhost:8080');
}

start().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
