<?php
    $input = urldecode($_GET["term"]);
    $url = 'https://serpapi.com/search.json?engine=google&q='.$input.'&google_domain=google.com&gl=us&hl=en&api_key=b908526f88fd2917ad109915778b0e583de76bf3213975adb0b65c22219703b8';
    $data = file_get_contents($url);
    echo $data;
?>