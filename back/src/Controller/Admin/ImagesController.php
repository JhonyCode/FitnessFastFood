<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ImagesController extends AbstractController
{
    /**
     * @Route("/admin/images", name="app_admin_images")
     */
    public function index(): Response
    {
        return $this->render('admin/images/index.html.twig', [
            'controller_name' => 'ImagesController',
        ]);
    }
}
