<?php

namespace App\Controller\Admin;

use App\Entity\Publicaciones;
use App\Entity\Usuario;
use App\Form\PublicacionesType;
use App\Repository\PublicacionesRepository;
use App\Repository\UsuarioRepository;
use Doctrine\ORM\EntityManagerInterface;
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
    public function index(PublicacionesRepository $publicacionesRepository, Request $request): Response
    {
        //?page=1&limit=4

        $page = $request->query->get('page', 1);
        $limit = $request->query->get('limit', 20);
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;
        
        $totalRegistros = count($publicacionesRepository->findAll());

        $publicacione = $publicacionesRepository->findBy([],['id'=>'DESC'],$limit, $offset);
        $resultado = [];
        foreach ($publicacione as $c) {
            $imagenPublicacion='http://localhost:8080/uploads/'.$c->getImagen();
            $resultado[] = [
                "titulo" => $c->getTitulo(),
                'id' => $c->getId(),
                "imagen" => $imagenPublicacion,
                "ingredientes" =>'Ingredientes: ' . $c->getIngredientes(),
                "usuario" => 'Creado por: ' .  $c->getUsuario()->getNombre(),
                "resumen" => $c->getResumen(),
                'comentario' =>  $c->getValorNutricional()
            ];
        }
        return $this->json([
            'result' => $resultado,
            'count' => $totalRegistros
        ]);
    }

    /**
     * @Route("/new", name="app_admin_publicaciones_new", methods={"GET", "POST"})
     */
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        /** @var User $user */
        $usuario = $this->getUser();
        $resultado = "ko";
        $publicacionTitulo = $request->request->get("titulo");
        $publicacionResumen = $request->request->get("resumen");
        $publicacionValor = $request->request->get("comentario");
        $publicacionIngredientes = $request->request->get("ingredientes");
        $imagen = $request->files->get('imagen');
        
        if(!empty($publicacionTitulo)){
            $nombreImagen = '';
            if (!empty($imagen)) {
                if (!empty($imagen->getClientOriginalName())) {
                    $nombreImagen = uniqid() . '_' . strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                    $imagen->move('uploads/', $nombreImagen);
                }
            }

            $publicacion = new Publicaciones();
            
            $publicacion->setUsuario($usuario);
            $publicacion->setTitulo($publicacionTitulo);
            $publicacion->setResumen($publicacionResumen);
            $publicacion->setValorNutricional($publicacionValor);
            $publicacion->setIngredientes($publicacionIngredientes);
            $publicacion->setImagen($nombreImagen);
            $publicacion->setSlug("publicacion". uniqid());
            
            $em->persist($publicacion);
            $em->flush();
        }
        return $this->json([
            'resultado' => $resultado
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_publicaciones_show", methods={"GET"})
     */
    public function show(Publicaciones $publicacione): Response
    {


            $imagenPublicacion='http://localhost:8080/uploads/'.$publicacione->getImagen();
            $resultado = [
                "titulo" => $publicacione->getTitulo(),
                'id' => $publicacione->getId(),
                'imagen' => $imagenPublicacion,
                "ingredientes" =>'Ingredientes: ' . $publicacione->getIngredientes(),
                "usuario" => 'Creado por: ' .  $publicacione->getUsuario()->getNombre(),
                "estado" => $publicacione->getEstado(),
                "resumen" => $publicacione->getResumen(),
                'comentario' =>$publicacione->getValorNutricional()
            ];

        return $this->json(['result' => $resultado]);
        // $resultado=[
        //     "titulo" => $publicacione->getTitulo(),
        //     'id' => $publicacione->getId(),
        //     "imagen" => $publicacione->getImagen(),
        //     "ingredientes" => 'Ingredientes: ' . $publicacione->getIngredientes(),
        //     "usuario" => 'Creado por: ' .  $publicacione->getUsuario()->getNombre(),
        //     "estado" => $publicacione->getEstado(),
        //     "resumen" => 'Elaboración: ' . $publicacione->getResumen(),
        //     'comentario' => 'Valor nutricional: ' . $publicacione->getValorNutricional()
        
        // ];
    
        //     return $this->json([
        //         'result' => $resultado
        //     ]);
    }

    /**
     * @Route("/{id}/edit", name="app_admin_publicaciones_edit", methods={"GET", "POST"})
     */
    public function edit( EntityManagerInterface $em, Request $request, Publicaciones $publicacione, PublicacionesRepository $publicacionesRepository): Response
    {
        $resultado = "ko";
        $publicacionTitulo = $request->request->get("titulo");
        $publicacionValor = $request->request->get("comentario");
        $publicacionResumen = $request->request->get("resumen");
        $publicacionIngredientes = $request->request->get("ingredientes");
        $imagen = $request->files->get('imagen');
        
        if(!empty($publicacionTitulo)){
            $nombreImagen = '';
            if (!empty($imagen)) {
                if (!empty($imagen->getClientOriginalName())) {
                    $nombreImagen = uniqid() . '_' . strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                    $imagen->move('uploads/', $nombreImagen);
                }
            }
            
            $publicacione->setTitulo($publicacionTitulo);
            $publicacione->setValorNutricional($publicacionValor);
            $publicacione->setImagen($nombreImagen);
            $publicacione->setIngredientes($publicacionIngredientes);
            $publicacione->setResumen($publicacionResumen);

            $em->persist($publicacione);
            $em->flush();
        }
        return $this->json([
            'resultado' => $resultado
        ]);
    }

    /**
     * @Route("/delete/{id}", name="app_admin_publicaciones_delete2", methods={"DELETE"})
     */
    public function delete(EntityManagerInterface $em, PublicacionesRepository $publicacionesRepository, $id): Response
    {   
        $resultado="ko";
        if(!empty($id)){
            $publicacion = $publicacionesRepository->find($id);
            $em->remove($publicacion);
            $em->flush();
            $resultado="ok";
        }

        return $this->json([
            'result' => $resultado,
        ]);
    }

       /**
     * @Route("/usuario/{id}", name="app_admin_show_user", methods={"GET"})
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
