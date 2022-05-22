<?php
// We will then create a controller that will load the react app.

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/{reactRoute}', name: 'app_home', requirements: ['reactRoute'=>"^(?!api).+"], defaults:["reactRoute"=>null])]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }
}
