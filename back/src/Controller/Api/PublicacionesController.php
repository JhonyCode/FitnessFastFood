<?php

namespace App\Controller\Api;

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
 * @Route("/api/publicaciones")
 */
class PublicacionesController extends AbstractController
{
    /**
     * @Route("/", name="app_admin_publicaciones_index", methods={"GET"})
     */
    public function index(PublicacionesRepository $publicacionesRepository, Request $request): Response
    {
        //Creamos aquí el paginador, para que muestre como máximo 20 items 
        //por página.
         
        $page = $request->query->get('page', 1);
        $limit = $request->query->get('limit', 20);
        //calculamos el offset de los registros
        $offset = ($page-1)*$limit;
        
        $totalRegistros = count($publicacionesRepository->findAll());

        //Obtenemos todas las publicaciones desde el repositorio.

        $publicacione = $publicacionesRepository->findBy([],['id'=>'DESC'],$limit, $offset);
        $resultado = [];
        foreach ($publicacione as $c) {

            //Sacamos la imagen desde la url de subida 
            // Y sacamos la información de cada publicación con el foreach.

            $imagenPublicacion='http://localhost:8080/uploads/'.$c->getImagen();
            $resultado[] = [
                "titulo" => $c->getTitulo(),
                'id' => $c->getId(),
                "imagen" => $imagenPublicacion,
                "ingredientes" =>$c->getIngredientes(),
                "usuario" => 'Creado por: ' .  $c->getUsuario()->getNombre(),
                "resumen" => $c->getResumen(),
                'comentario' =>  $c->getValorNutricional()
            ];
        }
        // Lo retornamos como "result" así en react será más fácil obtener
        // la información , ya que todos los result serán llamados de igual
        //manera

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
        // Obtenemos el usuario , si no está logeado no podrá publicar.
        // A continuación, obtenemos la información del formulario,
        // Enviada por el usuario, después se publicará la publicación.


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
             // Aquí creamos la publicación, con la información introducida
             // Por el usuario.

            $publicacion = new Publicaciones();

            // Obtenemos toda la información dada por el usuario y 
            // la introducimos en la publicación.

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
        //Aquí lo retornamos com "result", Toda la información.
        return $this->json([
            'result' => $resultado
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_publicaciones_show", methods={"GET"})
     */
    public function show(Publicaciones $publicacione): Response
    {
        // Función para sacar la publicación por ID, cuando el usuario
        // Pincha en una publicación, hara éste fetch y obtendrá 
        // Toda la información de esa publicación,
        // El código es parecido al de ver todas las publicaciones.

            $imagenPublicacion='http://localhost:8080/uploads/'.$publicacione->getImagen();
            $resultado = [
                "titulo" => $publicacione->getTitulo(),
                'id' => $publicacione->getId(),
                'imagen' => $imagenPublicacion,
                "ingredientes" =>$publicacione->getIngredientes(),
                "usuario" => 'Created by: ' .  $publicacione->getUsuario()->getNombre(),
                "resumen" => $publicacione->getResumen(),
                'comentario' =>$publicacione->getValorNutricional()
            ];

            //Como siempre, devolvemos la respuesta en un JSON.

        return $this->json(['result' => $resultado]);
    }

    /**
     * @Route("/{id}/edit", name="app_admin_publicaciones_edit", methods={"GET", "POST"})
     */
    public function edit( EntityManagerInterface $em, Request $request, Publicaciones $publicacione, PublicacionesRepository $publicacionesRepository): Response
    {
        // Función para editar una publicación.

        // Obtenemos la información de la publicación.
        $resultado = "ko";
        $publicacionTitulo = $request->request->get("titulo");
        $publicacionValor = $request->request->get("comentario");
        $publicacionResumen = $request->request->get("resumen");
        $publicacionIngredientes = $request->request->get("ingredientes");
        $imagen = $request->files->get('imagen');
        
        // Si el título no está vacío al hacer el Edit de la publicación,
        // Entonces hacemos el fetch y cambiamos la información de  la 
        // publicación.

        if(!empty($publicacionTitulo)){
            $nombreImagen = '';
            if (!empty($imagen)) {
                if (!empty($imagen->getClientOriginalName())) {
                    $nombreImagen = uniqid() . '_' . strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
                    $imagen->move('uploads/', $nombreImagen);
                }
            }
            // Aquí obtenemos la información del formnulario y la introducimos
            // en la publicación, si algun campo no es modificado, se queda como está.

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
        // Función para eliminar una publicación.

        // Si la ID no está vacía , es decir: Obtenemos la información de la 
        // publicación, entonces la eliminamos.
        
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
