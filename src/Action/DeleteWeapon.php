<?php

/**
 * Un fichier servant à :
 * @author Tomy Chouinard
 */

namespace App\Action;


use App\Domain\User\Service\WeaponsService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class DeleteWeapon {
    private $service;

    public function __construct(WeaponsService $weaponsService)
    {
        $this->service = $weaponsService;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface
    {
        $params = $request->getQueryParams();

        // Invoke the Domain with inputs and retain the result
        $data = $this->service->DeleteWeaponAt($params["name"]);

        $result = json_encode([
            'Result' => $data
        ]);

        if($result != "" or $result != null){
            $Code = 200;
        }
        else{
            $Code = 404;
        }

        $response->getBody()->write($result);

        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($Code);

    }
}