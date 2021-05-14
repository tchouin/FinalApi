<?php

/**
 * Un fichier servant à :
 * @author Tomy Chouinard
 */


namespace App\Action;

use App\Domain\User\Service\WeaponsService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;


class CreateWeapon {
    private $Services;

    public function __construct(WeaponsService $service)
    {
        $this->Services = $service;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface {
        // Collect input from the HTTP request
        $data = (array)$request->getParsedBody();

        // Invoke the Domain with inputs and retain the result
        $name = $this->Services->CreateWeapons($data);

        // Transform the result into the JSON representation
        $result = [
            'name' => $name
        ];

        if($result >= 0 or $result != null){
            $Code = 201;
        }
        else{
            $Code = 404;
        }

        // Build the HTTP response
        $response->getBody()->write((string)json_encode($result));

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($Code);
    }
}