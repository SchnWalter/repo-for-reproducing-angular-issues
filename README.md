# 2022-slow-rebuild-watch-error

A repository for reproducing the issue reported in [ng-packagr/ng-packagr#2022](https://github.com/ng-packagr/ng-packagr/issues/2022)

## Usage

    git clone https://github.com/SchnWalter/repo-for-reproducing-angular-issues.git
    cd repo-for-reproducing-angular-issues
    git checkout 2022-slow-rebuild-watch-error

    # In one terminal:
    cd example-library
    npx ng build --configuration=development --watch

    # In a 2nd terminal:
    cd example-application
    npx ng serve --configuration=development

    # Now change something the library to trigger a re-build, start with the core sub-package. Try:
    # example-library/sdk/core/services/request.service.ts

## Reproduction steps:

Generate two Angular workspaces:

    ng new example-library --create-application=false --new-project-root="." --strict --skip-git --skip-install
    ng new example-application --create-application=false --new-project-root="." --strict --skip-git --skip-install
    # Add `"preserveSymlinks": true` in both tsconfig.json files.

Generate @example/sdk library:

    cd /path/to/example-library
    ng generate lib sdk --prefix='sdk' --skip-install
    # Change the name entry in sdk/package.json to `@example/sdk`, this renames the generated package.
    npm install
    npm run build

Generate application:

    cd /path/to/example-application
    ng generate application web --prefix=web --routing --strict --style=css --skip-install
    # Add `"preserveSymlinks": true` to `projects.web.architect.build.options` object in angular.json.
    npm install
    npm run build
    npm install --save file:../example-library/dist/sdk/

Reorganize library root entry point to only export a VERSION constant, this includes moving the test.ts file and updating angular.json.

    > cat sdk/public-api.ts
    /**
     * @file Exports the public API defined by this package.
     */
    export * from './version';

    > cat sdk/version.ts
    /**
     * @file Exposes the library version as a constant.
     */
    export const VERSION: string = '0.0.0-NG-PACKAGE-VERSION';

Add new subpackages: @example/sdk/core, @example/sdk/extras, etc.

Example sub-package files:

    > cat sdk/core/ng-package.json
    {
      "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
      "lib": {
        "entryFile": "./public-api.ts"
      }
    }

    > cat sdk/core/public-api.ts
    /**
     * @file Exports the public API defined by this module.
     */
    export * from './example-sdk-core.module';

    > cat sdk/core/example-sdk-core.module.ts
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    @NgModule({
      imports: [ CommonModule ],
    })
    export class ExampleSdkCoreModule { }

Update the application to display the VERSION constant from the root package and import the module from the core sub-package.

> NOTE: At this point an `npx ng build --watch` on the library and `npx ng serve` on the application will take about 1s to rebuild both the library and 0.5s to rebuild the application. The library build needs to be slower, in order to see the rebuild error.

Add some services use them to create dependencies between sub-packages, use injection tokens and interfaces, for added complexity.

> NOTE: The core sub-package should not have any dependencies, but it should be a dependency of most of them. This will trigger a full rebuild of the library during `ng build --watch`.
