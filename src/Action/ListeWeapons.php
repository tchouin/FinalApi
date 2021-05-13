<?php

namespace App\Action;

use App\Domain\User\Service\WeaponsService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class ListeWeapons
{
    private $WeaponsList;

    public function __construct(WeaponsService $_weaponsService)
    {
        $this->WeaponsList = $_weaponsService;
    }

    public function __invoke(
        ServerRequestInterface $request,
        ResponseInterface $response
    ): ResponseInterface
    {
        //$data = (array)$request->getParsedBody();

        // Invoke the Domain with inputs and retain the result
        $data = $this->WeaponsList->WeaponsLister();

        $result = json_encode([
            'Results' => $data
        ]);

        if($result != null or $result != "0 Data Created!"){
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
?>
