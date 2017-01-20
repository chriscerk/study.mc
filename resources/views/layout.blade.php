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
        University of Michigan | College of Pharmacy
    </footer>
@stop