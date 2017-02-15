var isPublic = typeof window != "undefined";

(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
    'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',
    '@angular/material':          (isPublic)? '@angular/material/bundles/material.umd.js' : 'node_modules/@angular/material/bundles/material.umd.js',
    'hammerjs':                   (isPublic)? 'hammerjs/hammer.js': 'node_modules/hammerjs/hammer.js',
    'ng2-expansion-panels':       (isPublic)? 'ng2-expansion-panels/dist': 'node_modules/ng2-expansion-panels/dist',
    'angular2-jwt':               (isPublic)? 'angular2-jwt': 'node_modules/angular2-jwt'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'ng2-expansion-panels':       { main: 'ng2-expansion-panels.bundle.js',  defaultExtension: 'js' },
    'angular2-jwt':               { main:'angular2-jwt.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);