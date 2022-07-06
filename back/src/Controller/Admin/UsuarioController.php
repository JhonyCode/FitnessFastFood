<?php

namespace App\Controller\Admin;

use App\Entity\Usuario;
use App\Form\UsuarioType;
use App\Repository\PublicacionesRepository;
use App\Repository\UsuarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;


/**
 * @Route("/admin/usuario")
 */
class UsuarioController extends AbstractController
{
    /**
     * @Route("/", name="app_admin_usuario_index", methods={"GET"})
     */
    public function index(UsuarioRepository $usuarioRepository): Response
    {
        $usuarios = $usuarioRepository->findAll();
        $resultado = [];
        foreach ($usuarios as $c) {
            $resultado[] = [
                'id' => $c->getId(),
                'nombre' => $c->getNombre(),
                'perfil' => $c->getPerfil(),
                'rol' => $c->getRoles(),
                'email' => $c->getEmail(),

            ];
        }
        return $this->json(['result' => $resultado]);
    }

    /**
     * @Route("/image", name="app_admin_usuario_new", methods={"GET", "POST"})
     */
    // public function image(Request $request,  EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher, UsuarioRepository $usuarioRepository): Response
    // {
    //     if(!empty($imagen))
    //     {
    //         if(!empty($imagen->getClientOriginalName()))
    //         {
    //             $nombreImagen = uniqid().'_'.strtolower(trim(preg_replace('/[^A-Za-z.]+/', '-', $imagen->getClientOriginalName())));
    //             $imagen->move('uploads/', $nombreImagen);
    //         }
    //     }
    // }
        
    /**
     * @Route("/new", name="app_admin_usuario_new", methods={"GET", "POST"})
     */
    public function new(Request $request,  EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher, UsuarioRepository $usuarioRepository): Response
    {
        $data = $request->toArray();

        $resultado = "ko";
        if (isset($data["username"])) {
            $usuario = new Usuario();
            $usuario->setEmail($data["username"]);
            $usuario->setNombre($data["nombre"]);
            $hashedPassword = $passwordHasher->hashPassword(
                $usuario,
                $data['password']
            );
            $usuario->setPassword($hashedPassword);

            $em->persist($usuario);
            $em->flush();

            if (!empty($usuario->getId())) {
                $resultado = "ok";
            }
        }

        return $this->json([
            'resultado' => $resultado
        ]);
    }
   /**
     * @Route("/editar", methods={"PUT"})
     */
    public function token1(EntityManagerInterface $em ,Request $request, UsuarioRepository $usuarioRepository): Response 
    {
        /** @var User $user */
        $user = $this->getUser();
          $data = $request->toArray();
         $resultado="ko";
          if(isset($data["nombre"])){
              $user->setNombre($data["nombre"]);
              $user->setEmail($data["email"]);
              $user->setPerfil($data["perfil"]);
              
              $em->persist($user);
              $em->flush();
  
         }
  
          return $this->json([
              'resultado' => $resultado
          ]);
    }


     /**
     * @Route("/get", methods={"GET", "POST"})
     */
    public function token(EntityManagerInterface $em , Request $request, PublicacionesRepository $publicacionesRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        //$tokenStorage = $request->query->get('token');
        $resultado = [];
        $publicaciones = $publicacionesRepository->findBy(['usuario' => $user->getId()]);
        foreach ($publicaciones as $publicacion) {
                $publicacion->getTitulo();
                $publicacion->getImagen();
        
        }
        $resultado = [
            'id' => $user->getId(),
            'nombre' => $user->getNombre(),
            'perfil' => $user->getPerfil(),
            'role' => $user->getRoles(),
            'email' => $user->getEmail(),
            'publicaciones' => 'Publicaciones:  ' . $publicacion->getTitulo()
        ];
        return $this->json([
            'result' => $resultado
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_usuario_show", methods={"GET"})
     */
    public function show(PublicacionesRepository $publicacionesRepository, UsuarioRepository $usuarioRepository, $id): Response
    {
        $usuario = $usuarioRepository->find($id);
        $resultado = [];
        $listaPublicaciones = [];
        if (!empty($usuario->getNombre())) {
            $publicaciones = $publicacionesRepository->findBy(['usuario' => $usuario->getId()]);
            foreach ($publicaciones as $publicacion) {
                $listaPublicaciones = [
                    $publicacion->getTitulo(),
                    $publicacion->getImagen()
                ];
            }

            $resultado = [
                'id' => $usuario->getId(),
                'nombre' => $usuario->getNombre(),
                'perfil' => $usuario->getPerfil(),
                'role' => $usuario->getRoles(),
                'email' => $usuario->getEmail(),
                'publicacion' => $listaPublicaciones

            ];
        }
        return $this->json([
            'result' => $resultado
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_admin_usuario_edit", methods={"GET", "POST"})
     */
    public function edit(
        Request $request,
        Usuario $usuario,
        UsuarioRepository $usuarioRepository,
        UserPasswordHasherInterface $passwordHasher
    ): Response {
        if (
            !$this->isGranted('ROLE_SUPERADMIN')
            && $usuario->getUserIdentifier() != $this->getUser()->getUserIdentifier()
        ) {
            throw $this->createAccessDeniedException('No puedes editar un usuario que no sea tuyo');
        }
        $oldPassword = $usuario->getPassword();
        $oldRoles = $usuario->getRoles();
        $form = $this->createForm(UsuarioType::class, $usuario, [
            'isSuperadmin' => $this->isGranted('ROLE_SUPERADMIN')
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($usuario->getPassword() == '') {
                $usuario->setPassword($oldPassword);
            } else {
                $hashedPassword = $passwordHasher->hashPassword(
                    $usuario,
                    $usuario->getPassword()
                );
                $usuario->setPassword($hashedPassword);
            }
            if (!$this->isGranted('ROLE_SUPERADMIN')) {
                $usuario->setRoles($oldRoles);
            }
            $usuarioRepository->add($usuario, true);

            return $this->redirectToRoute('app_admin_usuario_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/usuario/edit.html.twig', [
            'usuario' => $usuario,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_admin_usuario_delete", methods={"POST"})
     */
    public function delete(Request $request, Usuario $usuario, UsuarioRepository $usuarioRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $usuario->getId(), $request->request->get('_token'))) {
            $usuarioRepository->remove($usuario, true);
        }

        return $this->redirectToRoute('app_admin_usuario_index', [], Response::HTTP_SEE_OTHER);
    }
   
}
