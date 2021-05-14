<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;
use App\Middleware\BasicAuthMiddleware;

return function (App $app) {
    $app->get('/', \App\Action\HomeAction::class)->setName('home');

    $app->get('/weapons',\App\Action\ListeWeapons::class);

    $app->post('/weapons/create',\App\Action\CreateWeapon::class);

    $app->delete('/weapons/delete',\App\Action\DeleteWeapon::class)
        ->add(BasicAuthMiddleware::class);

    $app->patch('/weapons/update',\App\Action\UpdateWeapon::class);

    $app->get('/docs',\App\Action\SwaggerUiAction::class);

};

