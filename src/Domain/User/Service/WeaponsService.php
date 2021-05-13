<?php


namespace App\Domain\User\Service;

use Monolog\Logger;
use App\Factory\LoggerFactory;
use App\Domain\User\Repository\WeaponsRepo;

class WeaponsService {

    private $repository;
    private $logger;
    public function __construct(WeaponsRepo $repos, LoggerFactory $logger)
    {
        $this->repository = $repos;
        $this->logger = $logger
            ->addFileHandler('WeaponViewer.log')
            ->createLogger();
    }
    public function WeaponsLister():string
    {
        if($this->repository->GetAllWeapons()!=null){
            // Logging here: User created successfully
            $this->logger->info('Weapon List: %s');
            return $this->repository->GetAllWeapons();
        }
        else{
            // Logging here: User created successfully
            $this->logger->info(sprintf('Erreur Aucune méthode existante: %s'));
            return "None";
        }
    }
    public function CreateWeapons($tab):string{
            return $this->repository->WeaponCreation($tab);
    }
    public function DeleteWeaponAt($_id):string{
        if($this->repository->WeaponSupression($_id)!=null){
            return $this->repository->WeaponSupression($_id);
        }
        else{
            return "0 Operations successful!";
        }
    }
    public function ChangeWeapon($_id,$modif){
        return $this->repository->UpdateWeapon($_id,$modif);
    }
}

?>
