// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.

// Force Webpack to throw compilation errors. Useful with karma-webpack when in single-run mode.
// Workaround for https://github.com/webpack-contrib/karma-webpack/issues/66

export class KarmaWebpackFailureCb {
  constructor(private callback: () => void) { }

  apply(compiler: any): void {
    compiler.plugin('done', (stats: any) => {
      if (stats.compilation.errors.length > 0) {
        this.callback();
      }
    });
  }
}
