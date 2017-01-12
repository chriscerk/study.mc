@extends('welcome')

@section('layout')

    <header class="navbar navbar-inner navbar-fixed-top review-print-hide">
        <nav class="container">
            <div class="navbar-header">
              <a href="/studymc/courses">
                <span class="glyphicon glyphicon-home topNav"></span>
                <span class="app-title">StudyMC</span>
              </a>
              <a href="/studymc/info.html">
              	<span class="glyphicon glyphicon-question-sign topNav"></span>
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