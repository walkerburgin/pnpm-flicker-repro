# pnpm-flicker-repro

This repro is a small repro for [pnpm#2928](https://github.com/pnpm/pnpm/issues/2928).

## Instructions
+ Run `pnpm install` and observe that you see no changed to `pnpm-lock.yaml`
+ Run `pnpm install -w --save-dev tslib`. You should see the following diff for `pnpm-lock.yaml`:
    ```diff
        diff --git a/pnpm-lock.yaml b/pnpm-lock.yaml
        index 2fab4d8..17eacc4 100644
        --- a/pnpm-lock.yaml
        +++ b/pnpm-lock.yaml
        @@ -3,10 +3,12 @@ importers:
             devDependencies:
               '@monorepolint/cli': 0.5.0-alpha.51
               monorepolint: 0.5.0-alpha.51
        +      tslib: 2.1.0
               typescript: 4.0.5
             specifiers:
               '@monorepolint/cli': ^0.5.0-alpha.51
               monorepolint: ^0.5.0-alpha.51
        +      tslib: ^2.1.0
               typescript: ~4.0.5
           packages/bar-lib:
             dependencies:
        @@ -48,6 +50,7 @@ packages:
             hasBin: true
             resolution:
               integrity: sha1-pkf9rEbvUElo1FuHkB8iKjjbANk=
        +      tarball: '@monorepolint/cli/-/cli-0.5.0-alpha.51.tgz'
           /@monorepolint/core/0.5.0-alpha.51:
             dependencies:
               '@monorepolint/utils': 0.5.0-alpha.51
        @@ -455,6 +458,7 @@ packages:
             dev: true
             resolution:
               integrity: sha1-+1LpiyJM3WgYELKdbxrAg9KXykc=
        +      tarball: monorepolint/-/monorepolint-0.5.0-alpha.51.tgz
           /object-assign/4.1.1:
             dev: false
             engines:
        ```

    The addition of the `tarball:` lines is unexpected.
