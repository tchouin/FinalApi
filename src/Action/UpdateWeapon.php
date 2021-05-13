<?php

/**
 * Un fichier servant à :
 * @author Tomy Chouinard
 */


namespace App\Action;


use App\Domain\User\Service\WeaponsService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class UpdateWeapon {
    private $Services;

    public function __construct(WeaponsService $service)
    {
        $this->Services = $service;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        $name = (array)$request->getQueryParams();
        // Collect input from the HTTP request
        $data = (array)$request->getParsedBody();

        // Invoke the Domain with inputs and retain the result
        $Name = $this->Services->ChangeWeapon($name['name'],$data);

        // Transform the result into the JSON representation
        $result = [
            'Result' => $Name
        ];

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(201);
    }
}