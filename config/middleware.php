<?php

use Selective\BasePath\BasePathMiddleware;
use Slim\App;
use Slim\Middleware\ErrorMiddleware;

return function (App $app) {
    // Parse json, form data and xml
    $app->addBodyParsingMiddleware();

    // Add the Slim built-in routing middleware
    $app->addRoutingMiddleware();

    // Add app base path
    $app->add(BasePathMiddleware::class);

    // Catch exceptions and errors
    //$app->add(ErrorMiddleware::class);
    $loggerFactory = $app->getContainer()->get(\App\Factory\LoggerFactory::class);
    $logger = $loggerFactory->addFileHandler('error.log')->createLogger();
    $app->addErrorMiddleware(true,true,true,$logger);
};
