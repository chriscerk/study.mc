@extends('welcome')

@section('layout')

    <header class="navbar navbar-inner navbar-fixed-top review-print-hide">
        <nav class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="/">
                <span class="app-title">Study.MC</span>
              </a>
            </div>
        </nav>
    </header>
    <body>

        @yield('content')

    </body>
    <footer>
        <div class="navbar navbar-fixed-bottom review-print-hide">
            <div class="navbar-inner footer">
                <div class="container">
                    <footer>
                        <div class="row">
                            <div class="col-md-12">
                               University of Michigan - College of Pharmacy
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </footer>
@stop