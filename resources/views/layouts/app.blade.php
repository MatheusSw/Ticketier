<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Ticketier">
    <meta name="author" content="Matheus Souza">

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <title>Ticketier</title> <!-- Add blade layout for page name e.g: Ticketier - Home -->
</head>

<body class="text-black">
@yield('content')
</body>

<script src="{{ asset('js/app.js') }}"></script>
</html>

