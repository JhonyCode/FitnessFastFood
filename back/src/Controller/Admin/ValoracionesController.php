<?php

namespace App\Controller\Admin;

use App\Entity\Valoraciones;
use App\Form\ValoracionesType;
use App\Repository\ValoracionesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/valoraciones")
 */
class ValoracionesController extends AbstractController
{
    /**
     * @Route("/", name="app_admin_valoraciones_index", methods={"GET"})
     */
    public function index(ValoracionesRepository $valoracionesRepository): Response
    {
        return $this->render('admin/valoraciones/index.html.twig', [
            'valoraciones' => $valoracionesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_admin_valoraciones_new", methods={"GET", "POST"})
     */
    public function new(Request $request, ValoracionesRepository $valoracionesRepository): Response
    {
        $valoracione = new Valoraciones();
        $form = $this->createForm(ValoracionesType::class, $valoracione);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $valoracionesRepository->add($valoracione, true);

            return $this->redirectToRoute('app_admin_valoraciones_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/valoraciones/new.html.twig', [
            'valoracione' => $valoracione,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_valoraciones_show", methods={"GET"})
     */
    public function show(Valoraciones $valoracione): Response
    {
        return $this->render('admin/valoraciones/show.html.twig', [
            'valoracione' => $valoracione,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_admin_valoraciones_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Valoraciones $valoracione, ValoracionesRepository $valoracionesRepository): Response
    {
        $form = $this->createForm(ValoracionesType::class, $valoracione);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $valoracionesRepository->add($valoracione, true);

            return $this->redirectToRoute('app_admin_valoraciones_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/valoraciones/edit.html.twig', [
            'valoracione' => $valoracione,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_valoraciones_delete", methods={"POST"})
     */
    public function delete(Request $request, Valoraciones $valoracione, ValoracionesRepository $valoracionesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$valoracione->getId(), $request->request->get('_token'))) {
            $valoracionesRepository->remove($valoracione, true);
        }

        return $this->redirectToRoute('app_admin_valoraciones_index', [], Response::HTTP_SEE_OTHER);
    }
}
