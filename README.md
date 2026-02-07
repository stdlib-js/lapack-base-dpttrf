<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dpttrf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.



<section class="usage">

## Usage

To use in Observable,

```javascript
dpttrf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dpttrf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dpttrf = require( 'path/to/vendor/umd/lapack-base-dpttrf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dpttrf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dpttrf;
})();
</script>
```

#### dpttrf( N, D, E )

Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 1.0, 2.0 ] );

dpttrf( 3, D, E );
// D => <Float64Array>[ 4, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.25, ~0.4210 ]
```

The function has the following parameters:

-   **N**: order of matrix `A`.
-   **D**: the `N` diagonal elements of `A` as a [`Float64Array`][mdn-float64array].
-   **E**: the N-1 subdiagonal elements of `A` as a [`Float64Array`][mdn-float64array].

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var D0 = new Float64Array( [ 0.0, 4.0, 5.0, 6.0 ] );
var E0 = new Float64Array( [ 0.0, 1.0, 2.0 ] );

// Create offset views...
var D1 = new Float64Array( D0.buffer, D0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var E1 = new Float64Array( E0.buffer, E0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dpttrf( 3, D1, E1 );
// D0 => <Float64Array>[ 0.0, 4.0, 4.75, ~5.15789 ]
// E0 => <Float64Array>[ 0.0, 0.25, ~0.4210 ]
```

#### dpttrf.ndarray( N, D, strideD, offsetD, E, strideE, offsetE )

Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 1.0, 2.0 ] );

dpttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
// D => <Float64Array>[ 4, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.25, ~0.4210 ]
```

The function has the following additional parameters:

-   **strideD**: stride length for `D`.
-   **offsetD**:  starting index for `D`.
-   **strideE**: stride length for `E`.
-   **offsetE**:  starting index for `E`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var D = new Float64Array( [ 0.0, 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 0.0, 1.0, 2.0 ] );

dpttrf.ndarray( 3, D, 1, 1, E, 1, 1 );
// D => <Float64Array>[ 0.0, 4.0, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.0, 0.25, ~0.4210 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions mutate the input arrays `D` and `E`.

-   Both functions return a status code indicating success or failure. A status code indicates the following conditions:

    -   `0`: factorization was successful.
    -   `<0`: the k-th argument had an illegal value, where `-k` equals the status code value.
    -   `0 < k < N`: the leading principal minor of order `k` is not positive and factorization could not be completed, where `k` equals the status code value.
    -   `N`: the leading principal minor of order `N` is not positive, and factorization was completed.

-   `dpttrf()` corresponds to the [LAPACK][LAPACK] routine [`dpttrf`][lapack-dpttrf].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dpttrf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float64'
};
var D = discreteUniform( 5, 1, 5, opts );
console.log( D );

var E = discreteUniform( D.length-1, 1, 5, opts );
console.log( E );

// Perform the `L * D * L^T` factorization:
var info = dpttrf( D.length, D, E );
console.log( D );
console.log( E );
console.log( info );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dpttrf.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dpttrf

[test-image]: https://github.com/stdlib-js/lapack-base-dpttrf/actions/workflows/test.yml/badge.svg?branch=v0.1.2
[test-url]: https://github.com/stdlib-js/lapack-base-dpttrf/actions/workflows/test.yml?query=branch:v0.1.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dpttrf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dpttrf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dpttrf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dpttrf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dpttrf/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dpttrf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dpttrf/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dpttrf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dpttrf/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dpttrf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dpttrf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dpttrf/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dpttrf]: https://www.netlib.org/lapack/explore-html/d4/d2c/group__pttrf_ga8f112041da2b9b443f8761a1eaaf15b6.html#ga8f112041da2b9b443f8761a1eaaf15b6

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
