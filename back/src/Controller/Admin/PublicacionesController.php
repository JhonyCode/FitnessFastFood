<?php

namespace App\Controller\Admin;

use App\Entity\Publicaciones;
use App\Entity\Usuario;
use App\Form\PublicacionesType;
use App\Repository\PublicacionesRepository;
use App\Repository\UsuarioRepository;
use Doctrine\ORM\Mapping\Id;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/publicaciones")
 */
class PublicacionesController extends AbstractController
{
    /**
     * @Route("/", name="app_admin_publicaciones_index", methods={"GET"})
     */
    public function index(PublicacionesRepository $publicacionesRepository): Response
    {
        $publicacione = $publicacionesRepository->findAll();
        $resultado = [];
        foreach ($publicacione as $c) {
            $resultado[] = [
                "titulo" => $c->getTitulo(),
                'id' => $c->getId(),
                "imagen" => $c->getImagen(),
                "ingredientes" =>'Ingredientes: ' . $c->getIngredientes(),
                "usuario" => 'Creado por: ' .  $c->getUsuario()->getNombre(),
                "categoria" => $c->getCategoria()->getNombre(),
                "estado" => $c->getEstado(),
                "resumen" => 'Elaboración: ' . $c->getResumen(),
                "valoracion" => 'Valoración: ' . $c->getValoracion()->getNumero(),
                'comentario' => 'Valor nutricional' . $c->getComentario()->getTexto()
            ];
        }
        return $this->json(['result' => $resultado]);
    }

    /**
     * @Route("/new", name="app_admin_publicaciones_new", methods={"GET", "POST"})
     */
    public function new(Request $request, PublicacionesRepository $publicacionesRepository): Response
    {
        $publicacione = new Publicaciones();
        $form = $this->createForm(PublicacionesType::class, $publicacione);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $publicacionesRepository->add($publicacione, true);

            return $this->redirectToRoute('app_admin_publicaciones_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/publicaciones/new.html.twig', [
            'publicacione' => $publicacione,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_publicaciones_show", methods={"GET"})
     */
    public function show(Publicaciones $publicacione): Response
    {
        $resultado=[
            "titulo" => $publicacione->getTitulo(),
            'id' => $publicacione->getId(),
            "imagen" => $publicacione->getImagen(),
            "ingredientes" => 'Ingredientes: ' . $publicacione->getIngredientes(),
            "usuario" => 'Creado por: ' .  $publicacione->getUsuario()->getNombre(),
            "categoria" => $publicacione->getCategoria()->getNombre(),
            "estado" => $publicacione->getEstado(),
            "resumen" => 'Elaboración: ' . $publicacione->getResumen(),
            "valoracion" => 'Valoración: ' . $publicacione->getValoracion()->getNumero(),
            'comentario' => 'Valor nutricional: ' . $publicacione->getComentario()->getTexto()
        
        ];
    
            return $this->json([
                'result' => $resultado
            ]);
    }

    /**
     * @Route("/{id}/edit", name="app_admin_publicaciones_edit", methods={"GET", "POST"})
     */
    public function edit( Request $request, Publicaciones $publicacione, PublicacionesRepository $publicacionesRepository): Response
    {
        $form = $this->createForm(PublicacionesType::class, $publicacione);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $publicacionesRepository->add($publicacione, true);

            return $this->redirectToRoute('app_admin_publicaciones_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/publicaciones/edit.html.twig', [
            'publicacione' => $publicacione,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_publicaciones_delete", methods={"POST"})
     */
    public function delete(Request $request, Publicaciones $publicacione, PublicacionesRepository $publicacionesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $publicacione->getId(), $request->request->get('_token'))) {
            $publicacionesRepository->remove($publicacione, true);
        }

        return $this->redirectToRoute('app_admin_publicaciones_index', [], Response::HTTP_SEE_OTHER);
    }

       /**
     * @Route("/usuario/{id}", name="app_admin_publicaciones_delete", methods={"GET"})
     */
    public function showUser(Publicaciones $publicacione): Response
    { 
        $resultado=[

            'publicaciones' => $publicacione->getTitulo()
        ];
    
            return $this->json([
                'result' => $resultado
    ]);
       }
}
