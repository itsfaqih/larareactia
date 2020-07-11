<!DOCTYPE html>
<html class="h-full bg-gray-200" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
  <script src="{{ mix('/js/app.js') }}" defer></script>
  @routes
</head>

<body class="font-sans leading-none text-gray-800 antialiased">
  @inertia
</body>

</html>